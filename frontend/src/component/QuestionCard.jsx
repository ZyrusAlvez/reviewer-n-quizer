import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserFolderContext } from "../context/userFolderContext";
import { findReviewerJson } from "../utils/findReviewer";

const QuestionCard = ({
  folderId,
  reviewerId,
  index,
  question,
  answer,
  why,
}) => {
  // to re-assign the immutable answer and question props
  const [localQuestion, setLocalQuestion] = useState(question);
  const [localAnswer, setLocalAnswer] = useState(answer);
  const [localWhy, setLocalWhy] = useState(why);

  const [show, setShow] = useState("*****");
  const [buttonText, setButtonText] = useState("show");
  const [whyDisplay, setWhyDisplay] = useState("none");

  const [editMode, setEditMode] = useState(false);
  const [editAnswer, setEditAnswer] = useState(answer); // Initialize with current answer
  const [editQuestion, setEditQuestion] = useState(question);
  const [editWhy, setEditWhy] = useState(localWhy);

  const { userFolder, setUserFolder } = useContext(UserFolderContext);

  useEffect(() => {
    setLocalQuestion(question);
    setLocalAnswer(answer);
  }, [question, answer]);

  function handleShow() {
    if (show === "*****") {
      setShow(localAnswer);
      setButtonText("hide");
      setWhyDisplay("block");
    } else {
      setShow("*****");
      setButtonText("show");
      setWhyDisplay("none");
    }
  }

  function handleDelete() {
    const questionToRemove = findReviewerJson(
      userFolder,
      folderId,
      "trueOrFalse"
    )[index].question;

    axios
      .post("http://localhost:5000/api/folder/remove-question", {
        folderId: folderId,
        reviewerId: reviewerId,
        questionToRemove,
      })
      .then((response) => {
        console.log(response.data);
        setUserFolder(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function doneEdit() {
    setEditMode(false);
    setLocalAnswer(editAnswer);
    setLocalQuestion(editQuestion);
    setLocalWhy(editWhy);

    if (show !== "*****") {
      handleShow();
    }

    axios
      .post("http://localhost:5000/api/folder/edit-json", {
        folderId: folderId,
        reviewerId: reviewerId,
        questionIndex: index,
        newQuestion: editQuestion,
        newAnswer: editAnswer,
        newWhy: editWhy,
      })
      .then((response) => {
        setUserFolder(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return !editMode ? (
    <div
      style={{
        background: "#FAF9F6",
        boxShadow: "5px 5px 5x black",
        marginBottom: "10px",
      }}
    >
      <div style={{ display: "flex" }}>
        <h3>Question:</h3>
        <h3>{localQuestion}</h3>
        <button onClick={() => setEditMode(true)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div style={{ display: "flex" }}>
        <h3>Answer:</h3>
        <h3>{show}</h3>
        <button onClick={handleShow}>{buttonText}</button>
      </div>
      <div style={{ display: whyDisplay }}>
        {localAnswer === "false" && <div><strong>Why: </strong> {localWhy} </div>}
      </div>
    </div>
  ) : (
    <div
      style={{
        background: "#FAF9F6",
        boxShadow: "5px 5px 5x black",
        marginBottom: "10px",
      }}
    >
      <div style={{ display: "flex" }}>
        <h3>Question:</h3>
        <input
          value={editQuestion}
          onChange={(e) => setEditQuestion(e.target.value)}
        />
        <button onClick={doneEdit}>Done</button>
      </div>
      <div style={{ display: "flex" }}>
        <h3>Answer:</h3>
        <input
          type="radio"
          id={`true-${index}`}
          name={`true-or-false-${index}`}
          value="true"
          checked={editAnswer === "true"}
          onChange={() => setEditAnswer("true")}
        />
        <label htmlFor={`true-${index}`}>true</label>

        <input
          type="radio"
          id={`false-${index}`}
          name={`true-or-false-${index}`}
          value="false"
          checked={editAnswer === "false"}
          onChange={() => setEditAnswer("false")}
        />
        <label htmlFor={`false-${index}`}>false</label>
      </div>
      <div>
        {editAnswer === "false" && (
          <div>
            <strong>Why:</strong>
            <input
              value={editWhy}
              onChange={(e) => setEditWhy(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;

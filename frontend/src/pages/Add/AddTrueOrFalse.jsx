import { useContext, useState } from 'react';
import { UserFolderContext } from '../../context/userFolderContext';
import { useNavigate, useParams } from 'react-router-dom';
import { findReviewerId } from '../../utils/findReviewer';
import axios from 'axios';

const AddTrueOrFalse = () => {
  const [answer, setAnswer] = useState("true");
  const [question, setQuestion] = useState("");
  const [why, setWhy] = useState("");
  const { userFolder, setUserFolder } = useContext(UserFolderContext);
  const { folderId } = useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault(); // Prevents form from reloading the page
    axios
      .post("http://localhost:5000/api/folder/add-question", {
        userId: userFolder.userId,
        folderId: folderId,
        reviewerId: findReviewerId(userFolder, folderId, "trueOrFalse"),
        newQuestionAnswer: { question, answer, why },
      })
      .then((response) => {
        setUserFolder(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // Reset the state variables
    setAnswer("true");
    setQuestion("");
    setWhy("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question:</label>
        <input value={question} onChange={(e) => setQuestion(e.target.value)} />
      </div>
      <div>
        <label htmlFor="answer">Answer:</label>
        <span id="answer">
          <input
            id="true"
            name="trueOrFalse"
            type="radio"
            value="true"
            checked={answer === "true"}
            onChange={() => setAnswer("true")}
          />
          <label htmlFor="true">true</label>
          <input
            id="false"
            name="trueOrFalse"
            type="radio"
            value="false"
            checked={answer === "false"}
            onChange={() => setAnswer("false")}
          />
          <label htmlFor="false">false</label>
        </span>
      </div>
      {answer === "false" && (
        <div>
          <label>Why:</label>
          <input value={why} onChange={(e) => setWhy(e.target.value)} />
        </div>
      )}
      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate(-1)}>Back</button>
      </div>
    </form>
  );
};

export default AddTrueOrFalse;

import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { UserFolderContext } from "../../context/userFolderContext";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../component/Loading.jsx";
import QuestionCard from "../../component/QuestionCard.jsx";
import { findReviewerId, findReviewerJson } from "../../utils/findReviewer.js";

const TrueOrFalse = () => {
  const { folderId } = useParams();
  const { userFolder, setUserFolder } = useContext(UserFolderContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null); // this will be used to show the cards
  const navigate = useNavigate()

  const generated = useRef(false)
  
  // problem: there would be an error if there is no recent saved
  // the passed props userFolder in Card component is not updated
  useEffect(() => {
    if (userFolder.userId) {
      axios
        .post("http://localhost:5000/api/folder/getFolder", {
          userId: userFolder.userId,
        })
        .then((response) => {
          // this will use the recent saved true or false questions
          setData(findReviewerJson(response.data, folderId, "trueOrFalse"));
          generated.current = true
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userFolder]);


  // this will replace the current reviewer
  function handleGenerate() {
    console.log(userFolder)
    setLoading(true);
    if (Object.keys(userFolder).length) {
      // Gets the material from the folder
      const folder = userFolder.folders.find((e) => e._id === folderId);

      // generate the reviewer
      axios
        .post("http://localhost:5000/api/reviewer/true-or-false", {
          prompt: folder.material,
        })
        .then((response) => {
          console.log(response.data)
          setData(response.data);

          // add the generated reviewer to the folder
          axios
            .post("http://localhost:5000/api/folder/add-reviewer", {
              userId: userFolder.userId,
              folderId: folderId,
              reviewer: { json: response.data, classification: "trueOrFalse" },
            })
            .then((response) => {
              setUserFolder(response.data);
              generated.current = true
            })
            .catch((error) => {
              console.log(error); 
            });
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false); // Stop loading in case of error
        });
    } else {
      setLoading(false); // Ensure loading is stopped if the folder isn't found
    }
  }

  function handleAdd() {
    navigate("add")

    // axios
    //   .post("http://localhost:5000/api/folder/add-question", {
    //     userId: userFolder.userId,
    //     folderId: folderId,
    //     reviewerId: findReviewerId(userFolder, folderId, "trueOrFalse"),
    //     newQuestionAnswer: { question: "helo", answer: true },
    //   })
    //   .then((response) => {
    //     setUserFolder(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  return (
    <div>
      <button onClick={handleGenerate}>Generate True or False Questions</button>
      <button onClick={handleAdd}>Add new Cards</button>
      {loading ? (
        <Loading />
      ) : (
        <ol>
          {data && generated.current &&
            data.map((e, i) => (
              <li key={i}>
                <QuestionCard
                  folderId={folderId}
                  reviewerId={findReviewerId(userFolder, folderId, "trueOrFalse")}
                  index={i}
                  question={e.question}
                  answer={e.answer.toString()}
                  why={e.why}
                />
              </li>
            ))}
        </ol>
      )}
    </div>
  );
};

export default TrueOrFalse;

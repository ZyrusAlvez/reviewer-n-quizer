import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { UserFolderContext } from '../../context/userFolderContext';
import { useParams } from 'react-router-dom';
import Loading from '../../component/Loading.jsx';
import QuestionCard from '../../component/QuestionCard.jsx';
import { UserDataContext } from '../../context/userDataContext.jsx';
import { findIndexUsingClassification, findIndexUsingId } from '../../utils/findIndex.js';

const TrueOrFalse = () => {
  const { id } = useParams();
  const { userFolder, setUserFolder } = useContext(UserFolderContext);
  const { userData } = useContext(UserDataContext)
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(userData._id){
      axios
      .post("http://localhost:5000/api/folder/getFolder", {userId: userData._id})
      .then((response) => {
        console.log(response.data.folders[findIndexUsingId(id, response.data.folders)].reviewers[findIndexUsingClassification("trueOrFalse", response.data.folders[findIndexUsingId(id, response.data.folders)].reviewers)].json)
        // this will use the recent saved true or false questions
        setData(response.data.folders[findIndexUsingId(id, response.data.folders)].reviewers[findIndexUsingClassification("trueOrFalse", response.data.folders[findIndexUsingId(id, response.data.folders)].reviewers)].json)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }, [userData, setUserFolder, userFolder])

  // this will replace the current reviewer
  function handleGenerate() {
    setLoading(true);
    if (Object.keys(userFolder).length) {
      // Gets the material from the folder
      const folder = userFolder.folders.find((e) => e._id === id);
      // generate the reviewer
      axios
        .post("http://localhost:5000/api/reviewer/true-or-false", { prompt: folder.material })
        .then((response) => {
          setData(response.data);
          // add the generated reviewer to the folder
          axios
          .post("http://localhost:5000/api/folder/add-reviewer", {userId: userData._id, folderId: folder._id, reviewer:{json: response.data, classification: "trueOrFalse"}})
          .then((response) => {
            setUserFolder(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
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

  return (
    <div>
      <button onClick={handleGenerate}>Generate True or False Questions</button>
      {loading ? (
        <Loading />
      ) : (
        <ol>
          {data &&
            data.map((e, i) => (
              <li key={i}>
                <QuestionCard id={id} index={i} question={e.question} answer={e.answer.toString()} />
              </li>
            ))}
        </ol>
      )}
    </div>
  );
};

export default TrueOrFalse;

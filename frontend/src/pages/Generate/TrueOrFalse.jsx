import axios from 'axios';
import { useContext, useState } from 'react';
import { UserFolderContext } from '../../context/userFolderContext';
import { useParams } from 'react-router-dom';
import Loading from '../../component/Loading.jsx';
import QuestionCard from '../../component/QuestionCard.jsx';
import { UserDataContext } from '../../context/userDataContext.jsx';

const TrueOrFalse = () => {
  const { id } = useParams();
  const { userFolder, setUserFolder } = useContext(UserFolderContext);
  const { userData } = useContext(UserDataContext)
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleGenerate() {
    setLoading(true);
    if (Object.keys(userFolder).length) {
      // Gets the material from the folder
      const folder = userFolder.folders.find((e) => e._id === id);
      axios
        .post("http://localhost:5000/api/reviewer/true-or-false", { prompt: folder.material })
        .then((response) => {
          setData(response.data);
          console.log({userId: userData._id, _id: folder._id, reviewer:{json: response.data, classification: "trueOrFalse"}})

          // add the material to the context
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
                <QuestionCard question={e.question} answer={e.answer.toString()} />
              </li>
            ))}
        </ol>
      )}
    </div>
  );
};

export default TrueOrFalse;

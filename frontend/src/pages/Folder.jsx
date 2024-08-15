import { useContext, useEffect } from 'react';
import { UserDataContext } from '../context/userDataContext';
import { UserFolderContext } from '../context/userFolderContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Folder = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // makes sure that the route id is a valid folder
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/folder/verify/${id}`)
      .catch((error) => {
        navigate('/not-found');
        console.log(error);
      });
  }, [id, navigate]);

  return (
    <div>
      <button onClick={() => localStorage.clear()}>Summarize</button>
      <button>Reviewer</button>
      <button>Flash Cards</button>
      <button onClick={() => navigate("/true-or-false/" + id)}>True or False</button>
      <button>Multiple Questions</button>
      <button>Fill in the Blanks</button>
    </div>
  );
};

export default Folder;

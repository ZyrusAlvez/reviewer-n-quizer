import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Folder = () => {
  const navigate = useNavigate();
  const { folderId } = useParams();

  // makes sure that the route id is a valid folder
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/folder/verify/${folderId}`)
      .catch((error) => {
        navigate('/not-found');
        console.log(error);
      });
  }, [folderId, navigate]);

  return (
    <div>
      <button onClick={() => localStorage.clear()}>Summarize</button>
      <button>Reviewer</button>
      <button onClick={() => navigate(`/folder/${folderId}/flash-cards`)}>Flash Cards</button>
      <button onClick={() => navigate(`/folder/${folderId}/true-or-false`)}>True or False</button>
      <button>Multiple Questions</button>
      <button>Fill in the Blanks</button>
    </div>
  );
};

export default Folder;
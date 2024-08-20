import { useState, useContext, useEffect } from 'react';
import { UserDataContext } from '../context/userDataContext';
import { UserFolderContext } from '../context/userFolderContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading.jsx';

// fav part: loading will only appear when the material is still not loaded after the user typed the folder name
const FolderNaming = ({ divFolderNamingDisplay, setDivFolderNamingDisplay, material }) => {
  const { userData } = useContext(UserDataContext);
  const { setUserFolder } = useContext(UserFolderContext);
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); // Prevent multiple requests

  useEffect(() => {
    if (submitted && material) {
      handleSubmit(); // Only submit once
    }
  }, [submitted, material]);
  

  const handleSubmit = () => {
    console.log(material)
    setLoading(false);
    axios
      .post('http://localhost:5000/api/folder/add-folder', {
        userId: userData._id,
        folder: { name: input, material: material, reviewers: [] },
      })
      .then((response) => {
        console.log(response.data)
        // save the material or the text that will be use to generate the reviewers
        setUserFolder(response.data);
        setLoading(false); // Reset loading state
        setSubmitted(false); // Reset submitted state
        navigate('/folder/' + response.data.folders.at(-1)._id);
      })
      .catch((error) => {
        // why would there be an error?
        // too large, language not available, poor sound, no captions
        console.log(error);
        setSubmitted(false); // Reset submitted state on error
      });
  };

  const submit = () => {
    setSubmitted(true); // Trigger submission and wait for material
    if (!material) {
      setLoading(true)
    }
  }

  return (
    <div
      style={{
        display: divFolderNamingDisplay,
        height: '60vh',
        width: '70vw',
        position: 'absolute',
        background: 'lightblue',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <h1>Name your reviewer</h1>
      <input type='text' style={{ display: 'block' }} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setDivFolderNamingDisplay('none')}>Cancel</button>
      <button onClick={submit} disabled={loading}>Submit</button>
      <h6>This will help you to organize your reviewers later on</h6>
      {loading && <Loading />}
    </div>
  );
};

export default FolderNaming;

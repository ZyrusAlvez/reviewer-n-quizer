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
    <div style={{display: divFolderNamingDisplay}} className="absolute h-[60vh] w-[70vw] bg-yellow-500 p-6 rounded-lg shadow-2xl flex flex-col justify-center items-center text-center" onClick={(e) => e.stopPropagation()}>
      <h1 className="font-bold mt-10 ">Reviewer Name</h1>
      <p className="text-white font-bold mb-10">This will help you to organize your reviewers later on</p>

      <input type='text' style={{ display: 'block' }} className="w-full mx-auto text-center rounded h-[10%] shadow-2xl mb-8" onChange={(e) => setInput(e.target.value)} />
      <button className="bg-gray-600 text-white mr-2 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors" onClick={() => setDivFolderNamingDisplay('none')}>Cancel</button>
      <button className="bg-gray-600 text-white ml-2 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors" onClick={submit} disabled={loading}>Submit</button>
      {loading && <Loading />}
    </div>
  );
};

export default FolderNaming;

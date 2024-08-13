import { useEffect, useContext } from 'react';
import axios from 'axios';
import { UserDataContext } from '../context/userDataContext'; 
import { UserFolderContext } from '../context/userFolderContext';

const useGuestAccount = () => {
  const { setUserData } = useContext(UserDataContext);
  const { setUserFolder } = useContext(UserFolderContext);

  useEffect(() => {
    let storedUserData = null;
    let storedUserFolder = null;

    try {
      storedUserData = JSON.parse(localStorage.getItem('userData'));
      storedUserFolder = JSON.parse(localStorage.getItem('userFolder'));
    } catch (error) {
      console.error("Failed to parse local storage data:", error);
    }

    if (!storedUserData) {
      axios
        .post("http://localhost:5000/api/guest/")
        .then((response) => {
          const userData = response.data;
          setUserData(userData);
          localStorage.setItem('userData', JSON.stringify(userData)); 
          console.log("Guest account created");

          // Initialize the user's folder
          axios
            .post("http://localhost:5000/api/folder/initial", { userId: userData._id })
            .then((response) => {
              const userFolder = response.data
              setUserFolder(response.data);
              localStorage.setItem('userFolder', JSON.stringify(userFolder)); 
              console.log("Initialized the user's folder");
            })
            .catch((error) => {
              console.log(`Initial folder creation failed: ${error}`);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setUserData(storedUserData);
      if (storedUserFolder) {
        setUserFolder(storedUserFolder);
      }
      console.log("Loaded existing guest account from local storage.");
    }
  }, [setUserData, setUserFolder]);
};

export default useGuestAccount;

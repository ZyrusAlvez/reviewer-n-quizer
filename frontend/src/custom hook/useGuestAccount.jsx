import { useEffect, useContext } from 'react';
import axios from 'axios';
import { UserDataContext } from '../context/userDataContext'; 
import { UserFolderContext } from '../context/userFolderContext';

const useGuestAccount = () => {
  const { setUserData } = useContext(UserDataContext)
  const { setUserFolder } = useContext(UserFolderContext)

  useEffect(() => {
      axios
        .post("http://localhost:5000/api/guest/")
        .then((response) => {
          setUserData(response.data);
          console.log("guest account created!");

          // this will create the empty array in the guest's account folder
          axios
          .post("http://localhost:5000/api/folder/initial", {userId: response.data._id})
          .then((response) => {
            setUserFolder(response.data)
            console.log("intialized the user's folder")
          })
          .catch((error) => {
            console.log(`initial folder failed: ${error}`)
          })
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);
};

export default useGuestAccount;

// with this, I can easily access the user's data and its folder in all components
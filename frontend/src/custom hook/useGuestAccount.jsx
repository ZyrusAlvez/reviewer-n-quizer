import { useEffect, useContext } from "react";
import axios from "axios";
import { UserDataContext } from "../context/userDataContext";
import { UserFolderContext } from "../context/userFolderContext";

const useGuestAccount = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const { userFolder, setUserFolder } = useContext(UserFolderContext);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (!storedUserData) {
      // creates new geust account + its initial folder

      axios
        .post("http://localhost:5000/api/guest/")
        .then((response) => {
          const userData = response.data;
          setUserData(userData);
          localStorage.setItem("userData", JSON.stringify(userData));
          console.log("Guest account created");

          // Initialize the user's folder
          axios
            .post("http://localhost:5000/api/folder/initial", {
              userId: userData._id,
            })
            .then((response) => {
              const userFolder = response.data;
              setUserFolder(response.data);
              localStorage.setItem("userFolder", JSON.stringify(userFolder));
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
      console.log("Loaded existing guest account from local storage.");
      setUserData(storedUserData);
    }
  }, []);

  // fetch the user's folder from the database if he's not new
  useEffect(() => {
    if (userData._id && !userFolder){
      axios
      .post("http://localhost:5000/api/folder/getFolder", {userId: userData._id})
      .then((response) => {
        setUserFolder(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }, [userData])
};

export default useGuestAccount;

import { createContext, useState } from 'react';

export const UserFolderContext = createContext();

export const UserFolderProvider = ({ children }) => {
  const [userFolder, setUserFolderState] = useState({});

  // changes will also be saved on the local storage whenever I use the setUserFolder
  const setUserFolder = (folderData) => {
    localStorage.setItem("userFolder", JSON.stringify(folderData));
    setUserFolderState(folderData);
  };

  return (
    <UserFolderContext.Provider value={{ userFolder, setUserFolder }}>
      {children}
    </UserFolderContext.Provider>
  );
};
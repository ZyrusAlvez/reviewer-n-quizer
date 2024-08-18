import { createContext, useState } from 'react';

// I think it's good to have your own copy of your data in the frontend so we don't have to request to the backend multiple times
// let's just dont forget to update it whenever we're updating the user's database

export const UserFolderContext = createContext();

export const UserFolderProvider = ({ children }) => {
  const [userFolder, setUserFolder] = useState({});

  return (
    <UserFolderContext.Provider value={{ userFolder, setUserFolder }}>
      {children}
    </UserFolderContext.Provider>
  );
};
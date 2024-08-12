import { createContext, useState } from 'react';

export const UserFolderContext = createContext();

export const UserFolderProvider = ({ children }) => {
  const [userFolder, setUserFolder] = useState({});

  return (
    <UserFolderContext.Provider value={{ userFolder, setUserFolder }}>
      {children}
    </UserFolderContext.Provider>
  );
};
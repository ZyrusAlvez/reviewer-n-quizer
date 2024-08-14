import { createContext, useState } from 'react';

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [userData, setUserDataState] = useState({});

  const setUserData = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    setUserDataState(data);
  };

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

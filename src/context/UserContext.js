import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    id: "Loading...",
    cpf: "Loading...",
    name: "Loading...",
    password: "Loading...",
    email: "Loading...",
  });

  const updateUserInfo = (newUserInfo) => {
    setUserInfo(newUserInfo);
  };

  return (
    <UserContext.Provider value={{ userInfo, updateUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

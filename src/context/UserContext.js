import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    id: "Loading...",
    cpf: "Loading...",
    name: "Loading...",
    email: "Loading...",
  });
  console.log("newUserInfo no USERCONTEXT: ", userInfo);

  const updateUserInfo = (newUserInfo) => {
    console.log("newUserInfo no USERCONTEXT: ", newUserInfo);
    setUserInfo(newUserInfo);
  };

  return (
    <UserContext.Provider value={{ userInfo, updateUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

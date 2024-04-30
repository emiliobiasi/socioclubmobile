import React, { createContext, useState, useContext } from "react";

const ClubContext = createContext();

export const ClubProvider = ({ children }) => {
  const [clubInfo, setClubInfo] = useState({
    name: "Vasco",
    icon: "",
    background: "",
    description: "",
    categoy: "",
    colorScheme: {
      title: "#fff",
      background: "#15202B",
      primary: "#253341",
      icons: "#fff",
      div: "",
      text: "#AAB8C2",
      secondaryText: "",
      button: "#1D9BF0",
    },
  });

  const updateClubInfo = (newClubInfo) => {
    setClubInfo(newClubInfo);
  };

  return (
    <ClubContext.Provider value={{ clubInfo, updateClubInfo }}>
      {children}
    </ClubContext.Provider>
  );
};

export const useClub = () => useContext(ClubContext);

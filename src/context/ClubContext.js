import React, { createContext, useState, useContext } from "react";

const ClubContext = createContext();

export const ClubProvider = ({ children }) => {
  const [clubInfo, setClubInfo] = useState({
    id: "3",
    club_id: "",
    name: "Loading...",
    icon: require("../../assets/images/vascoicon.png"),
    background: require("../../assets/images/vascobandeira.png"),
    description: "loading description...",
    category: "loading category...",
    colorScheme: {
      titles_color: "#FFFFFF",
      subtitles_color: "#AAB8C2",
      buttons_color: "#1D9BF0",
      palette_1: "#15202B",
      palette_2: "#253341",
      palette_3: "#0C111B",
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

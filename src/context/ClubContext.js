import React, { createContext, useState, useContext } from "react";

const ClubContext = createContext();

export const ClubProvider = ({ children }) => {
  const [clubInfo, setClubInfo] = useState({
    id: "3",
    name: "Loading...",
    logo: require("../../assets/images/vascoicon.png"),
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
    stripe_id: "",
  });

  console.log("club atual:", clubInfo);

  const updateClubInfo = (newClubInfo) => {
    //console.log("newClubInfo: ", newClubInfo);
    const updatedClubInfo = {
      id: newClubInfo.id || clubInfo.id,
      name: newClubInfo.name || clubInfo.name,
      logo: newClubInfo.logo || clubInfo.logo,
      background: newClubInfo.background || clubInfo.background,
      description: newClubInfo.description || clubInfo.description,
      category: newClubInfo.category || clubInfo.category,
      colorScheme: {
        titles_color:
          newClubInfo.titles_color || clubInfo.colorScheme.titles_color,
        subtitles_color:
          newClubInfo.subtitles_color || clubInfo.colorScheme.subtitles_color,
        buttons_color:
          newClubInfo.buttons_color || clubInfo.colorScheme.buttons_color,
        palette_1: newClubInfo.palette_1 || clubInfo.colorScheme.palette_1,
        palette_2: newClubInfo.palette_2 || clubInfo.colorScheme.palette_2,
        palette_3: newClubInfo.palette_3 || clubInfo.colorScheme.palette_3,
      },
      stripe_id: newClubInfo.stripe_id || clubInfo.stripe_id,
    };

    setClubInfo(updatedClubInfo);
  };

  return (
    <ClubContext.Provider value={{ clubInfo, updateClubInfo }}>
      {children}
    </ClubContext.Provider>
  );
};

export const useClub = () => useContext(ClubContext);

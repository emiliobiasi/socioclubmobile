import React, { createContext, useState, useContext } from "react";

const ClubContext = createContext();

export const ClubProvider = ({ children }) => {
  const [clubInfo, setClubInfo] = useState({
    name: "Vasco",
    icon: "",
    background: "",
    description: "",
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

  const updateClubInfo = async (clubId) => {
    try {
      const response = await fetch(`https://api.example.com/clubs/${clubId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch: " + response.status); // Verifica se a resposta da API é bem-sucedida
      }
      const data = await response.json();
      if (data) {
        // Verifica se os dados não são undefined ou null
        setClubInfo(data);
      } else {
        console.error("No data returned from the API");
      }
    } catch (error) {
      console.error("Failed to fetch club details", error);
    }
  };

  return (
    <ClubContext.Provider value={{ clubInfo, updateClubInfo }}>
      {children}
    </ClubContext.Provider>
  );
};

export const useClub = () => useContext(ClubContext);

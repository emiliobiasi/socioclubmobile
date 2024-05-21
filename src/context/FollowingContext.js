import React, { createContext, useState, useContext } from "react";

const FollowingContext = createContext();

export const FollowingProvider = ({ children }) => {
  const [followingInfo, setFollowingInfo] = useState(false);

  const updateFollowingInfo = (newFollowingInfo) => {
    console.log("newFollowingInfo no FollowingCONTEXT: ", newFollowingInfo);
    setFollowingInfo(newFollowingInfo);
  };

  return (
    <FollowingContext.Provider value={{ followingInfo, updateFollowingInfo }}>
      {children}
    </FollowingContext.Provider>
  );
};

export const useFollowing = () => useContext(FollowingContext);

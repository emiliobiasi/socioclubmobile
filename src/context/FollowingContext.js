import React, { createContext, useState, useContext } from "react";
import { useClub } from "./ClubContext";

const FollowingContext = createContext();

export const FollowingProvider = ({ children }) => {
  const [followingInfo, setFollowingInfo] = useState([]);
  const [following, setFollowing] = useState(false);
  const { clubInfo } = useClub();

  const updateFollowingInfo = (newFollowingInfo) => {
    setFollowingInfo(newFollowingInfo);
  };

  const updateFollowing = (bool) => {
    setFollowing(bool);
  };

  return (
    <FollowingContext.Provider
      value={{ followingInfo, updateFollowingInfo, following, updateFollowing }}
    >
      {children}
    </FollowingContext.Provider>
  );
};

export const useFollowing = () => useContext(FollowingContext);

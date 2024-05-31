import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo, Feather } from "@expo/vector-icons";
import { useFollowing } from "../context/FollowingContext";
import { useClub } from "../context/ClubContext";
import { useUser } from "../context/UserContext";
import FollowService from "../services/FollowService";

const FollowButton = ({ colorScheme }) => {
  const { followingInfo, updateFollowingInfo, following, updateFollowing } =
    useFollowing();
  const { clubInfo, updateClubInfo } = useClub();
  const { userInfo } = useUser();

  useEffect(() => {
    if (
      clubInfo?.id &&
      followingInfo?.some((club) => club.id === clubInfo.id)
    ) {
      updateFollowing(true);
    } else {
      updateFollowing(false);
    }
  }, [clubInfo, followingInfo]);

  const styles = StyleSheet.create({
    followButton: {
      padding: 10,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: following ? colorScheme.palette_2 : colorScheme.titles_color,
      backgroundColor: following ? colorScheme.titles_color : "transparent",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    followText: {
      color: following ? colorScheme.palette_2 : colorScheme.titles_color,
      fontWeight: "bold",
      textAlign: "center",
    },
  });

  async function getFollows() {
    try {
      const response = await FollowService.listarFollowsByClientId(userInfo.id);
      updateFollowingInfo(response.data.clubs);
    } catch (error) {
      console.error("Erro ao buscar follows:", error);
    }
  }

  const handleFollowButton = async () => {
    async function follow() {
      try {
        await FollowService.followClub(userInfo.id, clubInfo.id);
        updateFollowing(true);
        getFollows();
      } catch (error) {
        console.error("Erro ao dar follow:", error);
      }
    }
    async function unfollow() {
      try {
        await FollowService.unfollowClub(userInfo.id, clubInfo.id);
        updateFollowing(false);
        getFollows();
      } catch (error) {
        console.error("Erro ao dar unfollow:", error);
      }
    }

    if (following) {
      unfollow();
    } else {
      follow();
    }
  };

  return (
    <TouchableOpacity style={styles.followButton} onPress={handleFollowButton}>
      {following ? (
        <>
          <Text style={styles.followText}>Seguindo</Text>
          <Feather name="check" size={16} color={colorScheme.palette_2} />
        </>
      ) : (
        <>
          <Text style={styles.followText}>Seguir</Text>
          <Entypo name="plus" size={16} color={colorScheme.titles_color} />
        </>
      )}
    </TouchableOpacity>
  );
};

export default FollowButton;

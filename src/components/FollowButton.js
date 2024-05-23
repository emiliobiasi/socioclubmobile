import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo, Feather } from "@expo/vector-icons";
import { useFollowing } from "../context/FollowingContext";
import { useClub } from "../context/ClubContext";
import { useUser } from "../context/UserContext";
import FollowService from "../services/FollowService";

const FollowButton = ({ colorScheme }) => {
  const { followingInfo, updateFollowingInfo } = useFollowing();
  const { clubInfo, updateClubInfo } = useClub();
  const { userInfo } = useUser();
  const [state, setState] = useState(false);

  useEffect(() => {
    if (
      clubInfo?.id &&
      followingInfo?.some((club) => club.id === clubInfo.id)
    ) {
      setState(true);
    }
  }, [clubInfo, followingInfo]);

  const styles = StyleSheet.create({
    followButton: {
      padding: 10,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: state ? colorScheme.palette_2 : colorScheme.titles_color,
      backgroundColor: state ? colorScheme.titles_color : "transparent",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    followText: {
      color: state ? colorScheme.palette_2 : colorScheme.titles_color,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
  const handleFollowButton = async () => {
    async function follow() {
      try {
        await FollowService.followClub(userInfo.id, clubInfo.id);
        setState(true)
      } catch (error) {
        console.error("Erro ao buscar planos:", error);
      }
    }
    async function unfollow() {
      try {
        await FollowService.unfollowClub(userInfo.id, clubInfo.id);
      } catch (error) {
        console.error("Erro ao dar unfollow:", error);
      }
    }
    if (
      clubInfo?.id &&
      followingInfo?.some((club) => club.id === clubInfo.id)
    ) {
      unfollow();
    } else {
      follow();
    }
  };

  return (
    <TouchableOpacity style={styles.followButton} onPress={handleFollowButton}>
      {state ? (
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

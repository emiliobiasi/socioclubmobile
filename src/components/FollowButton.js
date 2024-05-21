import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo, Feather } from "@expo/vector-icons";
import { useFollowing } from "../context/FollowingContext";

const FollowButton = ({ colorScheme }) => {
  const { followingInfo } = useFollowing();
  const [state, setState] = useState(followingInfo);

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

  const handleFollowButton = () => {
    setState(!state);
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

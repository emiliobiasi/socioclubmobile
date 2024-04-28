import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Tickets = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingressos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Tickets;

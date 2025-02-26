import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const PlanCard = ({ plan, colorScheme, navigation }) => {
  const styles = StyleSheet.create({
    cardContainer: {
      margin: 10,
      borderRadius: 10,
      flex: 1,
      marginBottom: 10,
      backgroundColor: colorScheme.palette_2,
    },
    topContainer: {
      flexDirection: "row",
    },
    imageView: {
      width: "35%",
      margin: 20,
    },
    image: {
      width: "100%",
      borderRadius: 10,
      height: 140,
      resizeMode: "cover",
    },
    namePriceContainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    planNameContainer: {
      flexShrink: 1,
    },
    planText: {
      fontWeight: "bold",
      fontSize: 16,
      color: colorScheme.titles_color,
    },
    name: {
      fontWeight: "bold",
      fontSize: 26,
      color: colorScheme.titles_color,
      paddingVertical: "2%",
      textAlign: "center",
      flexShrink: 1,
      flexWrap: "wrap",
    },
    description: {
      fontSize: 16,
      color: colorScheme.subtitles_color,
      paddingHorizontal: 5,
      alignSelf: "center",
      margin: 10,
      paddingBottom: 10,
      textAlign: "justify",
    },
    priceContainer: {
      marginBottom: "3%",
      paddingVertical: 3,
      flexDirection: "row",
      alignItems: "center",
    },
    pricetag: {
      paddingTop: 25,
      position: "absolute",
    },
    rs: {
      fontSize: 20,
      color: colorScheme.titles_color,
    },
    price: {
      fontSize: 30,
      color: colorScheme.titles_color,
      fontWeight: "bold",
    },
  });

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("PlanContent", { plan, colorScheme })}
    >
      <View style={styles.cardContainer}>
        <View style={styles.topContainer}>
          <View style={styles.imageView}>
            <Image source={{ uri: plan.image }} style={styles.image} />
          </View>
          <View style={styles.namePriceContainer}>
            <Text style={styles.planText}>Plano</Text>
            <View style={styles.planNameContainer}>
              <Text style={styles.name} numberOfLines={1}>
                {plan.name}
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.rs}>R$ </Text>
              <Text style={styles.price}>{plan.price}</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.description} numberOfLines={2}>
            {plan.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlanCard;

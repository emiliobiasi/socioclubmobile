import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const ProductBoughtCard = ({ product, navigation }) => {
  const styles = StyleSheet.create({
    cardContainer: {
      marginTop: 0,
      margin: 10,
      borderRadius: 10,
      flex: 1,
      marginBottom: 10,
      backgroundColor: "#253341",
      flexDirection: "row",
    },
    imageView: {
      width: "40%",
    },
    image: {
      width: "100%",
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      height: 200,
      resizeMode: "cover",
    },
    textContainer: {
      flex: 1,
      padding: 10,
      paddingVertical: 20,
      justifyContent: "space-between", // Alinha os elementos verticalmente
      alignItems: "center", // Alinha os elementos horizontalmente
    },
    name: {
      fontWeight: "bold",
      fontSize: 22,
      color: "#ffffff",
      paddingVertical: "2%",
      textAlign: "center",
      flexShrink: 1,
      flexWrap: "wrap",
    },
    description: {
      fontSize: 16,
      color: "#ffffff",
      paddingHorizontal: 5,
      flexShrink: 1,
      flexWrap: "wrap",
      textAlign: "justify",
    },
    priceContainer: {
      flexDirection: "row",
      marginBottom: "3%",
      paddingVertical: 3,
      alignItems: "center",
    },
    pricetag: {
      paddingTop: 25,
      position: "absolute",
    },
    rs: {
      fontSize: 20,
      color: "#ffffff",
    },
    price: {
      fontSize: 30,
      color: "#ffffff",
      fontWeight: "bold",
    },
  });

  return (
    <TouchableOpacity>
      <View style={styles.cardContainer}>
        <View style={styles.imageView}>
          <Image source={{ uri: product.image }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name} numberOfLines={3}>
            {product.name}
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {product.description}
          </Text>
          <View style={styles.priceContainer}>
            <Entypo
              name="price-tag"
              size={30}
              color="white"
              style={styles.pricetag}
            />
            <Text style={styles.rs}>R$ </Text>
            <Text style={styles.price}>{product.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductBoughtCard;

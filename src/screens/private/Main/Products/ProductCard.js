import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const ProductCard = ({ product, colorScheme, navigation }) => {
  const styles = StyleSheet.create({
    cardContainer: {
      marginTop: 0,
      margin: 10,
      borderRadius: 10,
      flex: 1,
      marginBottom: 10,
      backgroundColor: colorScheme.palette_2,
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
      color: colorScheme.titles_color,
      paddingVertical: "2%",
      textAlign: "center",
    },
    description: {
      fontSize: 16,
      color: colorScheme.subtitles_color,
      paddingHorizontal: 5,
    },
    priceContainer: {
      flexDirection: "row",
      marginBottom: "3%",
      // borderWidth: 1,
      // borderRadius: 30,
      paddingVertical: 3,
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
      onPress={() =>
        navigation.navigate("ProductContent", { product, colorScheme })
      }
    >
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
              color={colorScheme.titles_color}
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

export default ProductCard;

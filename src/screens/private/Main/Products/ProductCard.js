import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const ProductCard = ({ product, colorScheme, navigation }) => {
  const styles = StyleSheet.create({
    cardContainer: {
      margin: 10,
      borderRadius: 10,
      flex: 1,
      marginBottom: 10,
      backgroundColor: colorScheme.palette_2,
    },
    image: {
      width: "100%",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      height: 200,
      resizeMode: "cover",
    },
    textContainer: {
      padding: 10,
    },
    title: {
      fontWeight: "bold",
      fontSize: 22,
      color: colorScheme.titles_color,
      paddingVertical: "2%",
    },
    authorDateContainer: {
      flexDirection: "row",
      marginBottom: "3%",
    },
    author: {
      fontSize: 16,
      color: colorScheme.subtitles_color,
    },
    separator: {
      fontSize: 14,
      color: colorScheme.subtitles_color,
      paddingHorizontal: "1%",
    },
    date: {
      fontSize: 14,
      color: colorScheme.subtitles_color,
    },
  });

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductContent", { product, colorScheme })
      }
    >
      <View style={styles.cardContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <View style={styles.authorDateContainer}>
            <Text style={styles.author}>{product.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
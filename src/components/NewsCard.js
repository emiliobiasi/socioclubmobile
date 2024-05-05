import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const NewsCard = ({ news, colorScheme, navigation }) => {
  const styles = StyleSheet.create({
    cardContainer: {
      flex: 1,
      marginBottom: 20,
      backgroundColor: colorScheme.palette_2,
    },
    image: {
      width: "100%",
      height: 200,
      resizeMode: "cover",
    },
    textContainer: {
      padding: 10,
    },
    title: {
      fontWeight: "bold",
      fontSize: 18,
      color: colorScheme.titles_color,
    },
    author: {
      fontSize: 14,
      color: colorScheme.subtitles_color,
    },
  });

  // const handlePress = () => {
  //   // Navegar para a tela NewsContent passando o news como parâmetro
  //   navigation.navigate("NewsContent", { news, colorScheme });
  // };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("NewsContent", { news, colorScheme })}
    >
      <View style={styles.cardContainer}>
        <Image source={{ uri: news.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{news.title}</Text>
          <Text style={styles.author}>{news.author}</Text>
          <Text style={styles.author}>{news.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;

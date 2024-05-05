import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const NewsContent = ({ route }) => {
  const { news, colorScheme } = route.params;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: colorScheme.palette_2,
    },
    image: {
      width: "100%",
      height: 200,
      resizeMode: "cover",
      marginBottom: 10,
    },
    title: {
      fontWeight: "bold",
      fontSize: 24,
      marginBottom: 5,
      color: colorScheme.titles_color,
    },
    author: {
      fontSize: 16,
      color: colorScheme.subtitles_color,
      marginBottom: 5,
    },
    date: {
      fontSize: 14,
      color: colorScheme.subtitles_color,
      marginBottom: 10,
    },
    text: {
      fontSize: 18,
      lineHeight: 24,
      color: colorScheme.titles_color,
    },
  });
  return (
    <View style={styles.container}>
      <Image source={{ uri: news.image }} style={styles.image} />
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.author}>{news.author}</Text>
      <Text style={styles.date}>{news.date}</Text>
      <Text style={styles.text}>{news.text}</Text>
    </View>
  );
};

export default NewsContent;

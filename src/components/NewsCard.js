import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { format, parseISO } from "date-fns";

const NewsCard = ({ news, colorScheme, navigation }) => {
  const publishDate = parseISO(news.publish_date);
  const formattedDate = format(publishDate, "dd/MM/yy · HH");
  const styles = StyleSheet.create({
    cardContainer: {
      flex: 1,
      marginBottom: 10,
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
      onPress={() => navigation.navigate("NewsContent", { news, colorScheme })}
    >
      <View style={styles.cardContainer}>
        <Image source={{ uri: news.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{news.title}</Text>
          <View style={styles.authorDateContainer}>
            <Text style={styles.author}>{news.author}</Text>
            <Text style={styles.separator}>·</Text>
            <Text style={styles.date}>{formattedDate} h</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;

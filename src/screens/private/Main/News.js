import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import NewsCard from "../../../components/NewsCard";

const news = [
  {
    id: "1",
    news_id: "",
    title: "Notícia do Vasco",
    image: "https://storage.googleapis.com/socioclub/club/sao-paulo/logo.png",
    author: "Thiago Lima",
    date: "04/05/24",
    text: "",
  },
  {
    id: "2",
    news_id: "",
    title: "Notícia do São Paulo",
    image: "https://storage.googleapis.com/socioclub/club/sao-paulo/logo.png",
    author: "Emílio Biasi",
    date: "04/05/24",
    text: "",
  },
  {
    id: "3",
    news_id: "",
    title: "Notícia do Vasco",
    image: "https://storage.googleapis.com/socioclub/club/sao-paulo/logo.png",
    author: "Thiago Lima",
    date: "04/05/24",
    text: "",
  },
];

const News = ({ colorScheme }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colorScheme.palette_1,
    },
    scrollView: {
      width: "100%",
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      color: colorScheme.titles_color,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notícias</Text>
      <ScrollView style={styles.scrollView}>
        {news.map((item) => (
          <NewsCard key={item.id} news={item} colorScheme={colorScheme} />
        ))}
      </ScrollView>
    </View>
  );
};

export default News;

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import NewsCard from "../../../components/NewsCard";

const news = [
  {
    id: "1",
    news_id: "",
    title: "Notícia do Vasco",
    image: "https://storage.googleapis.com/socioclub/news/sao-paulo/1.jpg",
    author: "Thiago Lima",
    date: "04/05/24",
    text: "Conteúdo da Notícia do vasco da gama flinstons... Loren I",
  },
  {
    id: "2",
    news_id: "",
    title: "Notícia do São Paulo",
    image: "https://storage.googleapis.com/socioclub/news/sao-paulo/1.jpg",
    author: "Emílio Biasi",
    date: "04/05/24",
    text: "Conteúdo da Notícia do vasco da gama flinstons... Loren I",
  },
  {
    id: "3",
    news_id: "",
    title: "Notícia do Vasco",
    image: "https://storage.googleapis.com/socioclub/news/sao-paulo/1.jpg",
    author: "Thiago Lima",
    date: "04/05/24",
    text: "Conteúdo da Notícia do vasco da gama flinstons... Loren I",
  },
];

const News = ({ colorScheme, navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: colorScheme.palette_1,
    },
    scrollView: {
      width: "100%",
    },
    titleView: {
      padding: "4%",
      backgroundColor: colorScheme.palette_2,
    },
    title: {
      fontSize: 36,
      fontWeight: "bold",
      color: colorScheme.titles_color,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Notícias</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {news.map((item) => (
          <NewsCard
            key={item.id}
            news={item}
            colorScheme={colorScheme}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default News;

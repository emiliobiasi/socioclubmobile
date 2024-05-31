import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import NewsCard from "./NewsCard";
import NewsService from "../../../../services/NewsService";
import { ActivityIndicator } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import FollowButton from "../../../../components/FollowButton";

// const news = [
//   {
//     id: "1",
//     news_id: "",
//     title: "Notícia do Vasco",
//     image: "https://storage.googleapis.com/socioclub/news/sao-paulo/1.jpg",
//     author: "Thiago Lima",
//     publish_date: "04/05/24",
//     text: "Conteúdo da Notícia do vasco da gama flinstons... Loren I",
//   },
//   {
//     id: "2",
//     news_id: "",
//     title: "Notícia do São Paulo",
//     image: "https://storage.googleapis.com/socioclub/news/sao-paulo/1.jpg",
//     author: "Emílio Biasi",
//     publish_date: "04/05/24",
//     text: "Conteúdo da Notícia do vasco da gama flinstons... Loren I",
//   },
//   {
//     id: "3",
//     news_id: "",
//     title: "Notícia do Vasco",
//     image: "https://storage.googleapis.com/socioclub/news/sao-paulo/1.jpg",
//     author: "Thiago Lima",
//     publish_date: "04/05/24",
//     text: "Conteúdo da Notícia do vasco da gama flinstons... Loren I",
//   },
// ];

const News = ({ clubInfo, colorScheme, navigation }) => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await NewsService.listarNewsByClubId(clubInfo.id);
        setNews(response.data.news);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar clubes:", error);
      }
    }

    fetchData();
  }, [clubInfo]);

  // console.log(news)

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
      flexDirection: "row",
      backgroundColor: colorScheme.palette_2,
      justifyContent: "space-between",
    },
    title: {
      fontSize: 36,
      fontWeight: "bold",
      color: colorScheme.titles_color,
    },

    loading: {
      margin: 100,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Notícias</Text>
        <FollowButton initialState={false} colorScheme={colorScheme} />
      </View>
      <ScrollView style={styles.scrollView}>
        {loading ? (
          <ActivityIndicator
            animating={true}
            color={colorScheme.titles_color}
            size="large"
            style={styles.loading}
          />
        ) : (
          news.map((item) => (
            <NewsCard
              key={item.id}
              news={item}
              colorScheme={colorScheme}
              navigation={navigation}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default News;

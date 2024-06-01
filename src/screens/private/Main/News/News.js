import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import NewsCard from "./NewsCard";
import NewsService from "../../../../services/NewsService";
import { ActivityIndicator } from "react-native-paper";
import FollowButton from "../../../../components/FollowButton";

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
        console.error("Erro ao buscar notícias:", error);
      }
    }

    fetchData();
  }, [clubInfo]);

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
    emptyMessage: {
      color: colorScheme.titles_color,
      fontSize: 18,
      textAlign: "center",
      marginTop: 200,
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
        ) : news.length === 0 ? (
          <Text style={styles.emptyMessage}>
            O clube não possui notícias até o momento.
          </Text>
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

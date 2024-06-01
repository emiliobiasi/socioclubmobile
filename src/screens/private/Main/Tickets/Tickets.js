import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import NewsCard from "../News/NewsCard";
import TicketsService from "../../../../services/TicketsService";
import EventsService from "../../../../services/EventsService";
import { ActivityIndicator } from "react-native-paper";
import TicketCard from "./TicketCard";
import { useClub } from "../../../../context/ClubContext";
import FollowButton from "../../../../components/FollowButton";

const Tickets = ({ colorScheme, navigation }) => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const { clubInfo } = useClub();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await EventsService.listarEventsByClubId(clubInfo.id);
        setEvents(response.data.events);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
        setLoading(false);
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
    noEventsText: {
      color: colorScheme.titles_color,
      textAlign: "center",
      marginTop: 200,
      fontSize: 18,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Ingressos</Text>
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
        ) : events.length === 0 ? (
          <Text style={styles.noEventsText}>
            O clube não possui eventos ou jogos até o momento
          </Text>
        ) : (
          events.map((item) => (
            <TicketCard
              key={item.id}
              event={item}
              colorScheme={colorScheme}
              navigation={navigation}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default Tickets;

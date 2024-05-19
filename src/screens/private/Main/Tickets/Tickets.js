import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import NewsCard from "../News/NewsCard";
import TicketsService from "../../../../services/TicketsService";
import EventsService from "../../../../services/EventsService";
import { ActivityIndicator } from "react-native-paper";
import TicketCard from "./TicketCard";

// CREATE TABLE Event (
//   id SERIAL PRIMARY KEY ,
//   event_name VARCHAR,
//   description VARCHAR,
//   image VARCHAR,
//   full_price INTEGER,
//   event_date TIMESTAMP,
//   tickets_away INTEGER,
//   tickets_home INTEGER,
//   fk_Club_id INTEGER
// );

// CREATE TABLE Ticket (
//  qr_code VARCHAR PRIMARY KEY,
//  fk_Event_id INTEGER,
//  fk_Client_id INTEGER
//  );

const events = [
  {
    id: "1",
    event_name: "São Paulo x Cruzeiro",
    description: "Amistoso no Estadio Morumbi...",
    image: "https://storage.googleapis.com/socioclub/news/sao-paulo/1.jpg",
    full_price: "75.90",
    event_date: "10/10/2024",
    tickets_away: "1",
    tickets_home: "1",
    fk_Club_id: "1",
  },
  {
    id: "2",
    event_name: "São Paulo x Cruzeiro",
    description: "Amistoso no Estadio Morumbi...",
    image: "https://storage.googleapis.com/socioclub/news/sao-paulo/1.jpg",
    full_price: "75.90",
    event_date: "10/10/2024",
    tickets_away: "1",
    tickets_home: "1",
    fk_Club_id: "1",
  },
  {
    id: "3",
    event_name: "São Paulo x Cruzeiro",
    description: "Amistoso no Estadio Morumbi...",
    image: "https://storage.googleapis.com/socioclub/news/sao-paulo/1.jpg",
    full_price: "75.90",
    event_date: "10/10/2024",
    tickets_away: "1",
    tickets_home: "1",
    fk_Club_id: "1",
  },
];

const Tickets = ({ clubInfo, colorScheme, navigation }) => {
  const [loading, setLoading] = useState(true);
  // const [events, setEvents] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await EventsService.listarEventsByClubId(clubInfo.id);
  //       setEvents(response.data.events);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Erro ao buscar eventos:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);

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
    loading: {
      margin: 100,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Ingressos</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {
          // loading ? (
          //   <ActivityIndicator
          //     animating={true}
          //     color={colorScheme.titles_color}
          //     size="large"
          //     style={styles.loading}
          //   />
          // ) : (
          events.map((item) => (
            <TicketCard
              key={item.id}
              event={item}
              colorScheme={colorScheme}
              navigation={navigation}
            />
          ))
          // )
        }
      </ScrollView>
    </View>
  );
};

export default Tickets;

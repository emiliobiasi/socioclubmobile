import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { format, parseISO } from "date-fns";

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

const TicketCard = ({ event, colorScheme, navigation }) => {
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
      fontSize: 16,
      color: colorScheme.subtitles_color,
      paddingHorizontal: "1%",
    },
    date: {
      fontSize: 16,
      color: colorScheme.subtitles_color,
    },
  });

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("TicketContent", {
          event,
          colorScheme,
        })
      }
    >
      <View style={styles.cardContainer}>
        <Image source={{ uri: event.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{event.event_name}</Text>
          <View style={styles.authorDateContainer}>
            <Text style={styles.author}>{event.full_price}</Text>
            <Text style={styles.author}>{event.event_date}</Text>

            <Text style={styles.separator}>·</Text>
            {/* <Text style={styles.date}>{formattedDate} h</Text> */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TicketCard;

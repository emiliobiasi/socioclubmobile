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
      alignItems: "center",
    },
    title: {
      fontWeight: "bold",
      fontSize: 22,
      color: colorScheme.titles_color,
      paddingVertical: "2%",
      textAlign: "center",
    },
    dateTimeContainer: {
      flexDirection: "row",
      marginBottom: "3%",
    },
    date: {
      fontSize: 16,
      color: colorScheme.subtitles_color,
      fontWeight: "bold",
    },
    separator: {
      fontSize: 16,
      color: colorScheme.subtitles_color,
      paddingHorizontal: "2%",
      fontWeight: "bold",
    },
    time: {
      fontSize: 16,
      color: colorScheme.subtitles_color,
      fontWeight: "bold",
    },
  });

  // Separando a data e o tempo do eventDate
  const eventDateTimeArray = event.eventDate.split(" ");
  const eventDate = eventDateTimeArray[0];
  const eventTime = eventDateTimeArray[1];
  // Formatando a data e o tempo
  const formattedDate = format(parseISO(eventDate), "dd/MM/yy");
  // Formatando o tempo
  const parsedTime = parseISO(`1970-01-01T${eventTime}`);
  const formattedTime = format(parsedTime, "HH:mm");
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("TicketContent", {
          event,
          colorScheme,
          formattedDate,
          formattedTime,
        })
      }
    >
      <View style={styles.cardContainer}>
        <Image source={{ uri: event.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{event.eventName}</Text>
          <View style={styles.dateTimeContainer}>
            <Text style={styles.date}>{formattedDate}</Text>
            {/* <Text style={styles.separator}>·</Text>
            <Text style={styles.time}>{formattedTime}h</Text> */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TicketCard;

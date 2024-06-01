import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { format, parseISO } from "date-fns";
import { useNavigation } from "@react-navigation/native";

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

const MyTicketCard = ({ ticket }) => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    cardContainer: {
      margin: 10,
      borderRadius: 10,
      flex: 1,
      marginBottom: 10,
      backgroundColor: "#253341",
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
      color: "#FFFFFF",
      paddingVertical: "2%",
      textAlign: "center",
    },
    dateTimeContainer: {
      flexDirection: "row",
      marginBottom: "3%",
    },
    date: {
      fontSize: 16,
      color: "#AAB8C2",
      fontWeight: "bold",
    },
    separator: {
      fontSize: 16,
      color: "#AAB8C2",
      paddingHorizontal: "2%",
      fontWeight: "bold",
    },
    time: {
      fontSize: 16,
      color: "#AAB8C2",
      fontWeight: "bold",
    },
  });
  console.log("ticket: ", ticket);

  // Separando a data e o tempo do ticketDate
  const ticketDateTimeArray = ticket.eventDate.split(" ");
  const ticketDate = ticketDateTimeArray[0];
  const ticketTime = ticketDateTimeArray[1];
  // Formatando a data e o tempo
  const formattedDate = format(parseISO(ticketDate), "dd/MM/yy");
  // Formatando o tempo
  const parsedTime = parseISO(`1970-01-01T${ticketTime}`);
  const formattedTime = format(parsedTime, "HH:mm");

  const handleTicketCard = () => {
    navigation.navigate("MyTicketContent", {
      ticket,
      formattedDate,
      formattedTime,
    });
  };
  return (
    <TouchableOpacity onPress={handleTicketCard}>
      <View style={styles.cardContainer}>
        <Image source={{ uri: ticket.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{ticket.eventName}</Text>
          <View style={styles.dateTimeContainer}>
            <Text style={styles.date}>{formattedDate}</Text>
            <Text style={styles.separator}>·</Text>
            <Text style={styles.time}>{formattedTime}h</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MyTicketCard;
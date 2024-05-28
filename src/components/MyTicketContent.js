import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "../context/UserContext";
import { useClub } from "../context/ClubContext";
import QRCode from "react-native-qrcode-svg";

const MyTicketContent = ({ route }) => {
  const navigation = useNavigation();
  const { ticket, formattedDate, formattedTime } = route.params;
  const [qtdNum, setQtdNum] = useState(1);
  const { userInfo, updateUserInfo } = useUser();
  const { clubInfo, updateClibInfo } = useClub();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0,
      backgroundColor: "#15202B",
    },
    topBar: {
      justifyContent: "center",
      paddingLeft: "3%",
      padding: 16,
      paddingTop: "15%",
      backgroundColor: "#15202B",
    },
    image: {
      width: "100%",
      height: 200,
      resizeMode: "cover",
    },
    contentView: {
      padding: 20,
      backgroundColor: "#253341",
    },
    title: {
      fontWeight: "bold",
      fontSize: 30,
      marginBottom: "3%",
      color: "#ffffff",
      textAlign: "center",
    },
    dateTimeContainer: {
      flexDirection: "row",
      marginBottom: "3%",
      alignSelf: "center",
    },
    date: {
      fontSize: 20,
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
      fontSize: 20,
      color: "#AAB8C2",
      fontWeight: "bold",
    },
    text: {
      fontSize: 18,
      lineHeight: 24,
      color: "#ffffff",
      textAlign: "justify",
    },
    priceView: {
      flexDirection: "row",
      marginRight: "10%",
      padding: 10, // Adiciona algum espaçamento
      backgroundColor: "#253341",
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "flex-end", // Ajusta a largura ao conteúdo
    },
    rs: {
      fontSize: 30,
      color: "#ffffff",
      paddingRight: 5,
    },
    price: {
      fontSize: 30,
      color: "#ffffff",
      fontWeight: "bold",
    },
    qtd: {
      fontSize: 25,
      color: "#ffffff",
      paddingRight: 10,
      fontWeight: "bold",
      paddingVertical: "10%",
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
      textAlign: "center",
    },
    qtdCotainer: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
    },
    qtdNum: {
      fontSize: 50,
      color: "#ffffff",
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    buyTicketsButton: {
      backgroundColor: "#1D9BF0",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      marginBottom: 40,
      marginHorizontal: 20,
    },
    buyTicketsButtonText: {
      color: "#ffffff",
      fontSize: 18,
      fontWeight: "bold",
    },
    qrcodeView: {
      alignSelf: "center",
      margin: 20,
      padding: 20,
      backgroundColor: "white",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle-outline"
            size={36}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <Image source={{ uri: ticket.image }} style={styles.image} />
        <View style={styles.contentView}>
          <Text style={styles.title}>{ticket.eventName}</Text>
          <View style={styles.dateTimeContainer}>
            <Text style={styles.date}>{formattedDate}</Text>
            <Text style={styles.separator}>·</Text>
            <Text style={styles.time}>{formattedTime}h</Text>
          </View>
          <Text style={styles.text}>{ticket.description}</Text>
        </View>
        <View style={styles.priceView}>
          <Text style={styles.rs}>R$</Text>
          <Text style={styles.price}>{ticket.fullPrice}</Text>
        </View>
        <View style={styles.qrcodeView}>
          <QRCode value={ticket.qr_code} size={200} />
        </View>
      </ScrollView>
    </View>
  );
};

export default MyTicketContent;

import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import H1Title from "../../../../components/Texts/H1Title";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const TicketContent = ({ route }) => {
  const navigation = useNavigation();
  const { event, colorScheme, formattedDate, formattedTime } = route.params;
  const [qtdNum, setQtdNum] = useState(1);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0,
      backgroundColor: colorScheme.palette_1,
    },
    topBar: {
      justifyContent: "center",
      paddingLeft: "3%",
      padding: 16,
      paddingTop: "15%",
      backgroundColor: colorScheme.palette_1,
    },
    image: {
      width: "100%",
      height: 200,
      resizeMode: "cover",
    },
    contentView: {
      padding: 20,
      backgroundColor: colorScheme.palette_2,
    },
    title: {
      fontWeight: "bold",
      fontSize: 30,
      marginBottom: "3%",
      color: colorScheme.titles_color,
      textAlign: "center",
    },
    dateTimeContainer: {
      flexDirection: "row",
      marginBottom: "3%",
      alignSelf: "center",
    },
    date: {
      fontSize: 20,
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
      fontSize: 20,
      color: colorScheme.subtitles_color,
      fontWeight: "bold",
    },
    text: {
      fontSize: 18,
      lineHeight: 24,
      color: colorScheme.titles_color,
      textAlign: "justify",
    },
    priceView: {
      flexDirection: "row",
      marginRight: "10%",
      padding: 10, // Adiciona algum espaçamento
      backgroundColor: colorScheme.palette_2,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "flex-end", // Ajusta a largura ao conteúdo
    },
    rs: {
      fontSize: 30,
      color: colorScheme.titles_color,
      paddingRight: 5,
    },
    price: {
      fontSize: 30,
      color: colorScheme.titles_color,
      fontWeight: "bold",
    },
    qtd: {
      fontSize: 25,
      color: colorScheme.titles_color,
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
      color: colorScheme.titles_color,
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    buyTicketsButton: {
      backgroundColor: colorScheme.buttons_color,
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      marginBottom: 40,
      marginHorizontal: 20,
    },
    buyTicketsButtonText: {
      color: colorScheme.titles_color,
      fontSize: 18,
      fontWeight: "bold",
    },
  });

  const handlePlusButton = () => {
    setQtdNum((prevQtdNum) => prevQtdNum + 1);
  };

  const handleMinusButton = () => {
    if (qtdNum > 1) {
      setQtdNum((prevQtdNum) => prevQtdNum - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle-outline"
            size={36}
            color={colorScheme.titles_color}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <Image source={{ uri: event.image }} style={styles.image} />
        <View style={styles.contentView}>
          <Text style={styles.title}>{event.eventName}</Text>
          <View style={styles.dateTimeContainer}>
            <Text style={styles.date}>{formattedDate}</Text>
            <Text style={styles.separator}>·</Text>
            <Text style={styles.time}>{formattedTime}h</Text>
          </View>
          <Text style={styles.text}>{event.description}</Text>
        </View>
        <View style={styles.priceView}>
          <Text style={styles.rs}>R$</Text>
          <Text style={styles.price}>{event.fullPrice}</Text>
        </View>
        <Text style={styles.qtd}>Selecione a quantidade de Ingressos</Text>

        <View style={styles.qtdCotainer}>
          <Entypo
            name="squared-minus"
            size={46}
            color={colorScheme.titles_color}
            onPress={handleMinusButton}
          />
          <Text style={styles.qtdNum}>{qtdNum}</Text>
          <Entypo
            name="squared-plus"
            size={46}
            color={colorScheme.titles_color}
            onPress={handlePlusButton}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.buyTicketsButton}>
        <Text style={styles.buyTicketsButtonText}>Comprar Ingressos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TicketContent;

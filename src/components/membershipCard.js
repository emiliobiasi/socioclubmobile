import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useClub } from "../context/ClubContext";

const MembershipCard = () => {
  const { clubInfo } = useClub();
  const styles = StyleSheet.create({
    membershipCard: {
      justifyContent: "center", // Para centralizar verticalmente
      alignItems: "center", // Para centralizar horizontalmente
      paddingHorizontal: 20,
      paddingVertical: 20,
      borderRadius: 10,
      marginHorizontal: "5%",
      backgroundColor: "#253341",
      marginVertical: 15,
    },
    topView: {
      flexDirection: "row", // Para alinhar os itens horizontalmente
      alignItems: "center", // Para alinhar verticalmente
      justifyContent: "space-between", // Adiciona espaço entre os elementos
      width: "100%", // Define a largura total
      paddingHorizontal: 16, // Adiciona espaçamento interno
    },
    iconImageView: {
      width: 80,
      height: 80,
    },
    iconImage: {
      width: "100%",
      height: "100%",
    },
    membershipTitleView: {},
    membershipTitle: {
      fontSize: 16,
      marginBottom: 4,
      color: "#AAB8C2",
    },
    membershipName: {
      fontWeight: "bold",
      fontSize: 18,
      color: "white",
    },
    membershipPriceDateView: {
      flexDirection: "row", // Para alinhar os itens horizontalmente
      marginTop: 8, // Espaço entre o title e o price
      justifyContent: "space-between", // Adiciona espaço entre os elementos
      width: "100%", // Define a largura total
      paddingHorizontal: 16, // Adiciona espaçamento interno
    },
    priceView: {
      alignItems: "center", // Para alinhar verticalmente
    },
    price: {
      color: "white",
    },
    dateRange: {
      color: "#AAB8C2",
    },
  });

  return (
    <View style={styles.membershipCard}>
      <View style={styles.topView}>
        <View style={styles.iconImageView}>
          <Image style={styles.iconImage} source={{ uri: clubInfo.logo }} />
        </View>
        <View style={styles.membershipTitleView}>
          <Text style={styles.membershipTitle}>Seu plano neste clube</Text>
          <Text style={styles.membershipName}>Diamante</Text>
        </View>
      </View>

      <View style={styles.membershipPriceDateView}>
        <View style={styles.priceView}>
          <Text style={styles.price}>Preço</Text>
          <Text style={styles.price}>R$153,16</Text>
        </View>
        <Text style={styles.dateRange}>De 21/03/24 até 21/03/24</Text>
      </View>
    </View>
  );
};

export default MembershipCard;

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../../../../components/SearchBar";
import { useClub } from "../../../../context/ClubContext";
import PlansService from "../../../../services/PlansService";
import PlanCard from "./PlanCard";
import { ActivityIndicator } from "react-native-paper";
import FollowButton from "../../../../components/FollowButton";

// const plans = [
//   {
//     id: "1",
//     name: "Básico 1",
//     description: "Descrição do plano Básico 1",
//     image: "https://storage.googleapis.com/socioclub/club/sao-paulo/logo.png",
//     price: "150.40",
//     discount: "30.00",
//     priority: "1",
//     fk_Club_id: "1",
//   },
//   {
//     id: "2",
//     name: "Básico 2",
//     description: "Descrição do plano Básico 2",
//     image: "https://storage.googleapis.com/socioclub/club/sao-paulo/logo.png",
//     price: "150.40",
//     discount: "30.00",
//     priority: "1",
//     fk_Club_id: "1",
//   },
//   {
//     id: "3",
//     name: "Básico 3",
//     description: "Descrição do plano Básico 3",
//     image: "https://storage.googleapis.com/socioclub/club/sao-paulo/logo.png",
//     price: "150.40",
//     discount: "30.00",
//     priority: "1",
//     fk_Club_id: "1",
//   },
// ];

const Plans = ({ colorScheme, navigation }) => {
  const [loading, setLoading] = useState(true);
  const [plans, setPlans] = useState([]);
  const { clubInfo } = useClub();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await PlansService.listarPlansByClubId(clubInfo.id);
        setPlans(response.data.plans);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar planos:", error);
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
  });
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Planos</Text>
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
          plans.map((item) => (
            <PlanCard
              key={item.id}
              plan={item}
              colorScheme={colorScheme}
              navigation={navigation}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default Plans;

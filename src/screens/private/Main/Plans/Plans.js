import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PlansService from "../../../../services/PlansService";
import PlanCard from "./PlanCard";
import { ActivityIndicator } from "react-native-paper";
import FollowButton from "../../../../components/FollowButton";
import { useClub } from "../../../../context/ClubContext";

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
        ) : plans.length === 0 ? (
          <Text style={styles.emptyMessage}>
            O clube não possui planos até o momento.
          </Text>
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

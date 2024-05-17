import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../../../../components/SearchBar";
import { useClub } from "../../../../context/ClubContext";
import PlansService from "../../../../services/PlansService";

const plans = [
  {
    id: "1",
    name: "Básico 1",
    description: "Descrição do plano Básico 1",
    image: "https://storage.googleapis.com/socioclub/club/sao-paulo/logo.png",
    price: "150.40",
    discount: "30.00",
    priority: "1",
    fk_Club_id: "1",
  },
  {
    id: "2",
    name: "Básico 2",
    description: "Descrição do plano Básico 2",
    image: "https://storage.googleapis.com/socioclub/club/sao-paulo/logo.png",
    price: "150.40",
    discount: "30.00",
    priority: "1",
    fk_Club_id: "1",
  },
  {
    id: "3",
    name: "Básico 3",
    description: "Descrição do plano Básico 3",
    image: "https://storage.googleapis.com/socioclub/club/sao-paulo/logo.png",
    price: "150.40",
    discount: "30.00",
    priority: "1",
    fk_Club_id: "1",
  },
];

const Plans = ({ colorScheme, navigation }) => {
  const [loading, setLoading] = useStat(true);
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
  }, []);

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
  });
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Planos</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {plans.map((item) => (
          <Text>Plans {item.id}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default Plans;

import axios from "axios";

const listarPlans = () => {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/plans`, {
    timeout: 10000, // Tempo limite de 5 segundos (em milissegundos)
  });
};

const listarPlansByClubId = (id) => {
  return axios.get(
    `${process.env.EXPO_PUBLIC_API_URL}/plans/${id}`,
    {
      timeout: 20000, // Tempo limite de 5 segundos (em milissegundos)
    }
  );
};

const PlansService = {
  listarPlans,
  listarPlansByClubId,
};

export default PlansService;

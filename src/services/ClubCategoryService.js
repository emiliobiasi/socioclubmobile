import axios from "axios";

const listarClubsCategories = () => {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/clubCategories`, {
    timeout: 20000, // Tempo limite de 5 segundos (em milissegundos)
  });
};

const ClubCategoryService = {
  listarClubsCategories,
};

export default ClubCategoryService;

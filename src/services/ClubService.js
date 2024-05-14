import axios from "axios";

const listarClubs = () => {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/clubs`, {
    timeout: 5000, // Tempo limite de 5 segundos (em milissegundos)
  });
};

const ClubService = {
  listarClubs,
};

export default ClubService;

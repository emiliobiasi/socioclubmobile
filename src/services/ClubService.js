import axios from "axios";

const listarClients = () => {
  return axios.get(process.env.EXPO_PUBLIC_API_URL + "/clubs", );
};

const ClientsService = {
  listarClubs,
};

export default ClubService;

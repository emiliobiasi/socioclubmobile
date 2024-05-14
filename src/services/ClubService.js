import axios from "axios";

const listarClubs = () => {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/clubs`);
};

const ClubService = {
  listarClubs,
};

export default ClubService;

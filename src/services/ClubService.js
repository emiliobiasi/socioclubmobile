import axios from "axios";

const listarClubs = () => {
  const options = {
    timeout: 10000,
  };
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/clubs`, options);
};

const ClubService = {
  listarClubs,
};

export default ClubService;

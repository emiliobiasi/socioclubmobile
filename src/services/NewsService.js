import axios from "axios";

const listarNews = () => {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/news`, {
    timeout: 10000, // Tempo limite de 5 segundos (em milissegundos)
  });
};

const listarNewsByClubId = (id) => {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/getNewsByClubId/${id}`, {
    timeout: 10000, // Tempo limite de 5 segundos (em milissegundos)
  });
};

const NewsService = {
  listarNews,
  listarNewsByClubId,
};

export default NewsService;

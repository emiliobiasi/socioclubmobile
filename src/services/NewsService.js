import axios from "axios";

const listarNews = () => {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/news`);
};

const listarNewsByClubId = (id) => {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/getNewsByClubId/${id}`);
};

const NewsService = {
  listarNews,
  listarNewsByClubId,
};

export default NewsService;

import axios from "axios";

const listarCategories = () => {
  return axios.get(process.env.EXPO_PUBLIC_API_URL + `/category`);
};


const CategoryClubService = {
  listarCategories,

};

export default CategoryClubService;

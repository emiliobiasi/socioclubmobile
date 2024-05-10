import axios from "axios";

const listarProducts = () => {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/products`);
};

const listarProductsByClubId = (id) => {
  return axios.get(
    `${process.env.EXPO_PUBLIC_API_URL}/getProductsByClubId/${id}`
  );
};

const ProductsService = {
  listarProducts,
  listarProductsByClubId,
};

export default ProductsService;

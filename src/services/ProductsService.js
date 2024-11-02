import axios from "axios";

const listarProducts = () => {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/products`, {
    timeout: 10000, // Tempo limite de 5 segundos (em milissegundos)
  });
};

const listarProductsByClubId = (id) => {
  return axios.get(
    `${process.env.EXPO_PUBLIC_API_URL}/getStripeProductsByClubId/${id}`,
    {
      timeout: 20000, // Tempo limite de 5 segundos (em milissegundos)
    }
  );
};

const ProductsService = {
  listarProducts,
  listarProductsByClubId,
};

export default ProductsService;

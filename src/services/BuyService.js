import axios from "axios";

const listarBuyByClientId = (client_id) => {
  return axios.get(
    `${process.env.EXPO_PUBLIC_API_URL}/getBoughtProductsByClientId/${client_id}`,
    {
      timeout: 10000, // Tempo limite de 5 segundos (em milissegundos)
    }
  );
};

const buy = (client_id, product_id) => {
  return axios.post(
    process.env.EXPO_PUBLIC_API_URL + `/buyProduct`,
    {
      client_id,
      product_id,
    },
    {
      timeout: 10000, // Tempo limite de 5 segundos (em milissegundos)
    }
  );
};

const BuyService = {
  listarBuyByClientId,
  buy,
};

export default BuyService;

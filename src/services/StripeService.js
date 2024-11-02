// src/services/StripeService.js

import axios from "axios";

const createCheckoutLink = (items, client_id, stripe_id) => {
  console.log("items: ", items);
  console.log("client_id: ", client_id);
  return axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/stripe/create_checkout_link`,
    {
      client_id,
      items, // 'items' é uma lista de { price_id, quantity }
      stripe_id,
    },
    {
      timeout: 20000, // Tempo limite de 20 segundos
    }
  );
};

const StripeService = {
  createCheckoutLink,
};

export default StripeService;

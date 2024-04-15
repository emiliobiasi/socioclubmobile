import axios from "axios";
import { API_URL } from "@env";

const listarClients = () => {
  return axios.get(process.env.API_URL + "/clients");
};

const registrarClient = async (name, email, password) => {
  try {
    return await axios.post(process.env.API_URL + "/register", {
      name,
      email,
      password,
    });
  } catch (e) {
    console.log(e);
  }
};

const ClientsService = {
  listarClients,
  registrarClient,
};

export default ClientsService;

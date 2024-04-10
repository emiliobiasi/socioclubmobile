import axios from "axios";

const API_URL = "http://172.16.228.221:8000";

const listarClients = () => {
  return axios.get(API_URL + "/clients");
};

const registrarClient = async (name, email, password) => {
  try {
    return await axios.post(API_URL + "/register", { name, email, password });
  } catch (e) {
    console.log(e);
  }
};

const ClientsService = {
  listarClients,
  registrarClient,
};

export default ClientsService;

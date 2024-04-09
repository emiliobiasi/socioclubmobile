import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

const listarClients = () => {
  return axios.get(API_URL + "/clients");
};

const ClientsService = {
  listarClients,
};

export default ClientsService;

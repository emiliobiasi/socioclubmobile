import axios from "axios";

const API_URL = "http://172.16.228.113:8000";

const listarClients = () => {
  return axios.get(API_URL + "/clients");
};

const registrarClient = async (name, password, email) => {
    try{
      return await axios.post(API_URL + '/register', {name, password, email})
    } catch (e){
      console.log
    }

  }

const ClientsService = {
  listarClients,
  registrarClient
};

export default ClientsService;

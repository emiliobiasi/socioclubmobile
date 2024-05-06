import axios from "axios";

const listarClients = () => {
  return axios.get(process.env.EXPO_PUBLIC_API_URL + "/clients");
};

const registrarClient = async (cpf, name, email, password) => {
  try {
    return await axios.post(process.env.EXPO_PUBLIC_API_URL + "/register", {
      cpf,
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

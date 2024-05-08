import axios from "axios";

const listarClients = (cpf) => {
  return axios.get(process.env.EXPO_PUBLIC_API_URL + `/findClientByCpf/${cpf}`);
};

const listarClientByCpf = () => {
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

const logarClient = async (email, password) => {
  try {
    return await axios.post(process.env.EXPO_PUBLIC_API_URL + "/login", {
      email,
      password,
    });
  } catch (e) {
    console.log(e);
  }
};

const updateClient = async (email, username, cpf) => {
  try {
    const password = ""
    let newName = ""
    let newEmail = ""
    username ? newName = username : newName = ""
    email ? newEmail = email : newEmail = ""
    const body = {
      email: newEmail,
      name: newName,
      password: password
    }
    return await axios.put(process.env.EXPO_PUBLIC_API_URL + `/update/${cpf}`, body);
  } catch (e) {
    console.log(e);
  }
};

const ClientsService = {
  listarClientByCpf,
  listarClients,
  registrarClient,
  logarClient,
  updateClient
};

export default ClientsService;

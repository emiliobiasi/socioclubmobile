import axios from "axios";

const listarClients = (cpf) => {
  return axios.get(
    process.env.EXPO_PUBLIC_API_URL + `/findClientByCpf/${cpf}`,
    {
      timeout: 5000, // Tempo limite de 5 segundos (em milissegundos)
    }
  );
};

const listarClientByCpf = () => {
  return axios.get(process.env.EXPO_PUBLIC_API_URL + "/clients", {
    timeout: 5000, // Tempo limite de 5 segundos (em milissegundos)
  });
};

const registrarClient = async (cpf, name, email, password) => {
  try {
    return await axios.post(
      process.env.EXPO_PUBLIC_API_URL + "/register",
      {
        cpf,
        name,
        email,
        password,
      },
      {
        timeout: 5000, // Tempo limite de 5 segundos (em milissegundos)
      }
    );
  } catch (e) {
    console.log(e);
  }
};

const logarClient = async (email, password) => {
  try {
    return await axios.post(
      process.env.EXPO_PUBLIC_API_URL + "/login",
      {
        email,
        password,
      },
      {
        timeout: 5000, // Tempo limite de 5 segundos (em milissegundos)
      }
    );
  } catch (e) {
    console.log(e);
  }
};

const updateClient = async (email, username, cpf) => {
  try {
    const password = "";
    let newName = "";
    let newEmail = "";
    username ? (newName = username) : (newName = "");
    email ? (newEmail = email) : (newEmail = "");
    const body = {
      email: newEmail,
      name: newName,
      password: password,
    };
    return await axios.put(
      process.env.EXPO_PUBLIC_API_URL + `/update/${cpf}`,
      body,
      {
        timeout: 5000, // Tempo limite de 5 segundos (em milissegundos)
      }
    );
  } catch (e) {
    console.log(e);
  }
};

const ClientsService = {
  listarClientByCpf,
  listarClients,
  registrarClient,
  logarClient,
  updateClient,
};

export default ClientsService;

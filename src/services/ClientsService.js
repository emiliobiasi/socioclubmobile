import axios from "axios";

const listarTodosPlanosAssociados = (client_id) => {
  return axios.get(
    process.env.EXPO_PUBLIC_API_URL + `/getAllAssociate/${client_id}`,
    {
      client_id,
    },
    {
      timeout: 20000, // Tempo limite de 10 segundos (em milissegundos)
    }
  );
};

const listarPlanosAssociadosAtualmente = (client_id) => {
  return axios.get(
    process.env.EXPO_PUBLIC_API_URL + `/getCurrentAssociate/${client_id}`,
    {
      client_id,
    },
    {
      timeout: 20000, // Tempo limite de 10 segundos (em milissegundos)
    }
  );
};

const associarPlano = (client_id, plan_id) => {
  return axios.post(
    process.env.EXPO_PUBLIC_API_URL + `/associate`,
    {
      client_id,
      plan_id,
    },
    {
      timeout: 20000, // Tempo limite de 10 segundos (em milissegundos)
    }
  );
};

const vicularClientClube = (client_id, club_id) => {
  return axios.post(
    process.env.EXPO_PUBLIC_API_URL + `/freeAssociate`,
    {
      client_id,
      club_id,
    },
    {
      timeout: 20000, // Tempo limite de 5 segundos (em milissegundos)
    }
  );
};

const listarClients = (cpf) => {
  return axios.get(
    process.env.EXPO_PUBLIC_API_URL + `/findClientByCpf/${cpf}`,
    {
      timeout: 20000, // Tempo limite de 5 segundos (em milissegundos)
    }
  );
};

const listarClientByCpf = () => {
  return axios.get(process.env.EXPO_PUBLIC_API_URL + "/clients", {
    timeout: 20000, // Tempo limite de 5 segundos (em milissegundos)
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
        timeout: 20000, // Tempo limite de 5 segundos (em milissegundos)
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
        timeout: 20000, // Tempo limite de 5 segundos (em milissegundos)
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
        timeout: 20000, // Tempo limite de 5 segundos (em milissegundos)
      }
    );
  } catch (e) {
    console.log(e);
  }
};

const ClientsService = {
  listarTodosPlanosAssociados,
  listarPlanosAssociadosAtualmente,
  associarPlano,
  vicularClientClube,
  listarClientByCpf,
  listarClients,
  registrarClient,
  logarClient,
  updateClient,
};

export default ClientsService;

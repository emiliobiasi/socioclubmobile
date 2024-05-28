import axios from "axios";

const listarTickets = () => {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/tickets`, {
    timeout: 10000, // Tempo limite de 5 segundos (em milissegundos)
  });
};

const listarTicketsByClientId = (client_id) => {
  return axios.get(
    `${process.env.EXPO_PUBLIC_API_URL}/getAllTicketsByClientId/${client_id}`,
    {
      timeout: 10000, // Tempo limite de 5 segundos (em milissegundos)
    }
  );
};

const createTicket = (event_id, club_id, client_id) => {
  return axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/createTicket`,
    {
      event_id,
      club_id,
      client_id,
    },
    {
      timeout: 10000, // Tempo limite de 5 segundos (em milissegundos)
    }
  );
};

const TicketsService = {
  listarTickets,
  listarTicketsByClientId,
  createTicket,
};

export default TicketsService;

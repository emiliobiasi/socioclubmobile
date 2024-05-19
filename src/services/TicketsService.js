import axios from "axios";

const listarTickets = () => {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/tickets`, {
    timeout: 10000, // Tempo limite de 5 segundos (em milissegundos)
  });
};

const listarTicketsByClubId = (id) => {
  return axios.get(
    `${process.env.EXPO_PUBLIC_API_URL}/getTicketsByClubId/${id}`,
    {
      timeout: 10000, // Tempo limite de 5 segundos (em milissegundos)
    }
  );
};

const TicketsService = {
  listarTickets,
  listarTicketsByClubId,
};

export default TicketsService;

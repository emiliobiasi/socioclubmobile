import axios from "axios";

const listarEvents = () => {
  return axios.get(`${process.env.EXPO_PUBLIC_API_URL}/events`, {
    timeout: 10000, // Tempo limite de 5 segundos (em milissegundos)
  });
};

const listarEventsByClubId = (id) => {
  return axios.get(
    `${process.env.EXPO_PUBLIC_API_URL}/getEventsByClubId/${id}`,
    {
      timeout: 10000, // Tempo limite de 5 segundos (em milissegundos)
    }
  );
};

const EventsService = {
  listarEvents,
  listarEventsByClubId,
};

export default EventsService;

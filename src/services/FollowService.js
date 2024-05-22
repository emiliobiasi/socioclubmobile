import axios from "axios";

const listarFollowsByClientId = (client_id) => {
  return axios.get(
    `${process.env.EXPO_PUBLIC_API_URL}/getFollowingClubs/${client_id}`,
    {
      timeout: 10000, // Tempo limite de 5 segundos (em milissegundos)
    }
  );
};

const followClub = (client_id, club_id) => {
  return axios.post(
    process.env.EXPO_PUBLIC_API_URL + `/followClub`,
    {
      client_id,
      club_id,
    },
    {
      timeout: 5000, // Tempo limite de 5 segundos (em milissegundos)
    }
  );
};

const unfollowClub = (client_id, club_id) => {
  return axios.delete(
    process.env.EXPO_PUBLIC_API_URL + `/unfollowClub`,
    {
      client_id,
      club_id,
    },
    {
      timeout: 5000, // Tempo limite de 5 segundos (em milissegundos)
    }
  );
};

const FollowService = {
  listarFollowsByClientId,
  followClub,
  unfollowClub,
};

export default FollowService;

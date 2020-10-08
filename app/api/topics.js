import client from "./client";

const setEndpoint = (id) => {
  const endpoint = "/topic/getAll/" + id;
  const getTopics = () => {
    return client.get(endpoint);
  };

  return getTopics;
};

export default {
  setEndpoint,
};

import client from "./client";

const endpoint = "/subject/getAll";

const getSubjects = () => client.get(endpoint);

export default {
  getSubjects,
};

import client from "./client";

// const login2 = (email, password) => client.post("/auth", { email, password });
const login = (email, password) => client.post("/login", { email, password });

export default {
  login,
};

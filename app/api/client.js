import { create } from "apisauce";

const backendURL = "http://polar-journey-63453.herokuapp.com/api";

const apiClient = create({
  baseURL: backendURL,
});

export default apiClient;

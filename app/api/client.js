import { create } from "apisauce";

const backendURL = "http://54.91.31.158/api";
// const backendURL2 = "http://polar-journey-63453.herokuapp.com/api";

const apiClient = create({
  baseURL: backendURL,
});

export default apiClient;

import { create } from "apisauce";

const backendURL = "http://f36033f69503.ngrok.io/api/auth";
const backendURL2 = "http://polar-journey-63453.herokuapp.com/api";

const apiClient = create({
  baseURL: backendURL,
});

export default apiClient;

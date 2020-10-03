import { create } from "apisauce";
import authStorage from "../auth/storage";
import cache from "../utility/cache";
import urls from "../config/BaseURL";

const backendURL = urls.baseUrl + "/api";

const apiClient = create({
  baseURL: backendURL,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["Authorization"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  if (response.data["message"] == "Unauthenticated.") {
    console.log("not authenticated");
    authStorage.removeToken();
  }

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);

  return data ? { ok: true, data } : response;
};

export default apiClient;

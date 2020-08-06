import client from "./client";

// const login2 = (email, password) => client.post("/auth", { email, password });
const login = (email, password, onUploadProgress) =>
  client.post(
    "/login",
    { email, password },
    {
      onUploadProgress: (progress) =>
        onUploadProgress(progress.loaded / progress.total),
    }
  );

export default {
  login,
};

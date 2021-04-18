import axios from "axios";

const instance = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
});
// instance.interceptors.request.use(
//   async (config) => {
//     const token = await getToken();
//     if (token !== null) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     config.headers["Content-Type"] = "application/json";
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

export default instance;

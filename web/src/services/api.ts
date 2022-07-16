import axios from "axios";

const token = sessionStorage.getItem("token");

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 20000,
  timeoutErrorMessage: "A requisição expirou",
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    coop: "uni",
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default api;

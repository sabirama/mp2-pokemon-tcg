import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": import.meta.env.VITE_API_KEY,
  },
});

export default request;

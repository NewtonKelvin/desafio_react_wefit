import axios from "axios";
import "dotenv/config";

export const nextAPI = () => {
  const api = axios.create({
    baseURL: process.env.API_URL,
    headers: {
      "Content-type": "application/json",
    },
    withCredentials: false,
    timeout: 10 * 1000, // 10 segundos
  });

  return api;
};

import axios from "axios"

export const SanshuServer = axios.create({
  baseURL: process.env.EXPO_PUBLIC_SERVER_URL + "/api/v1/",
});

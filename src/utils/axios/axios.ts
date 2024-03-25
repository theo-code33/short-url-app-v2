import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v0",
  headers: {
    "Content-Type": "application/json",
  },
});

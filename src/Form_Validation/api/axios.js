import axios from "axios";

export default axios.create({
  baseURL: "https://node-lmto.onrender.com",
});
export const axiosPrivate = axios.create({
  baseURL: "https://node-lmto.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

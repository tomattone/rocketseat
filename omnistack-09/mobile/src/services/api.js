import axios from "axios";

const api = axios.create({
  baseURL: "http://172.16.16.76:3333"
});
export default api;

import axios from "axios";
import environment from "./environment";

const http = axios.create({
  baseURL: "https://api.github.com",
});

export default http;

import axios from "axios";
import { github } from "./environment";

const http = axios.create({
  baseURL: github.baseURL,
  timeout: 1000,
});

export default http;

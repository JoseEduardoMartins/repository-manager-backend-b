import * as dotenv from "dotenv";
dotenv.config();

export const server = {
  port: process.env.APP_PORT || 3000,
  path: process.env.APP_PATH || "/api",
};

export const github = {
  baseURL: process.env.GITHUB_BASE_URL || "",
};

export default { server, github };

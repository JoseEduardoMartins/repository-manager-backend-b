import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { environment, routes } from "./config";

const app = express();

app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

routes.forEach((route) => app.use(environment.server.path, route));

export default app;

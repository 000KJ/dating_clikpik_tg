import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan"
import cors, { CorsOptions } from "cors";

require("dotenv").config();
const app: Application = express();

// CORS, чтобы серверы между собой общались
const corsConfig: CorsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:4000",
    "https://api.telegram.org/"
  ],
  credentials: true,
};

app.use(cors(corsConfig));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(4000, () => console.log("Сервер шуршит, порт 4000 мурчит"));
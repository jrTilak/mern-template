import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import appRouter from "./router";
//api-sepcs
// const swaggerDocument = YAML.load(swaggerYaml);

config();

const app = express();

//api-docs

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//middlewares
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());

// remove it in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export { app };

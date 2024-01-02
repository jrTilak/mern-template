import { Router } from "express";
import helloRouter from "./hello-router";

const appRouter = Router();

appRouter.use("/hello", helloRouter);

export default appRouter;

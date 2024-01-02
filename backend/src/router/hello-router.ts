import { Router } from "express";
import { Request, Response } from "express";
const helloRouter = Router();

helloRouter.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: "Hello World",
    data: {
      name: "John Doe",
      age: 30,
    },
  });
});

export default helloRouter;

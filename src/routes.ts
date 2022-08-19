import { Router, Request, Response } from "express";

const router = Router();

//localhost:3333/teste

router.get("/teste", (req: Request, res: Response) => {
  return res.json({ nome: "Lucas" });
});

export { router };

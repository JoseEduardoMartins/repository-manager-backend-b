import { Router, Request, Response } from "express";
const router = Router();
import controller from "../controllers/user.controller";

router.get("/users/:login", controller.find);

export default router;

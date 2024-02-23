import { Router } from "express";
import { veroController } from "../http/controllers/VeroStoreController";
export const router = Router();

router.post("/verostore", veroController.getVeroStore);

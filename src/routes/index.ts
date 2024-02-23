import { Router } from "express";
import { veroController } from "../http/controllers/VeroStoreController";
export const router = Router();

router.get('/', (req, res, next) => next('API Vero Store funcionando corretamente'));
router.post("/verostore", veroController.getVeroStore);

import { Router } from "express";
import {
  getGames,
  getGame,
  createGame,
  putGame,
  removeGameById,
} from "../controllers/game.controller.js";

const router = Router();

router.get("/", getGames);
router.get("/:id", getGame);
router.post("/", createGame);
router.put("/:id", putGame);
router.delete("/:id", removeGameById);

export default router;

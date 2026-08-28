import { Router } from "express";
import {
  addGame,
  editGame,
  getAllGames,
  getGameById,
  removeGame,
} from "../controllers/game.controller.js";
import { parseGameFilters } from "../utils/game-filters.js";

const router = Router();

router.get("/", async (req, res) => {
  res.json(await getAllGames(parseGameFilters(req.query)));
});

router.get("/:id", async (req, res) => {
  res.json(await getGameById(Number(req.params.id)));
});

router.post("/", async (req, res) => {
  res.status(201).json(await addGame(req.body));
});

router.put("/:id", async (req, res) => {
  res.json(await editGame(Number(req.params.id), req.body));
});

router.delete("/:id", async (req, res) => {
  res.json({ deleted: await removeGame(Number(req.params.id)) });
});

export default router;

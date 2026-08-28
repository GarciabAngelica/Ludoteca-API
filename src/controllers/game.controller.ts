import type { Request, Response } from "express";
import {
  addGame,
  getAllGames,
  getGameById,
  editGame,
  removeGame,
} from "../services/game.services.js";

export async function getGames(req: Request, res: Response): Promise<void> {
  const game = await getAllGames();
  res.status(200).json(game);
}

export async function getGame(req: Request, res: Response): Promise<void> {
  const id = Number(req.params.id);
  const game = await getGameById(id);

  if (!game) {
    res.status(404).json({ message: "Game not found" });
    return;
  }

  res.status(200).json(game);
}

export async function createGame(req: Request, res: Response): Promise<void> {
  const game = await addGame(req.body);
  res.status(201).json(game);
}

export async function putGame(req: Request, res: Response): Promise<void> {
  const id = Number(req.params.id);

  const game = await editGame(id, req.body);

  if (!game) {
    res.status(404).json({
      message: "Game not found",
    });
    return;
  }

  res.status(200).json(game);
}

export async function removeGameById(
  req: Request,
  res: Response,
): Promise<void> {
  const id = Number(req.params.id);

  const deleted = await removeGame(id);

  if (!deleted) {
    res.status(404).json({
      message: "Game not found",
    });
    return;
  }

  res.status(204).send();
}

import { CreateGameInput, Game } from "../types/game.js";
import {
  createGame,
  findAllGames,
  findGameById,
  deleteGame,
  updateGame,
} from "../repositories/game.repository.ts";

export async function getAllGames(): Promise<Game[]> {
  return await findAllGames();
}

export async function getGameById(id: number): Promise<Game | null> {
  return findGameById(id);
}

export async function addGame(game: CreateGameInput): Promise<Game> {
  return createGame(game);
}

export async function editGame(
  id: number,
  game: CreateGameInput,
): Promise<Game | null> {
  return updateGame(id, game);
}

export async function removeGame(id: number): Promise<boolean> {
  return deleteGame(id);
}

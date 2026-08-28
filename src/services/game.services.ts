import { CreateGameInput, Game, GameFilters } from "../types/game.js";
import {
  createGame,
  findAllGames,
  findGameById,
  deleteGame,
  updateGame,
} from "../repositories/game.repository.js";

export async function getAllGames(filters: GameFilters): Promise<Game[]> {
  return findAllGames(filters);
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

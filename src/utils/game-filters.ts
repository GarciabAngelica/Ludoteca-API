import { GameFilters } from "../types/game.js";

export function parseGameFilters(query: Record<string, unknown>): GameFilters {
  const filters: GameFilters = {};

  if (typeof query.search === "string" && query.search.trim()) {
    filters.search = query.search.trim();
  }

  if (typeof query.category === "string" && query.category.trim()) {
    filters.category = query.category.trim();
  }

  if (typeof query.minPlayers === "string" && query.minPlayers.trim()) {
    const minPlayers = Number(query.minPlayers);

    if (Number.isFinite(minPlayers)) {
      filters.minPlayers = minPlayers;
    }
  }

  if (query.inStock === "true") {
    filters.inStock = true;
  } else if (query.inStock === "false") {
    filters.inStock = false;
  }

  return filters;
}

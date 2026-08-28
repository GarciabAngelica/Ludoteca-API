import { pool } from "../config/database.js";
import { Game, CreateGameInput, GameFilters } from "../types/game.js";

export async function findAllGames(filters: GameFilters): Promise<Game[]> {
  const conditions: string[] = [];
  const values: unknown[] = [];

  if (filters.search) {
    values.push(`%${filters.search}%`);

    conditions.push(`
        (
          name ILIKE $${values.length}
          OR description ILIKE $${values.length}
          OR EXISTS (
            SELECT 1
            FROM unnest(tags) AS tag
            WHERE tag ILIKE $${values.length}
          )
        )
      `);
  }

  if (filters.category) {
    values.push(filters.category);

    conditions.push(`category ILIKE $${values.length}`);
  }

  if (filters.minPlayers !== undefined) {
    values.push(filters.minPlayers);

    conditions.push(`
        min_players <= $${values.length}
        AND max_players >= $${values.length}
      `);
  }

  if (filters.inStock === true) {
    conditions.push("stock > 0");
  }

  const whereClause =
    conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

  const result = await pool.query(
    `
        SELECT
          id,
          name,
          description,
          category,
          min_players AS "minPlayers",
          max_players AS "maxPlayers",
          min_age AS "minAge",
          stock,
          tags,
          created_at AS "createdAt",
          updated_at AS "updatedAt"
        FROM games
        ${whereClause}
        ORDER BY name
      `,
    values,
  );

  return result.rows;
}

export async function findGameById(id: number): Promise<Game | null> {
  const result = await pool.query(
    `
        SELECT
          id,
          name,
          description,
          category,
          min_players AS "minPlayers",
          max_players AS "maxPlayers",
          min_age AS "minAge",
          stock,
          tags,
          created_at AS "createdAt",
          updated_at AS "updatedAt"
        FROM games
        WHERE id = $1
      `,
    [id],
  );

  return result.rows[0] ?? null;
}

export async function createGame(game: CreateGameInput): Promise<Game> {
  const result = await pool.query(
    `
        INSERT INTO games (
          name,
          description,
          category,
          min_players,
          max_players,
          min_age,
          stock,
          tags
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING
          id,
          name,
          description,
          category,
          min_players AS "minPlayers",
          max_players AS "maxPlayers",
          min_age AS "minAge",
          stock,
          tags,
          created_at AS "createdAt",
          updated_at AS "updatedAt"
      `,
    [
      game.name,
      game.description ?? null,
      game.category,
      game.minPlayers,
      game.maxPlayers,
      game.minAge,
      game.stock,
      game.tags ?? [],
    ],
  );

  return result.rows[0];
}

export async function updateGame(
  id: number,
  game: CreateGameInput,
): Promise<Game | null> {
  const result = await pool.query(
    `
        UPDATE games
        SET
          name = $1,
          description = $2,
          category = $3,
          min_players = $4,
          max_players = $5,
          min_age = $6,
          stock = $7,
          tags = $8,
          updated_at = CURRENT_TIMESTAMP
        WHERE id = $9
        RETURNING
          id,
          name,
          description,
          category,
          min_players AS "minPlayers",
          max_players AS "maxPlayers",
          min_age AS "minAge",
          stock,
          tags,
          created_at AS "createdAt",
          updated_at AS "updatedAt"
      `,
    [
      game.name,
      game.description ?? null,
      game.category,
      game.minPlayers,
      game.maxPlayers,
      game.minAge,
      game.stock,
      game.tags ?? [],
      id,
    ],
  );

  return result.rows[0] ?? null;
}

export async function deleteGame(id: number): Promise<boolean> {
  const result = await pool.query("DELETE FROM games WHERE id = $1", [id]);

  return (result.rowCount ?? 0) > 0;
}

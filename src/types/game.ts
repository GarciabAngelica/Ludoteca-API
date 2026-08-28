export interface Game {
  id: number;
  name: string;
  description: string | null;
  category: string;
  minPlayers: number;
  maxPlayers: number;
  minAge: number;
  stock: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateGameInput {
  name: string;
  description?: string;
  category: string;
  minPlayers: number;
  maxPlayers: number;
  minAge: number;
  stock: number;
  tags?: string[];
}

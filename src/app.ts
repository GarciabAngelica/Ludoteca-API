import express from "express";
import helmet from "helmet";
import gameRoutes from "./routes/game.routes.js";

const app = express();

app.use(helmet());
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

app.use("/api/games", gameRoutes);
export default app;

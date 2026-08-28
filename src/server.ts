import "dotenv/config";
import app from "./app.js";
import { pool } from "./config/database.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await pool.query("SELECT 1"); // Test database connection
    console.log("Database connection successfullll");

    app.listen(PORT, () => {
      console.log(`Server is running on: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process with an error code
  }
}

startServer();

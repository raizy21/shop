import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.routes.js";

import db from "./data/database.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.send("app is running...");
// });

app.use("/", authRoutes);

app.listen(PORT, () => {
  db.connectToDatabase()
    .then(() => {
      console.log("Connected to the database successfully!");
    })
    .catch((error) => {
      console.error("Database connection failed:", error);
    });

  console.log(`server running on port ${PORT} -> http://localhost:${PORT}/`);
});

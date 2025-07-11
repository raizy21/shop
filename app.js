import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import csrf from "csurf";
import expressSession from "express-session";

import authRoutes from "./routes/auth.routes.js";
import baseRoutes from "./routes/base.routes.js";
import productsRoutes from "./routes/products.routes.js";

import db from "./data/database.js";

import createSessionConfig from "./config/session.js";

import addCsrfTokenMiddleware from "./middlewares/csrf-token.js";
import errorHandlerMiddleware from "./middlewares/error-handler.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.use(expressSession(createSessionConfig()));

app.use(csrf());
app.use(addCsrfTokenMiddleware);
// app.get("/", (req, res) => {
//   res.send("app is running...");
// });

app.use(baseRoutes);
app.use(authRoutes);
app.use(productsRoutes);

app.use(errorHandlerMiddleware);

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

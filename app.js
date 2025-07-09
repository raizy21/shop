import express from "express";
import dotenv from "dotenv";
import path from "path";

import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.get("/", (req, res) => {
//   res.send("app is running...");
// });

app.use("/", authRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT} -> http://localhost:${PORT}/`);
});

import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// app.get("/", (req, res) => {
//   res.send("app is running...");
// });

app.use("/", authRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT} -> http://localhost:${PORT}/`);
});

import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("app is running...");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT} -> http://localhost:${PORT}/`);
});

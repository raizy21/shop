import express from "express";
import { getSignup, getLogin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signup", getSignup);
router.post("/signup", signup);
router.get("/login", getLogin);
export default router;

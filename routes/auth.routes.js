import express from "express";
import { getSignup, getLogin } from "../comtrollers/auth.controller.js";

const router = express.Router();

router.get("/signup", getSignup);
router.get("/login", getLogin);
export default router;

import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register); // Public Route
router.post("/login", login); // Public Route

export default router;

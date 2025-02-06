import express from "express";
import { getMedia, createMedia } from "../controllers/mediaController.js";
import { authenticateUser } from "../Middleware/authMiddleware.js"; // Import middleware

const router = express.Router();

router.get("/", authenticateUser, getMedia);
router.post("/", authenticateUser, createMedia);

export default router;

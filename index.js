import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import mediaRoutes from "./routes/mediaRoutes.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: true, // Allow frontend domain
    credentials: true, // Allow cookies
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/auth", authRoutes);
app.use("/api/media", mediaRoutes);

// 404 Error Handling for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

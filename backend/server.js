import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import skillsRoutes from "./routes/skills.js";
import authRoutes from "./routes/auth.js";

dotenv.config();
const app = express();

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Use the auth router
app.use("/api/auth", authRoutes);

// Use the router for /api/skills
app.use("/api/skills", skillsRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
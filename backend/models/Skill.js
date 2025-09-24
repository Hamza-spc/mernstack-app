import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true }, // Shooting, Freestyle, Defending
  videoUrl: { type: String, required: true }, // YouTube embed URL
  description: { type: String }, // optional
  level: { type: String, default: "Beginner" },
  dateAdded: { type: Date, default: Date.now }
});

export default mongoose.model("Skill", skillSchema);

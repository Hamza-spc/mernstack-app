import express from "express";
import Skill from "../models/Skill.js";

const router = express.Router();

// GET all skills
router.get("/", async (req, res) => {
  console.log("GET /api/skills called"); // <-- add this
  try {
    const skills = await Skill.find();
    console.log("Skills fetched:", skills);
    res.json(skills);
  } catch (err) {
    console.error("Error fetching skills:", err);
    res.status(500).json({ error: err.message });
  }
});


// POST a new skill
router.post("/", async (req, res) => {
  const { title, category, videoUrl, description, level } = req.body;
  try {
    const newSkill = new Skill({ title, category, videoUrl, description, level });
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;

// GET a skill
router.get("/:id", async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (!skill) {
      // If no skill is found, send a 404 Not Found
      return res.status(404).json({ message: "Skill not found" });
    }

    console.log("Skill fetched:", skill);
    res.json(skill);
  } catch (err) {
    console.error("Error fetching skill:", err);
    res.status(500).json({ error: err.message });
  }
});

// UPDATE a skill
router.put("/:id", async (req, res) => {
  try {
    // Find skill by ID and update it with data from req.body
    const updatedSkill = await Skill.findByIdAndUpdate(
      req.params.id,        // which document to update
      req.body,             // new data (e.g. { title: "New title" })
      { new: true, runValidators: true } // options
    );

    if (!updatedSkill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    console.log("Skill updated:", updatedSkill);
    res.json(updatedSkill); // send back the updated document
  } catch (err) {
    console.error("Error updating skill:", err);
    res.status(400).json({ error: err.message });
  }
});

// DELETE a skill by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedSkill = await Skill.findByIdAndDelete(req.params.id);

    if (!deletedSkill) {
      return res.status(404).json({ error: "Skill not found" });
    }

    res.json({ message: "Skill deleted successfully" });
  } catch (err) {
    console.error("Error deleting skill:", err);
    res.status(500).json({ error: err.message });
  }
});


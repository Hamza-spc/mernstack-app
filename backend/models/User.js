import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true, // removes spaces at start/end
  },
  email: {
    type: String,
    required: true,
    unique: true, // no duplicate emails
    lowercase: true, // always stored in lowercase
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // good practice
  },
  role: {
    type: String,
    enum: ["user", "admin"], // optional for RBAC
    default: "user",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", userSchema);

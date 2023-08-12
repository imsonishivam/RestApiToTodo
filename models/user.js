import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  emailId: String,
  password: String,
});

export const User = mongoose.model("User", userSchema);

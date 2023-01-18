import mongoose from "mongoose";

const { Schema } = mongoose;

// _app.js / Line 48:
const memoriesSchema = new Schema({
  headline: { type: String, required: true },
  details: { type: String, required: true },
  date: { type: String, required: true },
  isFavorite: { type: Boolean, required: true },
  picture: { type: String, required: false },
});

// Or || => in case it does not exist
const Memory =
  mongoose.models.Memory || mongoose.model("Memory", memoriesSchema);

export default Memory;

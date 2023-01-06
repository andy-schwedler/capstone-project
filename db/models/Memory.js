import mongoose from "mongoose";

const { Schema } = mongoose;

// working on data structure:
const memoriesSchema = new Schema({
  headline: { type: String, required: true },
  details: { type: String, required: true },
  date: { type: String, required: true },
  isFavorite: { type: Boolean, required: true },
});

// Or || => in case it does not exist
const Memory =
  mongoose.models.Memory || mongoose.model("Memory", memoriesSchema);

export default Memory;

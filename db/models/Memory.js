import mongoose from "mongoose";

const { Schema } = mongoose;

// blueprint:
const memoriesSchema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  isFavorite: { type: Boolean, required: true },
});

// Question Model erlaubt uns die CRUD-Operationen
// Oder-Abfrage (mit ||): wenn noch nicht vorhanden, dann erstelle
const Memory =
  mongoose.models.Memory || mongoose.model("Memory", memoriesSchema);

export default Memory;

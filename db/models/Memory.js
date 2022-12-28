import mongoose from "mongoose";
const { Schema } = mongoose;
// Blaupause:
const memorySchema = new Schema({
  id: { type: String, required: false },
  name: { type: String, required: false },
  date: { type: String, required: false },
});

// Memory Model erlaubt uns die CRUD-Operationen
// Oder-Abfrage (mit ||): wenn noch nicht vorhanden, dann erstelle
const Memory = mongoose.models.Memory || mongoose.model("Memory", memorySchema);

export default Memory;

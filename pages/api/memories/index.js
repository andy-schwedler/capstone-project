import dbConnect from "../../../db/dbConnect";
import Memory from "../../../db/models/Memory";

export default async function handler(req, res) {
  //1. Connect to the database
  await dbConnect();

  if (req.method === "GET") {
    // 2. Read data from database (async! use await!)
    try {
      const memories = await Memory.find(); // this is a mongoose collection

      // 3. Translate collection to array
      const memoriesArray = memories.map((memory) => {
        return {
          id: memory._id,
          name: memory.name,
          date: memory.date,
          isFavorite: memory.isFavorite,
        };
      });
      res.status(200).json(memoriesArray);
    } catch (error) {
      res.status(400).json("Something went wrong", { error });
    }
  }

  // 4. Create a new Memories
  if (req.method === "POST") {
    const data = req.body;
    try {
      const newMemory = await Memory.create(data);
      res.status(201).json(newMemory);
    } catch (error) {
      res.status(400).json({ message: "error" });
    }
  }
}

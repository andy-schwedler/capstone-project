import dbConnect from "../../../db/dbConnect";
import Memory from "../../../db/models/Memory";

export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;
  const { method } = req;

  if (method === "GET") {
    // 2. Read data from database (async! use await!)
    try {
      const memories = await Memory.findById(id); // this is a mongoose collection

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
      res.status(404).json("ID not found", { error });
    }
  }

  //   await dbConnect();

  //   if (req.method === "GET") {
  //     // 2. Read data from database (async! use await!)
  //     try {
  //       const memories = await Memory.find(); // this is a mongoose collection

  //       // 3. Translate collection to array
  //       const memoriesArray = memories.map((memory) => {
  //         return {
  //           id: memory._id,
  //           name: memory.name,
  //           date: memory.date,
  //           isFavorite: memory.isFavorite,
  //         };
  //       });
  //       res.status(200).json(memoriesArray);
  //     } catch (error) {
  //       res.status(400).json({ message: "Something went wrong" }, { error });
  //     }
  //   }

  if (method === "DELETE") {
    try {
      await Memory.findByIdAndDelete(id);
      return res.status(200).json({ message: "memory deleted" });
    } catch {
      return res
        .status(404)
        .json({ message: "memory to delete couldn't be found" });
    }
  }

  //   if (method === "PUT") {
  //     try {
  //       const result = await Memory.findByIdAndUpdate(
  //         id,
  //         {
  //           name: req.body.name,
  //           text: req.body.text,
  //         },
  //         { returnDocument: "after" }
  //       );
  //       return res.status(200).json(result);
  //     } catch {
  //       return res
  //         .status(404)
  //         .json({ message: "question couldn't be found" });
  //     }
  //   }

  res.status(405).json({ message: "method not allowed" });
}

import dbConnect from "../../../db/dbConnect";
import Memory from "../../../db/models/Memory";

export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;
  const { method } = req;

  if (method === "GET") {
    // Read Memory by ID
    try {
      const memory = await Memory.findById(id); // this is a mongoose collection
      // Display Memory as JSON object in Browser
      res.status(200).json(memory);
    } catch (error) {
      res.status(400).json("Something went wrong", { error });
      res.status(404).json("ID not found", { error });
    }
  }

  if (method === "DELETE") {
    try {
      await Memory.findByIdAndDelete(id);
      return res.status(200).json({ message: "memory is deleted permanently" });
    } catch {
      return res
        .status(404)
        .json({ message: "memory to delete couldn't be found" });
    }
  }

  if (method === "PUT") {
    try {
      const result = await Memory.findByIdAndUpdate(
        id,
        {
          name: req.body.name,
          date: req.body.date,
        },
        { returnDocument: "after" }
      );
      return res.status(200).json(result);
    } catch {
      return res.status(404).json({ message: "question couldn't be found" });
    }
  }

  res.status(405).json({ message: "method not allowed" });
}

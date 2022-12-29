import dbConnect from "../../../db/dbConnect";
import Memory from "../../../db/models/Memory";

export default async function handler(req, res) {
  //1. Connect to the database and wait for the connection to be established
  await dbConnect();

  //   switch (req.method) {
  //     case "GET":
  //       try {
  //         const filter = {};
  //         const memories = await Memory.find(filter); // this is a mongoose collection;
  //         res.status(200).json(memories);
  //       } catch (error) {
  //         res.status(500).json({ error: "something went wrong" });
  //       }
  //       break;
  //     default:
  //       res.status(405).json({ error: "method not allowed" });
  //   }
  if (req.method === "GET") {
    // 2. Read data from database (async! use await!)
    const memories = await Memory.find(); // this is a mongoose collection

    // 3. Translate collection to array
    const memoriesArray = memories.map((memory) => {
      return {
        id: memory._id,
        name: memory.name,
        date: memory.date,
      };
    });

    res.status(200).json(memoriesArray);
  }
}

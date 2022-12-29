import dbConnect from "../../../db/dbConnect";
import Memory from "../../../db/model/Memory";

export default async function handler(req, res) {
  //1. Connect to the database and wait for the connection to be established
  await dbConnect();

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

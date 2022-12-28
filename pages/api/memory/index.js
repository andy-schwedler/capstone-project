import dbConnect from "../../../db/dbConnect";
import Memory from "../../../db/models/Memory";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const memories = await Memory.find(); // this is a mongoose collection
    const memoriesArray = memories.map((memory) => {
      return {
        id: memory._id,
        name: memory.name,
        date: memory.date,
      };
    });

    response.status(200).json(memoriesArray);
  }
}

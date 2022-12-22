import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

const deleteHelper = async (req, res) => {
  if (req.method === "DELETE") {
    const { ticketId } = req.body;
    console.log(ticketId);
  }
};

export default deleteHelper;

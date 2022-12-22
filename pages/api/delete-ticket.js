import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

const deleteHelper = async (req, res) => {
  if (req.method === "DELETE") {
    console.log("Deleted");
  }
};

export default deleteHelper;

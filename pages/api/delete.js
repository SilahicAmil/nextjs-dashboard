import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

const deleteHelper = async (req, res) => {
  if (req.method === "DELETE") {
    try {
      const { ticketId } = req.body;
      console.log(ticketId);
      // MOVE DB CONNECTION STRING INTO .ENV FILE
      const client = await MongoClient.connect(process.env.DB_URL);
      // add try catch block and error handling
      const db = client.db();

      const ticketsCollection = db.collection("tickets");

      const deleteResult = await ticketsCollection.deleteOne({
        _id: ObjectId(ticketId),
      });

      console.log("removed ticket", deleteResult);
      client.close();

      res.status(202).json({ message: "ticket removed successfully" });
    } catch (err) {
      console.log(err);
    }
  }
};

export default deleteHelper;

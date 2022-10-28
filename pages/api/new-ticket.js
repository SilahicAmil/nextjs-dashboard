import { MongoClient } from "mongodb";

const Helper = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body();

    const client = await MongoClient.connect(
      "mongodb+srv://designate:12345@cluster0.hho9svc.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const ticketsCollection = db.collection("tickets");

    const result = await ticketsCollection.insertOne(data);

    console.log("this is the data", result);
    client.close();

    res.status(201).json({ message: "new ticket has been inserted" });
  }
};

export default Helper;

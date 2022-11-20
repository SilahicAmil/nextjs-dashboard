import { MongoClient } from "mongodb";

const helper = async (req, res) => {
  if (req.method === "POST") {
    try {
      const data = req.body;

      // MOVE DB CONNECTION STRING INTO .ENV FILE
      const client = await MongoClient.connect(process.env.DB_URL);
      // add try catch block and error handling
      const db = client.db();

      const ticketsCollection = db.collection("tickets");

      const result = await ticketsCollection.insertOne(data);

      console.log("this is the data", result);
      client.close();
      res.status(201).json({ message: "new ticket has been inserted" });
    } catch (err) {
      console.log(err);
    }
  }
};

export default helper;

// create another API for new-reply
// or probably be best to extend this to take comments. INit empty
// but when reply just update mongoDB

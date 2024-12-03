import { MongoClient } from "mongodb";

async function connectToDatabase() {
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  return client;
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await connectToDatabase();
      const votesCollection = client.db("quokka_project").collection("votes");
      const results = await votesCollection
        .aggregate([{ $group: { _id: "$vote", count: { $sum: 1 } } }])
        .toArray();
      client.close();

      const tally = results.reduce((acc, result) => {
        acc[result._id] = result.count;
        return acc;
      }, {});

      res.status(200).json(tally);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to tally votes" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

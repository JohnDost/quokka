import { MongoClient } from "mongodb";

async function connectToDatabase() {
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  return client;
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { user_id, vote_option } = req.body;

    try {
      const client = await connectToDatabase();
      const votesCollection = client.db("quokka_project").collection("votes");
      await votesCollection.insertOne({ user_id, vote: vote_option });
      client.close();

      res.status(200).json({ status: "Vote recorded", vote_option });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to record vote" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

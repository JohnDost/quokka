import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const feedback_list = req.body.feedback_list;
    let positiveCount = 0;
    let negativeCount = 0;

    try {
      for (const feedback of feedback_list) {
        const prompt = `Analyze the sentiment of this feedback: '${feedback}'`;

        const response = await axios.post(
          "https://api.openai.com/v1/completions",
          {
            model: "text-davinci-004",
            prompt: prompt,
            max_tokens: 10,
            temperature: 0.5,
          },
          { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } }
        );

        const sentiment = response.data.choices[0].text.trim().toLowerCase();
        if (sentiment.includes("positive")) positiveCount++;
        else negativeCount++;
      }

      res
        .status(200)
        .json({ positive: positiveCount, negative: negativeCount });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Sentiment analysis failed" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

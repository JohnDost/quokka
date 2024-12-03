import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { event_name, project_status } = req.body;
    const prompt = `Write an engaging and humorous tweet about the Quokka memecoin for event: ${event_name} with update: ${project_status}.`;

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "text-davinci-004",
          prompt: prompt,
          max_tokens: 50,
          temperature: 0.7,
        },
        { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } }
      );

      const tweet = response.data.choices[0].text.trim();
      res.status(200).json({ tweet });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to generate tweet" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

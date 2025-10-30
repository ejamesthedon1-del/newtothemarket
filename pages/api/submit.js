import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, feedback: "Method not allowed" });
  }

  const { name, address, description } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `You are a real estate expert. Evaluate this listing:
Name: ${name}
Address: ${address}
Description: ${description || "No description"}`,
        },
      ],
      max_tokens: 500,
    });

    const aiFeedback =
      completion.choices && completion.choices[0]?.message?.content
        ? completion.choices[0].message.content
        : "No feedback received from AI.";

    return res.status(200).json({ success: true, feedback: aiFeedback });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      feedback: "Failed to get AI feedback. Please try again later.",
    });
  }
}

export default async function handler(req, res) {
  const r = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      "Authorization": `Token ${process.env.REPLICATE_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      version: "stability-ai/sdxl",
      input: { prompt: "AI generated image, fictional" }
    })
  });

  const data = await r.json();
  res.status(200).json({ image: data.output?.[0] });
}
import {
  TRELLO_QUEUE_LIST_ID,
  TRELLO_WORKING_LIST_ID,
} from "@/constants/Trello";
import { Card } from "@/types/trello";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
  const TRELLO_API_TOKEN = process.env.TRELLO_API_TOKEN;

  const { query } = req.query;

  if (!TRELLO_API_KEY || !TRELLO_API_TOKEN) {
    return res.status(500).json({ error: "Missing Trello credentials" });
  }

  let queryUrl = "";
  switch (query) {
    case "queue":
      queryUrl = `https://api.trello.com/1/lists/${TRELLO_QUEUE_LIST_ID}/cards?key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}`;
      break;
    case "working":
      queryUrl = `https://api.trello.com/1/lists/${TRELLO_WORKING_LIST_ID}/cards?key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}`;
      break;
    case "card":
      queryUrl = `https://api.trello.com/1/cards?idList=${TRELLO_QUEUE_LIST_ID}&key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}`;
      break;
    default:
      return res
        .status(400)
        .json({ error: "Invalid or missing query parameter" });
  }

  try {
    switch (req.method) {
      case "GET":
        const response = await fetch(queryUrl);
        if (!response.ok)
          throw new Error(`Trello API error: ${response.status}`);

        const data = await response.json();
        return res.status(200).json(
          data.map((card: Card) => ({
            name: card.name,
            id: card.id,
          }))
        );

      case "POST":
        const { name, description } = req.body;

        if (!name || !description) {
          return res.status(400).json({ error: "Missing required fields" });
        }

        const start = new Date().toISOString();

        const updatedDescription = `${description}\n TimeCreated: ${start}`;

        const postUrl = `${queryUrl}&name=${name}&desc=${updatedDescription}&start=${start}`;

        const postResponse = await fetch(postUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!postResponse.ok)
          throw new Error(`Trello API error: ${postResponse.status}`);

        const postData = await postResponse.json();
        return res.status(201).json(postData);

      default:
        res.status(405).json({ error: "Method not allowed" });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default handler;

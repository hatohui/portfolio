import {
  TRELLO_QUEUE_LIST_ID,
  TRELLO_WORKING_LIST_ID,
} from "@/constants/Trello";
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
      queryUrl = `https://api.trello.com/1/cards?idList=${TRELLO_QUEUE_LIST_ID}&key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}&name=New Commission Request`;
    default:
      res.status(405).json({ error: "method not allowed" });
  }

  //handler
  try {
    switch (req.method) {
      //get method
      case "GET":
        const response = await fetch(queryUrl);
        if (!response.ok)
          throw new Error(`Trello API error: ${response.status}`);

        const data = await response.json();

        return res.status(200).json(
          data.map((card: { name: string }) => ({
            name: card.name,
          }))
        );

      case "POST":
        console.log("POST initiated");
        res.status(200).json({ message: "You stink" });

      //default method
      default:
        res.status(405).json({ error: "method not allowed" });
    }

    //error handler
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default handler;

import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
  const TRELLO_API_TOKEN = process.env.TRELLO_API_TOKEN;
  const TRELLO_QUEUE_LIST_ID = "63d168db2d063104c7ecb833";
  const TRELLO_WORKING_LIST_ID = "642685e659e21b5a89827af7";

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

import {
  EXAMPLE_BACKGROUND_LIST_ID,
  EXAMPLE_FULLBODY_LIST_ID,
  EXAMPLE_ICON_LIST_ID,
  EXAMPLE_SKETCHPAGE_LIST_ID,
} from "@/constants/Trello";
import { ImageQueryType, ImageURLPayload, TrelloCard } from "@/types/trello";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
  const TRELLO_API_TOKEN = process.env.TRELLO_API_TOKEN;

  const { query } = req.query;
  const authenticate = `key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}`;

  if (!TRELLO_API_KEY || !TRELLO_API_TOKEN) {
    return res.status(500).json({ error: "Missing Trello credentials" });
  }

  let queryURL = "";
  switch (query) {
    case ImageQueryType.icon:
      queryURL = `https:api.trello.com/1/lists/${EXAMPLE_ICON_LIST_ID}/cards?${authenticate}&attachments=true`;
      break;
    case ImageQueryType.full:
      queryURL = `https:api.trello.com/1/lists/${EXAMPLE_FULLBODY_LIST_ID}/cards?${authenticate}&attachments=true`;
      break;
    case ImageQueryType.sketchpage:
      queryURL = `https:api.trello.com/1/lists/${EXAMPLE_SKETCHPAGE_LIST_ID}/cards?${authenticate}&attachments=true`;
      break;
    case ImageQueryType.background:
      queryURL = `https:api.trello.com/1/lists/${EXAMPLE_BACKGROUND_LIST_ID}/cards?${authenticate}&attachments=true`;
      break;
    default:
      return res
        .status(400)
        .json({ error: "Invalid or missing query parameter" });
  }

  try {
    switch (req.method) {
      case "GET":
        const response = await fetch(queryURL);
        if (!response.ok)
          throw new Error(`Trello API error: ${response.status}`);
        const data = await response.json();

        const urls: ImageURLPayload = data
          .filter((card: TrelloCard) => card.attachments?.[0]?.previews?.[3])
          .map((card: TrelloCard) => {
            const firstAttachment = card.attachments![0];
            const preview = firstAttachment.previews![3];

            return {
              url: firstAttachment.url || "",
              preview: preview.url || "",
              width: preview.width || 0,
              height: preview.height || 0,
            };
          });

        return res.status(200).json(urls);
      default:
        res.status(405).json({ error: "Method not allowed" });
    }
  } catch (error: Error | unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default handler;

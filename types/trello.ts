import { TRELLO_QUEUE_LIST_ID } from "@/constants/Trello";
import { CommissionData } from "./commission";

export type Card = {
  name: string;
};

// const trelloBoardUrl = `https://api.trello.com/1/boards/${TRELLO_BOARD_ID}?key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}`;
// const trelloListUrl = `https://api.trello.com/1/boards/${TRELLO_BOARD_ID}/lists?key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}`;

export type CreateCardPayload = {
  name: string;
  description: string;
  listId: string;
  file?: File;
};

export const createTrelloCardPayload = (
  commission: CommissionData
): CreateCardPayload => {
  return {
    name: `${commission.name} - ${commission.type} Commission`,
    description: `
        ✉️ Email: ${commission.email}
        📞 Contact: ${commission.contact || "N/A"}
        💡 Idea: ${commission.idea || "N/A"}
        🖼️ Background: ${commission.background ? "Yes" : "No"}
        👥 Characters: ${commission.characters}
        💲 Estimated Pricing: $${commission.estimatedPricing}
        📎 Reference: ${
          commission.reference
            ? "Provided (Image attached)"
            : "No reference provided"
        }
    `.trim(),
    listId: TRELLO_QUEUE_LIST_ID,
    file: commission.referenceSource,
  };
};

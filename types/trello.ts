import { TRELLO_QUEUE_LIST_ID } from "@/constants/Trello";
import { CommissionData } from "./commission";

export type Card = {
  name: string;
  id: string;
};

export type CreateCardPayload = {
  name: string;
  description: string;
  file?: File;
};

export const createTrelloCardPayload = (
  commission: CommissionData
): CreateCardPayload => {
  return {
    name: `${commission.name}`,
    description: `
        ✉️ Email: ${commission.email} \n
        📞 Contact: ${commission.contact || "N/A"} \n
        💡 Idea: ${commission.idea || "N/A"} \n
        🖼️ Background: ${commission.background ? "Yes" : "No"} \n
        👥 Characters: ${commission.characters} \n
        💲 Estimated Pricing: $${commission.estimatedPricing} \n
        📎 Reference: ${
          commission.reference ? commission.reference : "No reference provided"
        } 
  `.trim(),
  };
};

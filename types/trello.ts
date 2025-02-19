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
        📞 Contact: ${
          commission.contact + " on " + commission.platform || "N/A"
        } \n
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

export enum ImageQueryType {
  icon = "icon",
  full = "full",
  sketchpage = "sketchpage",
  background = "background",
  none = "",
}

export type ImageURL = {
  url: string;
  preview: string;
  height: number;
  width: number;
};

export type ImageURLPayload = ImageURL[];

export interface TrelloCard {
  id: string;
  name: string;
  desc: string;
  attachments?: {
    url: string;
    previews: { height: number; id: string; url: string; width: number }[];
  }[];
}

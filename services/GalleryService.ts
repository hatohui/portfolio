import { ImageQueryType, ImageURLPayload } from "@/types/trello";

export const getImages = async (
  type: ImageQueryType
): Promise<ImageURLPayload | undefined> => {
  try {
    const response = await fetch(`/api/example/${type}`);
    if (!response.ok) throw new Error("Failed to fetch queue data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

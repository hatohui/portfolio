import { Card, CreateCardPayload } from "@/types/trello";

//*return current queue*//
export const getTrelloQueue = async (): Promise<Card[] | undefined> => {
  try {
    const response = await fetch("/api/trello/queue");
    if (!response.ok) throw new Error("Failed to fetch queue data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

//*return current queue*//
export const getTrelloWorking = async (): Promise<Card[] | undefined> => {
  try {
    const response = await fetch("/api/trello/working");
    if (!response.ok) throw new Error("Failed to fetch queue data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createTrelloCard = async (
  cardData: CreateCardPayload
): Promise<Card | undefined> => {
  try {
    const response = await fetch("/api/trello/card", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cardData),
    });

    if (!response.ok) throw new Error("Failed to create Trello card");
    return await response.json();
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

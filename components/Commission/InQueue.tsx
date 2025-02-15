"use client";

import React, { useEffect, useState } from "react";
import TypedText from "../TypedText";
import { getTrelloQueue } from "@/services/TrelloService";
import { Card } from "@/types/trello";

const InQueue: React.FC = () => {
  const [peopleInQueue, setPeopleInQueue] = useState<Card[]>([]);

  useEffect(() => {
    getTrelloQueue().then((cards: Card[] | undefined) => {
      if (cards) {
        setPeopleInQueue(cards);
      }
    });
  }, []);

  return (
    <div className="border-2 p-4 w-full h-full backdrop-blur-sm bg-black/5 shadow-lg">
      <div className="font-extrabold">
        <TypedText strings={["IN QUEUE"]} />
      </div>
      <div className="pt-4">
        {peopleInQueue.length ? (
          peopleInQueue.map((person, key) => <div key={key}>{person.name}</div>)
        ) : (
          <div className="text-center">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default InQueue;

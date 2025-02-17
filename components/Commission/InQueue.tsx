"use client";

import React, { useEffect, useState } from "react";
import TypedText from "../Utils/TypedText";
import { getTrelloQueue } from "@/services/TrelloService";
import { Card } from "@/types/trello";

const InQueue: React.FC = () => {
  const [peopleInQueue, setPeopleInQueue] = useState<Card[]>([]);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(false);

  useEffect(() => {
    getTrelloQueue().then((cards: Card[] | undefined) => {
      if (cards) {
        setPeopleInQueue(cards);
      }
    });
  }, []);

  return (
    <div className="border-2 p-4 w-full h-full backdrop-blur-md bg-black/5 shadow-lg flex flex-col">
      {/* Fixed Title */}
      <div className="font-extrabold truncate pb-2">
        {isFirstLoad ? (
          "IN QUEUE"
        ) : (
          <TypedText
            strings={["IN QUEUE"]}
            onComplete={() => setIsFirstLoad(true)}
          />
        )}
      </div>

      <div className="pt-2 overflow-auto thin-scrollbar flex-grow">
        {peopleInQueue.length ? (
          peopleInQueue.map((person, key) => <div key={key}>{person.name}</div>)
        ) : (
          <div className="flex flex-col animate-pulse gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-2 rounded bg-gray-200 w-full"></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InQueue;

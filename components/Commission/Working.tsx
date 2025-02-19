"use client";

import React, { useEffect, useState } from "react";
import TypedText from "../Utils/TypedText";
import { getTrelloWorking } from "@/services/TrelloService";
import { Card } from "@/types/trello";

const Working: React.FC = () => {
  const [peopleInWorking, setPeopleInWorking] = useState<Card[]>([]);

  useEffect(() => {
    getTrelloWorking().then((cards: Card[] | undefined) => {
      if (cards) {
        setPeopleInWorking(cards);
      }
    });
  }, []);

  return (
    <div className="p-4 border-2 w-full h-full backdrop-blur-md bg-black/5 shadow-lg flex flex-col">
      {/* Fixed Title */}
      <div className="font-extrabold truncate pb-2">
        <TypedText strings={["WORKING"]} />
      </div>

      {/* Scrollable List */}
      <div className="pt-2 overflow-auto thin-scrollbar flex-grow">
        {peopleInWorking.length ? (
          peopleInWorking.map((person, key) => (
            <div key={key}>{person.name}</div>
          ))
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

export default Working;

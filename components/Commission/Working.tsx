"use client";

import React, { useEffect, useState } from "react";
import TypedText from "../TypedText";
import { getTrelloWorking } from "@/services/TrelloService";
import { Card } from "@/types/trello";

const Working: React.FC = () => {
  const [peopleInWorking, setPeopleInWorking] = useState<Card[]>([]);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(false);

  useEffect(() => {
    getTrelloWorking().then((cards: Card[] | undefined) => {
      if (cards) {
        setPeopleInWorking(cards);
      }
    });
  }, []);

  return (
    <div className="p-4 border-2 w-full h-full backdrop-blur-sm bg-black/5">
      <div className="font-extrabold truncate">
        {isFirstLoad ? (
          "WORKING"
        ) : (
          <TypedText
            strings={["WORKING"]}
            onComplete={() => setIsFirstLoad(true)}
          />
        )}
      </div>
      <div className="pt-4">
        {peopleInWorking.length ? (
          peopleInWorking.map((person, key) => (
            <div key={key}>{person.name}</div>
          ))
        ) : (
          <div className="flex flex-col animate-pulse gap-3">
            <div className="h-2 rounded bg-gray-200 w-full"></div>
            <div className="h-2 rounded bg-gray-200 w-full"></div>
            <div className="h-2 rounded bg-gray-200 w-full"></div>
            <div className="h-2 rounded bg-gray-200 w-full"></div>
            <div className="h-2 rounded bg-gray-200 w-full"></div>
            <div className="h-2 rounded bg-gray-200 w-full"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Working;

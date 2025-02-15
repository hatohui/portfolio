"use client";

import React, { useState } from "react";
import TypedText from "../TypedText";

const Status = () => {
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(false);

  return (
    <div className="border-2 w-full p-4 h-full backdrop-blur-sm bg-black/5 md:col-span-2 lg:row-span-2 lg:col-span-2">
      <div className="font-extrabold truncate">
        {isFirstLoad ? (
          "STATUS"
        ) : (
          <TypedText
            strings={["STATUS"]}
            onComplete={() => setIsFirstLoad(true)}
          />
        )}
      </div>
      <div className="pt-4 text-center">WIP</div>
    </div>
  );
};

export default Status;

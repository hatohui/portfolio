import React from "react";
import TypedText from "../Utils/TypedText";

const SmallTOS = () => {
  return (
    <div className="border-2 w-full transition-all duration-150 hover:bg-black/50 truncate p-4 backdrop-blur-md bg-black/40 block row-span-1">
      <TypedText className="font-extrabold" strings={["TOS"]} />

      <ul className="list-disc pl-5">
        {/* <li>NO NSFW or Gore</li> */}
        <li>NO Hate or Offensive Content</li>
        <li>NO AI/NFT Use</li>
        <li>Personal Use Only</li>
        <li>Credit Required</li>
        <li>Payment via Paypal</li>
      </ul>
    </div>
  );
};

export default SmallTOS;

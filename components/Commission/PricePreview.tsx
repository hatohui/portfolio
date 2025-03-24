import React from "react";

const PricePreview = ({ price }: { price: number }) => {
  return (
    <div className="mx-5 py-4 px-2 text-wrap text-green-300 rounded-lg border text-center mt-4 select-none bg-yellow-500/10">
      {price
        ? `$${price} USD`
        : "Select a commission type for price estimation!"}
    </div>
  );
};

export default PricePreview;

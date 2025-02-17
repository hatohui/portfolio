"use client";

import React, { useEffect, useState } from "react";
import Form from "@/components/Commission/Form";
import InQueue from "@/components/Commission/InQueue";
import Status from "@/components/Commission/Status";
import Working from "@/components/Commission/Working";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 50);
  }, []);

  return (
    <div className="mt-[57px] w-screen  mb-8">
      <div
        className={`
          grid pt-5 text-slate-100 gap-4 justify-center
          xl:m-[1/12] xl:px-40 xl:grid-rows-3 xl:grid-cols-3
          lg:px-20 md:mx-7 md:grid-cols-2 mx-4 grid-cols-1 grid-rows-1
          transition-transform origin-top duration-700 ease-out xl:h-[calc(100vh-96px)]
          ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}
        `}
      >
        <InQueue />
        <Working />
        <Form mobile />
        <Status />
        <Form mobile={false} />
      </div>
    </div>
  );
};

export default Page;

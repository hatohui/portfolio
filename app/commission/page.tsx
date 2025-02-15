import Form from "@/components/Commission/Form";
import InQueue from "@/components/Commission/InQueue";
import Status from "@/components/Commission/Status";
import Working from "@/components/Commission/Working";
import React from "react";

const page = () => {
  return (
    <div className="mt-[57px] w-screen h-full">
      <div
        className="grid pt-5 text-slate-100 gap-4 justify-center 
        lg:m-[1/12] 
        lg:grid-rows-3 
        lg:grid-cols-3 
        lg:px-40
        md:mx-7
        md:grid-cols-2
        mx-4
        grid-cols-1
        grid-rows-1
        "
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

export default page;

"use client";

import TypedText from "@/components/TypedText";

export default function pages() {
  return (
    <div className="flex flex-col justify-center text-center items-center h-[calc(100vh-57px)] w-full">
      <div className="text-4xl font-bold mb-4 mx-4">
        <TypedText
          strings={["Welcome to Noodle&apos;s Den&apos;s Landing Page"]}
          onComplete={() => console.log("Hello world")}
        />
      </div>
      <span className="text-xl text-slate-100">
        This website is still a work in progress
      </span>
    </div>
  );
}

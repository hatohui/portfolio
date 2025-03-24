"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type HoverCards = "BRYAN" | "HATOHUI" | undefined;

export default function Pages() {
  const [hovered, setHovered] = useState<HoverCards>();
  const router = useRouter();

  const imagesSrc = {
    hatohui: "/Images/me_drag.png",
    zagvandr: "/Images/BryanBanner.jpg",
  };

  const userPath = {
    hatohui: "/hatohui",
    zagvandr: "/zagvandr",
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-[url('/Images/axiom-pattern.png')]" />
      <div
        className={`fixed w-screen h-screen z-10 opacity-80 ${
          hovered
            ? hovered === "BRYAN"
              ? "bg-[#bb5a1a]"
              : "bg-green-600"
            : "hidden"
        }`}
      ></div>
      <div
        className={`fixed w-screen h-screen z-10 opacity-80 ${
          hovered ? "bg-[url('/Images/white-tiles.png')]" : "hidden"
        }`}
      ></div>
      <div className="flex overflow-hidden flex-col z-50 justify-center text-center items-center h-screen select-none w-full">
        <div
          className="w-full h-1/2 cursor-pointer hover:z-50 hover:h-2/3 transition-transform flex flex-nowrap border-2 flex-col focus:scale-95 hover:border-t-2 border-b-2 duration-300 ease-out hover:translate-y-10 hover:scale-105 relative bg-slate-950 hover:bg-[#aaeffe] skew-y-6 overflow-hidden group"
          onMouseEnter={() => setHovered("BRYAN")}
          onMouseLeave={() => setHovered(undefined)}
          onClick={() => router.push(userPath.zagvandr)}
        >
          <div className="z-30 group group-hover:opacity-70 opacity-0 group text-[16em] group-hover:animate-[scroll-left_6000ms_linear_infinite] font-bold flex items-center overflow-hidden select-none w-full">
            <p className="shadow-lg">ZAGVANDR</p>
          </div>
          <div className="absolute bg-gradient-to-b from-slate-950 via-transparent to-slate-950 h-full w-full z-20 opacity-0 group-hover:opacity-30"></div>
          <img
            className="w-full h-full absolute object-cover group-hover:object-[center_40%] object-[center_25%] transition-[object-position,transform] group-hover:translate-x-20 opacity-40 group-hover:opacity-100 ease-linear group-hover:duration-[20000ms]"
            src={imagesSrc.zagvandr}
            alt="Smexy fox picture uwu"
          />
          <div className="z-30 group-hover:opacity-70 opacity-0 group text-[16em] group-hover:animate-[scroll-l_6000ms_linear_infinite_reverse] font-bold flex items-center overflow-hidden select-none w-full">
            <p className="shadow-lg">ZAGVANDR</p>
          </div>
        </div>

        <div
          className="w-full h-1/2 hover:h-2/3 cursor-pointer transition-transform flex flex-nowrap flex-col duration-300 border-t-2 border-2 hover:border-b-2 ease-out hover:z-50 hover:-translate-y-10 hover:scale-105 relative bg-slate-950 hover:bg-[#aaeffe] skew-y-6 overflow-hidden group"
          onMouseEnter={() => setHovered("HATOHUI")}
          onMouseLeave={() => setHovered(undefined)}
          onClick={() => router.push(userPath.hatohui)}
        >
          <div className="z-30 group-hover:opacity-70 opacity-0 group text-[16em] group-hover:animate-[scroll-left_6000ms_linear_infinite_reverse] font-bold flex items-center overflow-hidden select-none w-full">
            <p className="shadow-lg">HATOHUI</p>
          </div>
          <div className="absolute bg-gradient-to-b from-slate-950 via-transparent to-slate-950 h-full w-full z-20 opacity-0 group-hover:opacity-30"></div>
          <img
            className="w-full h-full absolute object-cover group-hover:object-[center_20%] object-[center_60%] transition-[object-position,transform] group-hover:translate-x-20 opacity-40 group-hover:opacity-100 ease-linear group-hover:duration-[20000ms]"
            src={imagesSrc.hatohui}
            alt="Smexy fox picture uwu"
          />
          <div className="z-30 group-hover:opacity-70 opacity-0 group text-[16em] group-hover:animate-[scroll-l_6000ms_linear_infinite] font-bold flex items-center overflow-hidden select-none w-full">
            <p className="shadow-lg">HATOHUI</p>
          </div>
        </div>
      </div>
    </>
  );
}

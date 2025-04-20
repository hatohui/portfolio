"use client";

import CharacterCard, { HoverCards } from "@/components/Landing/CharacterCard";
import Loading from "@/components/Utils/Loading";
import TypedText from "@/components/Utils/TypedText";
import { useEffect, useState } from "react";

export default function Pages() {
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState<HoverCards>();

  const imagesSrc = {
    hatohui: "/Images/meme!.png",
    zagvandr: "/Images/BryanBanner.jpg",
  };

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="overflow-hidden">
      {hovered == "ZAG" && (
        <>
          <div className="w-screen h-2 absolute select-none z-[9999] mt-2 bg-gradient-to-r from-green-500 via-cyan-400 to-blue-500 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-left_3s_ease-in-out_infinite]"></div>
          <div className="w-screen h-2 absolute select-none z-[9999] mt-2 bg-gradient-to-r from-yellow-300 via-yellow-600 to-orange-500 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-left_10s_ease-in-out_infinite]"></div>
          <div className="w-screen h-2 absolute select-none z-[9999] mt-7 bg-gradient-to-r from-pink-300 via-purple-500 to-red-400 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-left_6s_ease-in-out_infinite]"></div>
          <div className="w-screen h-2 absolute select-none z-[9999] mt-7 bg-gradient-to-r from-pink-300 via-purple-500 to-red-400 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-left_2s_ease-in-out_infinite]"></div>
          <div className="w-screen h-2 absolute select-none z-[9999] mt-12 bg-gradient-to-r from-blue-400 via-teal-500 to-green-400 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-left_5s_ease-in-out_infinite]"></div>
          <div className="w-screen h-2 absolute bottom-0 select-none z-[9999] mb-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-right_3s_ease-in-out_infinite]" />
          <div className="w-screen h-2 absolute bottom-0 select-none z-[9999] mb-2 bg-gradient-to-r from-orange-500 via-yellow-600 to-yellow-300 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-right_10s_ease-in-out_infinite]" />
          <div className="w-screen h-2 absolute bottom-0 select-none z-[9999] mb-7 bg-gradient-to-r from-red-400 via-purple-500 to-pink-300 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-right_6s_ease-in-out_infinite]" />
          <div className="w-screen h-2 absolute bottom-0 select-none z-[9999] mb-7 bg-gradient-to-r from-red-400 via-purple-500 to-pink-300 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-right_2s_ease-in-out_infinite]" />
          <div className="w-screen h-2 absolute bottom-0 select-none z-[9999] mb-12 bg-gradient-to-r from-green-400 via-teal-500 to-blue-400 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-right_5s_ease-in-out_infinite]" />
        </>
      )}
      {hovered == "HAT" && (
        <>
          <div className="w-screen h-2 absolute select-none z-[9999] mt-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-right_3s_ease-in-out_infinite]" />
          <div className="w-screen h-2 absolute select-none z-[9999] mt-2 bg-gradient-to-r from-orange-500 via-yellow-600 to-yellow-300 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-right_10s_ease-in-out_infinite]" />
          <div className="w-screen h-2 absolute select-none z-[9999] mt-7 bg-gradient-to-r from-red-400 via-purple-500 to-pink-300 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-right_6s_ease-in-out_infinite]" />
          <div className="w-screen h-2 absolute select-none z-[9999] mt-7 bg-gradient-to-r from-red-400 via-purple-500 to-pink-300 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-right_2s_ease-in-out_infinite]" />
          <div className="w-screen h-2 absolute select-none z-[9999] mt-12 bg-gradient-to-r from-green-400 via-teal-500 to-blue-400 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-right_5s_ease-in-out_infinite]" />
          <div className="w-screen h-2 absolute bottom-0 select-none z-[9999] mb-2 bg-gradient-to-r from-green-500 via-cyan-400 to-blue-500 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-left_3s_ease-in-out_infinite]"></div>
          <div className="w-screen h-2 absolute bottom-0 select-none z-[9999] mb-2 bg-gradient-to-r from-yellow-300 via-yellow-600 to-orange-500 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-left_10s_ease-in-out_infinite]"></div>
          <div className="w-screen h-2 absolute bottom-0 select-none z-[9999] mb-7 bg-gradient-to-r from-pink-300 via-purple-500 to-red-400 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-left_6s_ease-in-out_infinite]"></div>
          <div className="w-screen h-2 absolute bottom-0 select-none z-[9999] mb-7 bg-gradient-to-r from-pink-300 via-purple-500 to-red-400 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-left_2s_ease-in-out_infinite]"></div>
          <div className="w-screen h-2 absolute bottom-0 select-none z-[9999] mb-12 bg-gradient-to-r from-blue-400 via-teal-500 to-green-400 [mask-image:url('/Images/shattered-dark.png')] rounded-xl animate-[scroll-left_5s_ease-in-out_infinite]"></div>
        </>
      )}

      {hovered == "ZAG" && (
        <div
          className={`absolute lg:bottom-[10%] bottom-36 lg:top-auto pointer-events-none w-full md:w-auto text-center md:top-16 md:right-0 lg:right-[15%] z-[9999] duration-300 overflow-hidden transition-opacity ${
            hovered ? "opacity-100" : "opacity-0"
          } select-none drop-shadow-lg`}
        >
          <TypedText
            className="font-mono lg:text-9xl text-7xl text-[#b48d04] animate-pulse overflow-hidden font-extrabold"
            strings={["ZAGVANDR"]}
            typeSpeed={60}
          />
        </div>
      )}

      {hovered == "HAT" && (
        <div
          className={`absolute lg:top-[20%] w-full md:w-auto md:left-0 pointer-events-none top-44 md:top-16 lg:left-auto lg:right-[15%] z-[9999] text-center duration-300 overflow-hidden transition-opacity ${
            hovered ? "opacity-100" : "opacity-0"
          } select-none drop-shadow-lg`}
        >
          <TypedText
            className="font-mono lg:text-9xl text-[#b48d04] text-7xl animate-pulse font-extrabold"
            strings={["HATOHUI"]}
            typeSpeed={60}
          />
        </div>
      )}

      <div
        className={`${
          hovered ? "z-20" : "opacity-0 -z-40"
        } fixed w-screen h-screen transition-opacity [mask-image:url('/Images/axiom-pattern.png')] pointer-events-none animate-pulse brightness-200 duration-200 ${
          hovered
            ? hovered === "ZAG"
              ? "bg-[#bb5a1a]"
              : "bg-green-600"
            : "opacity-0"
        }`}
      ></div>

      {/* Images */}
      <div className="flex h-screen w-screen absolute pointer-events-none overflow-hidden ">
        <img
          src="/Images/zagvandr.png"
          className={`transition-all duration-300 brightness-0 scale-75 hidden md:block ${
            hovered === "ZAG"
              ? "brightness-100 translate-x-20 translate-y-0 scale-[1.03] z-[100]"
              : "md:translate-y-20 md:-translate-10 z-[99]"
          } ${hovered === "HAT" ? "opacity-5" : ""}`}
        ></img>
      </div>

      <div className="flex h-screen w-screen absolute pointer-events-none overflow-hidden">
        <img
          src="/Images/Hatohui.webp"
          className={`transition-all duration-300 brightness-0 object-cover scale-75 hidden md:block ${
            hovered === "HAT"
              ? "brightness-100 translate-x-20 translate-y-0 scale-[1.05] z-[100]"
              : "md:translate-y-20 md:translate-x-20 z-[99]"
          } ${hovered === "ZAG" ? "opacity-5" : ""}`}
        ></img>
      </div>

      <div
        className={`${
          hovered ? "opacity-8" : "opacity-0"
        } fixed w-screen h-screen z-20 bg-gradient-to-t from-black via-transparent to-black pointer-events-none duration-200 transition-opacity`}
      ></div>

      <div
        className={`${
          hovered ? "" : "hidden"
        } fixed w-screen h-screen z-10 bg-black opacity-90 pointer-events-none`}
      ></div>

      {/* Cards */}
      <div className="flex flex-col h-dvh justify-center overflow-hidden gap-5 select-none">
        <CharacterCard
          setHovered={setHovered}
          className="hover:translate-y-14 hover:duration-700 focus:translate-y-14 focus:duration-700 duration-200"
          imageStyle="group-hover:object-[center_35%] group-focus:object-[center_35%] object-[center_30%]"
          hoverValue="ZAG"
          to="/zagvandr"
          imgSrc={imagesSrc.zagvandr}
          alt="fox husband"
          label="ZAGVANDR"
        />
        <CharacterCard
          setHovered={setHovered}
          className="hover:-translate-y-14 hover:duration-700 focus:-translate-y-14 focus:duration-700 duration-200"
          imageStyle="group-hover:object-[center_20%] group-focus:object-[center_20%] object-[center_10%]"
          hoverValue="HAT"
          to="/hatohui"
          imgSrc={imagesSrc.hatohui}
          alt="noodle"
          label="HATOHUI"
        />
      </div>

      <div className="fixed top-0 left-0 w-screen h-screen bg-[url('/Images/axiom-pattern.png')] -z-50" />
    </div>
  );
}

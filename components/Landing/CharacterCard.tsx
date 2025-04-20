"use client";
import { useRouter } from "next/navigation";
import React, { SetStateAction } from "react";

export type HoverCards = "ZAG" | "HAT" | undefined;

export type CharacterCardProps = {
  setHovered: React.Dispatch<SetStateAction<HoverCards>>;
  to: string;
  imgSrc: string;
  alt: string;
  label: string;
  hoverValue: HoverCards;
  className?: string;
  imageStyle?: string;
};

const CharacterCard = ({
  setHovered,
  to,
  imgSrc,
  alt,
  label,
  hoverValue,
  imageStyle,
  className,
}: CharacterCardProps) => {
  const router = useRouter();

  return (
    <button
      className={`${
        className ?? ""
      } h-1/3 cursor-pointer transition-transform flex flex-col focus:z-50 hover:z-50 focus:scale-110 hover:scale-110 relative skew-y-6 overflow-visible origin-center group cursor-[url('/Images/paw.png'),_pointer]`}
      onMouseEnter={() => setHovered(hoverValue)}
      onMouseLeave={() => setHovered(undefined)}
      onClick={() => router.push(to)}
      onFocus={() => setHovered(hoverValue)}
      onBlur={() => setHovered(undefined)}
      onTouchStart={() => setHovered(hoverValue)}
      onTouchEnd={() => setHovered(undefined)}
    >
      <div className="absolute bg-[url('/Images/Select.png')] bg-no-repeat h-full z-50"></div>
      <div className="absolute flex justify-end inset-0 z-[60] opacity-35">
        <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-black skew-y-[-6] origin-top" />
      </div>
      <div className="absolute -top-[1.2rem] left-0 w-full h-5 max-h-5 bg-[url('/Images/caution-tape.jpg')] animate-pulse bg-repeat-x z-20 opacity-90 brightness-[.2] group-focus:brightness-[2] group-hover:brightness-[2] transition-[filter] duration-200 ease-in-out" />
      <div className="absolute -bottom-[1.2rem] left-0 w-full h-5 max-h-5 bg-[url('/Images/caution-tape.jpg')] animate-pulse bg-repeat-x z-20 opacity-90 brightness-[.2] group-focus:brightness-[.9] group-hover:brightness-[.9] transition-[filter] duration-200 ease-in-out" />
      <div className="absolute group-hover:opacity-0 group-focus:opacity-0 opacity-60 transition-opacity bg-black w-full h-full duration-300 ease-out"></div>
      <img
        className={`${
          imageStyle ??
          "group-hover:object-[center_35%] group-focus:object-[center_35%] object-[center_30%]"
        } w-full h-full object-cover transition-[object-position,transform] lg:group-hover:translate-x-20 lg:group-focus:translate-x-20 ease-linear group-hover:duration-[7000ms] group-focus:duration-[7000ms]`}
        src={imgSrc}
        alt={alt}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-orange-400 to-transparent h-full w-full scale-150 opacity-0 group-hover:opacity-35 group-hover:blur-sm group-focus:opacity-35 group-focus:blur-sm transition-all duration-300 pointer-events-none -z-40" />
    </button>
  );
};

export default CharacterCard;

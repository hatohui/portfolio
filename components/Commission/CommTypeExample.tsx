"use client";

import React, { useEffect, useState } from "react";
import TypedText from "../Utils/TypedText";
import { CommissionData, CommissionType } from "@/types/commission";
import useImages from "@/hooks/useImages";
import { ImageQueryType } from "@/types/trello";
import { useImageViewer } from "@/Context/ImageViewContext";

const CommTypeExample = ({
  className,
  formData,
}: {
  className?: string;
  formData: CommissionData;
}) => {
  const [photos, isLoading, setQuery] = useImages();
  const [activeIndex, setActiveIndex] = useState(1);
  const { setCurrentPhoto } = useImageViewer();

  useEffect(() => {
    if (formData.type === CommissionType.none) return;
    if (formData.background) {
      setQuery(ImageQueryType.background);
      return;
    }
    switch (formData.type) {
      case CommissionType.icon:
        setQuery(ImageQueryType.icon);
        break;
      case CommissionType.full:
        setQuery(ImageQueryType.full);
        break;
      case CommissionType.sketchpage:
        setQuery(ImageQueryType.sketchpage);
        break;
      default:
        setQuery(ImageQueryType.none);
    }
  }, [formData.type]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  if (!formData.type) {
    return (
      <div
        className={`border-2 truncate px-4 pt-4 transition-all duration-150 hover:bg-black/50 w-full backdrop-blur-md bg-black/40 block h-full ${className}`}
      >
        <TypedText className="font-extrabold" strings={["EXAMPLES"]} />
        <div className="w-full h-full flex justify-center items-center animate-fadeIn">
          <p className="relative bottom-7 text-white text-center text-lg font-medium bg-black/50 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            Please select a commission type to start viewing...
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div
        className={`border-2 truncate p-4 transition-all duration-150 hover:bg-black/50 w-full backdrop-blur-md bg-black/40 block h-full ${className}`}
      >
        <TypedText className="font-extrabold" strings={["EXAMPLES"]} />
        <div className="w-full h-full flex justify-center items-center animate-fadeIn">
          <div className="w-12 h-12 border-4 border-white/50 border-t-white rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`border-2 truncate p-4 transition-all duration-150 hover:bg-black/50 w-full backdrop-blur-md bg-black/40 block h-full ${className}`}
    >
      <TypedText className="font-extrabold" strings={["EXAMPLES"]} />
      <div id="controls-carousel" className="relative w-full h-full py-7 px-4">
        <div className="relative w-full h-full overflow-hidden rounded-lg thin-scrollbar flex justify-center items-center">
          {photos.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex justify-center items-center transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              <img
                src={src.preview}
                className="w-full h-full object-contain cursor-pointer max-w-full"
                alt={`Slide ${index + 1}`}
                onClick={() => setCurrentPhoto(src.url)}
              />
            </div>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/25 hover:bg-white/40 transition-colors duration-150">
            <svg
              className="w-4 h-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/25 hover:bg-white/40 transition-colors duration-150">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default CommTypeExample;

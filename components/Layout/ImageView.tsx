import React, { useState } from "react";
import { useImageViewer } from "@/Context/ImageViewContext";

const ImageView = () => {
  const { currentPhoto, setCurrentPhoto } = useImageViewer();
  const [isZoomed, setIsZoomed] = useState(false);

  if (!currentPhoto) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/70 z-50 thin-scrollbar"
      onClick={() => setCurrentPhoto(null)}
    >
      {/* Close Button */}
      <button
        onClick={() => setCurrentPhoto(null)}
        className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition"
      >
        ✕
      </button>

      <img
        src={currentPhoto}
        alt="image"
        onClick={(e) => {
          e.stopPropagation();
          setIsZoomed(!isZoomed);
        }}
        className={`cursor-pointer transition-transform duration-300 ${
          isZoomed
            ? "absolute top-0 scale-100"
            : "max-w-full max-h-full object-contain"
        }`}
      />
    </div>
  );
};

export default ImageView;

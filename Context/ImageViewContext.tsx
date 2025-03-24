"use client";
import ImageView from "@/components/Layout/ImageView";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ImageViewerContextType {
  currentPhoto: string | null;
  setCurrentPhoto: (url: string | null) => void;
}

const ImageViewerContext = createContext<ImageViewerContextType | undefined>(
  undefined
);

export const ImageViewerProvider = ({ children }: { children: ReactNode }) => {
  const [currentPhoto, setCurrentPhoto] = useState<string | null>(null);

  return (
    <ImageViewerContext.Provider value={{ currentPhoto, setCurrentPhoto }}>
      {children}
      <ImageView />
    </ImageViewerContext.Provider>
  );
};

export const useImageViewer = () => {
  const context = useContext(ImageViewerContext);
  if (!context) {
    throw new Error("useImageViewer must be used within ImageViewerProvider");
  }
  return context;
};

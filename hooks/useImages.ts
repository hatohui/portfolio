"use client";
import { ImageQueryType, ImageURLPayload } from "@/types/trello";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useImages = (): [
  ImageURLPayload,
  boolean,
  Dispatch<SetStateAction<ImageQueryType>>
] => {
  const [query, setQuery] = useState<ImageQueryType>(ImageQueryType.none);
  const [photos, setPhotos] = useState<ImageURLPayload>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImage = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/example/${query}`);
      if (!response.ok) throw new Error("Failed to fetch queue data");
      const data = await response.json();
      setPhotos(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query !== ImageQueryType.none) fetchImage();
  }, [query]);

  return [photos, isLoading, setQuery];
};

export default useImages;

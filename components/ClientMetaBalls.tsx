"use client";

import { useEffect, useRef } from "react";
import { useMetaballsStore } from "@/store/useMetaballsStore";
import dynamic from "next/dynamic";

// Dynamically import with SSR disabled and use forwardRef
const DynamicMetaballsCanvas = dynamic(() => import("./MetaballCanvas"), {
  ssr: false,
});

export default function ClientMetaballsCanvas() {
  const { isInitialized, setInitialized } = useMetaballsStore();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isInitialized) {
      setInitialized(true);
    }
  }, [isInitialized, setInitialized]);

  return <DynamicMetaballsCanvas ref={canvasRef} />; // ✅ Now ref is correctly assigned
}

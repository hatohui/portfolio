"use client";

import { useEffect, useState } from "react";
import { useMetaballsStore } from "@/store/useMetaballsStore";
import dynamic from "next/dynamic";

// Dynamically import with SSR disabled
const DynamicMetaballsCanvas = dynamic(() => import("./MetaballCanvas"), {
  ssr: false,
});

export default function ClientMetaballsCanvas() {
  const { isInitialized, setInitialized } = useMetaballsStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!isInitialized) {
      setInitialized(true);
    }
  }, [isInitialized, setInitialized]);

  return mounted ? <DynamicMetaballsCanvas /> : null; // ✅ Avoids unnecessary re-renders
}

"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import the MetaballsCanvas component with SSR disabled
const DynamicMetaballsCanvas = dynamic(() => import("./MetaballCanvas"), {
  ssr: false,
});

export default function ClientMetaballsCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent flicker on SSR hydration

  return <DynamicMetaballsCanvas />;
}

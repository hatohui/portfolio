"use client";

import dynamic from "next/dynamic";

// Dynamically import the canvas without SSR.
const DynamicMetaballCanvas = dynamic(() => import("./MetaballCanvas"), {
  ssr: false,
});

export default function ClientMetaballsCanvas() {
  return <DynamicMetaballCanvas />;
}

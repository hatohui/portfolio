"use client"; // Mark as a Client Component

import dynamic from "next/dynamic";

// Dynamically import the MetaballsCanvas component with SSR disabled
const DynamicMetaballsCanvas = dynamic(() => import("./MetaballCanvas"), {
  ssr: false,
});

export default function ClientMetaballsCanvas() {
  return <DynamicMetaballsCanvas />;
}

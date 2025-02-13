"use client";

import { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import ClientMetaballsCanvas from "@/components/ClientMetaBalls";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* ✅ Metaballs will persist across page changes */}
      <ClientMetaballsCanvas />
      <NavBar />
      <main>{children}</main>
    </div>
  );
}

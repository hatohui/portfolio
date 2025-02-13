import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import NavBar from "@/components/NavBar";
import ClientMetaballsCanvas from "@/components/ClientMetaBalls";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoodleDen",
  description:
    "Hatohui's personal portfolio - Furry artist and software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} flex flex-col antialiased overflow-auto select-none`}
      >
        <ClientMetaballsCanvas />
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

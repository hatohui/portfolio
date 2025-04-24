import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";

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
        className={`${raleway.variable} flex flex-col antialiased overflow-auto text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}

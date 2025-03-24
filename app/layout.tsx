import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import NavBar from "@/components/Layout/NavBar";
import MetaballCanvas from "@/components/Layout/MetaballCanvas";
import { ImageViewerProvider } from "@/Context/ImageViewContext";

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
        {/* <div
          className={
            "fixed -z-40 bg-gradient-to-t from-[rgb(166,78,70)] to-[rgb(42,38,64)] w-screen h-screen"
          }
        ></div> */}
        {/* <MetaballCanvas /> */}
        {/* <NavBar /> */}
        <ImageViewerProvider>
          <main>{children}</main>
        </ImageViewerProvider>
      </body>
    </html>
  );
}

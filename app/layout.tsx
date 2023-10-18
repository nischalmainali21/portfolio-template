import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nischal | Personal Portfolio",
  description: "full stack developer", //need to fill this out
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-100 text-gray-950 !scroll-smooth`}
      >
        {/* background needs to change with each section */}
        <Header />
        {children}
      </body>
    </html>
  );
}

"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { usePathname } from "next/navigation";
import  Footer  from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define background images per page
const backgroundImages: Record<string, string> = {
  "/": "url('https://img.freepik.com/free-photo/truck-vehicle-with-trailers-background_342744-1297.jpg')", // Home page background
  "/about": "url('https://img.freepik.com/free-photo/truck-vehicle-with-trailers-background_342744-1297.jpg')", // About page background
  "/fleet": "url('https://img.freepik.com/free-photo/truck-vehicle-with-trailers-background_342744-1297.jpg')"
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const backgroundImage = backgroundImages[pathname] || "";

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navbar stays interactive */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Background section only if a background image exists */}
        {backgroundImage ? (
          <div
            className={`relative w-full bg-cover bg-center ${pathname === "/" ? "min-h-[70vh]" : "min-h-[50vh]"}`}
            style={{
              backgroundImage,
              backgroundSize: "cover", // Ensures the image covers the container
              backgroundPosition: "center center", // Focuses on the center of the image
              backgroundAttachment: "fixed", // Keeps background fixed during scrolling
            }}
          >
            {/* Dark overlay ONLY if there's a background image */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
            {/* Content stays visible on top */}
            <div className="relative z-10 pt-20">{children}</div>
          </div>
        ) : (
          // Normal content for pages without a background image
          <div className="relative pt-20">{children}</div>
        )}
        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}

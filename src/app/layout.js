"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/common/Navbar";
import { ThemeProvider } from "@material-tailwind/react";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

// export const metadata = {
//   title: "Our Subtitle",
//   description: "Bangla movie subtitle",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <ThemeProvider>
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

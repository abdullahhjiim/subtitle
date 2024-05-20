import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import WrapCom from "@/components/wrapper/WrapCom";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Our Subtitle",
  description: "Bangla movie subtitle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <WrapCom>
          <Navbar />
            {children}
          <Footer />
        </WrapCom>
      </body>
    </html>
  );
}

import { Roboto } from "next/font/google";
import { Roboto_Serif } from "next/font/google";
import { Roboto_Slab } from "next/font/google";

import Navbar from "./components/Navbar";
import "./styles/globals.css";
import Footer from "./components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${roboto.variable}
          ${robotoSerif.variable}
          ${robotoSlab.variable}
          antialiased
        `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar"; // Import the Navbar component
import "./styles/globals.css";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Singapore Economics League | SEL",
  description:
    "By Students, For Students. Say Goodbye to Dull Economics Essays, as Singapore Economics League Is Bringing Excitement Back to the Heart of the Subject. Race Against Time and Challenge Your Wits in This Online, Team-Based Contest!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        {children}
        <Footer />
      </body>
    </html>
  );
}

import React from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-12 lg:py-24">
        {/* Left Section: Text */}
        <div className="lg:w-1/2 text-left ml-20">
          <h1 className="text-3xl lg:text-4xl font-bold text-green-600 mb-4">
            What is SG Economics League?
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            The <span className="font-bold text-black">SG Economics League (SEL)</span> is a team-based competition that challenges your problem-solving skills in economics.
          </p>
          <ul className="text-gray-700 list-disc pl-6 space-y-2">
            <li>3 hours long, online contest</li>
            <li>3-5 members per team</li>
            <li>Open to all pre-U students in Singapore</li>
          </ul>
        </div>

        {/* Right Section: Image and Button */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-end mt-8 lg:mt-0">
          <img
            src="/emoticons/coin_holding_sunglasses.png"
            alt="Talking Coin with Sunglasses"
            className="w-112 max-w h-auto mb-4"
          />
        </div>
      </section>
    </main>
  );
}
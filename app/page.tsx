import { useEffect } from "react";
import useCountdown from "./hooks/useCountdown";

export default function Home() {
  const deadline = new Date(Date.parse(new Date().toString()) + 15 * 24 * 60 * 60 * 1000);

  useCountdown(deadline, "clockdiv");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-600 text-white">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">SG Econs League</h1>
        <p className="text-lg">
          Empowering Singapore's next generation of economic leaders
        </p>
      </header>
      <section className="mt-10 flex flex-col items-center gap-4">
        <div id="clockdiv" className="flex gap-2 text-lg font-semibold">
          <div><span className="days"></span> Days</div>
          <div><span className="hours"></span> Hours</div>
          <div><span className="minutes"></span> Minutes</div>
          <div><span className="seconds"></span> Seconds</div>
        </div>
        <button className="px-6 py-3 bg-white text-green-600 rounded-lg shadow-md hover:bg-gray-200 transition">
          Join the League
        </button>
        <a
          href="#about-us"
          className="text-white underline hover:text-gray-200 transition"
        >
          About Us
        </a>
      </section>
    </main>
  );
}

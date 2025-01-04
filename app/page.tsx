"use client";

import { useEffect } from "react";
import useCountdown from "./hooks/useCountdown";

export default function Home() {
  const deadline = new Date(Date.parse(new Date().toString()) + 196 * 24 * 60 * 60 * 1000);

  useCountdown(deadline, "clockdiv");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4"></h1>
      </header>
      <section className="mt-10 flex flex-col items-center gap-4">
        <img src="/emoticons/talking_coin.svg" alt="Coin giving information"/>
        <div id="clockdiv" className="flex gap-2 text-lg font-semibold">
          <div><span className="days"></span> Days</div>
          <div><span className="hours"></span> Hours</div>
          <div><span className="minutes"></span> Minutes</div>
          <div><span className="seconds"></span> Seconds</div>
        </div>
      </section>
    </main>
  );
}

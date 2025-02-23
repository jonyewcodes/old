"use client";

import React from "react";

interface WaveTextProps {
  text: string;
}

export default function WaveText({ text }: WaveTextProps) {
  return (
    <span>
      {[...text].map((char, i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * 0.2}s` }}
          className="wave-letter inline-block mr-1"
        >
          {char}
        </span>
      ))}
    </span>
  );
}

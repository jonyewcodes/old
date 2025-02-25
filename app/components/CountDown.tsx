"use client";

import { useState, useEffect } from "react";

interface CountDownProps {
  label: string;  // e.g. "Days"
  value: string;  // e.g. "03"
}

export default function CountDown({ label, value }: CountDownProps) {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    if (value !== currentValue) {
      setCurrentValue(value);
    }
  }, [value, currentValue]);

  return (
    <div className="flex flex-col items-center">
      {/* The static card */}
      <div className="
          relative
          w-32 h-36
          flex items-center justify-center
          bg-[#3D9796]/40
          rounded-md
          text-5xl font-semibold
          text-[#43291F]
        "
      >
        {/* Middle horizontal line (for a flip-like look) */}
        <div className="
          absolute
          top-1/2 left-0
          w-full h-px
          bg-[#f5fbff]
          -translate-y-1/2
          pointer-events-none
        " />

        {currentValue}
      </div>

      {/* Label beneath the card */}
      <span className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#43291F]">
        {label}
      </span>
    </div>
  );
}
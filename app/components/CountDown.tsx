"use client";
import { useState, useEffect } from "react";

interface CountDownProps {
  label: string;
  value: string;
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
      <div
        className="
          relative
          w-20 h-28 sm:w-36 sm:h-48
          flex items-center justify-center
          bg-[#272a30]
          rounded-md
          text-3xl sm:text-6xl font-semibold
          text-white
        "
      >
        <div
          className="
          absolute
          top-1/2 left-0
          w-full h-px
          bg-background
          -translate-y-1/2
          pointer-events-none
        "
        />
        {currentValue}
      </div>
      <span className="mt-2 text-xs sm:text-base font-medium uppercase tracking-widest text-baseText">
        {label}
      </span>
    </div>
  );
}
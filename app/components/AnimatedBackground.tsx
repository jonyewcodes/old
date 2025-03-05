"use client";
import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full scrolling-bg" />
      <style jsx>{`
        .scrolling-bg {
          background-image: url("/animation.png");
          background-repeat: repeat-x;
          background-size: auto 100%;
          width: 200%;
          height: 100%;
          animation: scroll-bg 80s linear infinite;
          animation-timing-function: linear;
        }
        @keyframes scroll-bg {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

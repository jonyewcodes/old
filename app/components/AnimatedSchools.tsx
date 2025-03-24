"use client";
import React from "react";

export default function AnimatedInstitutionBackground() {
    // Update this array with your actual image filenames
    const institutionImages = [
      "/institutions/image1.png",
      "/institutions/image2.png",
      "/institutions/image3.png",
      // Add all your institution images here
    ];
  
    return (
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-full flex animate-scroll">
          {/* Original set */}
          {institutionImages.map((img, index) => (
            <img
              key={index}
              src={img}
              className="h-full object-cover min-w-[200px]" // Adjust min-width as needed
            />
          ))}
          {/* Duplicate set for seamless looping */}
          {institutionImages.map((img, index) => (
            <img
              key={`dup-${index}`}
              src={img}
              className="h-full object-cover min-w-[200px]" // Match same sizing
            />
          ))}
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
  
          .animate-scroll {
            animation: scroll 80s linear infinite;
          }
        `}</style>
      </div>
    );
  }
"use client";
import React, { useState } from "react";

interface FaqProps {
  question: string;
  answer: string;
}

export default function FaqBox({ question, answer }: FaqProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full border-b border-gray-300">
      <button
        type="button"
        onClick={toggleDropdown}
        className="
          w-full
          flex
          items-center
          justify-between
          py-4
          text-left
          text-black
          text-lg
          font-normal
          transition-colors
          duration-200
          focus:outline-none
        "
      >
        {question}
        <span
          className={`
            text-primary
            transform
            transition-transform
            duration-300
            ease-in-out
            ${isOpen ? "rotate-180" : "rotate-0"}
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-blue-100 p-4 text-base leading-relaxed text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
}

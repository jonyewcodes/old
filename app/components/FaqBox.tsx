"use client";

import React, { useState } from "react";

interface FaqProps {
  question: string;
  answer: string;
}

export default function FaqBox({ question, answer }: FaqProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full max-w-[1000px] border-2 border-[#D5E6F5] rounded-tl-3xl rounded-br-3xl bg-white mb-4 overflow-hidden">
      {/* Question Button */}
      <button
        type="button"
        onClick={toggleDropdown}
        className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-normal bg-white hover:bg-[#f3f8fc] transition-all duration-300 ease-in-out focus:outline-none"
      >
        {question}
        <span
          className={`transform transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </button>

      {/* Answer - Smooth Expand/Collapse */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 text-left text-gray-700">{answer}</div>
      </div>
    </div>
  );
}

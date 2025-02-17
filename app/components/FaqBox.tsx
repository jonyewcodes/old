"use client";

import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";

interface FaqProps {
  question: string;
  answer: string;
}

export default function FaqBox({ question, answer }: FaqProps): JSX.Element {
  const [activeElement, setActiveElement] = useState<string | null>(null);

  const handleClick = (value: string) => {
    setActiveElement((prev) => (prev === value ? null : value));
  };

  return (
    <div id="accordion">
      <div className="rounded-lg border border-blue-500 bg-white mb-4">
        <h2 className="mb-0">
          <button
            type="button"
            onClick={() => handleClick(question)}
            aria-expanded={activeElement === question}
            aria-controls={`collapse-${question}`}
            className={`group relative flex w-full rounded-lg items-center px-5 py-4 text-left text-base transition focus:outline-none ${
              activeElement === question
                ? "bg-secondary dark:bg-neutral-800"
                : "bg-white dark:bg-neutral-800"
            }`}
          >
            <strong>{question}</strong>
            <span
              className={`ml-auto transition-transform duration-200 ${
                activeElement === question ? "rotate-180" : "rotate-0"
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
        </h2>
        <TECollapse
          show={activeElement === question}
          id={`collapse-${question}`}
          className="transition-all duration-300 ease-in-out overflow-hidden rounded-lg"
          style={{
            display: activeElement === question ? "block" : "none",
          }}
        >
          <div className="px-5 py-4 text-left">{answer}</div>
        </TECollapse>
      </div>
    </div>
  );
}

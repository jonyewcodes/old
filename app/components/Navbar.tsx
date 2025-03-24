"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        w-full
        bg-baseText
        text-sm
        text-white
        bg-[length:20px_20px]
        bg-[linear-gradient(to_bottom,#ddd_1px,transparent_1px),
            linear-gradient(to_right,#ddd_1px,transparent_1px)]
      "
    >
      <nav className="w-full md:max-w-screen-lg md:mx-auto py-6 flex items-center justify-between px-4 md:px-0">
        <Link href="/" aria-label="Go to Home" className="flex items-center">
          <Image src="/logos/navbar.png" alt="Logo" width={240} height={192} />
        </Link>
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <Link
            href="/rules"
            className="text-lg px-3 py-1 rounded-md transition-colors duration-200 hover:bg-white/20"
          >
            Rules
          </Link>
          <Link
            href="/faq"
            className="text-lg px-3 py-1 rounded-md transition-colors duration-200 hover:bg-white/20"
          >
            FAQ
          </Link>
          <Link
            href="/syllabus"
            className="text-lg px-3 py-1 rounded-md transition-colors duration-200 hover:bg-white/20"
          >
            Syllabus
          </Link>
          <a
            href="https://tally.so/r/3NRLlG"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              px-4
              py-2
              bg-white
              text-secondary
              text-lg
              font-semibold
              rounded-2xl
              shadow
              border-2
              border-b-4
              border-secondary
              transition-all
              duration-200
              hover:scale-105
            "
          >
            Register Now!
          </a>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
      </nav>
      <div
        className={`
          fixed top-0 left-0 w-full h-full
          bg-[#fefefb]
          transition-transform
          duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          z-50
        `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="p-4 text-[#273a30] text-xl"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col items-start px-6 space-y-6 mt-4 text-[#273a30] slab font-semibold">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-xl px-3 py-1 rounded-md transition-colors duration-200 hover:bg-[#ffffff]/40"
          >
            Home
          </Link>
          <Link
            href="/rules"
            onClick={() => setIsOpen(false)}
            className="text-xl px-3 py-1 rounded-md transition-colors duration-200 hover:bg-[#ffffff]/40"
          >
            Rules
          </Link>
          <Link
            href="/faq"
            onClick={() => setIsOpen(false)}
            className="text-xl px-3 py-1 rounded-md transition-colors duration-200 hover:bg-[#ffffff]/40"
          >
            FAQ
          </Link>
          <Link
            href="/syllabus"
            onClick={() => setIsOpen(false)}
            className="text-xl px-3 py-1 rounded-md transition-colors duration-200 hover:bg-[#ffffff]/40"
          >
            Syllabus
          </Link>
          <a
            href="https://tally.so/r/3NRLlG"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="
              group
              mt-4
              px-4
              py-2
              bg-white
              text-secondary
              font-semibold
              rounded-2xl
              shadow
              border-2
              border-b-4
              border-secondary
              transition-all
              duration-200
              hover:scale-105
            "
          >
            Register Now!
          </a>
        </div>
      </div>
    </header>
  );
}

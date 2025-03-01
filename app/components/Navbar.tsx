"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#272a30] text-lg text-white">
      <nav className="max-w-screen-lg mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-6 font-semibold">
          <Link href="/" aria-label="Go to Home">
            <Image src="/logos/navbar.png" alt="Logo" width={160} height={120} />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="hover:text-secondary">
              About
            </Link>
            <Link href="/rules" className="hover:text-secondary">
              Rules
            </Link>
            <Link href="/faq" className="hover:text-secondary">
              FAQ
            </Link>
            <Link href="/archives" className="hover:text-secondary">
              Archives
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <a
            href="https://tally.so/r/3NRLlG"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-white hover:bg-secondary
                       font-medium border-2 border-white rounded-lg"
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
          transform transition-transform duration-300
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
          <Link href="/" onClick={() => setIsOpen(false)} className="text-xl">
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl">
            About
          </Link>
          <Link href="/rules" onClick={() => setIsOpen(false)} className="text-xl">
            Rules
          </Link>
          <Link href="/archives" onClick={() => setIsOpen(false)} className="text-xl">
            Archives
          </Link>
          <Link href="/faq" onClick={() => setIsOpen(false)} className="text-xl">
            FAQ
          </Link>
          <a
            href="https://tally.so/r/3NRLlG"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-4 py-2 bg-primary text-white hover:bg-secondary
                       font-medium rounded-lg"
          >
            Register Now!
          </a>
        </div>
      </div>
    </header>
  );
}
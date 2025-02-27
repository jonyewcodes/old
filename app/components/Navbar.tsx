"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <header className="bg-[#272a30] text-sm text-white">
      <nav className="max-w-screen-lg mx-auto px-4 py-6 flex items-center justify-between">
        {/* LEFT SIDE: Logo + Links */}
        <div className="flex items-center space-x-6 font-semibold">
          {/* Your logo (replace src as needed) */}
          <Link href="/" aria-label="Go to Home">
            <Image
              src="/logos/navbar.png"
              alt="Logo"
              width={160}   // Adjust size as needed
              height={120}
            />
          </Link>
          <Link href="/about" className="hover:text-secondary">
            About
          </Link>
          <Link href="/rules" className="hover:text-secondary">
            Rules
          </Link>
          <Link href="/archives" className="hover:text-secondary">
            Archives
          </Link>
        </div>

        {/* RIGHT SIDE: Register button */}
        <div>
          <a
            href="https://tally.so/r/3NRLlG"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary font-medium border-2 border-white rounded-lg"
          >
            Register Now!
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

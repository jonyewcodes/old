"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full px-6 lg:px-20 bg-gradient-to-b from-[#dbe8f8] to-[#e8f1f9] pb-8">
      <nav className="flex items-center justify-between py-10 max-w-[1300px] mx-auto w-full">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="Go to Home">
            {/* Replace <img> with Next.js <Image> */}
            <Image
              src="/logos/navbar.png"
              alt="Logo"
              width={256}      // Adjust width & height as needed
              height={80}
              className="cursor-pointer"
              priority        // Optionally mark as priority for LCP
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-[#415067] font-medium text-sm">
          <Link
            href="/rules"
            className="transition hover:text-[#3D9796] hover:underline hover:decoration-[#3D9796]"
          >
            Rules
          </Link>
          <Link
            href="/sample-questions"
            className="transition hover:text-[#3D9796] hover:underline hover:decoration-[#3D9796]"
          >
            Sample Questions
          </Link>
          <Link
            href="/faq"
            className="transition hover:text-[#3D9796] hover:underline hover:decoration-[#3D9796]"
          >
            FAQ
          </Link>
          <Link
            href="/archives"
            className="transition hover:text-[#3D9796] hover:underline hover:decoration-[#3D9796]"
          >
            Archives
          </Link>
          {/* "Register Now!" opens the Tally form link directly */}
          <a
            href="https://tally.so/r/3NRLlG"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-2 bg-[#3D979F] text-white font-bold rounded-md shadow-md
              transition-transform duration-200 ease-in-out
              hover:scale-105 hover:bg-[#3A8B91]
            "
          >
            Register Now!
          </a>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-black"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ----- FULL-SCREEN MOBILE MENU ----- */}
      <div
        className={`
          md:hidden fixed inset-0 z-50 bg-[#eaf2fb] text-black
          px-8 py-8 flex flex-col
          transform transition-transform duration-300
          ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* Close button (top-right) */}
        <div className="flex justify-end">
          <button onClick={() => setMenuOpen(false)}>
            <X size={24} className="text-black" />
          </button>
        </div>

        {/* Menu Items (left-aligned) */}
        <div className="mt-8 flex flex-col space-y-6 text-xl font-medium">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-[#3D9796] hover:underline hover:decoration-[#3D9796]"
          >
            Home
          </Link>
          <Link
            href="/rules"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-[#3D9796] hover:underline hover:decoration-[#3D9796]"
          >
            Rules
          </Link>
          <Link
            href="/sample-questions"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-[#3D9796] hover:underline hover:decoration-[#3D9796]"
          >
            Sample Problems
          </Link>
          <Link
            href="/faq"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-[#3D9796] hover:underline hover:decoration-[#3D9796]"
          >
            FAQ
          </Link>
          <Link
            href="/archives"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-[#3D9796] hover:underline hover:decoration-[#3D9796]"
          >
            Archives
          </Link>

          {/* "Register Now!" link in the mobile menu */}
          <a
            href="https://tally.so/r/3NRLlG"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="
              mt-6 w-fit px-6 py-2 bg-[#3D979F] text-white font-bold rounded-lg shadow-lg
              transition-transform duration-200 ease-in-out
              hover:scale-105 hover:bg-[#3A8B91]
            "
          >
            Register Now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

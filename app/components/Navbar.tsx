import React from "react";
import Link from "next/link"; // Import Next.js Link

const Navbar: React.FC = () => {
  return (
    <div className="w-full px-8 lg:px-16"> {/* Increased padding for width */}
      <nav className="flex items-center justify-between py-4 max-w-[1600px] mx-auto w-full"> 
        {/* SEL Logo - Clickable */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-60 h-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-16 text-black font-medium">
          <Link href="/rules" className="hover:text-black transition">
            Rules
          </Link>
          <Link href="#sample-questions" className="hover:text-black transition">
            Sample Questions
          </Link>
          <Link href="/faq" className="hover:text-black transition">
            FAQ
          </Link>
          <button className="px-8 py-2 bg-secondary text-white text-sm font-bold rounded-lg shadow-md hover:bg-[#4CA9DF] transition">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

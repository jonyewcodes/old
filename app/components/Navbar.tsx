import React from "react";
import Link from "next/link"; // Import Next.js Link

const Navbar: React.FC = () => {
  return (
    <div className="w-full px-8 lg:px-20 bg-gradient-to-b from-[#0035C71A] to-[#DEE7FB] pb-12">
      <nav className="flex items-center justify-between py-12 max-w-[1500px] mx-auto w-full">
        {/* SEL Logo - Clickable */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-80 h-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-20 text-black font-medium text-lg">
          <Link href="/rules" className="hover:text-[#4CA9DF] transition">
            Rules
          </Link>
          <Link
            href="/sample-questions"
            className="hover:text-[#4CA9DF] transition"
          >
            Sample Questions
          </Link>
          <Link href="/faq" className="hover:text-[#4CA9DF] transition">
            FAQ
          </Link>
          <button className="px-8 py-2 bg-secondary text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#4CA9DF] transition">
            Pre-Register Now!
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

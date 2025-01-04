import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      {/* SEL Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-40 h-15 ml-20"
        />
      </div>

      {/* Navigation Links and Sign Up Button */}
      <div className="flex items-center gap-12 text-black font-medium">
        <a href="rules" className="hover:text-black transition">
          Rules
        </a>
        <a href="#sample-questions" className="hover:text-black transition">
          Sample Questions
        </a>
        <a href="faq" className="hover:text-black transition">
          FAQ
        </a>
        <button className="px-7 py-2 bg-[#FBB03B] text-sm text-black font-bold font-extrabold rounded-lg border-black transition mr-20">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

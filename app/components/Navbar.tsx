import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="px-8 lg:px-32"> {/* Match padding with EventDetails */}
      <nav className="flex items-center justify-between py-4 max-w-screen-xl mx-auto">
        {/* SEL Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-80 h-auto"
          />
        </div>

        {/* Navigation Links and Sign-Up Button */}
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
          <button className="px-5 py-2 bg-secondary text-sm text-white font-bold rounded-lg border-black transition">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // For smooth transition

  // Load Tally Embed Script on Component Mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openModal = () => {
    setModalOpen(true);
    setTimeout(() => setShowModal(true), 50); // Smooth transition delay
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setModalOpen(false), 300); // Fade out effect
  };

  return (
    <div className="w-full px-8 lg:px-20 bg-gradient-to-b from-[#eaf2fb] to-[#f3f8fc] pb-12">
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
          <Link href="/sample-questions" className="hover:text-[#4CA9DF] transition">
            Sample Questions
          </Link>
          <Link href="/faq" className="hover:text-[#4CA9DF] transition">
            FAQ
          </Link>
          {/* Pre-Register Button */}
          <button
            className="px-8 py-2 bg-secondary text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#4CA9DF] transition"
            onClick={openModal}
          >
            Pre-Register Now!
          </button>
        </div>
      </nav>

      {/* Tally Form Modal - Smooth Transition */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
            showModal ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`relative bg-white rounded-lg shadow-lg w-[90%] max-w-2xl transition-transform duration-300 ${
              showModal ? "scale-100" : "scale-95"
            }`}
          >
            {/* Close Button with Custom SVG */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition"
              onClick={closeModal}
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-x text-gray-600 hover:text-gray-900 transition"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>

            {/* Embedded Tally Form */}
            <iframe
              data-tally-src="https://tally.so/r/3NRLlG?transparentBackground=1"
              width="100%"
              height="700px"
              title="SG Econs League: Registration"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar;

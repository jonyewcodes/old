"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Open Modal
  const openModal = () => {
    setModalOpen(true);
    setTimeout(() => setShowModal(true), 50);
  };

  // Close Modal
  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setModalOpen(false), 300);
  };

  return (
    <div className="w-full px-6 lg:px-20 bg-gradient-to-b from-[#eaf2fb] to-[#f3f8fc] pb-8">
      <nav className="flex items-center justify-between py-10 max-w-[1300px] mx-auto w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-48 md:w-72 h-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-14 text-black font-medium text-base">
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
          <button
            onClick={openModal}
            className="
              px-6 py-2 bg-[#3D979F] text-white font-bold rounded-lg shadow-lg
              transition-transform duration-200 ease-in-out
              hover:scale-105 hover:bg-[#3A8B91]
            "
          >
            Register Now!
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-black"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6 text-black font-medium text-lg bg-white shadow-lg rounded-lg mx-4 py-6">
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
            Sample Questions
          </Link>
          <Link
            href="/faq"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-[#3D9796] hover:underline hover:decoration-[#3D9796]"
          >
            FAQ
          </Link>
          <button
            onClick={openModal}
            className="
              px-6 py-2 bg-[#3D979F] text-white font-bold rounded-lg shadow-lg
              transition-transform duration-200 ease-in-out
              hover:scale-105 hover:bg-[#3A8B91]
            "
          >
            Register Now!
          </button>
        </div>
      )}

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
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition"
              onClick={closeModal}
            >
              <X size={24} className="text-gray-600 hover:text-gray-900 transition" />
            </button>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdQNx8PQhG4mRq7pSO4JSqVapdOcO5QGS4MuIlBgsrmJWHJaQ/viewform?embedded=true"
              width="100%"
              height="800px"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <p className="font-semibold text-xl">CheapiesCorner</p>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden flex flex-col justify-between w-8 h-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-8 h-1 bg-black rounded transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-black rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-black rounded transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/fleet" className="hover:text-blue-600">
              Our Fleet
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600">
              Contact Us
            </Link>
          </li>
          <li>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Buy Now
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 p-4">
          <li>
            <Link href="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/fleet" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Our Fleet
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </li>
          <li>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Buy Now
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

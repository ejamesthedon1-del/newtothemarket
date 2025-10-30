"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Image
              src="/smartrealtortool.svg"
              alt="Listing Revive Logo"
              width={48}
              height={48}
              className="cursor-pointer"
            />
            <nav className="hidden md:flex space-x-6 text-sm font-medium">
              <a href="#about" className="hover:text-gray-600 transition">
                About
              </a>
              <a href="#plans" className="hover:text-gray-600 transition">
                Plans
              </a>
              <a href="#contact" className="hover:text-gray-600 transition">
                Contact
              </a>
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#"
              className="text-sm font-medium bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Sign in
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Open menu"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            >
              <div
                className="w-6 h-0.5 bg-black mb-1 transition-all duration-300"
                style={{
                  transform: open ? "rotate(45deg) translateY(8px)" : "none",
                }}
              />
              <div
                className="w-6 h-0.5 bg-black mb-1 transition-all duration-300"
                style={{ opacity: open ? 0 : 1 }}
              />
              <div
                className="w-6 h-0.5 bg-black transition-all duration-300"
                style={{
                  transform: open ? "rotate(-45deg) translateY(-8px)" : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden mt-2 pb-4">
            <nav className="flex flex-col space-y-1 text-sm">
              <a href="#about" className="px-2 py-2 rounded hover:bg-gray-100">
                About
              </a>
              <a href="#plans" className="px-2 py-2 rounded hover:bg-gray-100">
                Plans
              </a>
              <a href="#contact" className="px-2 py-2 rounded hover:bg-gray-100">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

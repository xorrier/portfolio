"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-zinc-800"
          : "bg-black/40 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="#home"
            className="text-xl font-bold text-white hover:scale-105 transition"
          >
            Amrit Sharma
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-gray-300 font-medium hover:text-white transition"
            >
              About
            </Link>
            <Link
              href="#github"
              className="text-gray-300 font-medium hover:text-white transition"
            >
              GitHub
            </Link>
            <Link
              href="#skills"
              className="text-gray-300 font-medium hover:text-white transition"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-gray-300 font-medium hover:text-white transition"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="text-gray-300 font-medium hover:text-white transition"
            >
              Experience
            </Link>
            <Link
              href="#education"
              className="text-gray-300 font-medium hover:text-white transition"
            >
              Education
            </Link>
            <Link
              href="#coding"
              className="text-gray-300 font-medium hover:text-white transition"
            >
              Coding
            </Link>
            <Link
              href="#contact"
              className="text-gray-300 font-medium hover:text-white transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

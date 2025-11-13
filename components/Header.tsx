"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaSun, FaMoon, FaHome } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleColorMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Logo source based on theme + hover (mapping swapped)
  const logoSrc = (() => {
    if (!mounted) return "/images/Rami1.png";
    const dark = theme === "dark";
    const base = dark ? "/images/Rami1.png" : "/images/RamiHover.png";
    const hover = dark ? "/images/RamiHover.png" : "/images/Rami1.png";
    return isHovered ? hover : base;
  })();

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <header className="w-full px-4 py-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-start bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent font-semibold">
              <p className="p-4 text-center">+1 603-293-3511</p>
              <p className="p-4 text-center">hannar1@wit.edu</p>
            </div>

            <Link href="/" className="flex justify-center">
              <div className="w-36 h-36 mt-6">
                <Image
                  src="/images/Rami1.png"
                  width={150}
                  height={150}
                  alt="Logo"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
            </Link>

            <div className="flex gap-3">
              <div className="p-3 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20">
                <div className="w-5 h-5" />
              </div>
              <div className="p-3 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20">
                <div className="w-5 h-5" />
              </div>
              <div className="p-3 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20">
                <div className="w-5 h-5" />
              </div>
              <div className="p-3 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20">
                <div className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full px-4 py-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
          {/* Contact Info */}
          <div className="flex flex-col items-start bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent font-semibold justify-self-center md:justify-self-start">
            <p className="p-4 text-center">+1 603-293-3511</p>
            <p className="p-4 text-center">hannar1@wit.edu</p>
          </div>

          {/* Logo */}
          <Link href="/" className="justify-self-center">
            <div
              className="w-36 h-36 mt-6 cursor-pointer transition-transform hover:scale-110 duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={logoSrc}
                width={150}
                height={150}
                alt="Logo"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </Link>

          {/* Social Icons */}
          <div className="flex gap-3 justify-self-center md:justify-self-end">
            <Link href="/">
              <button className="p-3 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 dark:from-cyan-400/10 dark:to-purple-600/10 hover:from-cyan-400/30 hover:to-purple-600/30 dark:hover:from-cyan-400/20 dark:hover:to-purple-600/20 backdrop-blur-sm border border-cyan-400/30 dark:border-purple-600/30 transition-all duration-300 hover:scale-110">
                <FaHome className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </button>
            </Link>
            <Link href="mailto:hannar1@wit.edu">
              <button className="p-3 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 dark:from-cyan-400/10 dark:to-purple-600/10 hover:from-cyan-400/30 hover:to-purple-600/30 dark:hover:from-cyan-400/20 dark:hover:to-purple-600/20 backdrop-blur-sm border border-cyan-400/30 dark:border-purple-600/30 transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button>
            </Link>
            <Link href="https://www.linkedin.com/in/ramiihanna/" target="_blank">
              <button className="p-3 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 dark:from-cyan-400/10 dark:to-purple-600/10 hover:from-cyan-400/30 hover:to-purple-600/30 dark:hover:from-cyan-400/20 dark:hover:to-purple-600/20 backdrop-blur-sm border border-cyan-400/30 dark:border-purple-600/30 transition-all duration-300 hover:scale-110">
                <FaLinkedin className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </button>
            </Link>
            <button
              onClick={toggleColorMode}
              className="p-3 rounded-full bg-white/60 dark:bg-slate-800/60 border border-gray-300 dark:border-slate-600 hover:scale-105 transition"
            >
              {mounted && theme === "dark" ? (
                <FaSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <FaMoon className="w-5 h-5 text-purple-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
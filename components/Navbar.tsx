"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Usluge", href: "#usluge" },
  { label: "Projekti", href: "#projekti" },
  { label: "O nama", href: "#zasto-mi" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const textColor = scrolled ? "text-[#111111]" : "text-white";
  const hoverColor = scrolled ? "hover:text-[#F5A300]" : "hover:text-[#F5A300]";

  return (
    <>
      <motion.nav
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
          boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.08)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative h-24 w-72 flex-shrink-0 hidden md:block">
            <Image
              src="/logo/logo.png"
              alt="Hodžić Gradnja"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative group ${textColor} ${hoverColor}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5A300] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#kontakt"
              className="ml-2 bg-[#F5A300] text-[#111111] text-sm font-bold px-5 py-2.5 rounded-sm hover:bg-yellow-400 transition-colors duration-200 tracking-wide"
            >
              Kontaktirajte nas
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden ${textColor} transition-colors`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white shadow-xl border-t border-gray-100 md:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-semibold text-[#111111] hover:text-[#F5A300] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                className="bg-[#F5A300] text-[#111111] text-sm font-bold px-5 py-3 text-center rounded-sm hover:bg-yellow-400 transition-colors mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Kontaktirajte nas
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

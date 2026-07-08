"use client";

import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/70 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <a
          href="#home"
          className="text-2xl md:text-3xl font-black tracking-tight"
        >
          <span className="text-blue-500">Sameer</span>.dev
        </a>

        {/* Desktop */}

        <div className="hidden md:flex items-center gap-10">

          {links.map((link) => {

            const id = link.href.replace("#", "");

            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 text-sm font-medium ${
                  activeSection === id
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-blue-400"
                }`}
              >
                {link.name}
              </a>
            );
          })}

        </div>

        {/* Mobile */}

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>

      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="bg-slate-950/95 backdrop-blur-xl px-6 py-4">

          {links.map((link) => {

            const id = link.href.replace("#", "");

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-4 border-b border-slate-800 transition ${
                  activeSection === id
                    ? "text-blue-400"
                    : "text-slate-300"
                }`}
              >
                {link.name}
              </a>
            );
          })}

        </div>

      </div>

    </nav>
  );
}
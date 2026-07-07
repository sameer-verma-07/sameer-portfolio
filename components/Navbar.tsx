"use client";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Work",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/70 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-black tracking-tight"
        >
          <span className="text-blue-500">Sameer</span>.dev
        </a>

        {/* Navigation */}

        <div className="hidden items-center gap-10 md:flex">

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-all duration-300 hover:text-blue-400"
            >
              {link.name}
            </a>

          ))}

        </div>

      </div>

    </nav>
  );
}
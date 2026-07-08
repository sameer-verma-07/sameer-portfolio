"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-8xl md:text-9xl font-black text-blue-500">
          404
        </h1>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold">
          Oops!
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
          Looks like this page escaped into cyberspace.
          Let's get you back home.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="mt-10 inline-block"
        >
          <Link
            href="/"
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold shadow-lg shadow-blue-500/30 transition hover:bg-blue-700"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
"use client";

import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2">

          {/* Left */}

          <div>

            <h2 className="text-4xl font-black">
              <span className="text-blue-500">Sameer</span>.dev
            </h2>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Building AI-powered products, learning every day,
              and turning ideas into intelligent software.
            </p>

          </div>

          {/* Right */}

          <div className="flex flex-col md:items-end">

            <h3 className="text-lg font-semibold">
              Connect
            </h3>

            <div className="mt-6 flex gap-5">

              <a
                href="mailto:sv200874@gmail.com"
                className="rounded-xl border border-slate-700 p-4 transition hover:border-blue-500 hover:bg-slate-900"
              >
                <HiEnvelope className="text-2xl" />
              </a>

              <a
                href="https://github.com/sameer-verma-07"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-700 p-4 transition hover:border-blue-500 hover:bg-slate-900"
              >
                <FaGithub className="text-2xl" />
              </a>

              <a
                href="https://linkedin.com/in/sameer-verma-819398399/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-700 p-4 transition hover:border-blue-500 hover:bg-slate-900"
              >
                <FaLinkedin className="text-2xl" />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-slate-800"></div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 text-center text-slate-400 md:flex-row">

          <p>
            © 2026 Sameer Verma. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2">
            Built with
            <FaHeart className="text-red-500" />
            using Next.js, TypeScript & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}
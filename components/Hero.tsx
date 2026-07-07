"use client";

import Image from "next/image";
import FloatingCards from "./FloatingCards";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
  id="home"
  className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black hero-grid text-white"
  >
    <div className="hero-glow"></div>
     <div className="relative z-10">

     </div>
      {/* Background Glow */}
      <div className="absolute -top-32 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
     <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-[170px] scale-125"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">

        <div className="grid lg:grid-cols-2 items-center gap-12">

          {/* LEFT */}
          <div>

            <p className="text-blue-400 text-lg font-medium">
              👋 Hello, I'm
            </p>

            <h1 className="text-6xl md:text-8xl font-black mt-4 leading-tight">
              Sameer
              <br />
              <span className="text-blue-500">
                Verma
              </span>
            </h1>

            <div className="mt-6 text-2xl md:text-4xl font-semibold text-blue-400 h-14">
              <TypeAnimation
                sequence={[
                  "AI Engineer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "GenAI Engineer",
                  2000,
                  "Python Backend Engineer",
                  2000,
                  "Open Source Builder",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="mt-8 text-lg leading-8 text-gray-400 max-w-xl">
              Passionate about building AI-powered products using Python,
              Next.js, React, and Generative AI. I enjoy transforming ideas
              into real-world applications with beautiful user experiences.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">

  <a
    href="#projects"
    className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition duration-300 hover:scale-105 hover:bg-blue-700 shadow-lg shadow-blue-500/30"
  >
    🚀 View Projects
  </a>

  <a
    href="/resume/resume.pdf"
    download
    className="rounded-xl border border-slate-600 px-8 py-4 font-semibold transition duration-300 hover:border-blue-500 hover:bg-slate-900"
  >
    📄 Download Resume
  </a>

            </div>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4">

              <a
                href="https://github.com/sameer-verma-07"
                target="_blank"
                className="p-4 rounded-full bg-slate-900 border border-slate-700 hover:bg-blue-600 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/in/sameer-verma-819398399/"
                target="_blank"
                className="p-4 rounded-full bg-slate-900 border border-slate-700 hover:bg-blue-600 transition"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

            {/* Tech Stack */}
            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Python",
                "React",
                "Next.js",
                "Tailwind",
                "GenAI",
                "FastAPI",
              ].map((tech) => (
                <div
                  key={tech}
                  className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm hover:border-blue-500 transition"
                >
                  {tech}
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >

              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[120px]"></div>

              <Image
                src="/images/hero.png"
                alt="AI Engineer"
                width={850}
                height={850}
                priority
                className="relative z-10 w-full max-w-[720px] h-auto"
              />
            <FloatingCards />
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import BrowserMockup from "./BrowserMockup";

export default function FlagshipProject() {
  return (
    <section className="relative bg-slate-950 py-32 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            🚀 FLAGSHIP PRODUCT
          </span>

          <h2 className="mt-8 text-5xl font-bold md:text-6xl">
            CV Architect AI
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            An AI-powered resume platform that helps students and professionals
            build ATS-friendly resumes, optimize content with Generative AI,
            generate professional templates, and improve job application success.
          </p>

        </motion.div>

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="space-y-5">

              {[
                "🤖 AI Resume Builder",
                "📄 ATS Resume Analysis",
                "✨ AI Resume Improver",
                "🎯 Job Matching",
                "📥 PDF Export",
                "⚡ Lightning Fast",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur-md transition hover:border-blue-500"
                >
                  {item}
                </div>
              ))}

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://6a494c54d7f805d0798c51de--effortless-marshmallow-403324.netlify.app/"
                target="_blank"
                className="rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:scale-105 hover:bg-blue-700"
              >
                🚀 Live Demo
              </a>

              <a
                href="https://github.com/sameer-verma-07/ai-resume-builder"
                target="_blank"
                className="rounded-xl border border-slate-700 px-7 py-4 font-semibold transition hover:border-blue-500"
              >
                💻 GitHub
              </a>

            </div>

            {/* Tech Stack */}

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Gemini AI",
                "Firebase",
                "Netlify",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
                >
                  {tech}
                </span>
              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <BrowserMockup />
          </motion.div>

        </div>

      </div>

    </section>
  );
}
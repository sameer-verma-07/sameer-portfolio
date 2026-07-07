"use client";

import { motion } from "framer-motion";

export default function BeyondTheCode() {
  return (
    <section
  id="about"
  className="relative bg-slate-950 py-28 text-white overflow-hidden"
  >

      {/* Background Glow */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-400 uppercase tracking-[0.35em] font-semibold">
            Beyond the Code
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold">
            The Person Behind the Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            I enjoy building AI-powered software that solves real-world problems,
            combining intelligent systems with clean, modern user experiences.
          </p>
        </motion.div>

     <div className="mt-20 grid gap-8 md:grid-cols-2">

  {[
    {
      title: "🎯 Mission",
      content:
        "Build AI-powered products that solve real-world problems with clean, scalable and user-friendly experiences.",
    },
    {
      title: "🚀 Current Focus",
      content:
        "• CV Architect AI\n• Agentic AI\n• Google ADK\n• LangGraph\n• AI Internship Preparation",
    },
    {
      title: "💙 Passion",
      content:
        "Artificial Intelligence\nBackend Engineering\nFull Stack Development\nAutomation\nBeautiful UI",
    },
    {
      title: "🌍 Vision",
      content:
        "Become a world-class AI Engineer building intelligent products used by millions of people.",
    },
  ].map((card, index) => (
    <motion.div
      key={card.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
    >
      <h3 className="text-2xl font-semibold">{card.title}</h3>

      <div className="mt-5 whitespace-pre-line text-slate-400 leading-8">
        {card.content}
      </div>
    </motion.div>
  ))}

    </div>
      </div>

    </section>
  );
}
"use client";

import { motion } from "framer-motion";

const journey = [
  {
    icon: "🚀",
    title: "Built CV Architect AI",
    desc: "Designed and deployed my first AI-powered resume builder using Next.js, Firebase and Gemini AI.",
  },
  {
    icon: "🤖",
    title: "Started Learning Generative AI",
    desc: "Exploring prompt engineering, AI workflows and modern GenAI development.",
  },
  {
    icon: "💙",
    title: "Microsoft Learning",
    desc: "Building strong software engineering and AI fundamentals.",
  },
  {
    icon: "☁️",
    title: "Google AI Learning",
    desc: "Learning Google's latest AI tools, models and developer technologies.",
  },
  {
    icon: "⭐",
    title: "What's Next",
    desc: "AI Interview Coach • Multi-Agent Systems • More AI products.",
  },
];

export default function Journey() {
  return (
    <section className="bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-blue-400 font-semibold">
            Journey So Far
          </p>

          <h2 className="mt-6 text-5xl font-bold">
            Every Great Engineer Starts Somewhere
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400 leading-8">
            Every project, every lesson and every milestone contributes
            to my journey as an AI Engineer.
          </p>
        </motion.div>

        <div className="relative mt-20">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-blue-500/30"></div>

          <div className="space-y-14">

            {journey.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex gap-8"
              >

                <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border border-blue-500 bg-slate-900 text-2xl shadow-lg shadow-blue-500/20">
                  {item.icon}
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md transition hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {item.desc}
                  </p>
                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
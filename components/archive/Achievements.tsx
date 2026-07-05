"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "CV Architect AI",
    subtitle: "Flagship AI Project",
    icon: "🚀",
  },
  {
    title: "Google AI Learning",
    subtitle: "Generative AI Journey",
    icon: "🤖",
  },
  {
    title: "Microsoft Learning",
    subtitle: "Developer Skills",
    icon: "💙",
  },
  {
    title: "More Coming Soon",
    subtitle: "Building Every Month",
    icon: "🏆",
  },
];

export default function Achievements() {
  return (
    <section className="bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-blue-400 font-semibold">
            Achievements
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            Learning Never Stops
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400 leading-8">
            Every project, certification and learning milestone
            contributes to my journey as an AI Engineer.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {achievements.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .1 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,.15)]"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {item.subtitle}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
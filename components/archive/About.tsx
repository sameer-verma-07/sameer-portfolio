"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Started Programming",
    desc: "Began learning programming and web development fundamentals.",
  },
  {
    year: "2025",
    title: "Built Full Stack Projects",
    desc: "Created modern web applications using React, Next.js and Python.",
  },
  {
    year: "2026",
    title: "Entered the AI World",
    desc: "Started building Generative AI applications and AI-powered tools.",
  },
  {
    year: "Today",
    title: "Building CV Architect AI",
    desc: "Developing production-ready AI applications and looking for Software & AI internships.",
  },
];

export default function About() {
  return (
    <section className="bg-slate-950 py-32 text-white">

      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <p className="text-blue-400 uppercase tracking-[0.3em]">
            About Me
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            My Journey Into AI
          </h2>

          <p className="mt-6 max-w-2xl text-slate-400 leading-8">
            I enjoy building modern software that combines
            artificial intelligence with beautiful user experiences.
            My goal is to create products that solve meaningful problems.
          </p>

        </motion.div>

        <div className="mt-20 space-y-10">

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * .2 }}
              viewport={{ once: true }}
              className="flex gap-8"
            >

              <div className="text-blue-400 font-bold text-xl min-w-[90px]">
                {item.year}
              </div>

              <div className="border-l border-blue-500 pl-8">

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-400">
                  {item.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
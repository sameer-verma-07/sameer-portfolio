"use client";

import { motion } from "framer-motion";

import {
  SiPython,
  SiNextdotjs,
  SiReact,
  SiFastapi,
  SiFirebase,
  SiDocker,
  SiGit,
  SiGooglegemini,
} from "react-icons/si";

const technologies = [
  {
    icon: <SiPython />,
    name: "Python",
    desc: "Backend & AI Development",
    color: "group-hover:text-yellow-400",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    desc: "Modern React Framework",
    color: "group-hover:text-white",
  },
  {
    icon: <SiReact />,
    name: "React",
    desc: "Interactive UI",
    color: "group-hover:text-cyan-400",
  },
  {
    icon: <SiFastapi />,
    name: "FastAPI",
    desc: "High Performance APIs",
    color: "group-hover:text-green-400",
  },
  {
    icon: <SiGooglegemini />,
    name: "Gemini AI",
    desc: "Generative AI",
    color: "group-hover:text-blue-400",
  },
  {
    icon: <SiFirebase />,
    name: "Firebase",
    desc: "Authentication & Database",
    color: "group-hover:text-orange-400",
  },
  {
    icon: <SiDocker />,
    name: "Docker",
    desc: "Containerization",
    color: "group-hover:text-sky-400",
  },
  {
    icon: <SiGit />,
    name: "Git",
    desc: "Version Control",
    color: "group-hover:text-red-500",
  },
];

export default function TechArsenal() {
  return (
    <section className="relative bg-slate-950 py-28 overflow-hidden text-white">

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-blue-400 font-semibold">
            Tech Arsenal
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold">
            Technologies I Build With
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Modern technologies I use to build AI products,
            scalable backend systems, and beautiful web applications.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {technologies.map((tech, index) => (

            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .08 }}
              viewport={{ once: true }}
              className="
                         group
                         rounded-3xl
                         border
                        border-slate-800

                         bg-slate-900/60
                        backdrop-blur-xl 
                        p-8

                        transition-all
                        duration-300
          
                        shadow-[0_0_20px_rgba(59,130,246,.15)]

                        md:shadow-none
                        md:hover:-translate-y-3
                        md:hover:border-blue-500
                        md:hover:shadow-[0_0_40px_rgba(59,130,246,.25)]
                                                                        "
            >

              <div
  className={`
    text-6xl
    text-slate-300

    scale-105
    md:scale-100

    transition-all
    duration-300

    md:group-hover:scale-110

    ${tech.color}
  `}
>
                {tech.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {tech.name}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {tech.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { HiEnvelope, HiArrowDownTray } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    icon: <HiEnvelope className="text-3xl" />,
    title: "Email",
    subtitle: "Let's start a conversation",
    value: "sv200874@gmail.com",
    href: "mailto:sv200874@gmail.com",
    external: false,
  },
  {
    icon: <FaGithub className="text-3xl" />,
    title: "GitHub",
    subtitle: "Explore my projects",
    value: "sameer-verma-07",
    href: "https://github.com/sameer-verma-07",
    external: true,
  },
  {
    icon: <FaLinkedin className="text-3xl" />,
    title: "LinkedIn",
    subtitle: "Let's connect professionally",
    value: "Sameer Verma",
    href: "https://linkedin.com/in/sameer-verma-819398399/",
    external: true,
  },
  {
    icon: <HiArrowDownTray className="text-3xl" />,
    title: "Resume",
    subtitle: "Download PDF",
    value: "resume.pdf",
    href: "/resume/resume.pdf",
    external: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#060B1F] py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
            GET IN TOUCH
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
            Ready to Build
            <br />
            <span className="text-blue-500">
              the Future with AI?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            I'm always excited to collaborate on AI products,
            software engineering projects, open-source contributions,
            and internship opportunities.
          </p>
        </motion.div>

        {/* Contact Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {contacts.map((item, index) => (

            <motion.a
              key={item.title}
              href={item.href}
              {...(item.external
                ? {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {})}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.18)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-400">
                {item.subtitle}
              </p>

              <p className="mt-6 break-all font-medium text-blue-400">
                {item.value}
              </p>

            </motion.a>

          ))}

        </div>

        {/* Status */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-green-500/20 bg-green-500/10 p-10 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-3 w-3 animate-pulse rounded-full bg-green-400"></span>

            <span className="font-semibold text-green-400">
              Actively Seeking AI & Software Engineering Internship Opportunities
            </span>
          </div>

          <p className="mx-auto max-w-2xl leading-8 text-slate-300">
            Currently building AI-powered applications, expanding my
            software engineering skills, contributing to real-world
            projects, and preparing for internship opportunities.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
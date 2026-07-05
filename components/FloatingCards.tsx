"use client";

import { motion } from "framer-motion";

const cards = [
  { name: "🐍 Python", x: -180, y: -120 },
  { name: "⚛ React", x: -220, y: 80 },
  { name: "▲ Next.js", x: -40, y: 220 },
  { name: "🤖 GenAI", x: 180, y: -90 },
  { name: "⚡ FastAPI", x: 220, y: 100 },
  { name: "🚀 AI Agents", x: 20, y: -220 },
];

export default function FloatingCards() {
  return (
    <>
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="absolute rounded-xl border border-blue-500/30 bg-white/10 backdrop-blur-md px-4 py-2 text-white shadow-lg"
          style={{
            left: `calc(50% + ${card.x}px)`,
            top: `calc(50% + ${card.y}px)`,
          }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {card.name}
        </motion.div>
      ))}
    </>
  );
}
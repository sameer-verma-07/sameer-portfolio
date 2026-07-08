"use client";

import { motion } from "framer-motion";

const desktopCards = [
  { name: "🐍 Python", x: -180, y: -120 },
  { name: "⚛ React", x: -220, y: 80 },
  { name: "▲ Next.js", x: -20, y: 220 },
  { name: "🤖 GenAI", x: 180, y: -90 },
  { name: "⚡ FastAPI", x: 220, y: 100 },
  { name: "🚀 AI Agents", x: 20, y: -220 },
];

const mobileCards = [
  { name: "🚀 AI Agents", x: 0, y: -140 },
  { name: "🐍 Python", x: -120, y: -30 },
  { name: "🤖 GenAI", x: 120, y: -30 },
];

export default function FloatingCards() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        {desktopCards.map((card, index) => (
          <motion.div
            key={card.name}
            className="absolute z-30 rounded-xl border border-blue-500/30 bg-white/10 backdrop-blur-md px-4 py-2 text-white shadow-xl"
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
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        {mobileCards.map((card, index) => (
          <motion.div
            key={card.name}
            className="absolute z-30 rounded-xl border border-blue-500/30 bg-white/10 backdrop-blur-md px-3 py-2 text-sm font-medium text-white shadow-xl"
            style={{
              left: `calc(50% + ${card.x}px)`,
              top: `calc(50% + ${card.y}px)`,
              transform: "translateX(-50%)",
            }}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2.5 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {card.name}
          </motion.div>
        ))}
      </div>
    </>
  );
}
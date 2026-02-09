import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const hearts = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 4 + Math.random() * 6,
  size: 12 + Math.random() * 20,
  opacity: 0.15 + Math.random() * 0.25,
}));

const FloatingHearts = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {hearts.map((h) => (
      <motion.div
        key={h.id}
        className="absolute text-primary"
        style={{ left: `${h.x}%`, bottom: -40 }}
        animate={{
          y: [0, -window.innerHeight - 100],
          x: [0, Math.sin(h.id) * 60],
          rotate: [0, 360],
        }}
        transition={{
          duration: h.duration,
          delay: h.delay,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Heart size={h.size} fill="currentColor" opacity={h.opacity} />
      </motion.div>
    ))}
  </div>
);

export default FloatingHearts;

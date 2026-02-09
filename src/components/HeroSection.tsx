import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useState, useCallback } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [response, setResponse] = useState<"yes" | "no" | null>(null);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);

  const handleNoHover = useCallback(() => {
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 100;
    setNoButtonPosition({ x: randomX, y: randomY });
    setNoAttempts((prev) => prev + 1);
  }, []);

  const noMessages = [
    "Are you sure? 🥺",
    "Think again! 💕",
    "Please? 🙏",
    "Come on! 💖",
    "Pretty please? 🌹",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      {/* Celebration hearts when Yes is clicked */}
      <AnimatePresence>
        {response === "yes" && (
          <>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-primary z-20"
                initial={{
                  opacity: 1,
                  x: "50%",
                  y: "50%",
                  scale: 0,
                }}
                animate={{
                  opacity: [1, 1, 0],
                  x: `${50 + (Math.random() - 0.5) * 100}%`,
                  y: `${50 - Math.random() * 80}%`,
                  scale: [0, 1.5, 1],
                  rotate: Math.random() * 360,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  delay: i * 0.05,
                  ease: "easeOut",
                }}
              >
                <Heart
                  size={16 + Math.random() * 24}
                  fill="currentColor"
                  className={i % 2 === 0 ? "text-primary" : "text-gold"}
                />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="inline-block mb-6"
        >
          <Heart className="w-16 h-16 text-primary fill-primary mx-auto" />
        </motion.div>

        <AnimatePresence mode="wait">
          {response === "yes" ? (
            <motion.div
              key="yes-response"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4 leading-tight">
                Yay!{" "}
                <span className="text-gradient-rose italic">I knew it!</span>
              </h1>
              <motion.div
                className="flex justify-center items-center gap-2 mt-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Sparkles className="w-8 h-8 text-gold" />
                <Heart className="w-10 h-10 text-primary fill-primary" />
                <Sparkles className="w-8 h-8 text-gold" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.h1
              key="question"
              className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4 leading-tight"
            >
              Will you be my{" "}
              <span className="text-gradient-rose italic">Valentine?</span>
            </motion.h1>
          )}
        </AnimatePresence>

        {response !== "yes" && (
          <motion.p
            className="text-lg md:text-xl text-muted-foreground font-body mt-6 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {noAttempts > 0
              ? noMessages[Math.min(noAttempts - 1, noMessages.length - 1)]
              : "To the most amazing sister in the world — today and every day, you're loved more than words could ever say. 💕"}
          </motion.p>
        )}

        {response !== "yes" && (
          <motion.div
            className="mt-10 flex justify-center gap-6 items-center relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button
              onClick={() => setResponse("yes")}
              className="px-10 py-4 bg-primary text-primary-foreground font-display text-xl rounded-full shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Yes! 💕
            </motion.button>

            <motion.button
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              animate={{
                x: noButtonPosition.x,
                y: noButtonPosition.y,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="px-10 py-4 bg-secondary text-secondary-foreground font-display text-xl rounded-full shadow-md"
            >
              No
            </motion.button>
          </motion.div>
        )}

        {response === "yes" && (
          <motion.p
            className="text-lg md:text-xl text-muted-foreground font-body mt-8 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            You're the best sister ever! Love you endlessly! 💖
          </motion.p>
        )}

        <motion.div
          className="mt-10 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {[...Array(5)].map((_, i) => (
            <Heart key={i} className="w-4 h-4 text-gold fill-gold" />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

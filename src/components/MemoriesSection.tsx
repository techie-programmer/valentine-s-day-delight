import { motion } from "framer-motion";
import { Heart, Star, Sparkles } from "lucide-react";

const memories = [
  {
    icon: Heart,
    title: "Our Laughs",
    text: "From silly inside jokes to uncontrollable giggles — nobody makes me laugh like you do.",
  },
  {
    icon: Star,
    title: "Our Adventures",
    text: "Every road trip, every spontaneous plan, every 'let's just go' moment — pure magic.",
  },
  {
    icon: Sparkles,
    title: "Our Bond",
    text: "Through thick and thin, highs and lows — you're always there. That's the greatest gift.",
  },
];

const MemoriesSection = () => (
  <section className="py-24 px-6 bg-secondary/50">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl md:text-5xl font-display font-semibold text-center text-foreground mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Why You're the Best
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {memories.map((m, i) => (
          <motion.div
            key={m.title}
            className="bg-card rounded-2xl p-8 shadow-md border border-border text-center hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <div className="w-14 h-14 rounded-full bg-rose-light flex items-center justify-center mx-auto mb-5">
              <m.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">
              {m.title}
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              {m.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MemoriesSection;

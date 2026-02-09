import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

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

      <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4 leading-tight">
        Happy Valentine's Day,{" "}
        <span className="text-gradient-rose italic">Sis</span>
      </h1>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground font-body mt-6 max-w-xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        To the most amazing sister in the world — today and every day, you're
        loved more than words could ever say. 💕
      </motion.p>

      <motion.div
        className="mt-10 flex justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {[...Array(5)].map((_, i) => (
          <Heart
            key={i}
            className="w-4 h-4 text-gold fill-gold"
          />
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;

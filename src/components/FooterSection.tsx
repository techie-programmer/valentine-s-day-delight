import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FooterSection = () => (
  <section className="py-20 px-6 text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-muted-foreground font-body text-sm tracking-widest uppercase mb-4">
        Forever & Always
      </p>
      <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
        Love you, Sis{" "}
        <Heart className="inline w-8 h-8 text-primary fill-primary" />
      </h2>
      <p className="text-muted-foreground font-body">
        Happy Valentine's Day 2026
      </p>
    </motion.div>
  </section>
);

export default FooterSection;

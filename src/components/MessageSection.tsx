import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const MessageSection = () => (
  <section className="py-24 px-6 relative">
    <div className="max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Heart className="w-8 h-8 text-primary fill-primary mx-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-8">
          A Little Love Letter
        </h2>
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-rose-medium to-gold" />
          <p className="text-lg md:text-xl font-body text-card-foreground leading-relaxed italic">
            "You're not just my sister — you're my best friend, my partner in
            crime, and the one person who always knows how to make me smile. 
            Thank you for being you. I love you endlessly."
          </p>
          <p className="mt-6 text-muted-foreground font-display text-sm tracking-widest uppercase">
            — With all my love
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MessageSection;

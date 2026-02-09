import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import MessageSection from "@/components/MessageSection";
import MemoriesSection from "@/components/MemoriesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <main className="relative bg-background min-h-screen overflow-hidden">
    <FloatingHearts />
    <HeroSection />
    <MessageSection />
    <MemoriesSection />
    <FooterSection />
  </main>
);

export default Index;

import { Hero } from "@/components/ui/hero-section";
import { WhyChooseUs } from "@/components/ui/why-choose-us";
import { Navbar } from "@/components/ui/navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />
      <Hero />
      <WhyChooseUs />
    </div>
  );
};

export default Index;

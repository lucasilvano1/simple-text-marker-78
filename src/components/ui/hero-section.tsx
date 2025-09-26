import { GlassmorphicButton } from "@/components/ui/glassmorphic-button";
import { motion } from "framer-motion";
import BlurText from "@/components/ui/blur-text";

const Hero = () => {
  const companyLogos = [
    { name: "Company 1", logo: "LOGO" },
    { name: "Company 2", logo: "BRAND" },
    { name: "Company 3", logo: "STUDIO" },
    { name: "Company 4", logo: "AGENCY" },
    { name: "Company 5", logo: "DESIGN" },
    { name: "Company 6", logo: "CREATIVE" },
  ];

  return (
    <section className="container-hero min-h-screen flex flex-col justify-center">
      {/* Hero Content */}
      <div className="text-center max-w-4xl mx-auto">
        <BlurText
          text="Elevate Your Brand with"
          className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 text-foreground"
          delay={100}
          animateBy="words"
        />
        
        <BlurText
          text="Subscription Design Services"
          className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-foreground font-playfair italic"
          delay={120}
          animateBy="words"
        />
        
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          Creating sleek solutions that redefine innovation. 
          Stay ahead with AI-powered technology for the future.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <GlassmorphicButton>
            Book A Call
          </GlassmorphicButton>
        </motion.div>
      </div>

      {/* Company Marquee */}
      <motion.div 
        className="mt-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex">
          <motion.div
            className="flex gap-16 whitespace-nowrap"
            animate={{
              x: [0, -100 * companyLogos.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...companyLogos, ...companyLogos].map((company, index) => (
              <div
                key={index}
                className="text-muted-foreground/60 text-2xl font-light tracking-wider"
              >
                {company.logo}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export { Hero };
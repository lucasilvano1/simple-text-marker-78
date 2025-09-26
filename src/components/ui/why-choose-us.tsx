import { motion } from "framer-motion";
import { CheckCircle, Clock, Award } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Subscription Flexibility",
      description: "Enjoy the freedom of a flexible subscription model that adapts to your needs."
    },
    {
      icon: Award,
      title: "Consistent Quality", 
      description: "Receive high-quality designs, ensuring your brand always looks its best."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Depend on our reliable team to deliver your projects on time, every time."
    }
  ];

  return (
    <section className="container-section">
      {/* Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Why
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground font-playfair italic">
            Choose us
          </h2>
        </div>
        
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          At Svarog, we seamlessly blend flexibility, deep expertise, and cutting-edge 
          innovation to deliver top design services tailored to your needs.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={feature.title}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-13 h-13 flex items-center justify-center rounded-full border border-muted-foreground/20 group-hover:border-primary/50 transition-colors">
                  <IconComponent className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4 capitalize">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-base leading-relaxed max-w-sm mx-auto">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export { WhyChooseUs };
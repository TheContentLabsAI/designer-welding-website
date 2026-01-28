import { Shield, Award, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const TrustStrip = () => {
  const items = [
    {
      icon: Shield,
      text: "Licensed & Bonded",
      sub: "CSLB: 1098805"
    },
    {
      icon: Users,
      text: "Family Owned",
      sub: "Since 2010"
    },
    {
      icon: Award,
      text: "500+ Projects",
      sub: "In Orange County"
    },
    {
      icon: MapPin,
      text: "Local Expertise",
      sub: "Designed for Coastal Climate"
    }
  ];

  return (
    <section className="w-full bg-zinc-950 border-b border-white/5 py-10 md:py-12 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1.0]
                }}
                className="flex flex-col items-center justify-center text-center group"
              >
                <div className="mb-4 p-4 rounded-full bg-zinc-900 border border-white/5 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300">
                  <Icon className="w-6 h-6 text-zinc-400 group-hover:text-accent transition-colors" />
                </div>
                <h4 className="text-white font-bold uppercase tracking-wide text-sm md:text-base mb-1 group-hover:text-accent transition-colors">
                  {item.text}
                </h4>
                <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
                  {item.sub}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;

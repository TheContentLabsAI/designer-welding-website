import { motion } from "framer-motion";
import { MessageSquare, PenTool, Hammer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProcessTimeline = () => {
  const steps = [
    {
      id: "01",
      title: "Consultation",
      desc: "We meet to discuss your vision, assess the site, and provide immediate value with expert recommendations.",
      icon: MessageSquare
    },
    {
      id: "02",
      title: "Design & Engineer",
      desc: "Our team creates detailed CAD drawings to ensure your custom piece is structurally sound and aesthetically perfect.",
      icon: PenTool
    },
    {
      id: "03",
      title: "Fabricate & Install",
      desc: "Master welders hand-forge your design using premium steel, followed by a seamless white-glove installation.",
      icon: Hammer
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-accent uppercase tracking-widest text-sm font-bold mb-3 block">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase mb-6">
            From <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-white">Vision</span> To Reality
          </h2>
          <p className="text-zinc-500 text-lg">
            We've refined our process over 15 years to be seamless, transparent, and surprisingly fast.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-zinc-800 to-transparent hidden lg:block -translate-y-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 bg-zinc-900 border-2 border-zinc-800 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:border-accent group-hover:bg-zinc-800 transition-all duration-300 shadow-xl shadow-black/50">
                    <Icon className="w-8 h-8 text-zinc-400 group-hover:text-accent transition-colors" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent text-black font-bold flex items-center justify-center rounded-full text-xs shadow-lg">
                      {step.id}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white uppercase mb-4">{step.title}</h3>
                  <p className="text-zinc-500 leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
            <a href="#contact">
              <Button className="h-14 px-8 bg-white hover:bg-accent hover:text-black text-black uppercase tracking-wide group transition-all font-bold border-2 border-transparent hover:border-accent">
                  Start Your Project <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;

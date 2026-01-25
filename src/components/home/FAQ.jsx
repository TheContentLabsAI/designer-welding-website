import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      q: "How much does a custom gate cost?",
      a: "Every project is unique, but our custom driveway gates typically start around $3,500 and go up depending on size, material complexity, and automation needs. We provide exact quotes after a free site assessment."
    },
    {
      q: "What is your typical lead time?",
      a: "Our standard turnaround from design approval to installation is 3-5 weeks. Rush services are available for urgent security needs."
    },
    {
      q: "Do you offer warranties?",
      a: "Yes! We offer a Lifetime Structural Warranty on all craftsmanship and a 5-Year Finish Warranty on powder coating. You're covered for the long haul."
    },
    {
      q: "Do you handle the automation and motors?",
      a: "Absolutely. We are certified installers for LiftMaster and other top brands. We handle the entire system—steel, motor, sensors, and remote access setup."
    }
  ];

  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-white uppercase mb-4">Common Questions</h2>
            <p className="text-zinc-500">Everything you need to know before getting started.</p>
        </div>

        <div className="space-y-4">
            {faqs.map((item, i) => (
                <Item key={i} q={item.q} a={item.a} />
            ))}
        </div>
      </div>
    </section>
  );
};

const Item = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-xl bg-zinc-900/30 overflow-hidden hover:border-zinc-700 transition-colors">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full p-6 text-left"
            >
                <span className="text-white font-bold text-lg">{q}</span>
                {isOpen ? <Minus className="w-5 h-5 text-accent" /> : <Plus className="w-5 h-5 text-zinc-600" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-white/5 mt-2">
                            {a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default FAQ;

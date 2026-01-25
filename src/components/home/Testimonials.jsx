import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
    const reviews = [
        {
            name: "Michael R.",
            location: "Huntington Beach",
            text: "Designer Welding transformed the front of our home. The custom gate is not only secure but a total showstopper. We get compliments daily.",
            stars: 5,
            tag: "Driveway Gate"
        },
        {
            name: "Sarah & Tom J.",
            location: "Newport Coast",
            text: "Professional from start to finish. They handled the HOA approval for us and the installation was flawless. Worth every penny.",
            stars: 5,
            tag: "Stair Railing"
        },
        {
            name: "David K.",
            location: "Irvine",
            text: "I was worried about rust living near the coast. Their galvanization process is unmatched. 3 years later, it still looks brand new.",
            stars: 5,
            tag: "Side Gate"
        }
    ];

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <div className="max-w-xl">
             <span className="text-accent uppercase tracking-widest text-sm font-bold mb-3 block">Social Proof</span>
             <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase leading-none">
               Trusted By <br/><span className="text-zinc-500">Orange County</span>
             </h2>
           </div>
           
           <div className="flex items-center gap-4 mt-6 md:mt-0 bg-zinc-900 border border-white/10 px-6 py-3 rounded-full">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-zinc-800 overflow-hidden">
                         <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" />
                     </div>
                 ))}
               </div>
               <div className="flex flex-col">
                   <div className="flex text-yellow-500 text-xs">★★★★★</div>
                   <span className="text-white text-xs font-bold">120+ 5-Star Reviews</span>
               </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl relative group hover:bg-zinc-900 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
                >
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-800 group-hover:text-accent/20 transition-colors" />
                    <div className="flex text-yellow-500 mb-4 gap-0.5">
                        {[...Array(review.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-zinc-400 leading-relaxed mb-6 italic group-hover:text-zinc-300 transition-colors">"{review.text}"</p>
                    <div>
                        <h4 className="text-white font-bold">{review.name}</h4>
                        <div className="flex justify-between items-center mt-1">
                            <span className="text-zinc-600 text-xs uppercase tracking-wide group-hover:text-zinc-500">{review.location}</span>
                            <span className="text-zinc-500 text-[10px] uppercase border border-zinc-800 px-2 py-0.5 rounded bg-zinc-900/50 group-hover:border-accent/20 group-hover:text-accent">{review.tag}</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

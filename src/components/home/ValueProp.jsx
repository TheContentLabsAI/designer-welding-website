import { Check, X } from "lucide-react";

const ValueProp = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <span className="text-red-500 uppercase tracking-widest text-sm font-bold mb-3 block">The Problem</span>
           <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase mb-6">
             Most Iron Work <span className="text-red-600">Rusts & Fails</span> within 3 Years
           </h2>
           <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
             Don't risk your home's security and curb appeal with "budget" welding. Cheap materials, poor finishes, and cut corners cost more in the long run.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* The "Others" Card */}
          <div className="bg-zinc-900/50 border border-red-900/20 p-8 rounded-2xl relative overflow-hidden">
             <div className="absolute top-4 right-4 text-red-500/5 font-black text-8xl -z-10 leading-none">?</div>
             <h3 className="text-2xl font-bold text-zinc-300 mb-6 uppercase flex items-center gap-3">
                <span className="w-2 h-8 bg-red-800 rounded-full"></span>
                The "Budget" Guys
             </h3>
             <ul className="space-y-4">
                {[
                    "Thin-gauge steel that dents easily", 
                    "Spray paint finishes (rusts quickly)",
                    "Wobbly installations & poor alignment",
                    "No warranty or support"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-500">
                        <X className="w-5 h-5 text-red-800 shrink-0 mt-0.5" />
                        {item}
                    </li>
                ))}
             </ul>
          </div>

          {/* The "Designer Welding" Card */}
          <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl relative overflow-hidden shadow-2xl shadow-black/50 transform md:-translate-y-4">
             <div className="absolute top-0 inset-x-0 h-1 bg-accent"></div>
             {/* Glow effect */}
             <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 blur-3xl rounded-full pointer-events-none"></div>
             
             <h3 className="text-2xl font-bold text-white mb-6 uppercase flex items-center gap-3">
                <span className="w-2 h-8 bg-accent rounded-full"></span>
                The Designer Standard
             </h3>
             <ul className="space-y-4">
                {[
                    "Heavy-duty industrial steel framing", 
                    "Powder-coated & galvanized for lifetime rust protection",
                    "Laser-aligned precision installation",
                    "Lifetime structural warranty included"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                    </li>
                ))}
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;

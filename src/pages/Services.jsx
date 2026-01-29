import { motion } from "framer-motion"
import { portfolioStructure, getAllSubcategories } from "@/data/siteData"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Shield, PenTool, Hammer, Crown, Star, Clock } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"

const ServicesPage = () => {
  const navigate = useNavigate();
  const allSubcategories = getAllSubcategories();

  // Helper to handle navigation to Home #hero-form
  const handleGetProQuote = (e) => {
    e.preventDefault();
    // If not on home, go to home with hash
    if (window.location.pathname !== "/") {
        navigate("/", { state: { scrollTo: "hero-form" } });
    } else {
        // If already on home (unlikely from here, but safe)
        document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Icon mapping
  const categoryIcons = {
    gates: Crown,
    security: Shield,
    railings: PenTool,
    specialty: Hammer
  };

  const imageMap = {
    railings: "/images/service-railings.png",
    gates: "/images/service-gates.png",
    specialty: "/images/service-fences.png", 
    security: "/images/service-doors.png"
  };

  return (
    <div className="bg-black min-h-screen pt-20">
      
      {/* 1. BENEFIT-FOCUSED HERO (High-Converting Formula: Clarity > Creativity) */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white uppercase mb-6 leading-tight max-w-5xl mx-auto">
                Secure Your Home With <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent">Beautiful Custom Ironwork</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                We design and build premium metal gates, railings, and security doors that increase your property value and keep your family safe.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Button 
                    size="lg" 
                    onClick={handleGetProQuote}
                    className="bg-accent text-black hover:bg-accent/90 border-none text-lg px-12 py-8 h-auto shadow-[0_0_30px_-5px_var(--accent)] hover:shadow-[0_0_50px_-10px_var(--accent)] uppercase font-black transition-all transform hover:-translate-y-1"
                >
                    Get Free Quote
                </Button>
              </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE SERVICE HUB (Audience Understanding: Specific Paths) */}
      <section className="pb-24 bg-black">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16 relative">
                 <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-accent/20 mb-4 inline-block">Our Expertise</span>
                 <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase">Find Your Solution</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
                                {Object.entries(portfolioStructure).map(([catKey, category], index) => {
                    const Icon = categoryIcons[catKey];
                    const bgImage = imageMap[catKey];
                    
                    return (
                        <motion.div 
                            key={catKey}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500 flex flex-col h-full shadow-2xl"
                        >
                            {/* Image Header */}
                            <div className="relative h-72 overflow-hidden">
                                <img src={bgImage} alt={category.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                                    <div className="bg-accent text-black p-3 rounded-xl shadow-lg transform group-hover:rotate-6 transition-transform">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-heading font-black text-white uppercase tracking-wide leading-none">{category.title}</h2>
                                        <span className="text-white/60 text-sm font-medium tracking-wider">{Object.keys(category.subcategories).length} Styles Available</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-zinc-900 to-black">
                                <p className="text-zinc-400 mb-8 leading-relaxed">
                                    {category.description}
                                </p>

                                {/* Sub-Service Quick Links (The "Menu") */}
                                <div className="mb-8 bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                                    <span className="text-xs font-bold text-accent uppercase tracking-wider mb-4 block flex items-center gap-2">
                                        <Star className="w-3 h-3 fill-accent" /> Popular {category.title}
                                    </span>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                                        {Object.entries(category.subcategories).map(([subKey, sub]) => (
                                            <Link 
                                                key={sub.slug}
                                                to={"/portfolio?category=" + catKey + "&type=" + subKey} 
                                                className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors group/link"
                                            >
                                                <ArrowRight className="w-3.5 h-3.5 text-accent/50 group-hover/link:text-accent group-hover/link:translate-x-1 transition-all" />
                                                {sub.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                    <Link to={"/portfolio?category=" + catKey}>
                                        <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 hover:text-white hover:border-accent/40 uppercase tracking-wide font-bold h-12">
                                            View All {category.title}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
      </section>

      {/* 3. TRUST & AUTHORITY (Social Proof) */}
      <section className="py-20 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.03),transparent_70%)]"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase mb-6">Why Neighbors Trust Us</h2>
                <div className="w-24 h-1 bg-accent mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-20 h-20 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent group-hover:border-accent/50 group-hover:shadow-[0_0_30px_-10px_var(--accent)] transition-all">
                        <Shield className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase mb-3">Licensed & Bonded</h3>
                    <p className="text-zinc-400 leading-relaxed max-w-xs mx-auto">CSLB #1098805. We operate with full compliance and insurance for your absolute peace of mind.</p>
                </div>
                <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-20 h-20 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent group-hover:border-accent/50 group-hover:shadow-[0_0_30px_-10px_var(--accent)] transition-all">
                        <PenTool className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase mb-3">Custom Design</h3>
                    <p className="text-zinc-400 leading-relaxed max-w-xs mx-auto">No cookie-cutter solutions. We design custom ironwork that perfectly matches your home's architecture.</p>
                </div>
                <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-20 h-20 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent group-hover:border-accent/50 group-hover:shadow-[0_0_30px_-10px_var(--accent)] transition-all">
                        <Clock className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase mb-3">Reliable Timeline</h3>
                    <p className="text-zinc-400 leading-relaxed max-w-xs mx-auto">We respect your time. Clear communication and efficient installation schedules are our standard.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. FINAL CTA - SINGLE FOCUS (One Clear Call to Action) */}
      <section className="py-32 bg-accent text-black relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-heading font-black mb-8 uppercase leading-none">
                Start Your Project
            </h2>
            <p className="text-xl md:text-2xl font-bold mb-10 max-w-2xl mx-auto opacity-80">
                Get a fast, free quote for your custom metal fabrication needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button 
                    size="lg" 
                    onClick={handleGetProQuote}
                    className="bg-black text-white hover:bg-black/80 border-none text-xl px-16 py-8 h-auto shadow-2xl uppercase font-black"
                >
                    Get Free Quote
                </Button>
            </div>
            <p className="mt-6 text-sm font-semibold opacity-60 uppercase tracking-widest">
                No Obligation • Fast Response • Free Estimate
            </p>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

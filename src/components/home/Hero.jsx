import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Star } from "lucide-react"
import { Link } from "react-router-dom"
import { companyInfo } from "@/data/siteData"
import HeroForm from "./HeroForm"

const Hero = () => {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const y1 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : -150]);

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-black pt-28 pb-12 md:py-0">
      {/* Dynamic Cinematic Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Base Gradient - Warmer/Richer for "Industrial Luxury" */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-[#0a0a0a] to-zinc-900"></div>
        
        {/* Subtle Workshop Atmosphere (Smoke/Light) */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_0%,rgba(255,160,0,0.08),transparent_70%)]"></div>

        {/* Industrial Textures */}
        <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>

        {/* Simulated "Welding Sparks" - Intense & Realistic */}
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, x: "50vw", y: "50vh", scale: 0 }}
                animate={{ 
                opacity: [0, 1, 0], 
                x: ["50vw", `${Math.random() * 100}vw`],
                y: ["50vh", `${Math.random() * 100}vh`],
                scale: [0, Math.random() * 1.5, 0]
                }}
                transition={{ 
                duration: 1.5 + Math.random() * 2, 
                repeat: Infinity, 
                delay: Math.random() * 3,
                ease: "easeOut"
                }}
                className="absolute w-1 h-1 bg-gradient-to-tr from-yellow-200 to-orange-500 rounded-full blur-[1px] shadow-[0_0_8px_2px_rgba(255,165,0,0.6)]"
            />
            ))}
        </div>
      </div>

      <div className="container relative z-10 px-4 h-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-7xl mx-auto">
        
        {/* Left Column: Authority & Copy */}
        <div className="w-full lg:w-1/2 relative z-20 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Trust Badge - Above Fold (Hack #1) */}
              <div className="inline-flex items-center gap-3 mb-6">
                 <div className="flex items-center gap-1.5 px-3 py-1.5 border border-accent/20 rounded-full bg-accent/5">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                    <span className="text-accent text-xs font-bold uppercase tracking-widest">Licensed #939723</span>
                 </div>
                 <div className="flex items-center gap-1 px-3 py-1.5">
                    <div className="flex text-yellow-500">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                    </div>
                    <span className="text-white/60 text-xs font-medium ml-1">5.0 Star Rated</span>
                 </div>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white uppercase tracking-tighter leading-[0.95] mb-6 drop-shadow-2xl text-center lg:text-left">
                Mastery <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-400">
                  In Metal.
                </span>
              </h1>

              {/* Subheadline with vertical line */}
              <div className="flex gap-6 mb-10 border-l-2 border-accent/30 pl-6 mx-auto lg:mx-0 max-w-xl text-left">
                <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                  We engineer security and curb appeal into every project. 
                  From custom <span className="text-white font-medium">driveway gates</span> to <span className="text-white font-medium">structural railing</span> systems, 
                  we deliver precision craftsmanship without compromise.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/portfolio">
                  <Button variant="outline" className="h-14 px-8 text-base border-white/10 text-white hover:bg-accent hover:text-black hover:border-accent uppercase tracking-wide group transition-all">
                    View Our Work
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform group-hover:text-black" />
                  </Button>
                </Link>
              </div>

              {/* Stats Footer - Credibility */}
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-white/5 pt-8 w-full">
                 <div>
                    <div className="text-2xl font-bold text-white font-heading">25+</div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-500">Years Experience</div>
                 </div>
                 <div className="w-px h-8 bg-white/10"></div>
                 <div>
                    <div className="text-2xl font-bold text-white font-heading">500+</div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-500">Projects Completed</div>
                 </div>
              </div>
            </motion.div>
        </div>

        {/* Right Column: Hero Form (High Conversion) */}
        <motion.div 
          style={{ y: y1 }}
          className="w-full md:w-1/2 lg:w-auto relative h-auto flex items-center justify-center lg:justify-end perspective-1000 mt-12 md:mt-0 z-30"
        >
           <HeroForm />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero

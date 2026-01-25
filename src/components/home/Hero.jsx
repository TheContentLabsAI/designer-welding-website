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
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-black pt-24 pb-20 md:py-0">
      {/* Dynamic Cinematic Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Base Gradient - Warmer/Richer for "Industrial Luxury" */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-[#0a0a0a] to-zinc-900 opacity-90 z-10"></div>
        
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
            <img 
               src="/images/hero-bg.png" 
               alt="Industrial Welding Workshop" 
               className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
        </div>

        {/* Subtle Workshop Atmosphere (Smoke/Light) */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_0%,rgba(255,160,0,0.08),transparent_70%)] z-10"></div>

        {/* Industrial Textures */}
        <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay z-10"></div>
        
        {/* Animated Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] grain-overlay z-10"></div>

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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center lg:items-start"
            >
              {/* Trust Badge - Above Fold (Hack #1) */}
              <div className="inline-flex items-center gap-2 mb-4 md:mb-6 scale-90 md:scale-100 origin-center lg:origin-left">
                 <div className="flex items-center gap-1.5 px-3 py-1.5 border border-accent/20 rounded-full bg-accent/5 backdrop-blur-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                    <span className="text-accent text-[10px] md:text-xs font-bold uppercase tracking-widest">Licensed #939723</span>
                 </div>
                 <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/5">
                    <div className="flex text-yellow-500">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                    </div>
                    <span className="text-white/60 text-[10px] md:text-xs font-medium ml-1">5.0 Star Rated</span>
                 </div>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white uppercase tracking-wide leading-[1.2] mb-4 md:mb-6 drop-shadow-2xl text-center lg:text-left text-balance">
                Mastery <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-400">
                  In Metal.
                </span>
              </h1>

              {/* Subheadline with vertical line */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8 md:mb-10 text-center lg:text-left items-center lg:items-start max-w-xl mx-auto lg:mx-0">
                 <div className="hidden md:block w-0.5 bg-accent/30 self-stretch"></div>
                 <p className="text-base md:text-lg lg:text-xl text-zinc-300 font-light leading-normal md:leading-relaxed">
                   We engineer security and curb appeal into every project. 
                   From custom <span className="text-white font-medium">driveway gates</span> to <span className="text-white font-medium">structural railing</span> systems.
                 </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 sm:px-0">
                <Link to="/portfolio" className="w-full sm:w-auto group">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto h-12 md:h-14 px-8 text-sm md:text-base border-white/10 text-white hover:bg-accent hover:text-black hover:border-accent uppercase tracking-wide transition-all backdrop-blur-sm bg-black/20 hover:scale-105 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)]"
                  >
                    View Our Work
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform group-hover:text-black" />
                  </Button>
                </Link>
              </div>

              {/* Stats Footer - Credibility */}
              <div className="mt-8 md:mt-12 flex items-center justify-center lg:justify-start gap-6 md:gap-8 border-t border-white/5 pt-6 w-full max-w-sm lg:max-w-none mx-auto lg:mx-0">
                 <div className="flex flex-col items-center lg:items-start">
                    <div className="text-xl md:text-2xl font-bold text-white font-heading">25+</div>
                    <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500">Years Experience</div>
                 </div>
                 <div className="w-px h-8 bg-white/10"></div>
                 <div className="flex flex-col items-center lg:items-start">
                    <div className="text-xl md:text-2xl font-bold text-white font-heading">500+</div>
                    <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500">Projects Completed</div>
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

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, ShieldCheck, Star } from "lucide-react"
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

  const y1 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 200], { clamp: true });
  const y2 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : -150], { clamp: true });

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

        {/* Simulated "Welding Sparks" - Optimized for Performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(4)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, x: "50vw", y: "50vh", scale: 0 }}
                animate={{ 
                opacity: [0, 0.8, 0], 
                x: ["50vw", `${Math.random() * 100}vw`],
                y: ["50vh", `${Math.random() * 100}vh`],
                scale: [0, Math.random() * 1.2, 0]
                }}
                transition={{ 
                duration: 2 + Math.random() * 2, 
                repeat: Infinity, 
                delay: Math.random() * 4,
                ease: "easeOut",
                repeatDelay: 1
                }}
                style={{ willChange: "transform, opacity" }}
                className="absolute w-1 h-1 bg-gradient-to-tr from-yellow-200 to-orange-500 rounded-full blur-[1px] shadow-[0_0_8px_2px_rgba(255,165,0,0.6)]"
            />
            ))}
        </div>
      </div>

      <div className="container relative z-10 px-4 h-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 max-w-[1400px] mx-auto">
        
        {/* Left Column: Authority & Copy - Optimized for conversion */}
        <div className="w-full lg:w-[55%] relative z-20 flex flex-col justify-center text-center lg:text-left items-center lg:items-start order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center lg:items-start w-full"
            >
              {/* Eyebrow Copy - Instant Clarity (Hack #4) - Mobile Optimized */}
              <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center lg:justify-start gap-1.5 md:gap-2 mb-5 md:mb-6 bg-white/5 backdrop-blur-sm px-3 md:px-5 py-2 md:py-1.5 rounded-full border border-white/10 w-auto max-w-[95vw] md:max-w-full">
                 {/* Mobile: Text on top, stars below */}
                 <span className="text-accent text-[9px] md:hidden font-bold uppercase tracking-wide text-center leading-tight">
                    Residential & Commercial Metal Fabrication
                 </span>
                 <div className="flex md:hidden items-center gap-1.5">
                    <div className="flex items-center gap-0.5">
                       {[...Array(5)].map((_, i) => (
                         <svg key={i} className="w-3 h-3 fill-accent" viewBox="0 0 20 20">
                           <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                         </svg>
                       ))}
                    </div>
                    <span className="text-white/70 text-[10px] font-semibold">5.0</span>
                 </div>
                 
                 {/* Desktop: Horizontal layout */}
                 <span className="hidden md:inline text-accent text-[10px] lg:text-xs font-bold uppercase tracking-wider">
                    Residential & Commercial Metal Fabrication
                 </span>
                 <span className="hidden md:block w-px h-3 bg-white/20"></span>
                 <div className="hidden md:flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 fill-accent" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                 </div>
                 <span className="hidden md:inline text-white/70 text-[10px] sm:text-xs font-medium">5.0 Stars</span>
              </div>

              {/* Headline - Benefit-Focused, Not Feature-Focused (Hack #9) */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black text-white uppercase tracking-normal leading-[0.9] mb-3 md:mb-4 drop-shadow-2xl text-center lg:text-left">
                Security & Beauty.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent">
                  Built to Last.
                </span>
              </h1>

              {/* Conversational Copy - Human Connection (Hack #5) */}
              <div className="flex flex-col gap-2 md:gap-3 mb-5 md:mb-6 text-center lg:text-left">
                  <p className="text-lg lg:text-xl text-white font-semibold leading-tight max-w-xl">
                     Your property deserves more than basic security. It deserves craftsmanship that increases value and makes a statement.
                  </p>
                  <p className="text-sm lg:text-base text-zinc-300 leading-relaxed max-w-xl">
                     We've secured 500+ Orange County properties - from luxury homes to commercial buildings - with custom metalwork that impresses.
                  </p>
              </div>

              {/* Social Proof - Above the Fold (Hack #1) */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-5 md:mb-6 w-full justify-center lg:justify-start">
                  <div className="flex -space-x-2">
                      {[11,12,13,14,15].map(i => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-gray-200 overflow-hidden">
                              <img src={`https://i.pravatar.cc/100?img=${i}`} alt="Happy customer" className="w-full h-full object-cover" />
                          </div>
                      ))}
                  </div>
                  <div className="text-center sm:text-left">
                      <p className="text-white font-bold text-sm">500+ Satisfied Clients</p>
                      <p className="text-zinc-400 text-xs">Average project: 4.8/5 stars</p>
                  </div>
              </div>

              {/* CTA with Booster Text (Hack #11) */}
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                  <Link 
                    to="/#hero-form" 
                    className="w-full sm:w-auto group" 
                    onClick={(e) => {
                      // Only scroll on mobile/tablet where form is below
                      if (window.innerWidth < 1024) {
                        e.preventDefault()
                        document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })
                      } else {
                        e.preventDefault() // Prevent navigation on desktop
                      }
                    }}
                    onMouseEnter={() => {
                      // On desktop, emphasize form with animation
                      if (window.innerWidth >= 1024) {
                        const form = document.getElementById('hero-form')
                        if (form) {
                          form.style.transform = 'scale(1.02)'
                          form.style.boxShadow = '0 0 60px -5px rgba(234, 179, 8, 0.6)'
                        }
                      }
                    }}
                    onMouseLeave={() => {
                      // Remove emphasis
                      if (window.innerWidth >= 1024) {
                        const form = document.getElementById('hero-form')
                        if (form) {
                          form.style.transform = 'scale(1)'
                          form.style.boxShadow = '0 0 50px -10px rgba(234, 179, 8, 0.3)'
                        }
                      }
                    }}
                  >
                      <Button 
                          variant="premium"
                          className="w-full sm:w-auto font-black uppercase tracking-wide h-14 px-8 text-base transition-all duration-300 hover:scale-105 shadow-[0_0_30px_-5px_var(--accent)]"
                      >
                          Get Your Free Quote Now <ChevronRight className="ml-2 w-5 h-5" />
                      </Button>
                  </Link>
                  {/* CTA Booster - Small Text for Big Impact */}
                  <p className="text-xs text-zinc-400 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
                      <ShieldCheck className="w-3 h-3 text-accent" />
                      Free consultation • No pressure • Licensed & insured
                  </p>
              </div>

              {/* Stats - Compact, Benefit-Focused */}
              <div className="flex items-center gap-6 md:gap-8 mt-6 md:mt-7 pt-5 md:pt-6 border-t border-white/10 w-full justify-center lg:justify-start">
                  <div className="text-center lg:text-left">
                      <div className="text-3xl md:text-4xl font-black text-accent font-heading">25+</div>
                      <div className="text-[10px] md:text-xs text-zinc-400 uppercase tracking-wider font-bold mt-1">Years Trusted</div>
                  </div>
                  <div className="w-px h-10 bg-white/10"></div>
                  <div className="text-center lg:text-left">
                      <div className="text-3xl md:text-4xl font-black text-accent font-heading">500+</div>
                      <div className="text-[10px] md:text-xs text-zinc-400 uppercase tracking-wider font-bold mt-1">Projects Completed</div>
                  </div>
                  <div className="w-px h-10 bg-white/10"></div>
                  <div className="text-center lg:text-left">
                      <div className="text-3xl md:text-4xl font-black text-accent font-heading">100%</div>
                      <div className="text-[10px] md:text-xs text-zinc-400 uppercase tracking-wider font-bold mt-1">Satisfaction</div>
                  </div>
              </div>
            </motion.div>
        </div>

        {/* Right Column: Hero Form - SECOND on mobile, second on desktop */}
        <motion.div 
          style={{ y: y1 }}
          className="w-full md:w-1/2 lg:w-[40%] relative h-auto flex items-center justify-center lg:justify-end perspective-1000 z-30 order-2"
        >
           <HeroForm />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero

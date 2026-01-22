import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Star, Hammer } from "lucide-react"
import { Link } from "react-router-dom"
import { companyInfo } from "@/data/siteData"

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background with Metallic Texture Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black opacity-90"></div>
        {/* Animated sheen effect */}
        <motion.div 
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent skew-y-12"
        ></motion.div>
      </div>

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="text-accent uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-4 block">
            Serving Orange County Since 1999
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-bold text-white uppercase tracking-tighter leading-none mb-6">
            Premium Gates, <br className="hidden md:block"/>
            Railings & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-white animate-text-shimmer bg-[length:200%_auto]">Metalwork</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Elevate your property's security and curb appeal. <br className="hidden md:block" />
          Family-owned, precision engineered, and built to last.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <Link to="/contact">
              <Button variant="premium" size="lg" className="h-14 px-8 text-lg w-full md:w-auto shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-shadow">
                Get a Free Estimate
              </Button>
          </Link>
          <Link to="/portfolio">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg w-full md:w-auto border-white/20 text-white hover:bg-white/10 group">
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
          </Link>
        </motion.div>

        {/* Trust Signals Row */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8 text-white/60 text-sm md:text-base font-medium"
        >
            <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span>{companyInfo.license}</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-white/20 rounded-full"></div>
            <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                <span>25+ Years Experience</span>
            </div>
             <div className="hidden md:block w-1 h-1 bg-white/20 rounded-full"></div>
            <div className="flex items-center gap-2">
                <Hammer className="w-5 h-5 text-accent" />
                <span>Custom Design & Install</span>
            </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </motion.div>
    </section>
  )
}

export default Hero

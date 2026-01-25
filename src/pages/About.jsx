import { motion, useScroll, useTransform } from "framer-motion"
import { companyInfo, testimonials } from "@/data/siteData"
import { Check, Star } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const AboutPage = () => {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <div className="bg-black min-h-screen pt-20">
      {/* Simple Header - Straight to the point */}
      <section className="pt-32 pb-12 bg-black border-b border-white/5 relative overflow-hidden">
        {/* Subtle texture/gradient */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="text-zinc-400 text-sm">5.0 Star Rated · 2 Reviews</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white uppercase mb-4"
          >
            Premier Iron Works in <span className="text-accent">Orange County</span>
          </motion.h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
            Family-owned craftsmanship serving all of Orange County since 2010.
          </p>
        </div>
      </section>

      {/* Testimonials - Elevated for Social Proof */}
      <section className="py-16 bg-zinc-950 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent uppercase tracking-widest text-sm font-bold">Client Stories</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase mt-2">What They Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, index) => (
              <motion.div 
                key={t.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="bg-secondary/20 p-8 rounded-lg border border-white/5 hover:border-accent/20 transition-all"
              >
                <div className="flex gap-1 mb-4 text-accent">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/80 italic mb-6">"{t.text}"</p>
                <div>
                  <h4 className="text-white font-bold font-heading uppercase">{t.name}</h4>
                  <span className="text-sm text-muted-foreground">{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story / Mission */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase mb-6">Forged in Excellence</h2>
            <div className="space-y-6 text-base md:text-lg text-zinc-300 leading-relaxed font-light">
              <p>
                Established in 2010, {companyInfo.name} brings over 25 years of specialized expertise to Orange County's premium iron works and metal fabrication industry.
              </p>
              <p>
                As a family-owned business, we take personal pride in every weld, grind, and finish. We don't just build gates and railings; we create architectural assets that enhance the security and value of your property.
              </p>
              <p>
                Our license (<span className="font-mono text-accent">{companyInfo.license}</span>) is a promise of our professionalism and adherence to the highest safety and building standards.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
              {["Licensed & Bonded", "Family Owned", "25+ Years Exp", "Custom Design"].map((item, index) => (
                <motion.div 
                  key={item} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-white/90 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-bold text-sm uppercase tracking-wide">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <Link to="/contact">
                <Button size="lg" className="w-full md:w-auto bg-accent text-black hover:bg-white font-bold text-lg px-8 h-14 hover:scale-105 transition-transform">
                  Request Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative aspect-square md:aspect-[4/5] bg-zinc-900 rounded-lg overflow-hidden border border-white/5 group"
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/about-workshop.png" 
              alt="Master welder in workshop" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60"></div>
            
            {/* Caption Overlay */}
            <div className="absolute bottom-6 left-6 right-6 border-l-2 border-accent pl-4">
              <span className="block text-accent text-xs font-bold uppercase tracking-widest mb-1">Craftsmanship</span>
              <span className="block text-white font-heading font-bold text-xl uppercase">Precision in Every Weld</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

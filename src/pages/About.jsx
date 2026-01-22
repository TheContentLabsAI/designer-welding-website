import { motion } from "framer-motion"
import { companyInfo, testimonials } from "@/data/siteData"
import { Check, Star } from "lucide-react"

const AboutPage = () => {
  return (
    <div className="bg-black min-h-screen pt-20">
      {/* Hero */}
      <section className="py-12 bg-secondary/10 border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold text-white uppercase mb-4"
          >
            Who We <span className="text-accent">Are</span>
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {companyInfo.tagline}
          </p>
        </div>
      </section>

      {/* Story / Mission */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-heading font-bold text-white uppercase">Forged in Excellence</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded over 25 years ago, {companyInfo.name} began with a simple mission: to raise the standard of custom metal fabrication in Orange County.
              </p>
              <p>
                As a family-owned business, we take personal pride in every weld, grind, and finish. We don't just build gates and railings; we create architectural assets that enhance the security and value of your property.
              </p>
              <p>
                Our license ({companyInfo.license}) is a promise of our professionalism and adherence to the highest safety and building standards.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {["Licensed & Bonded", "Family Owned", "25+ Years Exp", "Custom Design"].map(item => (
                <div key={item} className="flex items-center gap-3 text-white">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-[4/5] bg-zinc-900 rounded-lg overflow-hidden border border-white/5">
             {/* Placeholder for About Image */}
             <div className="absolute inset-0 flex items-center justify-center text-white/5 font-heading text-4xl uppercase font-bold transform -rotate-12">
               Team / Workshop Image
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card border-y border-white/5">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
            <span className="text-accent uppercase tracking-widest text-sm font-bold">Client Stories</span>
            <h2 className="text-4xl font-heading font-bold text-white uppercase mt-2">What They Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-secondary/20 p-8 rounded-lg border border-white/5">
                <div className="flex gap-1 mb-4 text-accent">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/80 italic mb-6">"{t.text}"</p>
                <div>
                  <h4 className="text-white font-bold font-heading uppercase">{t.name}</h4>
                  <span className="text-sm text-muted-foreground">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

import { motion } from "framer-motion"
import { ChevronRight, Quote } from "lucide-react"
import { Link } from "react-router-dom"
import { services } from "@/data/siteData"
import { Button } from "@/components/ui/button"

// Benefit-focused service data (Hack #9: Lead with benefits, not features)
const serviceBenefits = {
  "railings": {
    benefit: "Safety Meets Style for Any Property",
    outcome: "Code-compliant railings that protect people while enhancing your property's aesthetic and value",
    testimonial: {
      quote: "The commercial stair railings look premium and passed inspection perfectly.",
      author: "David R., Property Manager"
    }
  },
  "gates": {
    benefit: "Premium Security for Homes & Businesses",
    outcome: "Custom gates that protect your property while making a powerful first impression on visitors",
    testimonial: {
      quote: "Our office gate looks professional and keeps the property secure 24/7.",
      author: "Lisa K., Business Owner"
    }
  },
  "fences": {
    benefit: "Privacy & Peace of Mind",
    outcome: "Durable fencing that keeps kids and pets safe while defining your property with style",
    testimonial: {
      quote: "Pool fence looks amazing and we finally have peace of mind with the kids.",
      author: "Jennifer L., Huntington Beach"
    }
  },
  "doors-windows": {
    benefit: "Modern Security That Impresses",
    outcome: "Iron doors and window guards that stop intruders without the prison-bar look",
    testimonial: {
      quote: "Our security door gets compliments from every visitor. Looks high-end, not cheap.",
      author: "David K., Laguna Beach"
    }
  }
}

const Services = () => {
  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-4">
        {/* Section Header - Conversational (Hack #5) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-bold mb-3 block">What We Do Best</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-4">
            More Than Metal - <span className="text-accent">It's Peace of Mind</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Trusted by 500+ residential and commercial clients across Orange County for premium metal fabrication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const benefit = serviceBenefits[service.id];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-zinc-900 border border-white/5 rounded-xl p-8 hover:border-accent/30 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 blur-3xl rounded-full group-hover:bg-accent/40 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-accent group-hover:scale-110 transition-transform">
                      <Icon className="w-12 h-12" />
                    </div>
                    <Link to={`/services#${service.id}`}>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-zinc-500 hover:text-accent"
                      >
                        Learn More <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>

                  {/* Benefit-Focused Headline (Hack #9) */}
                  <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {benefit.benefit}
                  </h3>
                  
                  {/* Conversational Copy (Hack #5) */}
                  <p className="text-zinc-300 text-base leading-relaxed mb-4">
                    {benefit.outcome}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 3).map(feature => (
                      <span key={feature} className="text-xs uppercase tracking-wider px-3 py-1 bg-white/5 rounded-full text-white/60 border border-white/10">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Testimonial with Intent (Hack #6) */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex gap-3">
                      <Quote className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-zinc-400 italic mb-2">
                          "{benefit.testimonial.quote}"
                        </p>
                        <p className="text-xs text-accent font-semibold">
                          - {benefit.testimonial.author}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA with Booster (Hack #11) */}
        <div className="text-center mt-12">
          <Link to="/#hero-form" onClick={(e) => {
            e.preventDefault()
            document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            <Button variant="premium" size="lg" className="group">
              Get Your Free Quote <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-xs text-zinc-500 mt-3">
            Free consultation • Fast quotes • Licensed & insured
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services

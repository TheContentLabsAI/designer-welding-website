import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { services } from "@/data/siteData"

const Services = () => {
  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
          <div>
             <span className="text-accent uppercase tracking-widest text-sm font-bold mb-2 block">Our Expertise</span>
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">What We Build</h2>
          </div>
          <p className="text-zinc-400 max-w-md mt-6 md:mt-0">
            Blending aesthetics with structural integrity to create enduring metal works for your property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-[350px]"
              >
                <Link 
                  to={`/services#${service.id}`}
                  className="group relative h-full bg-zinc-900 border border-white/5 p-8 flex flex-col justify-between hover:bg-zinc-800 hover:border-accent/30 transition-all duration-500 rounded-lg overflow-hidden cursor-pointer"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="text-accent w-6 h-6" />
                  </div>
                  
                  <div className="text-zinc-500 group-hover:text-white transition-colors duration-500">
                    <Icon className="w-12 h-12" />
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-4 group-hover:text-white/70">{service.shortDesc}</p>
                    
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 delay-100">
                      {service.features.slice(0, 2).map(feature => (
                        <span key={feature} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 rounded text-white/70">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                   {/* Hover Glow */}
                   <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 blur-3xl rounded-full group-hover:bg-accent/40 transition-all duration-500"></div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

import { motion } from "framer-motion"
import { services, portfolioCategories } from "@/data/siteData"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Hammer } from "lucide-react"
import { Link } from "react-router-dom"

const ServicesPage = () => {
  return (
    <div className="bg-black min-h-screen pt-20">
      {/* Hero */}
      {/* Simple Header - Straight to the point */}
      <section className="pt-20 pb-8 bg-black border-b border-white/5 relative overflow-hidden">
        {/* Subtle texture/gradient, not overwhelming */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white uppercase mb-4"
          >
            Premium Metal Fabrication in <span className="text-accent">Orange County</span>
          </motion.h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
            Expert craftsmanship serving homeowners and businesses across all of Orange County.
          </p>

          {/* Quick Service Areas/Trust - Compact */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-500 font-medium uppercase tracking-wider">
             <span className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Licensed & Bonded</span>
             <span className="hidden md:inline text-zinc-800">•</span>
             <span className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Structural & Ornamental</span>
             <span className="hidden md:inline text-zinc-800">•</span>
             <span className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Residential & Commercial</span>
          </div>
        </div>
      </section>

      {/* Intro - Simplified */}
      <section className="py-8 bg-zinc-950">
        <div className="container mx-auto px-4">
            {/* Quick Nav Grid - Compact */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {portfolioCategories.slice(0, 8).map((item, index) => (
                    <Link 
                        key={item} 
                        to={`/portfolio?category=${encodeURIComponent(item)}`}
                        className="group p-4 bg-zinc-900/50 border border-white/5 hover:border-accent/40 rounded-lg transition-all hover:bg-zinc-800 flex items-center justify-between"
                    >
                        <span className="text-xs md:text-sm font-bold text-zinc-400 group-hover:text-white uppercase text-left">{item}</span>
                        <ArrowRight className="w-3 h-3 text-white/10 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </Link>
                ))}
            </div>
            
            <div className="text-center mt-8 mb-6">
                 <Link to="/contact">
                    <Button variant="premium" className="px-8 h-12">Get a Free Estimate</Button>
                 </Link>
            </div>
        </div>
      </section>

      {/* Core Services Breakdown */}
      <section className="py-12 container mx-auto px-4 space-y-16 md:space-y-20">
        <div className="text-center mb-16">
            <span className="text-accent uppercase tracking-widest text-sm font-bold block mb-2">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">Detailed Services</h2>
        </div>

        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;

          return (
             <div key={service.id} id={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 md:gap-12 lg:gap-24 scroll-mt-24`}>
               {/* Content */}
               <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
                 
                 <div>
                    <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase mb-4 text-accent">{service.title}</h2>
                    <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {service.fullDesc}
                    </p>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 max-w-lg mx-auto lg:mx-0 text-left">
                   {service.features.map(feature => (
                     <div key={feature} className="flex items-center gap-3 text-white/80 bg-white/5 px-4 py-3 rounded-lg border border-white/5">
                       <Check className="w-4 h-4 text-accent shrink-0" />
                       <span className="text-sm font-medium">{feature}</span>
                     </div>
                   ))}
                 </div>

                 <Link to="/contact">
                    <Button variant="outline" className="mt-4 border-white/20 text-white hover:bg-accent hover:text-black uppercase tracking-wide font-bold h-12 px-8">
                    Request Consultation
                    </Button>
                 </Link>
               </div>

               {/* Visual Placeholder / Image */}
               <div className="flex-1 w-full aspect-[4/3] bg-zinc-900 rounded-2xl border border-white/10 relative overflow-hidden group shadow-2xl">
                 <img 
                    src={service.image} 
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                 
                 {/* Icon Overlay */}
                 <div className="absolute bottom-6 left-6 flex items-center gap-4">
                    <div className="border border-white/20 p-3 rounded-full bg-black/60 backdrop-blur-md text-accent">
                        <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-heading text-xl uppercase font-bold tracking-widest text-white">{service.title}</span>
                 </div>
                 
                 {/* Decorative Corner Accents */}
                 <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent/20 rounded-tl-2xl"></div>
                 <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent/20 rounded-br-2xl"></div>
               </div>
             </div>
          )
        })}
      </section>

      {/* Final Lead Gen CTA - simplified copy */}
      <section className="py-24 bg-accent text-black">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 uppercase">Ready to start?</h2>
            <p className="text-xl font-medium mb-8 max-w-2xl mx-auto">
                Call us or send a message to discuss your project.
            </p>
            <Link to="/contact">
                <Button size="lg" className="bg-black text-white hover:bg-black/80 border-none text-lg px-12 py-6 h-auto">
                    Start Your Project
                </Button>
            </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

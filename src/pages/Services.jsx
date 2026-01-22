import { motion } from "framer-motion"
import { services, portfolioCategories } from "@/data/siteData"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Hammer } from "lucide-react"
import { Link } from "react-router-dom"

const ServicesPage = () => {
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
            Custom Metal <span className="text-accent">Fabrication</span>
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Review our full list of services. If it's made of metal, we can build it.
          </p>
        </div>
      </section>

      {/* Intro / Value Prop */}
      <section className="py-16 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
             <h2 className="text-2xl font-bold text-white mb-4">Designer Welding</h2>
             <p className="text-muted-foreground mb-6">
                We handle every aspect of your project: design, engineering, and installation. 
                From <strong className="text-white">motorized driveway gates</strong> to <strong className="text-white">security windows</strong>, we use premium materials and over 25 years of experience to get the job done right.
             </p>
             <Link to="/contact">
                <Button variant="premium" className="px-8">Get a Free Estimate</Button>
             </Link>
        </div>
      </section>

      {/* FULL LIST GRID - "What We Build" */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <span className="text-accent uppercase tracking-widest text-sm font-bold">Every Category</span>
                <h2 className="text-4xl font-heading font-bold text-white uppercase mt-2">What We Build</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {portfolioCategories.map((item, index) => (
                    <Link 
                        key={item} 
                        to={`/portfolio?category=${encodeURIComponent(item)}`}
                        className="group block p-6 bg-zinc-900 border border-white/5 rounded-xl hover:border-accent/40 transition-all hover:bg-zinc-800"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <Hammer className="w-6 h-6 text-accent/50 group-hover:text-accent transition-colors" />
                            <ArrowRight className="w-4 h-4 text-white/20 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors uppercase">{item}</h3>
                        <p className="text-sm text-muted-foreground mt-2">View Projects &rarr;</p>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* Core Services Breakdown */}
      <section className="py-24 container mx-auto px-4 space-y-32">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white uppercase mt-2">Detailed Services</h2>
        </div>

        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;

          return (
             <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
               {/* Content */}
               <div className="flex-1 space-y-6">
                 <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4">
                   <Icon className="w-8 h-8" />
                 </div>
                 <h2 className="text-3xl font-heading font-bold text-white uppercase">{service.title}</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                   {service.fullDesc}
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                   {service.features.map(feature => (
                     <div key={feature} className="flex items-center gap-3 text-white/80">
                       <Check className="w-5 h-5 text-accent" />
                       <span>{feature}</span>
                     </div>
                   ))}
                 </div>

                 <Link to="/contact">
                    <Button variant="outline" className="mt-4 border-white/20 text-white hover:bg-white/5">
                    Get a {service.title} Quote
                    </Button>
                 </Link>
               </div>

               {/* Visual Placeholder */}
               <div className="flex-1 w-full aspect-[4/3] bg-zinc-900 rounded-xl border border-white/10 relative overflow-hidden group">
                 <div className="absolute inset-0 flex items-center justify-center text-white/10 font-heading text-4xl uppercase font-bold">
                   {service.title} Image
                 </div>
                 <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

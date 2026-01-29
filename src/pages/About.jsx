import { motion, useScroll, useTransform } from "framer-motion"
import { companyInfo } from "@/data/siteData"
import { Check, Shield, PenTool, Hammer, Truck, Award, Users, Clock } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import ReviewWidget from "@/components/common/ReviewWidget"
import { useEffect } from "react"

const AboutPage = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, -50]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGetProQuote = (e) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
        navigate("/", { state: { scrollTo: "hero-form" } });
    } else {
        document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const processSteps = [
    {
      icon: Clock,
      title: "Consultation & Quote",
      desc: "Fast, free onsite evaluation to understand your vision and provide a transparent estimate."
    },
    {
      icon: PenTool,
      title: "Custom Design",
      desc: "We create detailed CAD drawings so you can visualize your project before we build."
    },
    {
      icon: Hammer,
      title: "Precision Fabrication",
      desc: "Handcrafted in our local shop using premium-grade American steel and expert welding techniques."
    },
    {
      icon: Truck,
      title: "Professional Install",
      desc: "Clean, efficient installation by our licensed team. We treat your property with absolute respect."
    }
  ];

  return (
    <div className="bg-black min-h-screen pt-20">
      
      {/* 1. AUTHORITY HERO */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
              <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                Established 2010 • CSLB {companyInfo.license.replace(/\D/g,'')}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white uppercase mb-6 leading-tight max-w-5xl mx-auto">
                Orange County's <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent">Most Trusted Ironworks</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                For over a decade, we've set the standard for custom metal fabrication, combining old-world craftsmanship with modern design innovation.
              </p>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR STORY & VALUES */}
      <section className="py-24 bg-zinc-950 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase mb-6">Forged in Excellence</h2>
                <div className="w-20 h-1 bg-accent mb-6"></div>
            </div>
            
            <div className="space-y-6 text-base md:text-lg text-zinc-300 leading-relaxed font-light">
              <p>
                {companyInfo.name} was founded on a simple principle: <span className="text-white font-medium">Quality without compromise.</span> In an industry where cutting corners is common, we chose to double down on durability and detail.
              </p>
              <p>
                As a family-owned business, we take personal pride in every weld, grind, and finish. We don't just build gates and railings; we create architectural assets that enhance the security and value of your property for decades to come.
              </p>
              <div className="bg-white/5 border-l-4 border-accent p-6 rounded-r-lg">
                <p className="italic text-white">
                  "Our license ({companyInfo.license}) isn't just a number—it's our promise of safety, compliance, and professional accountability."
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
               <div className="flex items-center gap-3">
                   <Users className="w-6 h-6 text-accent" />
                   <span className="text-white font-bold uppercase text-sm">Family Owned</span>
               </div>
               <div className="flex items-center gap-3">
                   <Award className="w-6 h-6 text-accent" />
                   <span className="text-white font-bold uppercase text-sm">25+ Years Exp.</span>
               </div>
               <div className="flex items-center gap-3">
                   <Shield className="w-6 h-6 text-accent" />
                   <span className="text-white font-bold uppercase text-sm">Licensed & Bonded</span>
               </div>
               <div className="flex items-center gap-3">
                   <Check className="w-6 h-6 text-accent" />
                   <span className="text-white font-bold uppercase text-sm">Satisfaction Guarantee</span>
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative aspect-square md:aspect-[4/5] bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 group shadow-2xl"
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/service-gates.png" 
              alt="Custom iron fence and gate installation" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
            
            <div className="absolute bottom-10 left-10 right-10">
              <div className="bg-black/80 backdrop-blur-md p-6 rounded-xl border border-white/10">
                  <span className="block text-accent text-xs font-bold uppercase tracking-widest mb-2">Our Standard</span>
                  <span className="block text-white font-heading font-black text-2xl uppercase leading-none">"We build it right the first time."</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THE PROCESS (New Section) */}
      <section className="py-24 bg-zinc-900 relative border-y border-white/5">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                 <span className="text-accent uppercase tracking-widest text-sm font-bold">The Experience</span>
                 <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase mt-2">How We Work</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-black border border-white/10 p-8 rounded-2xl hover:border-accent/40 transition-colors group relative"
                        >
                            <div className="absolute -top-6 left-8 bg-zinc-900 text-white font-black text-4xl w-12 h-12 flex items-center justify-center rounded-lg border border-white/10 group-hover:text-accent transition-colors">
                                {index + 1}
                            </div>
                            <div className="mt-6 mb-6">
                                <Icon className="w-10 h-10 text-accent mb-4" />
                                <h3 className="text-xl font-bold text-white uppercase mb-3">{step.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
         </div>
      </section>

      {/* 4. SOCIAL PROOF */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent uppercase tracking-widest text-sm font-bold">Client Stories</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase mt-2">What They Say</h2>
          </div>
          <ReviewWidget />
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 bg-accent text-black relative">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase">Ready to Start?</h2>
            <p className="text-xl font-medium mb-8 max-w-2xl mx-auto opacity-90">
                Let's discuss your project. Fast response, no obligation, free estimate.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                    size="lg" 
                    onClick={handleGetProQuote}
                    className="bg-black text-white hover:bg-black/80 border-none text-lg px-12 py-8 h-auto shadow-2xl uppercase font-black"
                >
                    Get Free Quote
                </Button>
            </div>
        </div>
      </section>

    </div>
  )
}

export default AboutPage

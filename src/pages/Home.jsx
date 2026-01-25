import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"
import FeaturedWorks from "@/components/gallery/FeaturedWorks"
import LeadForm from "@/components/forms/LeadForm"
import TrustStrip from "@/components/home/TrustStrip"
import ValueProp from "@/components/home/ValueProp"
import ProcessTimeline from "@/components/home/ProcessTimeline"
import Testimonials from "@/components/home/Testimonials"
import FAQ from "@/components/home/FAQ"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* 1. Hook & Authority - Dark */}
      <Hero />
      
      {/* 2. Immediate Trust & Credibility - Light */}
      <TrustStrip />
      
      {/* 3. The "Problem" & "Solution" - Light */}
      <ValueProp />
      
      {/* 6. Services - Light */}
      <Services />

      {/* 4. Process - Light */}
      <ProcessTimeline />
      
      {/* 5. Portfolio - Light */}
      <FeaturedWorks />
      
      {/* 7. Social Proof - Light */}
      <Testimonials />

      {/* 8. FAQ - Light */}
      <FAQ />
      
      {/* 9. Final CTA - Dark for impact at end */}
      <section className="py-24 bg-zinc-900 border-t border-zinc-800 relative overflow-hidden" id="contact">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <span className="text-accent uppercase tracking-widest text-sm font-bold block">Start Your Project</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase leading-tight">
                Ready to Forge <br/>Something <span className="text-accent">Legendary?</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Whether you need a custom driveway gate, a modern stairway railing, or structural steel, our master craftsmen are ready to bring your vision to life.
              </p>
              
              <div className="pt-8 border-t border-white/5 mt-8">
                 <h4 className="text-white font-heading font-bold text-xl mb-4">Why Choose Us?</h4>
                 <ul className="space-y-4">
                   {["Over 25 Years of Expertise", "Master Certified Welders", "Premium Materials & Finishes", "Lifetime Structural Warranty"].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-muted-foreground">
                       <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                       {item}
                     </li>
                   ))}
                 </ul>
              </div>
            </div>

            <div className="relative z-20">
               {/* Glow effect behind form */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-3xl rounded-full -z-10"></div>
               <LeadForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

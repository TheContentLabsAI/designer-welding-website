import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"
import FeaturedWorks from "@/components/gallery/FeaturedWorks"
import TrustStrip from "@/components/home/TrustStrip"
import ValueProp from "@/components/home/ValueProp"
import ProcessTimeline from "@/components/home/ProcessTimeline"
import Testimonials from "@/components/home/Testimonials"
import FAQ from "@/components/home/FAQ"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

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
      
      {/* 9. Final CTA - Direct Contact (No Form) */}
      <section className="py-24 bg-zinc-900 border-t border-zinc-800 relative overflow-hidden" id="contact">
        <div className="container mx-auto px-4 relative z-10">
          
          {/* TL;DR Summary for Quick-Deciders (Hack #10) */}
          <div className="max-w-4xl mx-auto">
            {/* Quick Summary */}
            <div className="text-center mb-16">
              <span className="text-accent uppercase tracking-widest text-sm font-bold mb-3 block">Ready to Get Started?</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase leading-tight mb-4">
                Premium Metal Work.<br/>
                <span className="text-accent">Zero Hassle.</span>
              </h2>
              <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Get a custom quote in 48 hours. Expert consultation and installation. Backed by 25+ years of craftsmanship.
              </p>
            </div>

            {/* Comparison Table (Hack #8) */}
            <div className="bg-zinc-950 border border-white/10 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-heading font-bold text-white text-center mb-8">
                Why Choose Designer Welding?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* DIY */}
                <div className="text-center p-6 bg-zinc-900/50 rounded-lg border border-white/5">
                  <div className="text-zinc-500 font-bold uppercase text-sm mb-4">DIY Approach</div>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 shrink-0">✗</span>
                      <span>Weeks of trial & error</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 shrink-0">✗</span>
                      <span>Safety risks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 shrink-0">✗</span>
                      <span>No warranty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 shrink-0">✗</span>
                      <span>Amateur finish</span>
                    </li>
                  </ul>
                </div>

                {/* Generic Contractors */}
                <div className="text-center p-6 bg-zinc-900/50 rounded-lg border border-white/5">
                  <div className="text-zinc-500 font-bold uppercase text-sm mb-4">Generic Contractors</div>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 shrink-0">~</span>
                      <span>Cookie-cutter designs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 shrink-0">~</span>
                      <span>Inconsistent quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 shrink-0">~</span>
                      <span>Limited customization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 shrink-0">~</span>
                      <span>Basic materials</span>
                    </li>
                  </ul>
                </div>

                {/* Designer Welding */}
                <div className="text-center p-6 bg-accent/10 rounded-lg border-2 border-accent relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-black text-xs font-bold uppercase px-3 py-1 rounded-full">
                    Best Choice
                  </div>
                  <div className="text-accent font-bold uppercase text-sm mb-4 mt-2">Designer Welding</div>
                  <ul className="space-y-3 text-sm text-white">
                    <li className="flex items-start gap-2">
                      <span className="text-accent shrink-0">✓</span>
                      <span>Custom fabrication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent shrink-0">✓</span>
                      <span>25+ years expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent shrink-0">✓</span>
                      <span>Lifetime warranty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent shrink-0">✓</span>
                      <span>Premium materials</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Section - No Form */}
            <div className="text-center">
              <h3 className="text-3xl font-heading font-bold text-white mb-6">
                Let's Discuss Your Project
              </h3>
              <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto">
                Serving residential and commercial clients across Orange County. Call or email us today for a free consultation.
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:7145806994" className="group">
                  <Button variant="premium" size="lg" className="w-full sm:w-auto">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (714) 580-6994
                  </Button>
                </a>
                <a href="mailto:designerwelding1@gmail.com" className="group">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </Button>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-white/10 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-accent font-bold text-lg mb-1">Residential & Commercial</div>
                    <p className="text-zinc-400 text-sm">Homes, businesses, HOAs</p>
                  </div>
                  <div>
                    <div className="text-accent font-bold text-lg mb-1">Licensed & Insured</div>
                    <p className="text-zinc-400 text-sm">License #B39723</p>
                  </div>
                  <div>
                    <div className="text-accent font-bold text-lg mb-1">Orange County</div>
                    <p className="text-zinc-400 text-sm">Serving all OC cities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

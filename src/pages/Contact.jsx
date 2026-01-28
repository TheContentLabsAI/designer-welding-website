import { motion } from "framer-motion"
import { companyInfo } from "@/data/siteData"
import LeadForm from "@/components/forms/LeadForm"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const ContactPage = () => {
  return (
    <div className="bg-black min-h-screen pt-20">
      <section className="pt-12 pb-8 bg-black border-b border-white/5 relative overflow-hidden">
        {/* Subtle texture/gradient */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white uppercase mb-4"
          >
            Get a Quote in <span className="text-accent">Orange County</span>
          </motion.h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Expert fabrication for residential and commercial projects.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-heading font-bold text-white uppercase mb-6">Contact Info</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase mb-1">Visit Us</h4>
                    <p className="text-muted-foreground">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase mb-1">Call Us</h4>
                    <a href={`tel:${companyInfo.phone.replace(/\D/g,'')}`} className="text-xl text-muted-foreground hover:text-white transition-colors block py-1">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase mb-1">Email Us</h4>
                    <a href={`mailto:${companyInfo.email}`} className="text-lg text-muted-foreground hover:text-white transition-colors block py-1 break-all">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">{companyInfo.businessHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full aspect-video bg-zinc-900 rounded-xl border border-white/10 overflow-hidden relative">
               <div className="absolute inset-0 flex items-center justify-center text-white/20 font-heading font-bold uppercase">
                  Google Map Embed Code Here
               </div>
               {/* In a real app, embed iframe here using companyInfo.address */}
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5646193798!2d-118.00330962369408!3d33.77194687326359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd28963aaf11ad%3A0x6b8eb7c223594d75!2s7566%20Park%20Ave%2C%20Garden%20Grove%2C%20CA%2092841!5e0!3m2!1sen!2sus!4v1709228340000!5m2!1sen!2sus" 
                 width="100%" 
                 height="100%" 
                 style={{border:0, filter: "grayscale(100%) invert(92%) contrast(83%)"}} 
                 allowFullScreen="" 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          {/* Form Side */}
          <div>
             <LeadForm />
          </div>

        </div>
      </section>
    </div>
  )
}

export default ContactPage

import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"
import { companyInfo, services } from "@/data/siteData"

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/images/Logos/WhiteColor Long Logo.png" 
                alt="Designer Welding" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {companyInfo.tagline}
            </p>
            <p className="text-muted-foreground text-sm font-bold">
              {companyInfo.license}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href={`tel:${companyInfo.phone.replace(/\D/g,'')}`} className="hover:text-white transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-heading font-bold mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Follow us on Facebook"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Follow us on Instagram"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

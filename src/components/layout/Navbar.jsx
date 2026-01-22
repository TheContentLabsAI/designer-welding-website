import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { companyInfo, portfolioCategories } from "@/data/siteData"

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Our Works", href: "/portfolio", hasDropdown: true },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]
  
  // Note: Body scroll lock is now handled in App.jsx

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-2 shadow-lg"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-heading font-bold text-white tracking-widest uppercase relative z-50">
          Designer<span className="text-accent">Welding</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors uppercase tracking-wide flex items-center gap-1 py-4",
                      location.pathname === link.href 
                        ? "text-accent" 
                        : "text-white/90 group-hover:text-accent"
                    )}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </Link>

                  {/* Desktop Dropdown */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 top-full pt-2"
                      >
                         <div className="bg-zinc-950 border border-white/10 rounded-lg shadow-xl w-64 max-h-[70vh] overflow-y-auto">
                            <div className="p-2 grid gap-1">
                              {portfolioCategories.map((cat) => (
                                <Link
                                  key={cat}
                                  to={`/portfolio?category=${encodeURIComponent(cat)}`}
                                  className="block px-4 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-accent rounded-md transition-colors text-left"
                                  onClick={() => setIsDropdownOpen(false)}
                                >
                                  {cat}
                                </Link>
                              ))}
                            </div>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }
            return (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors uppercase tracking-wide",
                  location.pathname === link.href 
                    ? "text-accent" 
                    : "text-white/90 hover:text-accent"
                )}
              >
                {link.name}
              </Link>
            )
          })}
          <a href={`tel:${companyInfo.phone.replace(/\D/g,'')}`}>
            <Button variant="premium" size="sm" className="ml-4">
              <Phone className="w-4 h-4 mr-2" />
              {companyInfo.phone}
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-accent transition-colors relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Internal Mobile Menu Removed - Rendered in App.jsx */}
    </nav>
  )
}

export default Navbar

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { companyInfo, portfolioStructure } from "@/data/siteData"

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
        <Link to="/" className="relative z-50 flex items-center">
          <img 
            src="/images/Logos/WhiteColor Long Logo.png" 
            alt="Designer Welding" 
            className="h-8 md:h-10 w-auto object-contain"
          />
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
                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </Link>

                  {/* Desktop Dropdown - Hierarchical */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 top-full pt-2"
                      >
                         <div className="bg-zinc-950 border border-white/10 rounded-lg shadow-xl w-[600px] max-h-[70vh] overflow-y-auto">
                            <div className="p-4">
                              {/* View All Link */}
                              <Link
                                to="/portfolio"
                                className="block px-4 py-3 text-sm font-semibold text-accent hover:bg-white/5 rounded-md transition-colors mb-3 border-b border-white/5"
                                onClick={() => setIsDropdownOpen(false)}
                              >
                                View All Works →
                              </Link>

                              {/* Main Categories Grid */}
                              <div className="grid grid-cols-2 gap-4">
                                {Object.entries(portfolioStructure).map(([key, category]) => (
                                  <div key={key} className="space-y-2">
                                    {/* Main Category Header */}
                                    <Link
                                      to={`/portfolio?category=${key}`}
                                      className="block px-3 py-2 text-sm font-bold text-white hover:text-accent transition-colors uppercase tracking-wider"
                                      onClick={() => setIsDropdownOpen(false)}
                                    >
                                      {category.title}
                                    </Link>
                                    
                                    {/* Subcategories */}
                                    <div className="space-y-1 pl-2">
                                      {Object.entries(category.subcategories).map(([subKey, subcategory]) => (
                                        <Link
                                          key={subKey}
                                          to={`/portfolio?category=${key}&type=${subKey}`}
                                          className="flex items-center gap-1 px-3 py-1.5 text-xs text-muted-foreground hover:bg-white/5 hover:text-accent rounded transition-colors"
                                          onClick={() => setIsDropdownOpen(false)}
                                        >
                                          <ChevronRight className="w-3 h-3" />
                                          {subcategory.title}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
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
                className="relative group"
              >
                <motion.span
                  className={cn(
                    "text-sm font-medium uppercase tracking-wide block py-2",
                    location.pathname === link.href 
                      ? "text-accent" 
                      : "text-white/90 hover:text-accent transition-colors"
                  )}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {link.name}
                </motion.span>
              </Link>
            )
          })}
          <a href={`tel:${companyInfo.phone.replace(/\D/g,'')}`}>
            <Button variant="premium" size="sm" className="ml-4" asChild>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Phone className="w-4 h-4 mr-2" />
                    {companyInfo.phone}
                </motion.button>
            </Button>
          </a>
        </div>

      </div>

      {/* Internal Mobile Menu Removed - Rendered in App.jsx */}
    </nav>
  )
}

export default Navbar

import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Home from "@/pages/Home"
import ServicesPage from "@/pages/Services"
import PortfolioPage from "@/pages/Portfolio"
import AboutPage from "@/pages/About"
import ContactPage from "@/pages/Contact"
import { AnimatePresence, motion } from "framer-motion"
import { X, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { companyInfo, portfolioCategories } from "@/data/siteData"

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

import ConversionPopup from "@/components/ui/ConversionPopup"

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-black text-foreground antialiased selection:bg-accent selection:text-black">
        <ConversionPopup />
        
        <Navbar 
          isMobileMenuOpen={isMobileMenuOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
        />

        {/* Global Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[99999] pt-24 px-4 flex flex-col gap-4 overflow-y-auto md:hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-white p-2"
              >
                <X className="w-8 h-8" />
              </button>

              <Link
                to="/portfolio"
                className="flex items-center justify-between text-lg font-medium text-white hover:text-accent py-2 border-b border-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                 Our Works
              </Link>

               {/* Mobile Dropdown for Categories */}
               <div className="border-b border-white/5 pb-2">
                 <button 
                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                   className="w-full flex items-center justify-between text-lg font-medium text-white hover:text-accent py-2"
                 >
                   Browse Categories
                   <ChevronDown className={cn("w-5 h-5 transition-transform", isDropdownOpen && "rotate-180")} />
                 </button>
                 
                 <AnimatePresence>
                   {isDropdownOpen && (
                     <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: "auto", opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       className="overflow-hidden pl-4 space-y-2 mt-2"
                     >
                        {portfolioCategories.map((cat) => (
                          <Link
                            key={cat}
                            to={`/portfolio?category=${encodeURIComponent(cat)}`}
                            className="block text-muted-foreground hover:text-white py-1 text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {cat}
                          </Link>
                        ))}
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>

              <Link
                to="/services"
                className="text-lg font-medium text-white hover:text-accent py-2 border-b border-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-lg font-medium text-white hover:text-accent py-2 border-b border-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-lg font-medium text-white hover:text-accent py-2 border-b border-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <a href={`tel:${companyInfo.phone.replace(/\D/g,'')}`} className="w-full mt-4 pb-8">
                <Button variant="premium" className="w-full">
                  Call {companyInfo.phone}
                </Button>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const ConversionPopup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasSeen, setHasSeen] = useState(false)

  useEffect(() => {
    // Check if user has already seen/dismissed the popup
    const seen = localStorage.getItem("hasSeenPopup")
    if (seen) {
      setHasSeen(true)
      return
    }

    const handleExitIntent = (e) => {
      // If mouse leaves the top of the window
      if (e.clientY <= 0 && !hasSeen && !isVisible) {
        setIsVisible(true)
      }
    }

    // Time delay fallback for mobile (or passive desktop users)
    const timer = setTimeout(() => {
      if (!hasSeen && !isVisible) {
        setIsVisible(true)
      }
    }, 15000) // 15 seconds

    document.addEventListener("mouseleave", handleExitIntent)

    return () => {
      document.removeEventListener("mouseleave", handleExitIntent)
      clearTimeout(timer)
    }
  }, [hasSeen, isVisible])

  const handleClose = () => {
    setIsVisible(false)
    setHasSeen(true)
    localStorage.setItem("hasSeenPopup", "true")
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-zinc-900 border border-accent/20 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Gold Accents */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 text-center">
              <span className="text-accent uppercase tracking-widest text-xs font-bold mb-2 block">
                Wait! Don't leave yet
              </span>
              <h3 className="text-3xl font-heading font-bold text-white mb-4 uppercase leading-none">
                Get Your Free <br/> <span className="text-accent">Project Estimate</span>
              </h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                Planning a custom gate, railing, or structural project? 
                Get a fast, accurate quote from our master craftsmen today.
              </p>
              
              <div className="flex flex-col gap-3">
                <Link to="/contact" onClick={handleClose}>
                  <Button variant="premium" className="w-full text-base h-12">
                    Get My Free Quote
                  </Button>
                </Link>
                <button 
                  onClick={handleClose}
                  className="text-xs text-white/30 hover:text-white transition-colors underline decoration-white/30 hover:decoration-white"
                >
                  No thanks, I'll browse later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ConversionPopup

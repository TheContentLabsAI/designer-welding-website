import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { portfolioCategories } from "@/data/siteData"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Generate placeholder projects derived from categories
const allProjects = portfolioCategories.map((cat, i) => ({
  id: i + 1,
  title: `${cat} Project ${i + 1}`,
  category: cat,
  image: null // Placeholder
}))

const PortfolioPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const filter = searchParams.get("category") || "All"
  const scrollContainerRef = useRef(null)

  const setFilter = (category) => {
    if (category === "All") {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
        const scrollAmount = 300;
        scrollContainerRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }
  }
  
  // Show all categories with wrapping
  const mainFilters = ["All", ...portfolioCategories]

  const filteredProjects = filter === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === filter)

  return (
    <div className="bg-black min-h-screen pt-20">
      <section className="py-12 bg-secondary/10 border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase mb-4">
            Our <span className="text-accent">Works</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of precision engineering and artistic metalwork.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-white/5 sticky top-20 bg-black/80 backdrop-blur-md z-40 group">
        <div className="container mx-auto px-4 relative flex items-center">
          
          {/* Scroll Buttons - Visible on Desktop */}
          <button 
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-4 z-20 w-8 h-8 items-center justify-center rounded-full bg-black/50 backdrop-blur border border-white/10 text-white/70 hover:text-white hover:bg-black transition-all -translate-x-3 opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Softened Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/60 to-transparent z-10 pointer-events-none"></div>

          <div 
             ref={scrollContainerRef}
             className="flex flex-nowrap gap-3 overflow-x-auto no-scrollbar pb-2 px-2 md:justify-start scroll-smooth w-full"
          >
            {mainFilters.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all border shrink-0",
                  filter === cat 
                    ? "bg-accent text-black border-accent shadow-[0_0_20px_rgba(197,160,89,0.3)] scale-105" 
                    : "bg-zinc-900/50 text-muted-foreground border-white/10 hover:border-white/30 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-4 z-20 w-8 h-8 items-center justify-center rounded-full bg-black/50 backdrop-blur border border-white/10 text-white/70 hover:text-white hover:bg-black transition-all translate-x-3 opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 container mx-auto px-4">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                className="group relative aspect-square bg-zinc-900 rounded-lg overflow-hidden border border-white/5 cursor-pointer"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/5 font-heading font-bold p-4 text-center uppercase">
                  <span className="text-4xl">{project.category}</span>
                  <span className="text-sm mt-2 text-white/20">Placeholder Image</span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-xl font-heading font-bold text-white uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform">{project.title}</h3>
                  <span className="text-accent text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform delay-75">{project.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  )
}

export default PortfolioPage

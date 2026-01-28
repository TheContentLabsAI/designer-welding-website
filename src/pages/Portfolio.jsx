import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { portfolioStructure } from "@/data/siteData"
import portfolioProjects from "@/data/portfolioProjects"
import { cn } from "@/lib/utils"
import { ChevronRight, Home } from "lucide-react"

const PortfolioPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const mainCategory = searchParams.get("category") || "all"
  const subcategory = searchParams.get("type") || "all"
  
  const [selectedMainCategory, setSelectedMainCategory] = useState(mainCategory)
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategory)
  const galleryRef = useRef(null)

  // Update state when URL params change
  useEffect(() => {
    setSelectedMainCategory(mainCategory)
    setSelectedSubcategory(subcategory)
  }, [mainCategory, subcategory])

  const handleMainCategoryClick = (categorySlug) => {
    if (categorySlug === "all") {
      setSearchParams({})
      setSelectedMainCategory("all")
      setSelectedSubcategory("all")
    } else {
      setSearchParams({ category: categorySlug })
      setSelectedMainCategory(categorySlug)
      setSelectedSubcategory("all")
    }
    
    // Auto-scroll to gallery on mobile
    setTimeout(() => {
      if (galleryRef.current && window.innerWidth < 768) {
        galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 300)
  }

  const handleSubcategoryClick = (subSlug) => {
    if (subSlug === "all") {
      setSearchParams({ category: selectedMainCategory })
      setSelectedSubcategory("all")
    } else {
      setSearchParams({ category: selectedMainCategory, type: subSlug })
      setSelectedSubcategory(subSlug)
    }
    
    // Auto-scroll to gallery on mobile
    setTimeout(() => {
      if (galleryRef.current && window.innerWidth < 768) {
        galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 300)
  }

  // Get current category data
  const currentCategoryData = selectedMainCategory !== "all" 
    ? portfolioStructure[selectedMainCategory] 
    : null

  // Get subcategories for current main category
  const subcategories = currentCategoryData 
    ? Object.entries(currentCategoryData.subcategories).map(([key, data]) => ({
        key,
        ...data
      }))
    : []

  // Filter projects based on selection
  const filteredProjects = (() => {
    if (selectedMainCategory === "all") return portfolioProjects
    
    if (selectedSubcategory === "all") {
      // Show all projects from this main category
      return portfolioProjects.filter(p => p.category === selectedMainCategory)
    } else {
      // Show projects from specific subcategory
      return portfolioProjects.filter(p => p.category === selectedMainCategory && p.subcategory === selectedSubcategory)
    }
  })()

  // Breadcrumb data
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Our Works", href: "/portfolio" }
  ]
  
  if (currentCategoryData) {
    breadcrumbs.push({ 
      label: currentCategoryData.title, 
      href: `/portfolio?category=${selectedMainCategory}` 
    })
    
    if (selectedSubcategory !== "all") {
      const subData = currentCategoryData.subcategories[selectedSubcategory]
      breadcrumbs.push({ 
        label: subData.title, 
        href: `/portfolio?category=${selectedMainCategory}&type=${selectedSubcategory}` 
      })
    }
  }

  return (
    <div className="bg-black min-h-screen pt-20">
      {/* Hero Section */}
      <section className="pt-8 pb-6 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-6 overflow-x-auto no-scrollbar" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2 shrink-0">
                {index === 0 && <Home className="w-4 h-4" />}
                {index > 0 && <ChevronRight className="w-4 h-4" />}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-accent font-medium">{crumb.label}</span>
                ) : (
                  <a href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Title & Description */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase mb-4">
              {currentCategoryData ? (
                <>
                  {currentCategoryData.title} <span className="text-accent">Gallery</span>
                </>
              ) : (
                <>
                  Premium Metalwork <span className="text-accent">Gallery</span>
                </>
              )}
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              {currentCategoryData 
                ? currentCategoryData.description
                : "Showcasing custom fabrications for homes and businesses across Orange County."}
            </p>
          </div>
        </div>
      </section>

      {/* Main Category Navigation - Horizontal Scroll */}
      <section className="py-6 border-b border-white/5 sticky top-20 bg-black/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 -mx-4 px-4">
            <button
              onClick={() => handleMainCategoryClick("all")}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all border shrink-0 snap-start min-h-[44px]",
                selectedMainCategory === "all"
                  ? "bg-accent text-black border-accent shadow-[0_0_20px_rgba(197,160,89,0.3)]"
                  : "bg-zinc-900/50 text-muted-foreground border-white/10 hover:border-white/30 hover:text-white active:scale-95"
              )}
            >
              All Works
            </button>
            {Object.entries(portfolioStructure).map(([key, category]) => (
              <button
                key={key}
                onClick={() => handleMainCategoryClick(key)}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all border shrink-0 snap-start min-h-[44px]",
                  selectedMainCategory === key
                    ? "bg-accent text-black border-accent shadow-[0_0_20px_rgba(197,160,89,0.3)]"
                    : "bg-zinc-900/50 text-muted-foreground border-white/10 hover:border-white/30 hover:text-white active:scale-95"
                )}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Subcategory Navigation - Horizontal Scroll */}
      <AnimatePresence mode="wait">
        {currentCategoryData && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="py-4 border-b border-white/5 bg-zinc-900/30"
          >
            <div className="container mx-auto px-4">
              <div 
                className="flex gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 -mx-4 px-4"
              >
                <button
                  onClick={() => handleSubcategoryClick("all")}
                  className={cn(
                    "px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shrink-0 snap-start min-h-[44px]",
                    selectedSubcategory === "all"
                      ? "bg-white/10 text-white border border-white/20"
                      : "bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-white/5 active:scale-95"
                  )}
                >
                  All {currentCategoryData.title}
                </button>
                {subcategories.map((sub) => (
                  <button
                    key={sub.key}
                    onClick={() => handleSubcategoryClick(sub.key)}
                    className={cn(
                      "px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shrink-0 snap-start min-h-[44px]",
                      selectedSubcategory === sub.key
                        ? "bg-white/10 text-white border border-white/20"
                        : "bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-white/5 active:scale-95"
                    )}
                  >
                    {sub.title}
                  </button>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Gallery Grid */}
      <section ref={galleryRef} className="py-12 container mx-auto px-4 scroll-mt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedMainCategory}-${selectedSubcategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                className="group relative aspect-square bg-zinc-900 rounded-lg overflow-hidden border border-white/5 cursor-pointer active:scale-95 transition-transform"
              >
                {/* Project Image */}
                <img 
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-xl font-heading font-bold text-white uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform">{project.title}</h3>
                  <span className="text-accent text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform delay-75">{currentCategoryData?.title || "Portfolio"}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-400 text-lg">No projects found in this category yet.</p>
            <p className="text-zinc-500 text-sm mt-2">Check back soon for new additions!</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default PortfolioPage

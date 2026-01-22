import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

// Placeholder images - in production these would be real project shots
const projects = [
  { id: 1, title: "Laguna Beach Estate", category: "Railings", color: "from-zinc-800 to-zinc-900" },
  { id: 2, title: "Modern Farmhouse Gate", category: "Gates", color: "from-zinc-900 to-black" },
  { id: 3, title: "Newport Coast Balcony", category: "Balconies", color: "from-zinc-800 to-zinc-700" },
  { id: 4, title: "Industrial Loft Stairs", category: "Interiors", color: "from-black to-zinc-900" },
  { id: 5, title: "Commercial Security", category: "Fences", color: "from-zinc-700 to-zinc-800" },
  { id: 6, title: "Custom Pivot Door", category: "Entries", color: "from-zinc-900 to-zinc-800" },
]

const FeaturedWorks = () => {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <section className="py-24 bg-black relative">
       <div className="container mx-auto px-4">
        <div className="mb-16">
           <span className="text-accent uppercase tracking-widest text-sm font-bold mb-2 block">Portfolio</span>
           <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">Featured Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {projects.map((project) => (
            <motion.div
              layoutId={`card-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className={cn(
                "group relative aspect-square cursor-pointer overflow-hidden bg-gradient-to-br",
                project.color
              )}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-xs text-white/20 uppercase tracking-widest">Image Placeholder</span>
              </div>
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-xl font-heading font-bold text-white uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-accent text-sm uppercase tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-4xl aspect-video bg-zinc-900 rounded-lg overflow-hidden border border-white/10"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-accent hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Lightbox Content */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-black">
                <div className="text-center p-8">
                  <h3 className="text-3xl font-heading font-bold text-white mb-4">
                    {projects.find(p => p.id === selectedId)?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    Detailed project view would go here.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Backdrop click to close */}
            <div 
              className="absolute inset-0 -z-10" 
              onClick={() => setSelectedId(null)}
            ></div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default FeaturedWorks

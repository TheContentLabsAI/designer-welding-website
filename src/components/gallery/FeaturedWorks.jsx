import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import portfolioProjects from "@/data/portfolioProjects"
import { X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const FeaturedWorks = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  // Select featured projects - one from each main category
  const featuredProjects = [
    portfolioProjects.find(p => p.subcategory === 'drivewayGates'), // Gates
    portfolioProjects.find(p => p.subcategory === 'stairRailings'), // Railings
    portfolioProjects.find(p => p.subcategory === 'securityDoors'), // Security
  ].filter(Boolean) // Remove any undefined

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <span className="text-accent uppercase tracking-widest text-sm font-bold mb-2 block">Our Portfolio</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">Recent Works</h2>
            </div>
            <Link to="/portfolio" className="text-white font-bold uppercase border-b-2 border-accent hover:text-accent transition-colors mt-4 md:mt-0">View Full Gallery</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 3).map((project, index) => (
                <motion.div
                    key={project.id}
                    layoutId={`project-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ 
                      once: true,
                      amount: 0.2,
                      margin: "0px 0px -50px 0px"
                    }}
                    transition={{ 
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative h-[400px] rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-black/50"
                >
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                    
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.category}</span>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-zinc-300 line-clamp-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Premium custom metalwork</p>
                    </div>
                </motion.div>
            ))}
        </div>

        <AnimatePresence>
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        layoutId={`project-${selectedProject.id}`}
                        className="w-full max-w-4xl bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-accent hover:text-black transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2">
                           <div className="h-[300px] md:h-[500px] relative">
                                <img 
                                    src={selectedProject.image} 
                                    alt={selectedProject.title} 
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-transparent md:bg-gradient-to-t md:from-zinc-900"></div>
                           </div>
                           <div className="p-8 md:p-12 flex flex-col justify-center">
                                <span className="text-accent uppercase tracking-widest text-xs font-bold mb-4">{selectedProject.category}</span>
                                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase leading-none">{selectedProject.title}</h3>
                                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                    Premium custom metalwork crafted with precision and attention to detail.
                                </p>
                                <div className="flex gap-4">
                                    <Link to="/#hero-form" onClick={() => setSelectedProject(null)}>
                                        <Button className="bg-accent text-black hover:bg-white">
                                            Get a Quote <ChevronRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                    <Link to="/portfolio" onClick={() => setSelectedProject(null)}>
                                        <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                                            See All Projects
                                        </Button>
                                    </Link>
                                </div>
                           </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>

      </div>
    </section>
  )
}

export default FeaturedWorks

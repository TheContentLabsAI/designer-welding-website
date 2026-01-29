import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Home, ArrowLeft, Search, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-[#0a0a0a] to-zinc-900 opacity-90"></div>
        
        {/* Subtle glow */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_70%)]"></div>
        
        {/* Grain texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] grain-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* 404 Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <Wrench className="w-32 h-32 text-accent opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-heading font-black text-white">404</span>
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase mb-4 tracking-tight"
          >
            Page Not Found
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed"
          >
            Looks like this page has been welded shut. The page you're looking for doesn't exist or has been moved.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/">
              <Button 
                variant="premium"
                className="w-full sm:w-auto font-black uppercase tracking-wide h-14 px-8 text-base transition-all duration-300 hover:scale-105 shadow-[0_0_30px_-5px_var(--accent)]"
              >
                <Home className="mr-2 w-5 h-5" />
                Back to Home
              </Button>
            </Link>

            <Link to="/portfolio">
              <Button 
                variant="outline"
                className="w-full sm:w-auto font-bold uppercase tracking-wide h-14 px-8 text-base border-white/20 hover:bg-white/5 transition-all duration-300"
              >
                <Search className="mr-2 w-5 h-5" />
                View Our Work
              </Button>
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-sm text-zinc-500 mb-4 uppercase tracking-wider font-bold">Quick Links</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/services" className="text-sm text-zinc-400 hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-sm text-zinc-400 hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-zinc-400 hover:text-accent transition-colors">
                Contact
              </Link>
              <Link to="/portfolio" className="text-sm text-zinc-400 hover:text-accent transition-colors">
                Portfolio
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound

import { Phone, FileText, Menu } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { companyInfo } from "@/data/siteData"

const MobileBottomBar = ({ setIsMobileMenuOpen, isMobileMenuOpen }) => {
  const navigate = useNavigate();
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-xl border-t border-white/10 px-4 py-3 md:hidden pb-[env(safe-area-inset-bottom)]"
    >
      <div className="flex items-center justify-around gap-2 max-w-sm mx-auto">
        <a 
          href={`tel:${companyInfo.phone.replace(/\D/g,'')}`}
          className="flex flex-col items-center gap-1 group w-full"
        >
           <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20 group-active:scale-95 transition-transform">
             <Phone className="w-5 h-5 text-accent" />
           </div>
           <span className="text-[10px] uppercase font-bold text-white/80 tracking-wide">Call</span>
        </a>

        <a 
           href="#get-quote"
           className="flex flex-col items-center gap-1 group w-full"
           onClick={(e) => {
             e.preventDefault();
             if (window.location.pathname !== "/") {
                navigate("/", { state: { scrollTo: "hero-form" } });
             } else {
               document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
             }
           }}
        >
           <div className="w-12 h-12 -mt-6 rounded-full bg-accent text-black flex items-center justify-center border-4 border-black shadow-[0_0_15px_rgba(197,160,89,0.3)] group-active:scale-95 transition-transform">
             <FileText className="w-6 h-6 fill-black/10 stroke-[2.5]" />
           </div>
           <span className="text-[10px] uppercase font-bold text-accent tracking-wide">Get Quote</span>
        </a>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col items-center gap-1 group w-full"
        >
           <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-active:scale-95 transition-transform">
             <Menu className="w-5 h-5 text-white" />
           </div>
           <span className="text-[10px] uppercase font-bold text-white/80 tracking-wide">Menu</span>
        </button>
      </div>
    </motion.div>
  )
}

export default MobileBottomBar

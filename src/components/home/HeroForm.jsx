import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { services } from "@/data/siteData"
import { ChevronRight, Check, Loader2, ShieldCheck } from "lucide-react"
import { cn, validatePhone } from "@/lib/utils"

const HeroForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: ""
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = true
    if (!formData.lastName.trim()) newErrors.lastName = true
    if (!validatePhone(formData.phone)) newErrors.phone = "Invalid Phone Number"
    
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
    }

    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md lg:max-w-[500px] bg-zinc-900/40 backdrop-blur-xl border border-accent/20 rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-accent/5 animate-pulse"></div>
        <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent border border-accent/30">
                <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-heading">Request Recieved!</h3>
            <p className="text-muted-foreground text-sm mb-6">
                Thanks {formData.firstName}! One of our experts will call you shortly at {formData.phone} to discuss your project.
            </p>
            <Button 
                variant="outline" 
                className="w-full border-white/10 hover:bg-white/5"
                onClick={() => {
                    setIsSuccess(false)
                    setFormData({ firstName: "", lastName: "", phone: "", service: "" })
                }}
            >
                Submit Another
            </Button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="w-full max-w-md lg:max-w-[500px] bg-zinc-900/80 backdrop-blur-xl border-2 border-accent/60 rounded-2xl p-8 md:p-10 shadow-[0_0_50px_-10px_rgba(234,179,8,0.3)] relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent pointer-events-none"></div>
      
      {/* Social Proof Badge */}
      <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
         <div className="bg-accent text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-[0_0_15px_var(--accent)] flex items-center gap-1.5 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping"></span>
            4 Neighbors in Orange County booked today
         </div>
      </div>

      <div className="relative z-10 pt-2">
        {/* Review Snippet (Hack #6: Testimonials with Intent) */}
        <div className="flex items-center justify-center gap-2 mb-4 opacity-90">
            <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border border-zinc-900 bg-gray-200 flex items-center justify-center text-[8px] font-bold text-black overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                ))}
            </div>
            <p className="text-white/80 text-[11px] font-medium leading-tight">
                "Best investment for our home." <br/>
                <span className="text-accent opacity-80">- Sarah T., Newport Beach</span>
            </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-white uppercase font-heading mb-1 text-center leading-none">
            Check <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent animate-text-shimmer bg-[length:200%_auto]">Availability</span> & Pricing
        </h3>
        <p className="text-muted-foreground text-sm text-center mb-6 uppercase tracking-wider font-semibold">
           <span className="text-green-500">● Limited Spots</span> • Response in &lt; 24 Hrs
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="group/input relative">
                        <input
                            required
                            type="text"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={(e) => {
                                setFormData({...formData, firstName: e.target.value})
                                if(errors.firstName) setErrors({...errors, firstName: false})
                            }}
                            className={cn(
                                "w-full h-14 bg-black/60 border rounded-lg px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:bg-black/80 transition-all font-medium text-lg",
                                errors.firstName ? "border-red-500" : "border-white/10"
                            )}
                        />
                    </div>
                    <div className="group/input relative">
                        <input
                            required
                            type="text"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={(e) => {
                                setFormData({...formData, lastName: e.target.value})
                                if(errors.lastName) setErrors({...errors, lastName: false})
                            }}
                            className={cn(
                                "w-full h-14 bg-black/60 border rounded-lg px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:bg-black/80 transition-all font-medium text-lg",
                                errors.lastName ? "border-red-500" : "border-white/10"
                            )}
                        />
                    </div>
                </div>
                
                <div className="group/input relative">
                    <input
                        required
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => {
                            setFormData({...formData, phone: e.target.value})
                            if(errors.phone) setErrors({...errors, phone: false})
                        }}
                        className={cn(
                            "w-full h-14 bg-black/60 border rounded-lg px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:bg-black/80 transition-all font-medium text-lg",
                            errors.phone ? "border-red-500 text-red-100" : "border-white/10"
                        )}
                    />
                    {errors.phone && <p className="absolute -bottom-5 left-0 text-red-500 text-xs font-bold">{errors.phone}</p>}
                </div>

                <div className="group/input relative">
                    <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full h-14 bg-black/60 border border-white/10 rounded-lg px-4 text-white/90 focus:outline-none focus:border-accent focus:bg-black/80 transition-all font-medium appearance-none cursor-pointer text-lg"
                    >
                        <option value="" disabled className="text-gray-500">Select Project Type</option>
                        {services.map(s => (
                            <option key={s.id} value={s.title} className="bg-zinc-900 text-white">{s.title}</option>
                        ))}
                        <option value="other" className="bg-zinc-900 text-white">Other / Custom</option>
                    </select>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 rotate-90 pointer-events-none" />
                </div>
            </div>

            <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-16 mt-2 bg-gradient-to-r from-accent to-yellow-500 text-black font-black uppercase tracking-wide hover:brightness-110 hover:scale-[1.02] shadow-[0_0_25px_-5px_var(--accent)] transition-all duration-300 border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1 text-lg"
            >
                {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                    <span className="flex items-center gap-2">
                        Check Availability <ChevronRight className="w-5 h-5 stroke-[3]" />
                    </span>
                )}
            </Button>
            
            <p className="text-[10px] text-center text-white/30 mt-3 flex items-center justify-center gap-3">
                <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-accent" /> Free Quote</span>
                <span className="w-px h-3 bg-white/10"></span>
                <span>No Spam Policy</span>
            </p>
        </form>
      </div>
    </motion.div>
  )
}

export default HeroForm

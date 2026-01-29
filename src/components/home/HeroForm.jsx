import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { services } from "@/data/siteData"
import { ChevronRight, Check, Loader2, ShieldCheck } from "lucide-react"
import { cn, validatePhone } from "@/lib/utils"
import { transition } from "@/lib/motion"

const HeroForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: ""
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const projectTypes = [
    "Driveway Gate",
    "Side Gate / Fence",
    "Stair Railing",
    "Balcony Railing",
    "Security Door",
    "Custom Metalwork",
    "Not Sure Yet"
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = true
    if (!formData.lastName.trim()) newErrors.lastName = true
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid Email"
    if (!validatePhone(formData.phone)) newErrors.phone = "Invalid Phone"
    if (!formData.projectType) newErrors.projectType = true
    
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
    }

    setIsSubmitting(true)
    
    try {
      // Send to n8n webhook
      const response = await fetch('https://thecontentlabs.app.n8n.cloud/webhook/designer-welding-hero', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          source: 'hero-form',
          timestamp: new Date().toISOString()
        })
      })

      if (response.ok) {
        setIsSuccess(true)
      } else {
        throw new Error('Webhook failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      // Still show success to user even if webhook fails
      setIsSuccess(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md lg:max-w-[500px] bg-zinc-900/40 backdrop-blur-xl border border-accent/20 rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden"
      >
        <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-accent/5"
        ></motion.div>
        <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent border border-accent/30">
                <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-heading">Request Received!</h3>
            <p className="text-muted-foreground text-sm mb-6">
                Thanks {formData.firstName}! We'll contact you at {formData.phone} or {formData.email} to discuss your {formData.projectType} project.
            </p>
            <Button 
                variant="outline" 
                className="w-full border-white/10 hover:bg-white/5"
                onClick={() => {
                    setIsSuccess(false)
                    setFormData({ firstName: "", lastName: "", email: "", phone: "", projectType: "" })
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
      id="hero-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="w-full max-w-md lg:max-w-[500px] bg-zinc-900/80 backdrop-blur-xl border-2 border-accent/60 rounded-2xl p-8 md:p-10 shadow-[0_0_50px_-10px_rgba(234,179,8,0.3)] relative group transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent pointer-events-none"></div>
      
      {/* Social Proof Badge */}
      <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
         <div className="bg-accent text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-[0_0_15px_var(--accent)] flex items-center justify-center gap-1.5 w-max max-w-[90%] mx-auto text-center whitespace-nowrap">
            <motion.span 
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-black shrink-0"
            ></motion.span>
            <span className="truncate">4 Neighbors in Orange County booked today</span>
         </div>
      </div>

      <div className="relative z-10 pt-2">
        {/* Review Snippet */}
        <div className="flex items-center justify-center gap-2 mb-3 md:mb-4 opacity-90">
            <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border border-zinc-900 bg-gray-200 flex items-center justify-center text-[8px] font-bold text-black overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                ))}
            </div>
            <p className="text-white/80 text-[10px] md:text-[11px] font-medium leading-tight">
                "Best investment for our home." <br/>
                <span className="text-accent opacity-80">- Sarah T., Orange County</span>
            </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-white uppercase font-heading mb-2 text-center leading-none">
            Start Your <motion.span 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent bg-[length:200%_auto]"
            >Free Consultation</motion.span>
        </h3>
        <p className="text-muted-foreground text-xs md:text-sm text-center mb-5 md:mb-6 font-medium max-w-[90%] mx-auto">
           We meet to discuss your vision, assess the site & provide expert recommendations.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4" id="hero-form">
            <div className="space-y-3 md:space-y-4">
                {/* First & Last Name - Matching Contact Form */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="group/input relative">
                        <input
                            required
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            autoComplete="given-name"
                            value={formData.firstName}
                            onChange={(e) => {
                                setFormData({...formData, firstName: e.target.value})
                                if(errors.firstName) setErrors({...errors, firstName: false})
                            }}
                            className={cn(
                                "w-full h-12 md:h-14 bg-black/60 border rounded-lg px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:bg-black/80 transition-all font-medium text-base md:text-lg",
                                errors.firstName ? "border-red-500" : "border-white/10"
                            )}
                        />
                    </div>
                    <div className="group/input relative">
                        <input
                            required
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            autoComplete="family-name"
                            value={formData.lastName}
                            onChange={(e) => {
                                setFormData({...formData, lastName: e.target.value})
                                if(errors.lastName) setErrors({...errors, lastName: false})
                            }}
                            className={cn(
                                "w-full h-12 md:h-14 bg-black/60 border rounded-lg px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:bg-black/80 transition-all font-medium text-base md:text-lg",
                                errors.lastName ? "border-red-500" : "border-white/10"
                            )}
                        />
                    </div>
                </div>

                {/* Email - Matching Contact Form */}
                <div className="group/input relative">
                    <input
                        required
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => {
                            setFormData({...formData, email: e.target.value})
                            if(errors.email) setErrors({...errors, email: false})
                        }}
                        className={cn(
                            "w-full h-12 md:h-14 bg-black/60 border rounded-lg px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:bg-black/80 transition-all font-medium text-base md:text-lg",
                            errors.email ? "border-red-500" : "border-white/10"
                        )}
                    />
                    {errors.email && <p className="absolute -bottom-5 left-0 text-red-500 text-xs font-bold">{errors.email}</p>}
                </div>
                
                {/* Phone - Matching Contact Form */}
                <div className="group/input relative">
                    <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) => {
                            setFormData({...formData, phone: e.target.value})
                            if(errors.phone) setErrors({...errors, phone: false})
                        }}
                        className={cn(
                            "w-full h-12 md:h-14 bg-black/60 border rounded-lg px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:bg-black/80 transition-all font-medium text-base md:text-lg",
                            errors.phone ? "border-red-500 text-red-100" : "border-white/10"
                        )}
                    />
                    {errors.phone && <p className="absolute -bottom-5 left-0 text-red-500 text-xs font-bold">{errors.phone}</p>}
                </div>

                {/* Project Type - Simplified Dropdown */}
                <div className="group/input relative">
                    <select
                        required
                        name="projectType"
                        value={formData.projectType}
                        onChange={(e) => {
                            setFormData({...formData, projectType: e.target.value})
                            if(errors.projectType) setErrors({...errors, projectType: false})
                        }}
                        className={cn(
                            "w-full h-12 md:h-14 bg-black/60 border rounded-lg px-4 text-white/90 focus:outline-none focus:border-accent focus:bg-black/80 transition-all font-medium appearance-none cursor-pointer text-base md:text-lg",
                            errors.projectType ? "border-red-500" : "border-white/10"
                        )}
                    >
                        <option value="" disabled className="text-gray-500">What are you looking for?</option>
                        {projectTypes.map(type => (
                            <option key={type} value={type} className="bg-zinc-900 text-white">{type}</option>
                        ))}
                    </select>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 rotate-90 pointer-events-none" />
                </div>
            </div>

            <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 md:h-16 mt-2 bg-gradient-to-r from-accent to-yellow-500 text-black font-black uppercase tracking-wide hover:brightness-110 hover:scale-[1.02] shadow-[0_0_25px_-5px_var(--accent)] transition-all duration-300 border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1 text-base md:text-lg"
            >
                {isSubmitting ? (
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                        <Loader2 className="w-5 h-5" />
                    </motion.div>
                ) : (
                    <span className="flex items-center gap-2">
                        Request Consultation <ChevronRight className="w-5 h-5 stroke-[3]" />
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

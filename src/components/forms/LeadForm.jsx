import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Check, ChevronRight, ChevronLeft } from "lucide-react"
import { services } from "@/data/siteData"

import { validatePhone } from "@/lib/utils"

const steps = [
  { id: 1, title: "Contact Info" },
  { id: 2, title: "Service Needed" },
  { id: 3, title: "Project Details" },
]

const LeadForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateStep = (step) => {
    const newErrors = {}
    let isValid = true

    if (step === 1) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = "First Name is required"
        isValid = false
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = "Last Name is required"
        isValid = false
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone is required"
        isValid = false
      } else if (!validatePhone(formData.phone)) {
        newErrors.phone = "Invalid Phone Number"
        isValid = false
      }
    }

    if (step === 2) {
      if (!formData.service) {
        newErrors.service = "Please select a service"
        isValid = false
      }
    }

    setErrors(newErrors)
    return isValid
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 3) setCurrentStep(currentStep + 1)
      else handleSubmit()
    }
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    // Simulate submission
    console.log("Form Submitted:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null })
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-card border border-accent/20 rounded-lg p-8 text-center max-w-md mx-auto">
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-white mb-2">Request Received</h3>
        <p className="text-muted-foreground">
          Thank you, {formData.firstName}. We will review your project details and contact you shortly.
        </p>
        <Button 
          variant="outline" 
          className="mt-8 border-white/10" 
          onClick={() => { setIsSubmitted(false); setCurrentStep(1); setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", details: "" }); setErrors({}) }}
        >
          Start New Request
        </Button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-card border border-white/5 rounded-xl overflow-hidden shadow-2xl">
      {/* Progress Bar */}
      <div className="bg-secondary p-4 flex justify-between items-center border-b border-white/5">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center gap-2">
            <div 
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors",
                currentStep >= step.id ? "bg-accent text-black" : "bg-white/10 text-white/50"
              )}
            >
              {step.id}
            </div>
            <span className={cn(
              "text-sm font-medium hidden sm:block",
              currentStep >= step.id ? "text-white" : "text-white/50"
            )}>
              {step.title}
            </span>
            {index < steps.length - 1 && (
               <div className="w-8 h-[1px] bg-white/10 mx-2 hidden sm:block"></div>
            )}
          </div>
        ))}
      </div>

      <div className="p-8">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-heading font-bold text-white mb-6">Let's get in touch</h2>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        name="firstName"
                        placeholder="First Name *"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={cn(
                          "w-full bg-secondary border rounded-md p-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-accent",
                          errors.firstName ? "border-red-500" : "border-white/10"
                        )}
                      />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <input
                        name="lastName"
                        placeholder="Last Name *"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={cn(
                          "w-full bg-secondary border rounded-md p-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-accent",
                          errors.lastName ? "border-red-500" : "border-white/10"
                        )}
                      />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                </div>
                
                <div>
                   <input
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-white/10 rounded-md p-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                   <input
                    name="phone"
                    placeholder="Phone Number *"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={cn(
                      "w-full bg-secondary border rounded-md p-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-accent",
                      errors.phone ? "border-red-500" : "border-white/10"
                    )}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
               <h2 className="text-2xl font-heading font-bold text-white mb-6">What are you looking for?</h2>
               {errors.service && <p className="text-red-500 text-sm mb-2">{errors.service}</p>}
               <div className="grid grid-cols-2 gap-3">
                 {services.map((service) => (
                   <div
                    key={service.id}
                    onClick={() => { setFormData({ ...formData, service: service.title }); setErrors({...errors, service: null}) }}
                    className={cn(
                      "p-4 rounded-lg border cursor-pointer transition-all hover:bg-zinc-800",
                      formData.service === service.title 
                        ? "border-accent bg-accent/10 text-white" 
                        : "border-white/10 bg-secondary text-muted-foreground"
                    )}
                   >
                     {service.title}
                   </div>
                 ))}
                 <div
                    onClick={() => { setFormData({ ...formData, service: "Other" }); setErrors({...errors, service: null}) }}
                    className={cn(
                      "p-4 rounded-lg border cursor-pointer transition-all hover:bg-zinc-800",
                      formData.service === "Other" 
                        ? "border-accent bg-accent/10 text-white" 
                        : "border-white/10 bg-secondary text-muted-foreground"
                    )}
                   >
                     Other
                   </div>
               </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-heading font-bold text-white mb-6">Tell us about your project</h2>
              <textarea
                name="details"
                placeholder="Describe your vision, dimensions, or timeline..."
                value={formData.details}
                onChange={handleChange}
                rows={5}
                className="w-full bg-secondary border border-white/10 rounded-md p-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-accent resize-none"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between mt-8 pt-6 border-t border-white/5">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={currentStep === 1}
            className={currentStep === 1 ? "invisible" : ""}
          >
           <ChevronLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          <Button onClick={handleNext} variant="premium">
            {currentStep === 3 ? "Submit Request" : "Next Step"}
            {currentStep < 3 && <ChevronRight className="w-4 h-4 ml-2" />}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LeadForm

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, CloudRain, Sun, Wind, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { id: "welcome" },
  { id: "mood" },
  { id: "privacy" }
];

export default function Onboarding() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const navigate = useNavigate();

  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      navigate('/dashboard');
    }
  };

  const currentStep = steps[currentStepIndex];

  return (
    <div className="min-h-screen bg-[#F8F7F4] flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Ambient background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#C5C1F0] to-transparent rounded-full blur-[100px] opacity-60 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#E9E7FD] to-transparent rounded-full blur-[100px] opacity-60 -z-10" />

      <div className="w-full max-w-md mx-auto aspect-[4/5] md:aspect-auto md:h-[600px] relative">
        <AnimatePresence mode="wait">
          {currentStep.id === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <div className="w-20 h-20 bg-white shadow-xl shadow-[#E9E7FD] rounded-3xl mb-8 flex items-center justify-center rotate-3 border border-[#C5C1F0]">
                <Sparkles className="text-[#635BFF] w-8 h-8" />
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold text-[#2D2D2D] tracking-tight mb-4">
                Hello, I'm Sage.
              </h1>
              <p className="text-[#8E8C86] text-lg leading-relaxed max-w-sm">
                I'm your AI companion designed to help you find calm and focus in your digital life.
              </p>
            </motion.div>
          )}

          {currentStep.id === "mood" && (
            <motion.div
              key="mood"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col justify-center w-full"
            >
              <h2 className="text-2xl font-semibold text-[#2D2D2D] tracking-tight mb-2 text-center">
                How are you feeling today?
              </h2>
              <p className="text-[#8E8C86] text-center mb-10">This helps me adjust to your needs.</p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { id: "energized", label: "Energized", icon: Sun, color: "text-[#FF9F43]", bg: "bg-orange-50 border-[#FF9F43]/20" },
                  { id: "calm", label: "Calm", icon: Wind, color: "text-[#6BCB77]", bg: "bg-[#E8F5E9] border-[#6BCB77]/20" },
                  { id: "overwhelmed", label: "Overwhelmed", icon: CloudRain, color: "text-[#635BFF]", bg: "bg-[#E9E7FD] border-[#C5C1F0]" },
                  { id: "tired", label: "Tired", icon: Coffee, color: "text-[#D980FA]", bg: "bg-[#F3E5F5] border-[#D980FA]/20" }
                ].map((mood) => (
                  <button
                    key={mood.id}
                    onClick={() => setSelectedMood(mood.id)}
                    className={cn(
                      "flex flex-col items-center p-6 rounded-3xl border transition-all duration-300",
                      selectedMood === mood.id ? cn(mood.bg, "scale-105 shadow-lg") : "bg-white border-[#EBE8E2] hover:border-[#EBE8E2] hover:bg-[#F0EFEC]",
                    )}
                  >
                    <mood.icon className={cn("w-8 h-8 mb-4", selectedMood === mood.id ? mood.color : "text-[#A09E97]")} />
                    <span className={cn("font-medium", selectedMood === mood.id ? "text-[#2D2D2D]" : "text-[#8E8C86]")}>
                      {mood.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep.id === "privacy" && (
            <motion.div
              key="privacy"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <div className="w-24 h-24 relative mb-8">
                <div className="absolute inset-0 bg-[#E8F5E9] rounded-full blur-xl opacity-60 animate-pulse" />
                <div className="relative w-full h-full bg-white shadow-lg rounded-full flex items-center justify-center border border-[#E8F5E9]">
                  <ShieldCheck className="text-[#6BCB77] w-10 h-10" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-[#2D2D2D] tracking-tight mb-4">
                Your space is sacred.
              </h2>
              <p className="text-[#8E8C86] text-lg leading-relaxed max-w-sm space-y-4">
                AURA processes your behavior locally. Your emotional history is encrypted and yours alone.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="fixed bottom-12 left-0 right-0 flex flex-col items-center px-6">
        <div className="flex gap-2 mb-8">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                idx === currentStepIndex ? "w-8 bg-[#635BFF]" : "w-1.5 bg-[#EBE8E2]"
              )}
            />
          ))}
        </div>
        
        <button
          onClick={nextStep}
          disabled={currentStep.id === "mood" && !selectedMood}
          className="group relative flex items-center justify-center gap-2 w-full max-w-xs py-4 px-8 bg-[#3D3D3D] hover:bg-[#2D2D2D] text-white rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
        >
          <span>{currentStepIndex === steps.length - 1 ? "Enter AURA" : "Continue"}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

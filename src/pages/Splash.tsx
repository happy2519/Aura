import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 4500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F7F4] relative overflow-hidden">
      {/* Soft floating particles / ambient background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#C5C1F0] to-[#E9E7FD] rounded-full blur-[100px] opacity-40 mix-blend-multiply"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
       <motion.div
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-[#E9E7FD] to-[#E8F5E9] rounded-full blur-[80px] opacity-30 mix-blend-multiply"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Glowing AURA logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative flex items-center justify-center mb-8"
        >
          <motion.div
            className="absolute inset-0 bg-white rounded-full blur-2xl"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#C5C1F0] via-[#E9E7FD] to-[#E8F5E9] shadow-[0_0_40px_rgba(197,193,240,0.6)] flex items-center justify-center relative backdrop-blur-sm border border-white/50">
            <div className="w-8 h-8 bg-white rounded-full animate-pulse shadow-inner" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-5xl font-light tracking-[0.2em] text-[#2D2D2D] mb-6"
        >
          AURA
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-[#8E8C86] text-sm md:text-base font-light tracking-wide max-w-xs text-center leading-relaxed"
        >
          Protecting your mental space in a hyperconnected world.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 flex gap-2"
        >
          {[0, 1, 2].map((i) => (
             <motion.div
               key={i}
               className="w-1.5 h-1.5 rounded-full bg-[#635BFF]/50"
               animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
               transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
             />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

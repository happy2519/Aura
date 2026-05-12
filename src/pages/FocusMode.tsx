import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Play, Pause, Square, Headphones, Volume2, Wind } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FocusMode() {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [activeSound, setActiveSound] = useState('rain');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const sounds = [
    { id: 'rain', label: 'Deep Rain', icon: Volume2 },
    { id: 'binaural', label: 'Binaural 432Hz', icon: Headphones },
    { id: 'wind', label: 'Forest Wind', icon: Wind },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] relative">
      
      {/* Zen Background Animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center -z-10 overflow-hidden pointer-events-none"
        animate={{ opacity: isActive ? 1 : 0.4 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          animate={{ scale: isActive ? [1, 1.2, 1] : 1, opacity: isActive ? [0.3, 0.6, 0.3] : 0.2 }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tr from-[#E8F5E9]/50 to-[#C5C1F0]/50 blur-[100px]"
        />
      </motion.div>

      <div className="text-center z-10 w-full max-w-md">
         <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-12"
         >
           <h2 className="text-xl text-[#A09E97] font-medium tracking-widest uppercase mb-4">Focus Realm</h2>
           {isActive ? (
             <p className="text-sm px-4 py-2 bg-[#E8F5E9] text-[#6BCB77] rounded-full inline-block font-medium border border-[#6BCB77]/20">
               Notifications Silenced. Deep Focus Active.
             </p>
           ) : (
             <p className="text-sm px-4 py-2 bg-[#F0EFEC] text-[#8E8C86] rounded-full inline-block font-medium">
               Ready to disconnect?
             </p>
           )}
         </motion.div>

         {/* Timer Display */}
         <div className="relative w-64 h-64 mx-auto mb-16 flex items-center justify-center">
            {/* Outer animated ring */}
            {isActive && (
              <motion.svg
                className="absolute inset-0 w-full h-full -z-10 text-[#C5C1F0]"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              </motion.svg>
            )}
            
            <motion.div 
               className={cn(
                 "w-56 h-56 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-xl border border-white transition-colors duration-1000",
                 isActive ? "bg-white/80 shadow-[#C5C1F0]/50" : "bg-white/50 shadow-[#EBE8E2]/50"
               )}
            >
               <h1 className="text-6xl md:text-7xl font-light text-[#2D2D2D] tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>
                 {formatTime(timeLeft)}
               </h1>
            </motion.div>
         </div>

         {/* Controls */}
         <div className="flex items-center justify-center gap-6 mb-16">
            <button 
              onClick={toggleTimer}
              className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center text-white transition-all shadow-lg hover:scale-105",
                isActive ? "bg-[#3D3D3D] hover:bg-[#2D2D2D]" : "bg-[#635BFF] hover:bg-opacity-90 shadow-[#C5C1F0]"
              )}
            >
              {isActive ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </button>
            
            <button 
              onClick={() => { setIsActive(false); setTimeLeft(25 * 60); }}
              className="w-12 h-12 rounded-full bg-white border border-[#EBE8E2] flex items-center justify-center text-[#8E8C86] hover:bg-[#F8F7F4] transition-colors shadow-sm"
            >
              <Square className="w-4 h-4" />
            </button>
         </div>

         {/* Ambient Sound Selection */}
         <div className="bg-white/60 backdrop-blur-xl border border-[#EBE8E2] rounded-3xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-[#A09E97] tracking-wider uppercase mb-4 text-left">Ambient Sound</h3>
            <div className="flex gap-3">
               {sounds.map((sound) => (
                 <button
                   key={sound.id}
                   onClick={() => setActiveSound(sound.id)}
                   className={cn(
                     "flex-1 flex flex-col items-center gap-2 p-3 rounded-2xl transition-all border",
                     activeSound === sound.id 
                       ? "bg-[#E9E7FD] border-[#C5C1F0] text-[#635BFF] shadow-inner" 
                       : "bg-white border-transparent text-[#A09E97] hover:bg-[#F8F7F4]"
                   )}
                 >
                   <sound.icon className="w-5 h-5" />
                   <span className="text-xs font-medium">{sound.label}</span>
                 </button>
               ))}
            </div>
         </div>

      </div>
    </div>
  );
}

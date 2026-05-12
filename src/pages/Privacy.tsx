import { motion } from "motion/react";
import { Shield, Lock, Trash2, Watch, Database, HardDrive, Cpu } from "lucide-react";

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto pt-4 space-y-8 pb-12">
      <header className="mb-10 text-center md:text-left">
        <div className="w-16 h-16 rounded-3xl bg-indigo-50 flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-inner border border-indigo-100">
          <Shield className="w-8 h-8 text-indigo-500" />
        </div>
        <h1 className="text-3xl font-semibold text-slate-800 tracking-tight">Privacy & Architecture</h1>
        <p className="text-slate-500 mt-2 max-w-lg leading-relaxed mx-auto md:mx-0">
          Your emotional data is the most sensitive information you own. AURA is designed from the ground up to protect it.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core Principles */}
        <section className="bg-white/70 backdrop-blur-xl border border-slate-100 p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-8">
           <div>
             <div className="flex items-center gap-3 mb-2">
                <Cpu className="w-5 h-5 text-emerald-500" />
                <h3 className="text-lg font-semibold text-slate-800">Local Processing Focus</h3>
             </div>
             <p className="text-sm text-slate-500 leading-relaxed">
               Typing cadence, app switching, and local behaviors are analyzed entirely on-device. No raw behavioral data leaves your machine.
             </p>
           </div>
           
           <div>
             <div className="flex items-center gap-3 mb-2">
                <Lock className="w-5 h-5 text-indigo-500" />
                <h3 className="text-lg font-semibold text-slate-800">Encrypted Emotional History</h3>
             </div>
             <p className="text-sm text-slate-500 leading-relaxed">
               Chat histories with Sage are End-to-End Encrypted. The AI receives anonymized, temporary context specifically for providing support.
             </p>
           </div>

           <div>
             <div className="flex items-center gap-3 mb-2">
                <Database className="w-5 h-5 text-slate-700" />
                <h3 className="text-lg font-semibold text-slate-800">Transparent AI Explainability</h3>
             </div>
             <p className="text-sm text-slate-500 leading-relaxed mb-4">
               Sage will always tell you exactly *why* it made a suggestion or muted a notification and you can easily reverse it.
             </p>
           </div>

           <div className="pt-4 border-t border-slate-100">
             <button className="flex items-center gap-2 text-rose-500 font-medium hover:text-rose-600 transition-colors py-2 px-4 rounded-xl hover:bg-rose-50 -ml-4">
               <Trash2 className="w-4 h-4" />
               Purge Memory History
             </button>
           </div>
        </section>

        {/* Smartwatch Companion Preview */}
        <section className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col items-center justify-center">
            {/* Ambient glow in dark mode card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            
            <div className="w-full flex items-center justify-between mb-8 relative z-10">
               <div>
                 <h3 className="text-lg font-semibold text-white tracking-wide flex items-center gap-2">
                    <Watch className="w-5 h-5 text-slate-400" /> Apple Watch UI
                 </h3>
                 <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-medium">Companion App</p>
               </div>
               <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </div>

            {/* Simulated Watch Screen */}
            <div className="w-[180px] h-[220px] bg-black rounded-[2.5rem] border-[6px] border-slate-700/50 shadow-2xl relative flex flex-col p-4 overflow-hidden z-10">
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-900/40 to-black pointer-events-none" />
               
               <div className="relative z-10 flex flex-col h-full">
                 <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] text-slate-400 font-medium tracking-wider">AURA</span>
                    <span className="text-[10px] text-white font-medium">10:09</span>
                 </div>
                 
                 <div className="flex-1 flex flex-col items-center justify-center text-center">
                   <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center mb-3">
                     <motion.div 
                       className="w-4 h-4 rounded-full bg-indigo-400"
                       animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                       transition={{ duration: 3, repeat: Infinity }}
                     />
                   </div>
                   <p className="text-white text-sm font-medium leading-tight">Elevated Heart Rate</p>
                   <p className="text-indigo-300 text-[10px] mt-1">Take a breath</p>
                 </div>
                 <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white text-xs font-medium backdrop-blur-md transition-colors mt-auto">
                    Start Exercise
                 </button>
               </div>
            </div>
            
            <p className="text-slate-400 text-sm mt-8 text-center relative z-10 font-medium max-w-[250px]">
              Secure cross-device sync. Real-time biometric bridging.
            </p>
        </section>
      </div>
    </div>
  );
}

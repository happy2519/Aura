import { motion } from "motion/react";
import { Activity, Zap, TrendingDown, Clock, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Insights() {
  return (
    <div className="max-w-5xl mx-auto pt-4 space-y-8 pb-8">
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold text-[#2D2D2D] tracking-tight">Behavioral Insights</h1>
        <p className="text-[#8E8C86] mt-2 max-w-lg leading-relaxed">
          Understanding your digital habits to reduce cognitive load and prevent burnout.
        </p>
      </header>

      {/* Hero Insight */}
      <section className="bg-gradient-to-r from-[#F0EFEC] to-[#E8F5E9] border border-[#EBE8E2] p-6 md:p-8 rounded-[32px] relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4 mix-blend-overlay" />
         
         <div className="flex-1 z-10 w-full relative">
            <h3 className="text-sm font-semibold text-[#8E8C86] tracking-widest uppercase mb-3 flex items-center gap-2">
              <Brain className="w-4 h-4" /> Weekly Pattern
            </h3>
            <p className="text-xl md:text-2xl font-medium text-[#2D2D2D] leading-snug mb-6 max-w-lg">
              Your focus peaks between <span className="text-[#635BFF] font-semibold">9:00 AM</span> and <span className="text-[#635BFF] font-semibold">11:30 AM</span>. Protect this time block.
            </p>
            <div className="flex gap-4">
              <div className="bg-white/60 p-4 rounded-2xl shadow-sm border border-white">
                 <p className="text-sm text-[#8E8C86] font-medium">Deep Work Average</p>
                 <p className="text-2xl font-semibold text-[#2D2D2D] mt-1">3.2 hrs</p>
                 <p className="text-xs text-[#6BCB77] font-medium mt-1 flex items-center"><TrendingDown className="w-3 h-3 mr-1 rotate-180" /> 12% vs last week</p>
              </div>
            </div>
         </div>
      </section>

      {/* Analytics Grid Detail */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {/* Typing Speed Variance -> Stress Indicator */}
         <div className="bg-white/70 backdrop-blur-xl border border-[#EBE8E2] p-6 md:p-8 rounded-[32px] shadow-sm">
            <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">Typing Variance</h3>
            <p className="text-sm text-[#8E8C86] mb-8">Higher variance often correlates with cognitive strain.</p>
            
            <div className="relative h-48 w-full flex items-end justify-between gap-1 mt-4 border-b border-[#EBE8E2] pb-2">
               {[20, 25, 45, 80, 50, 30, 25, 40, 20, 15, 30, 25, 20, 45, 60, 40, 30].map((val, i) => (
                 <motion.div
                   key={i}
                   initial={{ height: 0 }}
                   animate={{ height: `${val}%` }}
                   transition={{ duration: 1, delay: i * 0.05 }}
                   className={cn(
                     "w-full rounded-t-sm",
                     val > 60 ? "bg-[#FF9F43]" : val > 40 ? "bg-[#635BFF]/60" : "bg-[#EBE8E2]"
                   )}
                 />
               ))}
               <div className="absolute top-1/4 left-0 w-full border-t border-dashed border-[#FF9F43]/40 pointer-events-none" />
               <p className="absolute top-1/4 left-2 -translate-y-full text-[10px] text-[#FF9F43] font-medium">Strain Threshold</p>
            </div>
            <div className="flex justify-between text-xs text-[#A09E97] mt-3 font-medium">
               <span>9 AM</span>
               <span>12 PM</span>
               <span>3 PM</span>
               <span>6 PM</span>
            </div>
         </div>

         {/* App Switching & Distractions */}
         <div className="bg-white/70 backdrop-blur-xl border border-[#EBE8E2] p-6 md:p-8 rounded-[32px] shadow-sm">
            <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">Context Shifts</h3>
            <p className="text-sm text-[#8E8C86] mb-8">Rapid tab switching reduces deep focus.</p>
            
            <div className="space-y-5">
               {[
                 { app: "Slack", shifts: 42, color: "bg-[#e01e5a]/20", bar: "bg-[#e01e5a]" },
                 { app: "VS Code", shifts: 28, color: "bg-[#0066b8]/20", bar: "bg-[#0066b8]" },
                 { app: "Chrome", shifts: 65, color: "bg-[#4285f4]/20", bar: "bg-[#4285f4]" },
                 { app: "Figma", shifts: 12, color: "bg-[#0acf83]/20", bar: "bg-[#0acf83]" },
               ].map((item) => (
                 <div key={item.app} className="flex items-center gap-4">
                   <div className="w-20 text-sm font-medium text-[#8E8C86] tracking-tight">{item.app}</div>
                   <div className="flex-1 h-3 bg-[#F0EFEC] rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: `${(item.shifts / 65) * 100}%` }}
                       transition={{ duration: 1, ease: "easeOut" }}
                       className={cn("h-full rounded-full", item.bar, "opacity-80")} 
                     />
                   </div>
                   <div className="w-8 text-right text-sm font-semibold text-[#2D2D2D]">{item.shifts}</div>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}

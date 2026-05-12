import { motion } from "motion/react";
import { BrainCircuit, Clock, MessageSquare, Zap, Activity, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data
const insights = [
  { label: "Focus Score", value: "84", unit: "/100", trend: "+5%", icon: Zap, color: "text-[#FF9F43]", bg: "bg-orange-50" },
  { label: "Stress Level", value: "Low", unit: "", trend: "Calm", icon: Activity, color: "text-[#6BCB77]", bg: "bg-[#E8F5E9]" },
  { label: "Screen Time", value: "4h 12m", unit: "", trend: "-30m", icon: Clock, color: "text-[#635BFF]", bg: "bg-[#E9E7FD]" },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8 h-full max-w-5xl mx-auto">
      {/* Header Area */}
      <header className="flex items-center justify-between mt-2 md:mt-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-[#2D2D2D] tracking-tight">Good morning.</h1>
          <p className="text-[#8E8C86] mt-1">Your cognitive load is balanced today.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#EBE8E2]">
           <div className="w-2 h-2 rounded-full bg-[#6BCB77] animate-pulse" />
           <span className="text-sm font-medium text-[#8E8C86]">Syncing with Watch</span>
        </div>
      </header>

      {/* AI Suggestion Panel */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-white/70 backdrop-blur-xl border border-[#EBE8E2] p-6 md:p-8 rounded-[32px] shadow-sm"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#C5C1F0] via-[#E9E7FD] to-transparent rounded-full blur-3xl opacity-50 -z-10" />
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#C5C1F0] to-[#E9E7FD] flex items-center justify-center shrink-0 border border-white shadow-inner">
            <BrainCircuit className="w-8 h-8 text-[#635BFF]" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-[#635BFF] uppercase tracking-wider mb-2">Sage AI Insight</h3>
            <p className="text-lg md:text-xl text-[#2D2D2D] font-medium leading-relaxed">
              You've been multitasking heavily across 6 apps in the last hour. Shall we initiate a 25-minute Deep Focus session?
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
             <button className="flex-1 md:flex-none px-6 py-3 bg-[#635BFF] text-white rounded-xl font-medium shadow-sm hover:opacity-90 transition-opacity">
               Start Focus
             </button>
             <button className="px-4 py-3 bg-white text-[#8E8C86] border border-[#EBE8E2] rounded-xl font-medium hover:bg-[#F8F7F4] transition-colors">
               Dismiss
             </button>
          </div>
        </div>
      </motion.section>

      {/* Analytics Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((stat, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={stat.label}
            className="bg-white/70 backdrop-blur-xl border border-[#EBE8E2] p-6 rounded-[32px] shadow-sm flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={cn("p-3 rounded-2xl", stat.bg)}>
                <stat.icon className={cn("w-6 h-6", stat.color)} />
              </div>
              <span className="text-sm font-medium text-[#A09E97] bg-[#F8F7F4] px-3 py-1 rounded-full">{stat.trend}</span>
            </div>
            <div>
              <p className="text-[#8E8C86] text-sm font-medium mb-1">{stat.label}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-semibold text-[#2D2D2D] tracking-tight">{stat.value}</span>
                {stat.unit && <span className="text-[#A09E97] font-medium">{stat.unit}</span>}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Bottom Layout: Charts / Activities */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
        {/* Cognitive Load Chart Placeholder */}
        <div className="bg-white/70 backdrop-blur-xl border border-[#EBE8E2] p-6 md:p-8 rounded-[32px] shadow-sm min-h-[300px] flex flex-col">
           <h3 className="text-lg font-semibold text-[#2D2D2D] mb-6 flex items-center justify-between">
              Cognitive Intrapersonal Flow
              <Activity className="w-5 h-5 text-[#A09E97]" />
           </h3>
           <div className="flex-1 relative flex items-end justify-between gap-2 md:gap-4 pt-10">
              {/* Fake chart bars */}
              {[40, 60, 30, 80, 50, 20, 40].map((height, i) => (
                <div key={i} className="relative w-full flex flex-col justify-end group">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                    className={cn(
                      "w-full rounded-t-lg transition-all duration-300 group-hover:opacity-80",
                      height > 70 ? "bg-[#635BFF]" : "bg-[#EBE8E2]"
                    )}
                  />
                  {height > 70 && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#2D2D2D] text-white text-xs px-2 py-1 rounded">
                      High
                    </div>
                  )}
                </div>
              ))}
           </div>
        </div>

        {/* Recent Interruptions / Activities */}
        <div className="bg-white/70 backdrop-blur-xl border border-[#EBE8E2] p-6 md:p-8 rounded-[32px] shadow-sm flex flex-col">
           <h3 className="text-lg font-semibold text-[#2D2D2D] mb-6 flex items-center justify-between">
              Recent Events
              <Coffee className="w-5 h-5 text-[#A09E97]" />
           </h3>
           <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#FF9F43] mt-2 shadow-[0_0_8px_rgba(255,159,67,0.6)]" />
                <div>
                   <p className="text-[#2D2D2D] font-medium">Spike in typing speed detected</p>
                   <p className="text-[#8E8C86] text-sm mt-1">10 mins ago • High stress indicator</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#6BCB77] mt-2" />
                <div>
                   <p className="text-[#2D2D2D] font-medium">Silent Notification Blocked</p>
                   <p className="text-[#8E8C86] text-sm mt-1">45 mins ago • 3 social media pings muted</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#635BFF] mt-2" />
                <div>
                   <p className="text-[#2D2D2D] font-medium">Completed Deep Focus</p>
                   <p className="text-[#8E8C86] text-sm mt-1">2 hours ago • +45 Focus Score</p>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

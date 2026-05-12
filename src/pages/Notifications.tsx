import { motion } from "motion/react";
import { BellRing, BellOff, MessageCircle, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const notifications = [
  { id: 1, type: "priority", icon: MessageCircle, source: "Mom", message: "Call me when you're free.", time: "10m ago", bg: "bg-orange-50", color: "text-[#FF9F43]" },
  { id: 2, type: "filtered", icon: BellRing, source: "Instagram", message: "Alex liked your photo.", time: "1h ago", bg: "bg-[#F0EFEC]", color: "text-[#A09E97]" },
  { id: 3, type: "filtered", icon: Mail, source: "Newsletter", message: "Weekly startup news digest.", time: "2h ago", bg: "bg-[#F0EFEC]", color: "text-[#A09E97]" },
  { id: 4, type: "priority", icon: MapPin, source: "Deliveroo", message: "Your order is arriving soon.", time: "Just now", bg: "bg-[#E9E7FD]", color: "text-[#635BFF]" },
];

export default function Notifications() {
  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col pt-4">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#2D2D2D] tracking-tight">Smart Alerts</h1>
        <p className="text-[#8E8C86] mt-2 max-w-lg leading-relaxed">
          Sage AI has filtered 14 non-essential notifications today to protect your cognitive space.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
         <div className="bg-white/70 backdrop-blur-xl border border-[#EBE8E2] p-6 rounded-[32px] flex flex-col justify-between">
           <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center mb-4">
              <BellOff className="w-5 h-5 text-[#6BCB77]" />
           </div>
           <p className="text-3xl font-semibold text-[#2D2D2D] tracking-tight">14</p>
           <p className="text-sm font-medium text-[#8E8C86]">Alerts Silenced</p>
         </div>
         <div className="bg-[#2D2D2D] p-6 rounded-[32px] text-white md:col-span-2 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute right-0 top-0 w-64 h-64 bg-[#635BFF]/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <h3 className="text-lg font-semibold mb-2 relative z-10">AI Notification Shield Active</h3>
            <p className="text-white/60 font-medium max-w-sm relative z-10 text-sm leading-relaxed">
              Currently allowing VIP contacts and delivery updates. Social media and marketing emails are batched for 6:00 PM.
            </p>
         </div>
      </div>

      <div className="flex-1 bg-white/70 backdrop-blur-xl border border-[#EBE8E2] rounded-[32px] shadow-sm overflow-hidden flex flex-col">
         <div className="px-6 py-5 border-b border-[#EBE8E2]/50 flex items-center justify-between bg-white/50">
            <h3 className="font-semibold text-[#3D3D3D]">Recent Stream</h3>
            <button className="text-sm text-[#635BFF] font-medium hover:text-opacity-90">Edit Settings</button>
         </div>
         <div className="p-2 space-y-1 overflow-y-auto">
            {notifications.map((notif, i) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={notif.id}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-xl transition-colors hover:bg-white",
                  notif.type === 'filtered' ? "opacity-60 grayscale-[0.5]" : ""
                )}
              >
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-white shadow-sm", notif.bg)}>
                   <notif.icon className={cn("w-5 h-5", notif.color)} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={cn("font-semibold truncate", notif.type === 'priority' ? "text-[#2D2D2D]" : "text-[#A09E97]")}>
                    {notif.source}
                  </p>
                  <p className="text-sm text-[#8E8C86] truncate">{notif.message}</p>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="text-xs font-medium text-[#A09E97]">{notif.time}</span>
                  {notif.type === 'filtered' && (
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold bg-[#F0EFEC] text-[#A09E97]">Muted</span>
                  )}
                </div>
              </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
}

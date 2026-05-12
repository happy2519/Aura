import { Outlet, NavLink, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Home, MessageCircle, Focus, Bell, Activity, Shield } from "lucide-react";
import { useIsMobile } from "@/hooks/useMobile";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/dashboard" },
  { icon: MessageCircle, label: "Sage AI", path: "/chat" },
  { icon: Focus, label: "Focus", path: "/focus" },
  { icon: Bell, label: "Alerts", path: "/notifications" },
  { icon: Activity, label: "Insights", path: "/insights" },
  { icon: Shield, label: "Privacy", path: "/privacy" },
];

export default function AppLayout() {
  const isMobile = useIsMobile();
  const location = useLocation();

  return (
    <div className="flex h-screen w-full bg-[#F8F7F4] text-[#3D3D3D] overflow-hidden font-sans">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <motion.aside
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-64 bg-white/50 backdrop-blur-xl border-r border-[#EBE8E2] flex flex-col pt-8 pb-6 px-4 z-20 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.05)]"
        >
          <div className="flex items-center gap-3 px-4 mb-12">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C5C1F0] to-[#E9E7FD] shadow-[0_0_15px_rgba(197,193,240,0.5)] flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            </div>
            <h1 className="text-xl font-medium tracking-widest text-[#3D3D3D]">AURA</h1>
          </div>

          <nav className="flex-1 flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group relative overflow-hidden",
                    isActive
                      ? "text-[#635BFF] bg-[#E9E7FD]"
                      : "text-[#A09E97] hover:text-[#3D3D3D] hover:bg-white/80"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-[#E9E7FD] backdrop-blur-sm -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <item.icon
                      size={20}
                      className={cn(
                        "transition-transform duration-300",
                        isActive ? "scale-110" : "group-hover:scale-110"
                      )}
                    />
                    <span className="font-medium">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto px-4">
             <div className="p-4 rounded-2xl bg-white/80 border border-[#EBE8E2] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E9E7FD]/50 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
                <p className="text-xs text-[#A09E97] font-medium mb-1 uppercase tracking-wider">Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#6BCB77] shadow-[0_0_8px_rgba(107,203,119,0.6)]" />
                  <p className="text-sm text-[#3D3D3D] font-medium">Protecting Focus</p>
                </div>
             </div>
          </div>
        </motion.aside>
      )}

      {/* Main Content Area */}
      <main className="flex-1 relative flex flex-col min-w-0 pb-16 md:pb-0 overflow-y-auto">
        {/* Ambient background glow */}
        <div className="fixed top-0 left-1/4 w-[800px] h-[800px] bg-[#E9E7FD]/30 rounded-full blur-3xl -z-10 pointer-events-none opacity-50 mix-blend-multiply" />
        <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-[#C5C1F0]/20 rounded-full blur-3xl -z-10 pointer-events-none opacity-50 mix-blend-multiply" />
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#F8F7F4]/50 rounded-full blur-3xl -z-20 pointer-events-none" />

        <div className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 lg:p-12 relative z-10">
          <Outlet />
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-xl border-t border-[#EBE8E2] flex items-center justify-around px-2 z-50 padding-safe-bottom shadow-[0_-4px_24px_-12px_rgba(0,0,0,0.05)]">
           {navItems.map((item) => (
             <NavLink
               key={item.path}
               to={item.path}
               className={({ isActive }) =>
                 cn(
                   "flex flex-col items-center justify-center w-12 h-12 rounded-full relative transition-colors duration-300",
                   isActive ? "text-[#635BFF]" : "text-[#A09E97] hover:text-[#3D3D3D]"
                 )
               }
               aria-label={item.label}
             >
               {({ isActive }) => (
                 <>
                  {isActive && (
                    <motion.div
                      layoutId="mobileNavIndicator"
                      className="absolute inset-0 bg-[#E9E7FD] rounded-2xl -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <item.icon size={22} className={cn("transition-transform duration-300", isActive && "scale-110")} />
                 </>
               )}
             </NavLink>
           ))}
        </div>
      )}
    </div>
  );
}

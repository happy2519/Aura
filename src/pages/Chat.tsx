import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mic, Send, Sparkles, User } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  sender: "user" | "ai";
  text: string;
};

const initialMessages: Message[] = [
  { id: "1", sender: "ai", text: "I noticed your breathing pattern shifted while reading those emails. Do you need a moment to recalibrate?" }
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        sender: "ai", 
        text: "I've muted non-essential notifications for the next 30 minutes. Let's focus on calming your nervous system." 
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 2500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] max-w-4xl mx-auto relative bg-white/40 backdrop-blur-3xl border border-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
      
      {/* Dynamic Background matching "Breathing" AI state */}
      <AnimatePresence>
        {isTyping && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="absolute inset-0 z-0 pointer-events-none"
           >
             <motion.div
               animate={{ 
                 scale: [1, 1.05, 1],
                 opacity: [0.3, 0.5, 0.3]
               }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/4 left-1/4 w-full h-full bg-gradient-to-tr from-[#C5C1F0]/40 via-[#E9E7FD]/40 to-transparent rounded-full blur-[120px]"
             />
           </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="px-8 py-6 border-b border-[#EBE8E2]/50 flex items-center justify-between z-10 relative bg-white/50 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#C5C1F0] to-[#E9E7FD] flex items-center justify-center shadow-inner relative overflow-hidden">
             {isTyping && (
               <motion.div 
                 className="absolute inset-0 bg-white/40 z-10"
                 animate={{ opacity: [0, 1, 0] }}
                 transition={{ duration: 2, repeat: Infinity }}
               />
             )}
             <Sparkles className="w-6 h-6 text-[#635BFF] relative z-20" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#2D2D2D]">Sage</h2>
            <p className="text-sm font-medium text-[#6BCB77] flex items-center gap-1.5">
               <span className="w-1.5 h-1.5 rounded-full bg-[#6BCB77] animate-pulse" />
               Active Connection
            </p>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 z-10 space-y-6">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "flex max-w-[80%] md:max-w-[70%]",
              msg.sender === "user" ? "ml-auto justify-end" : "justify-start"
            )}
          >
            <div className={cn(
              "p-4 md:p-5 rounded-3xl text-[15px] md:text-base leading-relaxed tracking-wide shadow-sm",
              msg.sender === "user" 
                ? "bg-[#E9E7FD] text-[#635BFF] rounded-br-sm" 
                : "bg-[#F5F5F5] backdrop-blur-sm border border-[#EBE8E2] text-[#555] rounded-bl-sm"
            )}>
              {msg.text}
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex max-w-[80%] justify-start"
          >
            <div className="p-4 rounded-3xl bg-[#F5F5F5] backdrop-blur-sm border border-[#EBE8E2] rounded-bl-sm flex gap-2 items-center shadow-sm">
               {[0, 1, 2].map((i) => (
                 <motion.div
                   key={i}
                   className="w-2 h-2 rounded-full bg-[#635BFF]/50"
                   animate={{ y: [0, -5, 0] }}
                   transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                 />
               ))}
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 md:p-8 z-10 bg-white/50 backdrop-blur-md border-t border-[#EBE8E2]/50">
        <div className="flex items-center gap-3 bg-white border border-[#EBE8E2] rounded-full p-2 pr-3 shadow-sm focus-within:ring-2 focus-within:ring-[#E9E7FD] focus-within:border-[#635BFF] transition-all">
          <button className="p-3 text-[#A09E97] hover:text-[#635BFF] transition-colors rounded-full hover:bg-[#E9E7FD]">
            <Mic className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Talk to Sage..."
            className="flex-1 bg-transparent border-none outline-none text-[#3D3D3D] placeholder:text-[#A09E97] font-medium"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim()}
            className="p-3 bg-[#635BFF] text-white rounded-full hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:bg-[#EBE8E2] shadow-md"
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

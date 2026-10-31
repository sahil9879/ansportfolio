import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu } from 'lucide-react';

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }
        return prev + 3;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070a] text-slate-100 overflow-hidden"
    >
      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Central Glowing Orb */}
      <div className="absolute w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none animate-pulse" />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-sm w-full px-6">
        
        {/* Terminal Header Bar */}
        <div className="w-full glass-card rounded-xl p-3 border border-slate-800 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>ans-portfolioenv</span>
          </div>
          <Cpu className="w-4 h-4 text-slate-500" />
        </div>

        {/* Profile Avatar with Scanner Ring */}
        <div className="relative my-2">
          {/* Rotating Scanner Border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 rounded-3xl border border-dashed border-cyan-500/50"
          />

          <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-cyan-400/40 shadow-2xl bg-slate-900">
            <img
              src="/images/ans-profile.jpg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80";
              }}
              alt="ANS Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Loading Progress Info */}
        <div className="w-full space-y-2 text-center">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-slate-400">SYSTEM INITIALIZING...</span>
            <span className="text-cyan-400 font-bold">{progress}%</span>
          </div>

          {/* Futuristic Segmented Progress Bar */}
          <div className="w-full h-2 bg-slate-900 rounded-lg overflow-hidden border border-slate-800 p-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 rounded-md"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
};
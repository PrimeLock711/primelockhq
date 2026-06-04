"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ShieldAlert, Key } from "lucide-react";

export default function Gatekeeper({ children }: { children: React.ReactNode }) {
  const [passcode, setPasscode] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState(false);

  const handleVerify = () => {
    // Default sandbox key for current phase
    if (passcode === "antigravity") {
      setIsAuthorized(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (isAuthorized) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[999] bg-[#050505] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md p-10 rounded-[40px] border border-white/5 bg-white/5 backdrop-blur-3xl relative overflow-hidden"
      >
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="relative z-10 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/20">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">
            Restricted Access
          </h2>
          <p className="text-white/40 text-sm mb-8 font-medium">
            Authorized Personnel Only: Testing World Sandbox
          </p>

          <div className="space-y-4">
            <div className="relative">
              <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
              <input 
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                placeholder="Enter Access Key"
                className="w-full h-14 bg-black/40 border border-white/10 rounded-2xl px-12 text-white focus:outline-none focus:border-primary transition-all font-mono"
              />
            </div>
            
            <button 
              onClick={handleVerify}
              className="w-full h-14 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:bg-primary hover:text-white transition-all active:scale-95"
            >
              Verify Identity
            </button>

            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2 text-red-500 text-xs font-bold pt-2"
                >
                  <ShieldAlert className="w-3 h-3" />
                  ACCESS_DENIED: INVALID_KEY
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Scanline */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[200%] w-full -top-full animate-[scan_4s_linear_infinite] pointer-events-none" />
      </motion.div>
    </div>
  );
}

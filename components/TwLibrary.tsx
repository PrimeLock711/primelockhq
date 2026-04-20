"use client";

import React from "react";
import { motion } from "framer-motion";

export function TwButton({ children, onClick, variant = "primary" }: { children: React.ReactNode, onClick?: () => void, variant?: "primary" | "secondary" }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-8 h-14 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all relative overflow-hidden group
        ${variant === "primary" 
          ? "bg-white text-black hover:bg-primary hover:text-white" 
          : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
        }
      `}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </motion.button>
  );
}

export function TwCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`p-8 rounded-[40px] bg-white/5 border border-white/5 backdrop-blur-3xl shadow-2xl relative group overflow-hidden ${className}`}>
      {/* Dynamic Inner Glow */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

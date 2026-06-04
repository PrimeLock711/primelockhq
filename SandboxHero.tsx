"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { TwButton } from "./components/TwLibrary";
import { Sparkles, Terminal, Cpu } from "lucide-react";

export default function SandboxHero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 blur-[150px] rounded-full animate-pulse [animation-delay:2s]" />
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-[10px] uppercase font-black tracking-[0.3em] text-white/50">Experimental Environment 1.0</span>
        </motion.div>

        <motion.h1 variants={item} className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
          TESTING<br /><span className="tw-text-gradient">WORLD</span>
        </motion.h1>

        <motion.p variants={item} className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          The ultimate digital sandbox for high-fidelity component prototyping. 
          Isolated, hardened, and built for rapid innovation.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <TwButton onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            Access Components
          </TwButton>
          <div className="flex items-center gap-4 px-6 h-14 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-mono text-white/30 uppercase tracking-widest">
            <Terminal className="w-4 h-4" />
            V.1.0.0-DELTA
          </div>
        </motion.div>
      </motion.div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20 animate-bounce">
         <div className="w-px h-12 bg-gradient-to-t from-white/20 to-transparent" />
         <span className="text-[9px] uppercase font-black tracking-widest">Scroll to Explore</span>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ShieldCheck, Terminal } from "lucide-react";
import dynamic from "next/dynamic";

import BrandLogo from "../BrandLogo";
const MagneticParticles = dynamic(() => import("../MagneticParticles"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <MagneticParticles />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
          }}
          transition={{ 
            duration: 0.8,
            type: "spring", stiffness: 260, damping: 20 
          }}
          className="mb-20 relative flex justify-center"
        >
          <BrandLogo className="w-40 h-40 md:w-56 md:h-56" />
        </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6"
          >
            <ShieldCheck className="w-3 h-3" />
            <span>Enterprise-Grade Cybersecurity Solutions</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Securing the <span className="text-glow-cyan text-primary">Future</span>, 
            <br className="hidden md:block" />
            Building the Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Frontier.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-xl text-white/60 mb-10 max-w-2xl mx-auto px-4"
          >
            Primelock Security delivers high-performance protection and scalable ICT 
            infrastructure. Hardened by Red Team expertise, built with human-led precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <a href="#contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:neon-glow-cyan h-12 px-8 text-base cursor-pointer">
                Request an Audit <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </motion.div>

        {/* Decorative Terminal Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="liquid-glass rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex items-center gap-2 ml-4 text-[10px] text-white/30 uppercase tracking-widest font-mono">
                <Terminal className="w-3 h-3" />
                primelock-vulnerability-scanner.sh
              </div>
            </div>
            <div className="p-4 md:p-10 font-mono text-xs md:text-base leading-relaxed text-left h-52 md:h-80 overflow-hidden bg-black/40">
              <p className="text-secondary/80">$ primelock --scan target.cloud</p>
              <p className="text-white/40 mt-2">Initializing deep penetration sequence...</p>
              <p className="text-white/40">[OK] Analyzing network topology...</p>
              <p className="text-white/40">[OK] Checking for SQL injection vulnerabilities...</p>
              <p className="text-primary mt-2">Vulnerabilities found: 0</p>
              <p className="text-primary">System integrity: High (99.9%)</p>
              <p className="text-white/40 mt-2 anim-cursor">_</p>
            </div>
          </div>
          
          {/* Accent Glows */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 blur-[100px] -z-10" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/20 blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}

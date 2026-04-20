"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/sections/Contact";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  ArrowLeft,
  Fingerprint,
  Zap,
  Target,
  Search,
  Lock,
  Terminal,
  Cpu,
  GraduationCap,
  BadgeCheck
} from "lucide-react";

const methodology = [
  {
    title: "Reconnaissance",
    desc: "Silent data gathering to map your organization's entire digital footprint.",
    icon: Search
  },
  {
    title: "Weaponization",
    desc: "Crafting specific exploits tailored to the vulnerabilities found during recon.",
    icon: Target
  },
  {
    title: "Exploitation",
    desc: "Simulating high-fidelity attacks to prove the risk of identified security gaps.",
    icon: Zap
  },
  {
    title: "Persistence",
    desc: "Analyzing how long an attacker could stay undetected within your network.",
    icon: Lock
  }
];

export default function SecurityEdgePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      
      {/* Security Edge Hero */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/5 blur-[120px] -z-10" />
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 inline-block"
          >
            <a href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-secondary transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Return to Dashboard
            </a>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tighter"
          >
            The <span className="text-secondary text-glow-green">Security</span> Edge
          </motion.h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto font-medium">
            Hardening digital infrastructure with a Red Team mindset. We don't just defend; 
            we think like the adversary to stay three steps ahead.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest">
                <GraduationCap className="w-3 h-3" />
                <span>Academic x Enterprise Fusion</span>
              </div>
              <h2 className="text-4xl font-bold text-white leading-tight">
                Our Intelligence <span className="text-secondary">Network</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Security Edge isn't just about software—it's about human precision. Our team 
                leverages a deep academic and professional background, with members 
                conducting high-level research and internships at leading financial 
                institutions. This synergy allows us to detect vulnerabilities that 
                automated tools simply miss.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: ShieldAlert, text: "Offensive-first strategy focused on zero-day protection." },
                  { icon: BadgeCheck, text: "Strict adherence to OWASP, NIST, and ISO 27001 standards." },
                  { icon: Terminal, text: "Custom exploit development for specialized ICT environments." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/80">
                    <div className="p-2 bg-secondary/20 rounded-lg">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="liquid-glass p-1 rounded-3xl overflow-hidden shadow-2xl">
                <div className="bg-[#0f1115] p-6 md:p-12 rounded-[22px] border border-white/5 relative">
                  <div className="absolute top-0 right-0 p-8">
                     <Cpu className="w-12 h-12 text-secondary opacity-20 animate-pulse" />
                  </div>
                  <h3 className="text-secondary font-mono text-sm mb-8 tracking-[0.3em] uppercase underline decoration-2 underline-offset-8">
                    Active Operations
                  </h3>
                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <p className="text-xs text-secondary/60 font-mono mb-2">TARGET_ACQUIRED://</p>
                      <p className="text-white font-bold tracking-tight">Financial Sector Network Audit</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <p className="text-xs text-secondary/60 font-mono mb-2">SEQUENCE_INITIATED://</p>
                      <p className="text-white font-bold tracking-tight">AI Model Integrity Scan</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <p className="text-xs text-secondary/60 font-mono mb-2">STATUS://</p>
                      <p className="text-white font-bold tracking-tight">Hardening Sequence 98% Complete</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 bg-secondary/20 w-full h-full blur-[100px] top-0 left-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Execution <span className="text-secondary">Methodology</span></h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm uppercase tracking-widest font-bold">Strategic Offensive Lifecycle</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((m, i) => (
              <motion.div 
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="liquid-glass p-6 md:p-8 rounded-3xl border-white/5 hover:border-secondary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:neon-glow-green transition-all">
                  <m.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{m.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}

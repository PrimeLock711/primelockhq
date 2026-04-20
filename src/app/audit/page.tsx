"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/sections/Contact";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  ArrowLeft,
  FileSearch,
  Lock,
  Search,
  ShieldAlert,
  Fingerprint,
  HardDrive,
  Network
} from "lucide-react";

const auditTypes = [
  {
    title: "Vulnerability Audit",
    desc: "A deep-dive analysis of your digital perimeter to find and patch weak points before they are exploited.",
    icon: Search,
    points: ["Automated Scanning", "Manual Verification", "Patch Guidance"]
  },
  {
    title: "Network & Infrastructure",
    desc: "Auditing your physical and virtual network architecture for structural security flaws and data leak risks.",
    icon: Network,
    points: ["Firewall Review", "Identity Management", "Packet Analysis"]
  },
  {
    title: "Compliance & Standards",
    desc: "Ensuring your business meets internal and external regulatory requirements with precise gap analysis.",
    icon: ShieldCheck,
    points: ["ISO 27001 Prep", "GDPR Alignment", "SOC2 Strategy"]
  },
  {
    title: "Physical Security",
    desc: "On-site assessment of physical access controls, server room integrity, and surveillance hardware.",
    icon: Fingerprint,
    points: ["Biometrics Review", "Access Logging", "Hardware Integrity"]
  }
];

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      
      {/* Audit Hero */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] -z-10" />
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 inline-block"
          >
            <a href="/#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-primary transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Return to Request Audit
            </a>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold text-white mb-6"
          >
            Security <span className="text-secondary text-glow-green">Audits</span>
          </motion.h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto">
            Our Elite Technical Audit program provides clear insight into your security 
            posture with actionable intelligence for enterprise hardening.
          </p>
        </div>
      </section>

      {/* Audit Categories */}
      <section className="py-24 border-t border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {auditTypes.map((audit, index) => (
              <motion.div
                key={audit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="liquid-glass p-6 md:p-10 rounded-[40px] border-white/10 group hover:border-secondary/30 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:neon-glow-green transition-all duration-500">
                    <audit.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{audit.title}</h3>
                    <p className="text-white/50 leading-relaxed mb-6">
                      {audit.desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {audit.points.map(point => (
                        <span key={point} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/30">
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The <span className="text-primary">Audit</span> Lifecycle</h2>
            <div className="h-1 w-24 bg-primary mx-auto opacity-50" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
             <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden md:block -translate-y-1/2 z-0" />
             
             {[
               { step: "01", title: "Assessment", desc: "Data gathering and thorough environment scouting." },
               { step: "02", title: "Verification", desc: "Manual auditing and high-fidelity proof-of-concept." },
               { step: "03", title: "Resolution", desc: "Enterprise reporting and remediation roadmaps." }
             ].map((item) => (
               <div key={item.step} className="relative z-10 text-center space-y-4">
                 <div className="w-12 h-12 rounded-full bg-[#0a0a0a] border-2 border-primary flex items-center justify-center mx-auto text-primary font-bold text-xl mb-8 group-hover:scale-110 transition-transform">
                   {item.step}
                 </div>
                 <h4 className="text-xl font-bold text-white uppercase tracking-tight">{item.title}</h4>
                 <p className="text-white/40 text-sm max-w-[200px] mx-auto">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}

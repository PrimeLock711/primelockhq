"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/sections/Contact";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  CloudIcon, 
  Cpu, 
  Layout, 
  CheckCircle2, 
  ArrowLeft,
  ArrowRight,
  Search,
  Zap,
} from "lucide-react";

const detailedServices = [
  {
    id: "cybersecurity",
    title: "Cybersecurity & VAPT",
    subtitle: "Defensive and Offensive Digital Protection",
    highlight: "Hardened by Red Team expertise to eliminate zero-day risks.",
    icon: ShieldCheck,
    description: "Our Cybersecurity wing specializes in identifying, managing, and mitigating digital risks. We don't just secure your data; we harden your entire digital existence.",
    features: [
      "Penetration Testing (Network, Web, Mobile)",
      "Vulnerability Assessment (VAPT)",
      "Compliance Audits (ISO 27001, SOC2 prep)",
      "Red Team Operations & Tactical Defense",
      "Incident Response & Forensic Analysis"
    ],
    accent: "primary"
  },
  {
    id: "ict-infrastructure",
    title: "ICT Infrastructure",
    subtitle: "Enterprise-Grade Network & Cloud Solutions",
    highlight: "99.9% availability for mission-critical digital systems.",
    icon: CloudIcon,
    description: "We design and implement robust, scalable ICT environments that serve as the backbone for modern business operations.",
    features: [
      "High-Availability Cloud Design & Migration",
      "Structured Cabling & Hardware Procurement",
      "Next-Gen Firewall (NGFW) Implementation",
      "Disaster Recovery & Backup Optimization",
      "Proactive 24/7 Monitoring & Support"
    ],
    accent: "secondary"
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    subtitle: "Next-Gen Automation & Intelligent Systems",
    highlight: "Advanced LLM and RPA systems for ultimate efficiency.",
    icon: Cpu,
    description: "Leverage the power of Artificial Intelligence to automate complex workflows and gain deep business insights.",
    features: [
      "Custom LLM Integrations (GPT, Claude, Llama)",
      "Business Intelligence & Data Analysis",
      "Robotic Process Automation (RPA)",
      "Predictive Maintenance Systems",
      "AI Strategy & Ethics Consulting"
    ],
    accent: "primary"
  },
  {
    id: "web-development",
    title: "Full-Stack Development",
    subtitle: "Security-First Application Engineering",
    highlight: "Next.js 15 frameworks optimized for 4K performance.",
    icon: Layout,
    description: "We build high-performance web and mobile applications with security baked into the architecture from day one.",
    features: [
      "Next.js 15 & React Enterprise Apps",
      "Scalable API & Microservices Design",
      "E-commerce & Custom CMS Solutions",
      "UI/UX Design with Elite Tech Aesthetics",
      "DevSecOps & Automated CI/CD Pipelines"
    ],
    accent: "secondary"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-40 pb-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] -z-10" />
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 inline-block"
          >
            <a href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-primary transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Return to Dashboard
            </a>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold text-white mb-6"
          >
            Digital <span className="text-primary text-glow-cyan">Excellence</span>
          </motion.h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto">
            Explore our comprehensive range of security-first technical solutions 
            designed for the modern enterprise.
          </p>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {detailedServices.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <div className="flex-1 space-y-8">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border
                    ${service.accent === 'primary' 
                      ? 'bg-primary/10 border-primary/20 text-primary' 
                      : 'bg-secondary/10 border-secondary/20 text-secondary'
                    }`}>
                    {service.subtitle}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-white/60 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${service.accent === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a href="#contact" className={`inline-flex items-center gap-2 text-white font-bold transition-colors group ${service.accent === 'primary' ? 'hover:text-primary' : 'hover:text-secondary'}`}>
                      Consult for this service 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="flex-1 w-full max-w-xl">
                  <motion.div 
                    className="liquid-glass p-6 md:p-12 rounded-[40px] border-white/10 relative group overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Animated Background Pulse */}
                    <div className={`absolute inset-0 bg-${service.accent === 'primary' ? 'primary' : 'secondary'}/5 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity`} />
                    
                    {/* Live Floating Icon Container */}
                    <motion.div 
                      animate={{ 
                        y: [0, -15, 0],
                        rotate: [0, 2, 0, -2, 0]
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className={`w-28 h-28 rounded-[32px] flex items-center justify-center relative z-10 mx-auto mb-8
                        ${service.accent === 'primary' 
                          ? 'bg-primary/10 border border-primary/20 text-primary shadow-[0_0_40px_rgba(34,211,238,0.1)]' 
                          : 'bg-secondary/10 border border-secondary/20 text-secondary shadow-[0_0_40px_rgba(16,185,129,0.1)]'
                        }`}
                    >
                      <service.icon className="w-14 h-14" />
                    </motion.div>

                    {/* Technical Highlight Info */}
                    <div className="text-center relative z-10">
                      <p className="text-white font-bold text-lg mb-2">Technical Insight</p>
                      <p className="text-white/40 text-sm leading-relaxed px-4">
                        {service.highlight}
                      </p>
                    </div>

                    {/* Content Placeholder for Visual Balance */}
                    <div className="mt-8 space-y-4 relative z-10 px-4">
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-${service.accent === 'primary' ? 'primary' : 'secondary'}/30`}
                          animate={{ width: ["20%", "60%", "20%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                      <div className="h-1.5 w-3/4 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-${service.accent === 'primary' ? 'primary' : 'secondary'}/30`}
                          animate={{ width: ["10%", "40%", "10%"] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        />
                      </div>
                    </div>

                    {/* Scanline Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[200%] w-full -top-full animate-[scan_8s_linear_infinite] pointer-events-none" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}

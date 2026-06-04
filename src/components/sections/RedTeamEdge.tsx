"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Fingerprint, GraduationCap, ShieldAlert } from "lucide-react";

export default function RedTeamEdge() {
  return (
    <section id="red-team" className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-medium mb-6">
              <Fingerprint className="w-3 h-3" />
              <span>The Offensive Advantage</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              A <span className="text-secondary text-glow-green">Red Team</span> Approach to Every Line of Code.
            </h2>
            <p className="text-white/60 text-lg mb-8">
              We aren&apos;t just developers; we are active Cybersecurity experts. Our team consists 
              of top-tier students and researchers with real-world internship experience at 
              major financial institutions across Zambia and the global market.
            </p>
            
            <ul className="space-y-4">
              {[
                { icon: ShieldAlert, text: "Offensive-first mindset: We find the holes before attackers do." },
                { icon: BadgeCheck, text: "Adherence to international standards: OWASP, NIST, and ISO protocols." },
                { icon: GraduationCap, text: "Fresh academic perspective integrated with enterprise maturity." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-secondary/20 rounded-md">
                    <item.icon className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-white/80">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="liquid-glass p-8 rounded-3xl border-white/10 relative z-10">
              <div className="bg-black/20 rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-white font-bold">Security Scorecard</h4>
                  <span className="px-2 py-1 bg-secondary/20 text-secondary text-[10px] rounded uppercase font-bold tracking-widest">Live Audit</span>
                </div>
                <div className="space-y-6">
                  {[
                    { label: "Infrastructure Hardening", value: 98 },
                    { label: "Vulnerability Remediation", value: 94 },
                    { label: "AI Model Alignment", value: 99 }
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="flex justify-between text-xs text-white/40 mb-2 font-mono uppercase">
                        <span>{stat.label}</span>
                        <span>{stat.value}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.value}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-secondary shadow-[0_0_10px_var(--secondary)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-white/30 text-[10px] font-mono text-center uppercase tracking-[0.2em]">
                Enterprise Grade Validation Sequence Complete
              </p>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/5 blur-[80px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

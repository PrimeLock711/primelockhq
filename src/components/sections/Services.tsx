"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  CloudIcon, 
  Cpu, 
  Layout, 
  BarChart
} from "lucide-react";

import Link from "next/link";

const services = [
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    desc: "Penetration testing, Vulnerability Assessments (VAPT), and comprehensive Security Audits tailored for enterprise growth.",
    icon: ShieldCheck,
    color: "primary",
  },
  {
    title: "ICT Infrastructure",
    slug: "ict-infrastructure",
    desc: "Scalable network setup, high-availability cloud migration, and proactive hardware maintenance to keep your business online.",
    icon: CloudIcon,
    color: "secondary",
  },
  {
    title: "AI Solutions",
    slug: "ai-solutions",
    desc: "Custom AI integrations, business process automation, and rapid prototyping using our advanced proprietary frameworks.",
    icon: Cpu,
    color: "primary",
  },
  {
    title: "Web Development",
    slug: "web-development",
    desc: "Next.js 15 enterprise-grade websites and scalable web applications built with a 'Security-First' development lifecycle.",
    icon: Layout,
    color: "secondary",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-primary text-glow-cyan">Capabilities</span>
            </h2>
            <p className="text-white/60 text-lg">
              We provide a comprehensive suite of digital defense and development services, 
              leveraging cutting-edge technology to protect and scale your organization.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/40 text-sm">
                <BarChart className="w-4 h-4" />
                <span>99.9% Uptime Guaranteed</span>
             </div>
          </div>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="liquid-glass p-8 rounded-2xl border-glow group relative cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:neon-glow-cyan transition-all duration-300`}>
                <service.icon className={`w-6 h-6 text-primary`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <Link href={`/services#${service.slug}`} className={`text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1 group/link`}>
                Learn More 
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MessageSquare, Phone, Send, Zap } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Ready to <span className="text-primary text-glow-cyan">Harden</span> Your Assets?
              </h2>
              <p className="text-white/60 mb-10 leading-relaxed">
                Contact our elite team to request a comprehensive security audit or 
                discuss your ICT infrastructure needs. We typically respond within 
                <strong> 2.4 hours </strong> during business sessions.
              </p>

              <div className="space-y-6">
                <a href="mailto:primelocksecurity@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/50 transition-all">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Email</p>
                    <p className="text-white">primelocksecurity@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://wa.me/260572532814" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/50 transition-all">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Secured Line</p>
                    <p className="text-white">+260 572 532 814</p>
                  </div>
                </a>

                <div className="inline-flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <Zap className="w-5 h-5 text-primary animate-bounce" />
                  <span className="text-primary text-sm font-bold">Rapid Deployment Badge: Active</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="liquid-glass p-8 md:p-10 rounded-3xl border border-white/10"
            >
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-white/40 ml-1">Full Name</label>
                    <Input className="bg-white/5 border-white/10 focus:border-primary text-white h-12" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-white/40 ml-1">Email Address</label>
                    <Input className="bg-white/5 border-white/10 focus:border-primary text-white h-12" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-white/40 ml-1">Service Required</label>
                  <select className="w-full bg-white/5 border border-white/10 focus:border-primary text-white h-12 rounded-md px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary appearance-none">
                    <option className="bg-[#0a0a0a]">Security Audit / VAPT</option>
                    <option className="bg-[#0a0a0a]">ICT Infrastructure Setup</option>
                    <option className="bg-[#0a0a0a]">AI Integration & Automaton</option>
                    <option className="bg-[#0a0a0a]">Web App Development</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-white/40 ml-1">How can we help?</label>
                  <textarea 
                    className="w-full bg-white/5 border border-white/10 focus:border-primary text-white rounded-md p-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary min-h-[120px]" 
                    placeholder="Describe your security context..."
                  />
                </div>
                <Button className="w-full h-12 bg-primary text-primary-foreground font-bold hover:neon-glow-cyan transition-all">
                  Initiate Secure Communication <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/20 text-xs font-mono">
            &copy; {new Date().getFullYear()} PRIMELOCK SECURITY TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/20 hover:text-white transition-colors"><MessageSquare className="w-5 h-5" /></a>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold border-l border-white/10 pl-6 hidden md:block">ISO 27001 Protocol Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone, Zap } from "lucide-react";

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
              <div className="flex flex-col items-center justify-center text-center h-full py-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Connect Instantly via WhatsApp</h3>
                  <p className="text-white/60 text-sm max-w-sm mx-auto">
                    Skip the forms. Chat directly with our elite security team for immediate assistance.
                  </p>
                </div>
                <a 
                  href="https://wa.me/260572532814" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full max-w-sm mt-4"
                >
                  <Button className="w-full h-14 bg-[#25D366] hover:bg-[#25D366]/90 text-black font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)]">
                    Message on WhatsApp <MessageSquare className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
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

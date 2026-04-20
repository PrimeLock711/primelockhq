"use client";

import React from "react";
import Gatekeeper from "./components/Gatekeeper";
import SandboxHero from "./SandboxHero";
import { TwCard } from "./components/TwLibrary";
import { Layers, MousePointer2, Palette } from "lucide-react";
import "./sandbox.css";

export default function Playground() {
  return (
    <Gatekeeper>
      <div className="tw-sandbox-root selection:bg-primary selection:text-white">
        <SandboxHero />
        
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              <TwCard>
                <Layers className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Atomic Library</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Modular components built with strict isolation principles. 
                  Ready for project-wide injection.
                </p>
              </TwCard>

              <TwCard>
                <MousePointer2 className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Interactive Lab</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Every interaction is tuned for the 'wow' factor using 
                  advanced spring physics and micro-motions.
                </p>
              </TwCard>

              <TwCard>
                <Palette className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Visual Fidelity</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Futuristic glassmorphism meets obsidian depth. 
                  Premium aesthetics for next-gen products.
                </p>
              </TwCard>
            </div>
          </div>
        </section>

        {/* Branding Footer */}
        <footer className="py-20 text-center border-t border-white/5">
           <p className="text-[10px] uppercase font-black tracking-[0.5em] text-white/20">
             PrimeLock Testing World // End of Session
           </p>
        </footer>
      </div>
    </Gatekeeper>
  );
}

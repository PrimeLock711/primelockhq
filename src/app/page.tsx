import Navbar from "@/components/Navbar";
import NetworkBackground from "@/components/NetworkBackground";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import RedTeamEdge from "@/components/sections/RedTeamEdge";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <NetworkBackground />
      <Navbar />
      
      <Hero />
      <Services />
      <RedTeamEdge />
      <Contact />
      
      {/* Subtle Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
        </svg>
      </div>
    </main>
  );
}

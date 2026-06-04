"use client";

import React from "react";

export default function BrandLogo({ className = "w-16 h-16", glow = true }) {
  return (
    <div className={`relative flex flex-col items-center gap-6 ${className}`}>
      <div className="relative w-full aspect-square flex items-center justify-center">
        {glow && (
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110 animate-pulse" />
        )}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]"
        >
          <path
            d="M12 2L3 7V12C3 17.5 7.5 21 12 22C16.5 21 21 17.5 21 12V7L12 2Z"
            stroke="url(#shieldGradient)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8V12.5"
            stroke="#00f2ff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <rect
            x="9"
            y="12.5"
            width="6"
            height="4.5"
            rx="1"
            stroke="#00f2ff"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="shieldGradient" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00f2ff" />
              <stop offset="1" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white whitespace-nowrap">
          PRIME LOCK <span className="text-primary text-glow-cyan">SECURITY</span>
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 opacity-50" />
      </div>
    </div>
  );
}

"use client";

import { Sparkles, ArrowRight, Lightbulb, MapPin, Building2, Trophy } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background radial gradient glow & celestial lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-700/20 via-[#d4af37]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-900/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Decorative subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Launch Banner Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d1838] border border-[#d4af37]/40 text-[#f5d77f] text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.2)] mb-8 animate-in fade-in zoom-in duration-500">
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span>The Entrepreneurship Cell of Carmel Shoranur</span>
          <span className="hidden sm:inline-block text-slate-500">•</span>
          <span className="hidden sm:inline-block text-slate-300">Igniting Innovators</span>
        </div>

        {/* Main Launch Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-white max-w-4xl mx-auto">
          Building Tomorrow’s{" "}
          <span className="gold-gradient-text block mt-1 sm:mt-2">
            Founders & Innovators
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Welcome to <strong className="text-white font-semibold">Carmech</strong> — 
          the premier student innovation and entrepreneurship cell situated in{" "}
          <strong className="text-[#f5d77f] font-semibold">Carmel Shoranur</strong>. 
          We transform bold campus concepts into high-impact startups.
        </p>

        {/* 30-Day Dynamic Countdown Timer */}
        <CountdownTimer />

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#waitlist"
            className="w-full sm:w-auto gold-btn px-8 py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 group shadow-lg"
          >
            <span>Register for the Launch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#pillars"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-slate-200 bg-[#0a1128] hover:bg-[#0f1b40] border border-blue-900/60 hover:border-[#d4af37]/50 font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Lightbulb className="w-4 h-4 text-[#d4af37]" />
            <span>Discover Our Initiatives</span>
          </a>
        </div>

        {/* Campus trust bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#d4af37]" />
            <span>Carmel CMI Shoranur Campus</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span>Kallipadam, Palakkad, Kerala</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-[#d4af37]" />
            <span>Student-Led Innovation Hub</span>
          </div>
        </div>
      </div>
    </section>
  );
}

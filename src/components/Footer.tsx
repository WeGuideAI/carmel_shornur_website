"use client";

import { MapPin, Mail, Sparkles, Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030611] border-t border-[#1e293b]/80 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/70">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#0a1128] border border-[#d4af37]/40 flex items-center justify-center font-black text-lg gold-gradient-text">
                C
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                CAR<span className="gold-gradient-text">MECH</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The official Entrepreneurship & Innovation Cell of Carmel Shoranur. 
              Empowering students to conceptualize, prototype, and scale ventures that shape Kerala&apos;s technological future.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#d4af37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Carmel CMI Institution • Kallipadam, Shoranur</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">
                  About Carmech
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-[#d4af37] transition-colors">
                  E-Cell Core Pillars
                </a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-[#d4af37] transition-colors">
                  Carmel Shoranur Heritage
                </a>
              </li>
              <li>
                <a href="#waitlist" className="hover:text-[#d4af37] transition-colors">
                  Join Priority Cohort
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Campus Location
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Carmel School / Institution, Shoranur</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Kallipadam P.O., Shoranur, Palakkad District, Kerala – 679122</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>ecell.carmech@carmelshoranur.edu</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 Carmech E-Cell • Carmel Shoranur. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Optimized for</span>
            <span className="text-slate-300 font-semibold">Vercel</span>
            <span>• Next.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { Sparkles, Compass, Users, Rocket, Menu, X, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenAdmin: () => void;
  submissionCount: number;
}

export default function Navbar({ onOpenAdmin, submissionCount }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050814]/80 backdrop-blur-xl border-b border-[#1e293b]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Carmel Shoranur Tag */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#0a1128] border border-[#d4af37]/40 flex items-center justify-center p-2 shadow-[0_0_15px_rgba(212,175,55,0.25)] group-hover:border-[#d4af37] transition-all duration-300">
            <span className="text-xl font-black tracking-tighter gold-gradient-text">
              C
            </span>
            <span className="text-sm font-bold text-blue-400">⚡</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-white">
                CAR<span className="gold-gradient-text">MECH</span>
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-md bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30">
                E-Cell
              </span>
            </div>
            <span className="text-xs text-slate-400 font-medium">
              Carmel Shoranur • Kerala
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a
            href="#about"
            className="hover:text-[#d4af37] transition-colors duration-200 flex items-center gap-1.5"
          >
            <Compass className="w-4 h-4 text-[#d4af37]" />
            About
          </a>
          <a
            href="#pillars"
            className="hover:text-[#d4af37] transition-colors duration-200 flex items-center gap-1.5"
          >
            <Rocket className="w-4 h-4 text-blue-400" />
            Pillars
          </a>
          <a
            href="#heritage"
            className="hover:text-[#d4af37] transition-colors duration-200 flex items-center gap-1.5"
          >
            <Users className="w-4 h-4 text-amber-300" />
            Carmel Heritage
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenAdmin}
            className="px-3 py-1.5 text-xs rounded-lg bg-[#0e1738] border border-[#d4af37]/30 text-slate-300 hover:text-white hover:border-[#d4af37] transition-all flex items-center gap-1.5"
            title="View submitted registrations"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Registry</span>
            {submissionCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-[#d4af37] text-[#050814] font-bold text-[10px]">
                {submissionCount}
              </span>
            )}
          </button>

          <a
            href="#waitlist"
            className="gold-btn px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#050814]" />
            Join Waitlist
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#0a122c] border border-slate-700 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070d22] border-b border-slate-800 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-slate-200 hover:text-[#d4af37] py-1"
          >
            About Carmech
          </a>
          <a
            href="#pillars"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-slate-200 hover:text-[#d4af37] py-1"
          >
            Core Pillars
          </a>
          <a
            href="#heritage"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-slate-200 hover:text-[#d4af37] py-1"
          >
            Carmel Shoranur Heritage
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAdmin();
            }}
            className="text-left text-sm text-[#d4af37] py-1 flex items-center justify-between"
          >
            <span>Organizer Registry</span>
            <span className="px-2 py-0.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-xs">
              {submissionCount} Submissions
            </span>
          </button>
          <a
            href="#waitlist"
            onClick={() => setMobileMenuOpen(false)}
            className="gold-btn text-center py-2.5 rounded-xl font-bold text-sm mt-2"
          >
            Join Priority Waitlist
          </a>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";
import { Sparkles, CheckCircle, Send, Copy, Check } from "lucide-react";
import confetti from "canvas-confetti";

export interface WaitlistSubmission {
  id: string;
  name: string;
  email: string;
  category: string;
  department: string;
  idea: string;
  timestamp: string;
  queueNumber: number;
}

interface WaitlistFormProps {
  onSubmissionSuccess: (submission: WaitlistSubmission) => void;
}

export default function WaitlistForm({ onSubmissionSuccess }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Student (Carmel Shoranur)",
    department: "",
    idea: "",
  });

  const [loading, setLoading] = useState(false);
  const [successSubmission, setSuccessSubmission] = useState<WaitlistSubmission | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);

    try {
      // Retrieve existing waitlist entries from localStorage
      const existingRaw = localStorage.getItem("carmech_waitlist_entries");
      const existing: WaitlistSubmission[] = existingRaw ? JSON.parse(existingRaw) : [];

      const queueNumber = existing.length + 101; // starting from 101 for realistic momentum
      const newSubmission: WaitlistSubmission = {
        id: "cm-" + Date.now().toString(36),
        name: formData.name.trim(),
        email: formData.email.trim(),
        category: formData.category,
        department: formData.department.trim() || "General",
        idea: formData.idea.trim() || "Interested in learning entrepreneurship & joining workshops",
        timestamp: new Date().toISOString(),
        queueNumber,
      };

      const updated = [newSubmission, ...existing];
      localStorage.setItem("carmech_waitlist_entries", JSON.stringify(updated));

      // Trigger Confetti explosion
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#d4af37", "#f5d77f", "#3b82f6", "#1e3a8a", "#ffffff"],
      });

      setSuccessSubmission(newSubmission);
      onSubmissionSuccess(newSubmission);

      // Reset form
      setFormData({
        name: "",
        email: "",
        category: "Student (Carmel Shoranur)",
        department: "",
        idea: "",
      });
    } catch (err) {
      console.error("Failed to save submission", err);
    } finally {
      setLoading(false);
    }
  };

  const copyInviteLink = () => {
    const url = typeof window !== "undefined" ? window.location.href : "https://carmech.vercel.app";
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="waitlist" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/30 uppercase tracking-widest mb-3">
            Join The Movement
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Reserve Your Spot in <span className="gold-gradient-text">Carmech</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Be part of the founding cohort of Carmel Shoranur&apos;s entrepreneurship revolution.
            Get exclusive invites to inaugural bootcamps, seed hackathons, and pitch days.
          </p>
        </div>

        {/* Success Modal / Ticket Card */}
        {successSubmission ? (
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#0c193c] via-[#08122a] to-[#040816] border border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.25)] text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#d4af37]/15 border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
              <CheckCircle className="w-9 h-9" />
            </div>

            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#d4af37]">
              Priority Access Confirmed
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
              Welcome to Carmech, {successSubmission.name}!
            </h3>

            <p className="mt-3 text-slate-300 text-sm max-w-md mx-auto">
              You are officially registered for the launch of Carmel Shoranur&apos;s E-Cell.
            </p>

            <div className="my-6 inline-block py-3 px-6 rounded-2xl bg-[#070e24] border border-[#d4af37]/40 shadow-inner">
              <span className="text-xs uppercase text-slate-400 block font-medium">Your Queue Number</span>
              <span className="text-3xl sm:text-4xl font-mono font-black gold-gradient-text">
                #{successSubmission.queueNumber}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={copyInviteLink}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0e1c45] border border-blue-800 text-slate-200 hover:text-white hover:border-[#d4af37] text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#d4af37]" />}
                <span>{copied ? "Link Copied to Clipboard!" : "Copy Share Link"}</span>
              </button>

              <button
                onClick={() => setSuccessSubmission(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
              >
                Register Another Member
              </button>
            </div>
          </div>
        ) : (
          /* Main Interactive Waitlist Form */
          <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#0a122c]/90 to-[#050918]/95 border border-[#d4af37]/30 shadow-[0_0_35px_rgba(10,18,44,0.9)] backdrop-blur-xl relative">
            <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Full Name <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Menon"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#060b1c] border border-slate-700/80 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37] text-white text-sm placeholder:text-slate-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Email Address <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#060b1c] border border-slate-700/80 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37] text-white text-sm placeholder:text-slate-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Role / Affiliation
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#060b1c] border border-slate-700/80 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37] text-white text-sm transition-all"
                  >
                    <option value="Student (Carmel Shoranur)">Student (Carmel Shoranur)</option>
                    <option value="Carmel Alumni">Carmel Alumni</option>
                    <option value="Faculty / Staff">Faculty / Staff</option>
                    <option value="Aspiring Founder / Techie">Aspiring Founder / Techie</option>
                    <option value="Mentor / Industry Partner">Mentor / Industry Partner</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Class / Batch / Specialization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Senior Secondary / Batch of 2026"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#060b1c] border border-slate-700/80 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37] text-white text-sm placeholder:text-slate-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Have an Idea or Area of Passion? (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us briefly what you want to build (AI, robotics, green tech, local commerce, clean energy...)"
                  value={formData.idea}
                  onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#060b1c] border border-slate-700/80 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37] text-white text-sm placeholder:text-slate-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full gold-btn py-3.5 px-6 rounded-xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                {loading ? (
                  <span>Reserving Spot...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#050814]" />
                    <span>Confirm Priority Registration</span>
                    <Sparkles className="w-4 h-4 text-[#050814]" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Instant confirmation • Saved locally • Zero spam</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

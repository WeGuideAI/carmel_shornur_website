"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionHeritage from "@/components/MissionHeritage";
import Pillars from "@/components/Pillars";
import WaitlistForm, { WaitlistSubmission } from "@/components/WaitlistForm";
import AdminSubmissionsModal from "@/components/AdminSubmissionsModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);

  const refreshSubmissionCount = () => {
    try {
      const raw = localStorage.getItem("carmech_waitlist_entries");
      if (raw) {
        const parsed = JSON.parse(raw);
        setSubmissionCount(Array.isArray(parsed) ? parsed.length : 0);
      } else {
        setSubmissionCount(0);
      }
    } catch {
      setSubmissionCount(0);
    }
  };

  useEffect(() => {
    refreshSubmissionCount();
  }, []);

  const handleSubmissionSuccess = (_newSubmission: WaitlistSubmission) => {
    refreshSubmissionCount();
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#050814] text-slate-100 selection:bg-[#d4af37] selection:text-[#050814]">
      {/* Top Navbar */}
      <Navbar
        onOpenAdmin={() => setAdminModalOpen(true)}
        submissionCount={submissionCount}
      />

      <main className="flex-1">
        {/* Hero Section with Launch Countdown */}
        <Hero />

        {/* Pillars Section */}
        <Pillars />

        {/* Institutional Heritage & Carmel Shoranur Context */}
        <div id="about">
          <MissionHeritage />
        </div>

        {/* Interactive Waitlist / Registration Form */}
        <WaitlistForm onSubmissionSuccess={handleSubmissionSuccess} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Organizer Registry Modal (Export CSV & View Registrations) */}
      <AdminSubmissionsModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        onRefreshCount={refreshSubmissionCount}
      />
    </div>
  );
}

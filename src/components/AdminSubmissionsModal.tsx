"use client";

import { useState, useEffect } from "react";
import { X, Download, Trash2, Users, Calendar, Mail, Tag, ShieldCheck } from "lucide-react";
import { WaitlistSubmission } from "./WaitlistForm";

interface AdminSubmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRefreshCount: () => void;
}

export default function AdminSubmissionsModal({
  isOpen,
  onClose,
  onRefreshCount,
}: AdminSubmissionsModalProps) {
  const [submissions, setSubmissions] = useState<WaitlistSubmission[]>([]);

  useEffect(() => {
    if (isOpen) {
      loadSubmissions();
    }
  }, [isOpen]);

  const loadSubmissions = () => {
    try {
      const raw = localStorage.getItem("carmech_waitlist_entries");
      if (raw) {
        setSubmissions(JSON.parse(raw));
      } else {
        setSubmissions([]);
      }
    } catch {
      setSubmissions([]);
    }
  };

  const handleExportCSV = () => {
    if (submissions.length === 0) {
      alert("No submissions to export yet!");
      return;
    }

    const headers = ["Queue #", "Name", "Email", "Role", "Class / Batch", "Idea / Notes", "Submitted At"];
    const rows = submissions.map((s) => [
      s.queueNumber,
      `"${s.name.replace(/"/g, '""')}"`,
      `"${s.email.replace(/"/g, '""')}"`,
      `"${s.category.replace(/"/g, '""')}"`,
      `"${s.department.replace(/"/g, '""')}"`,
      `"${s.idea.replace(/"/g, '""')}"`,
      `"${new Date(s.timestamp).toLocaleString()}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `carmech_waitlist_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClearAll = () => {
    if (confirm("Are you sure you want to clear all stored waitlist submissions from this browser?")) {
      localStorage.removeItem("carmech_waitlist_entries");
      setSubmissions([]);
      onRefreshCount();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl max-h-[85vh] flex flex-col rounded-2xl bg-[#091128] border border-[#d4af37]/40 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#060b1c] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
            <div>
              <h3 className="text-base font-bold text-white">Carmech E-Cell Registry</h3>
              <p className="text-xs text-slate-400">
                Live registrations stored in browser • {submissions.length} total members
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              disabled={submissions.length === 0}
              className="px-3 py-1.5 text-xs font-bold rounded-lg gold-btn flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content / Table */}
        <div className="flex-1 overflow-y-auto p-6">
          {submissions.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              <Users className="w-12 h-12 mx-auto text-slate-600 mb-3" />
              <p className="text-base font-medium text-slate-300">No registrations found yet</p>
              <p className="text-xs text-slate-500 mt-1">
                Submissions made on the website will be collected here and can be exported as CSV.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {submissions.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-[#070e24] border border-slate-800 hover:border-[#d4af37]/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[#d4af37]">
                        #{item.queueNumber}
                      </span>
                      <span className="font-bold text-white text-sm">{item.name}</span>
                      <span className="px-2 py-0.5 rounded-full bg-blue-900/50 text-blue-300 text-[10px] font-medium border border-blue-800">
                        {item.category}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-slate-400">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3 text-slate-500" />
                        {item.email}
                      </span>
                      {item.department && (
                        <span className="flex items-center gap-1">
                          <Tag className="w-3 h-3 text-slate-500" />
                          {item.department}
                        </span>
                      )}
                    </div>

                    {item.idea && (
                      <p className="text-slate-300 text-[11px] italic bg-[#040816] p-2 rounded-lg border border-slate-800/80 mt-1">
                        &ldquo;{item.idea}&rdquo;
                      </p>
                    )}
                  </div>

                  <div className="text-right text-[10px] text-slate-500 shrink-0">
                    <div className="flex items-center sm:justify-end gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(item.timestamp).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        {submissions.length > 0 && (
          <div className="px-6 py-3 bg-[#060b1c] border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">
              Carmel Shoranur • Carmech Organizing Committee
            </span>
            <button
              onClick={handleClearAll}
              className="text-rose-400 hover:text-rose-300 flex items-center gap-1 font-medium"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Registry Data</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

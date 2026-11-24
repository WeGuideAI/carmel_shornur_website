import { GraduationCap, Award, MapPin, Sparkles, HeartHandshake } from "lucide-react";

export default function MissionHeritage() {
  return (
    <section id="heritage" className="py-20 md:py-28 relative bg-[#040711]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heritage Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/30 uppercase tracking-widest">
              Institutional Heritage
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Rooted in the Tradition of{" "}
              <span className="gold-gradient-text">Carmel Shoranur</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Nestled in <strong className="text-white">Kallipadam, Shoranur</strong> (Palakkad district, Kerala),
              Carmel has long stood as a beacon of academic rigor, character formation, and forward-looking education under the aegis of the CMI (Carmelites of Mary Immaculate) Fathers.
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Inspired by the progressive educational vision of Saint Kuriakose Elias Chavara,
              <strong className="text-[#f5d77f]"> Carmech</strong> takes this noble legacy into the 21st century tech landscape — instilling students with the entrepreneurial courage, ethical foundation, and technical acumen to build sustainable enterprises.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#091128] border border-blue-900/50 flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Student First Formation</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Hands-on practical entrepreneurship combined with academic discipline.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#091128] border border-blue-900/50 flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Ethical Leadership</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Enterprises that solve pressing societal challenges and enrich community life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#0c1633] via-[#081024] to-[#040817] border border-[#d4af37]/35 shadow-[0_0_35px_rgba(212,175,55,0.15)] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2 mb-6 text-[#d4af37]">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">The Carmech Oath</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-serif italic text-white leading-snug">
                &ldquo;To democratize innovation for every student in Shoranur, transforming curiosity into technology, and ambition into thriving ventures.&rdquo;
              </blockquote>

              <div className="mt-8 pt-6 border-t border-[#d4af37]/20 flex items-center justify-between text-xs text-slate-400">
                <div>
                  <p className="font-bold text-white">Carmech Steering Council</p>
                  <p className="text-[#d4af37]">Carmel Shoranur, Kerala</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#0e1c45] border border-[#d4af37]/40 flex items-center justify-center font-bold text-[#d4af37]">
                  CMI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

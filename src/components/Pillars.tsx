import { Lightbulb, Rocket, Users2, ShieldCheck, Compass, Briefcase } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Ideation & Innovation Bootcamps",
    description:
      "Transform raw ideas into validated prototypes through structured ideathons, design thinking workshops, and hackathons right on the Carmel campus.",
    tag: "01 / Ideation",
  },
  {
    icon: Users2,
    title: "Expert Mentorship & Guidance",
    description:
      "Connect one-on-one with accomplished alumni founders, industry engineers, and academic advisors who guide you past startup pitfalls.",
    tag: "02 / Mentorship",
  },
  {
    icon: Rocket,
    title: "Incubation & Maker Prototyping",
    description:
      "Access dedicated technical resources, maker lab equipment, and software tooling to build working MVPs without friction.",
    tag: "03 / Incubation",
  },
  {
    icon: Compass,
    title: "Kerala Startup Ecosystem Bridge",
    description:
      "Bridging student startups with Kerala Startup Mission (KSUM), regional incubation hubs, grants, and early angel networks.",
    tag: "04 / Ecosystem",
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/30 uppercase tracking-widest mb-3">
            What We Offer
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The Pillars of <span className="gold-gradient-text">Carmech E-Cell</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            A comprehensive launchpad engineered to cultivate a high-impact startup culture
            among students in Shoranur and surrounding regions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="blue-card p-8 rounded-2xl relative transition-all duration-300 group overflow-hidden"
              >
                {/* Subtle corner gold badge */}
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#d4af37] uppercase">
                  {pillar.tag}
                </span>

                <div className="mt-4 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0e1a3d] border border-[#d4af37]/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#d4af37] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <Icon className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#f5d77f] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* Bottom subtle accent glow */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent group-hover:via-[#d4af37]/80 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Award, GraduationCap, Compass, BookOpen, CheckCircle, ShieldCheck, Cpu, ArrowUpRight, Play, Eye } from 'lucide-react';

interface TopPick {
  rank: number;
  category: string;
  title: string;
  subtitle: string;
  metric: string;
  tag: string;
  accent: string;
}

export const Highlights: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const topPicks: TopPick[] = [
    {
      rank: 1,
      category: 'ACADEMIC EXCELLENCE',
      title: '93.05% DISTINCTION',
      subtitle: 'Diploma in Computer Engineering from Government Polytechnic, Achalpur, Maharashtra (2023–2026).',
      metric: 'Govt. Polytechnic, Achalpur',
      tag: 'Achalpur · 93.05%',
      accent: 'from-emerald-950/40 via-emerald-900/10 to-transparent',
    },
    {
      rank: 2,
      category: 'ACTIVE PURSUIT',
      title: 'B.E. COMPUTER SCIENCE',
      subtitle: 'Currently pursuing 2nd Year (2026–2029) at Shri Sant Gajanan Maharaj College of Engineering (SSGMCE), Shegaon, Buldhana dist.',
      metric: 'SSGMCE Shegaon',
      tag: 'Shegaon · 2026–2029',
      accent: 'from-red-950/40 via-red-900/10 to-transparent',
    },
    {
      rank: 3,
      category: 'FEATURED HARDWARE',
      title: 'WIRELESS EV CHARGING',
      subtitle: 'Working prototype with magnetic resonant coils, live telemetry, and Android companion application.',
      metric: 'Physical + Digital',
      tag: 'Hardware Prototype',
      accent: 'from-amber-950/40 via-amber-900/10 to-transparent',
    },
    {
      rank: 4,
      category: 'SAFETY ENGINEERING',
      title: 'SHESECURE ANDROID APP',
      subtitle: 'Emergency dispatch trigger with real-time accelerometer shake detection and instant SMS coordinates.',
      metric: 'Sensor Dispatch',
      tag: 'Native Java',
      accent: 'from-cyan-950/40 via-cyan-900/10 to-transparent',
    },
    {
      rank: 5,
      category: 'INDUSTRY TRACK',
      title: '2 INDUSTRY INTERNSHIPS',
      subtitle: 'Android dev at iBase Electrosoft & stipend-based AI/ML internship at Assimilate Technologies.',
      metric: 'iBase & Assimilate',
      tag: 'Stipend-Based',
      accent: 'from-purple-950/40 via-purple-900/10 to-transparent',
    },
    {
      rank: 6,
      category: 'EARLY RIGOR',
      title: '91.80% SSC MERIT',
      subtitle: 'Secondary School Certificate (SSC) at Maharashtra Vidyalaya, Rajna Purna (Year: 2023).',
      metric: 'Maharashtra Vidyalaya',
      tag: 'Rajna Purna · 91.80%',
      accent: 'from-blue-950/40 via-blue-900/10 to-transparent',
    },
    {
      rank: 7,
      category: 'AUTHENTICATED CREDENTIALS',
      title: 'INFOSYS SPRINGBOARD',
      subtitle: '5 official verified certifications across Java, Python, Web Technologies, and Data Structures.',
      metric: '5 Certified Diplomas',
      tag: 'Springboard Verified',
      accent: 'from-teal-950/40 via-teal-900/10 to-transparent',
    },
    {
      rank: 8,
      category: 'NATIONAL SYMPOSIUM',
      title: 'IIT BOMBAY TECHFEST',
      subtitle: 'Attended national technical competitions, workshops, and robotics symposiums at IIT Bombay.',
      metric: 'National Level',
      tag: 'IIT Bombay Techfest',
      accent: 'from-rose-950/40 via-rose-900/10 to-transparent',
    },
    {
      rank: 9,
      category: 'STATE COMPETITION',
      title: 'GP AMRAVATI TECHFEST',
      subtitle: 'Competed at the state-level Government Polytechnic Amravati technical festival in web design.',
      metric: 'State Level',
      tag: 'Techfest Winner',
      accent: 'from-orange-950/40 via-orange-900/10 to-transparent',
    },
    {
      rank: 10,
      category: 'STRATEGIC SPECIALIZATION',
      title: 'FORWARD DEPLOYED ENGG.',
      subtitle: 'Grounding Agentic AI, full-stack systems, and tangible hardware into client and operational workflows.',
      metric: 'Applied AI + Systems',
      tag: 'FDE Focus',
      accent: 'from-indigo-950/40 via-indigo-900/10 to-transparent',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="toppicks"
      className="py-28 px-4 sm:px-6 lg:px-12 bg-[#090b10] relative overflow-hidden border-b border-white/[0.08]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-[550px] h-[550px] bg-red-950/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-950/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#e50914] animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-[#e50914] font-bold uppercase">
                KEY CAPABILITIES &amp; HIGHLIGHTS
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
              PORTFOLIO <span className="text-[#e50914]">HIGHLIGHTS</span>
            </h2>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
              Scroll or swipe through the Top 10
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full glass-board hover:border-white/30 flex items-center justify-center text-zinc-300 hover:text-white transition-all cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full glass-board hover:border-white/30 flex items-center justify-center text-zinc-300 hover:text-white transition-all cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Top 10 Horizontal Carousel with Giant Number Watermarks (Reference Style at 01:19 - 01:31) */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-4 no-scrollbar snap-x snap-mandatory"
        >
          {topPicks.map((pick) => (
            <div
              key={pick.rank}
              className="relative shrink-0 w-[300px] sm:w-[340px] h-[400px] snap-start rounded-3xl glass-board p-7 flex flex-col justify-between overflow-visible group hover:-translate-y-2 transition-all duration-300 hover:border-red-500/70 hover:shadow-[0_20px_45px_-10px_rgba(229,9,20,0.35)]"
            >
              {/* Underglow Halo Below Card */}
              <div className="absolute -bottom-4 inset-x-8 h-8 bg-gradient-to-r from-red-600/30 via-[#e50914]/50 to-rose-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              {/* Giant Outlined Rank Numeral Watermark in the background */}
              <div
                className="absolute -bottom-6 -right-2 font-display font-black text-[11rem] leading-none text-stroke-accent select-none pointer-events-none opacity-25 group-hover:opacity-40 transition-opacity"
              >
                {pick.rank}
              </div>

              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${pick.accent} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
              />

              {/* Card Header */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                    {pick.category}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-zinc-300">
                    #{pick.rank}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-white group-hover:text-red-400 transition-colors uppercase leading-tight mb-2">
                  {pick.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans line-clamp-3">
                  {pick.subtitle}
                </p>
              </div>

              {/* Card Footer with Metric Badge */}
              <div className="relative z-10 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                    STATUS / HIGHLIGHT
                  </span>
                  <span className="text-xs font-mono font-bold text-white tabular-nums">
                    {pick.metric}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400">
                  {pick.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

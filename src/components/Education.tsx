import React from 'react';
import {
  GraduationCap,
  Award,
  CheckCircle,
  ShieldCheck,
  Sparkles,
  MapPin,
  Calendar,
  Building2,
} from 'lucide-react';
import { EDUCATION_LIST, PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-12 bg-[#07080c] relative overflow-hidden border-b border-white/[0.08]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-red-950/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-purple-950/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#e50914] animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-[#e50914] font-bold uppercase">
                ACADEMIC TIMELINE · CHRONOLOGICAL PEDIGREE
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
              EDUCATION <span className="text-[#e50914]">FOUNDATIONS</span>
            </h2>
          </div>

          <p className="text-xs font-mono text-zinc-400 max-w-md font-sans">
            Formal chronological engineering pedigree — from secondary school merit and polytechnic distinction to active undergraduate degree at SSGMCE Shegaon.
          </p>
        </div>

        {/* Chronological Education Timeline Cards */}
        <div className="space-y-8 relative">
          {EDUCATION_LIST.map((edu, idx) => {
            const isPursuing = edu.statusType === 'pursuing';
            return (
              <div
                key={idx}
                className={`relative p-8 sm:p-10 rounded-3xl glass-board transition-all duration-300 shadow-2xl overflow-hidden group ${
                  isPursuing
                    ? 'border-red-500/30 hover:border-red-500/50 bg-gradient-to-r from-red-950/10 via-zinc-950/40 to-transparent'
                    : 'border-white/10 hover:border-emerald-500/40'
                }`}
              >
                {/* Outlined Stage Numeral Watermark in background */}
                <div className="absolute top-2 right-4 font-display font-black text-8xl sm:text-9xl text-stroke-accent select-none pointer-events-none opacity-15 group-hover:opacity-25 transition-opacity">
                  0{idx + 1}
                </div>

                <div className="relative z-10">
                  {/* Top Status & Timing Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-white/[0.08]">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                        STAGE 0{idx + 1}
                      </span>
                      <span className="text-zinc-600">·</span>
                      <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-300">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{edu.duration}</span>
                      </span>
                      <span className="text-zinc-600">·</span>
                      <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-300">
                        <MapPin className="w-3.5 h-3.5 text-[#e50914]" />
                        <span>{edu.location}</span>
                      </span>
                    </div>

                    {/* Status Badge */}
                    {isPursuing ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/40 font-mono text-xs uppercase font-bold tracking-wider shadow-sm animate-pulse">
                        <Sparkles className="w-3.5 h-3.5 text-red-400" />
                        <span>CURRENTLY PURSUING · 2ND YEAR</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-mono text-xs uppercase font-bold tracking-wider shadow-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>COMPLETED · {edu.achievement}</span>
                      </span>
                    )}
                  </div>

                  {/* Main Grid: Qualification & Institution Details (Left) + Result/Standing Box (Right) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
                    <div className="lg:col-span-8 flex items-start gap-4 sm:gap-5">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg transition-transform group-hover:scale-105 ${
                          isPursuing
                            ? 'bg-red-500/20 border border-red-500/40 text-red-400'
                            : 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400'
                        }`}
                      >
                        <GraduationCap className="w-7 h-7" />
                      </div>

                      <div className="space-y-1.5">
                        {/* Qualification Title */}
                        <h3 className="font-display font-black text-2xl sm:text-3xl text-white group-hover:text-red-400 transition-colors tracking-tight uppercase leading-tight">
                          {edu.degree}
                        </h3>

                        {/* Full Institution Name (Prominently Displayed) */}
                        <div className="flex items-center gap-2 text-zinc-100 font-mono text-sm sm:text-base font-bold">
                          <Building2 className="w-4 h-4 text-[#e50914] shrink-0" />
                          <span className="text-white">{edu.institution}</span>
                        </div>

                        {/* Location Details */}
                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Result / Standing Highlight Box */}
                    <div className="lg:col-span-4 lg:text-right">
                      <div className="inline-block w-full sm:w-auto bg-black/60 p-4 sm:px-6 sm:py-4 rounded-2xl border border-white/10 shadow-inner">
                        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1 font-semibold">
                          {isPursuing ? 'CURRENT STANDING' : 'ACADEMIC RESULT'}
                        </div>
                        <div
                          className={`font-display font-black text-3xl sm:text-4xl tabular-nums leading-none mb-1 ${
                            isPursuing ? 'text-red-400' : 'text-emerald-400'
                          }`}
                        >
                          {edu.scoreOrStatus}
                        </div>
                        <div className="text-[11px] font-mono text-zinc-300 font-semibold">
                          {isPursuing ? 'B.E. (2026 — 2029)' : `${edu.achievement} Achieved`}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Syllabus / Pedagogy Description */}
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5 mb-5 flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                    <CheckCircle className="w-4 h-4 text-[#e50914] shrink-0 mt-0.5" />
                    <p>{edu.details}</p>
                  </div>

                  {/* Highlights Tags Strip */}
                  {edu.highlights && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.08]">
                      {edu.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300 font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Terminal, Layers, Compass, Zap, MapPin, Building2, GraduationCap, Award, ShieldCheck, Briefcase, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-28 px-4 sm:px-6 lg:px-12 bg-[#07080c] relative overflow-hidden border-b border-white/[0.08]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-32 w-[550px] h-[550px] bg-red-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#e50914] animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-[#e50914] font-bold uppercase">
              PROFILE &amp; BACKGROUND
            </span>
          </div>
          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-none">
            ABOUT <span className="text-[#e50914]">HITESH</span>
          </h2>
          <p className="text-xs font-mono text-zinc-400 mt-2 max-w-xl font-sans">
            First-principles engineering rigor, technical depth, and practical software development.
          </p>
        </div>

        {/* Featured Editorial Quote */}
        <div className="mb-12 p-8 sm:p-10 rounded-3xl glass-board border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#e50914]" />
          <p className="text-xl sm:text-2xl lg:text-3xl font-light text-zinc-100 leading-relaxed font-sans mb-4">
            "A Computer Science &amp; Engineering student at <strong className="text-white font-semibold">SSGMCE Shegaon</strong> with strong problem-solving skills, building responsive applications and exploring <span className="text-red-400 font-medium">AI/ML, Python, Agentic AI, and hardware technologies</span>."
          </p>
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
            <span className="text-[#e50914] font-bold">—</span>
            <span className="text-zinc-200 font-semibold tracking-wider uppercase">Hitesh Vairale</span>
            <span className="text-zinc-600">·</span>
            <span>B.E. Computer Science &amp; Engineering (2026–2029)</span>
          </div>
        </div>

        {/* Dossier Grid: Portrait Card + 4 Architectural Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Portrait Card */}
          <div className="lg:col-span-4 rounded-3xl glass-board p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden border border-white/15 bg-black mb-5 shadow-2xl">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Card Identity */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest block mb-0.5">
                  SOFTWARE &amp; SYSTEMS ENGINEER
                </span>
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                  HITESH VAIRALE
                </h3>
                <span className="text-[11px] font-mono text-zinc-300">
                  SSGMCE Shegaon · CSE 2nd Year
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pt-3 border-t border-white/[0.08]">
              <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Academic Duration</span>
              <span className="text-zinc-200 font-semibold">2026 — 2029 (B.E.)</span>
            </div>
          </div>

          {/* Right Column: 4 Architectural Information Cards */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1: ACADEMIC FOUNDATIONS */}
              <div className="p-6 rounded-3xl glass-board hover:border-red-500/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block font-bold">
                    ACADEMIC FOUNDATION
                  </span>
                  <GraduationCap className="w-4 h-4 text-red-400" />
                </div>
                <h4 className="font-display font-bold text-xl text-white mb-1">
                  B.E. Computer Science &amp; Engg.
                </h4>
                <p className="text-xs font-mono text-zinc-300 mb-1 font-semibold">
                  SSGMCE · Shegaon, Buldhana dist.
                </p>
                <p className="text-[11px] font-mono text-zinc-400 mb-3">
                  Duration: 2026–2029 · Currently in 2nd Year
                </p>
                <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>93.05% Diploma Distinction (Achalpur)</span>
                </div>
              </div>

              {/* Card 2: INDUSTRY INTERNSHIPS */}
              <div className="p-6 rounded-3xl glass-board hover:border-red-500/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block font-bold">
                    INDUSTRY PRACTICE
                  </span>
                  <Briefcase className="w-4 h-4 text-red-400" />
                </div>
                <h4 className="font-display font-bold text-xl text-white mb-1">
                  2 Formal Internships
                </h4>
                <p className="text-xs font-mono text-zinc-300 mb-1">
                  iBase Electrosoft (Android Dev) &amp; Assimilate Tech (AI/ML)
                </p>
                <p className="text-[11px] font-mono text-zinc-400 mb-3">
                  Practical software architecture &amp; ML automation
                </p>
                <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-red-400 font-semibold">
                  STIPEND-BASED INDUSTRY WORK
                </div>
              </div>

              {/* Card 3: CORE ENGINEERING TRACKS */}
              <div className="p-6 rounded-3xl glass-board hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block font-bold">
                    TECHNICAL EXPERTISE
                  </span>
                  <Code2 className="w-4 h-4 text-cyan-400" />
                </div>
                <h4 className="font-display font-bold text-xl text-white mb-1">
                  Full-Stack, Mobile &amp; Systems
                </h4>
                <p className="text-xs font-mono text-zinc-300 mb-1">
                  Java, Android SDK, C, C++, Python, SQL &amp; Web
                </p>
                <p className="text-[11px] font-mono text-zinc-400 mb-3">
                  From low-level graphics primitives to AI agent scripts
                </p>
                <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-cyan-400 font-semibold">
                  Forward Deployed Track
                </div>
              </div>

              {/* Card 4: LOCATION & MOBILITY */}
              <div className="p-6 rounded-3xl glass-board hover:border-emerald-500/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block font-bold">
                    LOCATION &amp; MOBILITY
                  </span>
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="font-display font-bold text-xl text-white mb-1">
                  Based in Amravati, Maharashtra
                </h4>
                <p className="text-xs font-mono text-zinc-300 mb-1">
                  College: SSGMCE, Shegaon (Buldhana dist.)
                </p>
                <p className="text-[11px] font-mono text-zinc-400 mb-3">
                  Engineering undergraduate campus &amp; innovation labs
                </p>
                <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open to Relocation &amp; Remote Roles</span>
                </div>
              </div>
            </div>

            {/* Bottom Card: Engineering Focus Areas */}
            <div className="p-6 rounded-3xl glass-board border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest shrink-0 font-bold">
                ENGINEERING PILLARS
              </span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-zinc-300">
                <span>Wireless EV Induction</span>
                <span className="text-zinc-600">·</span>
                <span>Data Structures &amp; Algorithms</span>
                <span className="text-zinc-600">·</span>
                <span>Agentic AI Automation</span>
                <span className="text-zinc-600">·</span>
                <span>Native Android (Java)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

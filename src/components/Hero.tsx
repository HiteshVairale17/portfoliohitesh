import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ArrowDown, FileText, ArrowUpRight, Cpu, Smartphone, Sparkles, Layers, Terminal, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking for subtle parallax and reveal
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const portraitScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.92]);
  const haloOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.35]);
  const textTranslateY = useTransform(scrollYProgress, [0, 0.6], [0, -30]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const disciplines = [
    {
      icon: Smartphone,
      title: 'MOBILE SYSTEMS',
      subtitle: 'Native Android SDK & Java',
      highlight: '2 Production Apps',
      targetId: 'projects',
    },
    {
      icon: Terminal,
      title: 'SYSTEMS & C/C++',
      subtitle: 'Data Structures & OpenGL',
      highlight: 'Core CS Foundations',
      targetId: 'skills',
    },
    {
      icon: Cpu,
      title: 'HARDWARE & IOT',
      subtitle: 'Resonant Magnetic Induction',
      highlight: 'EV Charging Prototype',
      targetId: 'projects',
    },
    {
      icon: Sparkles,
      title: 'APPLIED AI / ML',
      subtitle: 'Agentic Workflows & Python',
      highlight: 'Forward Deployed Track',
      targetId: 'experience',
    },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#07080c] border-b border-white/[0.08]"
    >
      {/* Rich Atmospheric Ambient Lighting */}
      <div className="absolute top-1/4 right-1/4 -translate-y-1/4 translate-x-1/4 w-[650px] h-[650px] bg-red-600/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Main Hero Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-250px)]">
          {/* Left Column: Title, Identity, Metas & CTAs */}
          <motion.div
            style={shouldReduceMotion ? {} : { y: textTranslateY }}
            className="lg:col-span-7 flex flex-col justify-center text-left relative z-10"
          >

            {/* Oversized Editorial Engineering Title */}
            <div className="mb-4">
              <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-tight text-white leading-[0.85] uppercase select-none">
                HITESH <span className="text-[#e50914]">VAIRALE</span>
              </h1>
              <div className="font-mono text-xs sm:text-sm tracking-wider text-zinc-400 uppercase mt-3 flex flex-wrap items-center gap-2 font-medium">
                <span className="text-white font-semibold">Computer Science &amp; Engineering Student</span>
                <span className="text-zinc-600">·</span>
                <span>SSGMCE Shegaon</span>
                <span className="text-zinc-600">·</span>
                <span className="text-red-400">AI/ML &amp; Software Development</span>
              </div>
            </div>

            {/* Clean Unboxed Metadata Strip */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono text-zinc-400 mb-6 pb-4 border-b border-white/[0.08]">
              <span className="text-zinc-200">B.E. Computer Science (2026–2029)</span>
              <span className="text-zinc-600">·</span>
              <span className="text-emerald-400 font-medium">93.05% Diploma Distinction</span>
              <span className="text-zinc-600">·</span>
              <span className="text-red-400 font-medium">2 Internships</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-200">6 Projects</span>
            </div>

            {/* Engineering Bio Description */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed mb-8 font-sans">
              Computer Science &amp; Engineering undergraduate at <strong className="text-white font-semibold">SSGMCE Shegaon</strong> building robust mobile applications, exploring <span className="text-zinc-100 font-medium">AI/ML workflows</span>, and bridging physical hardware through <span className="text-red-400 font-medium">contactless resonant induction</span>.
            </p>

            {/* High-Impact Actions: Work + Resume + Contact */}
            <div className="flex flex-wrap items-center gap-3.5">
              {/* Primary CTA */}
              <button
                onClick={() => scrollToSection('projects')}
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#e50914] hover:bg-[#f40612] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-xl shadow-red-950/70 hover:scale-[1.03] cursor-pointer"
              >
                <span>Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              {/* View Resume Action */}
              <a
                href="/Hitesh-Resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 hover:scale-[1.03] cursor-pointer shadow-lg shadow-white/10"
              >
                <FileText className="w-3.5 h-3.5 text-black" />
                <span>View Resume</span>
              </a>

              {/* Connect CTA */}
              <button
                onClick={() => scrollToSection('contact')}
                className="group flex items-center gap-2 px-5 py-3.5 rounded-full glass-board hover:border-white/30 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 hover:scale-[1.03] cursor-pointer"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait with Floating Technical Cards */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-6">
            <motion.div
              style={shouldReduceMotion ? {} : { scale: portraitScale }}
              className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center"
            >
              {/* Cinematic Red Halo Glow */}
              <motion.div
                style={shouldReduceMotion ? {} : { opacity: haloOpacity }}
                className="absolute -inset-10 rounded-full bg-gradient-to-tr from-red-600/35 via-rose-600/20 to-purple-600/15 blur-3xl pointer-events-none"
              />

              {/* Outer Concentric Precision Ring */}
              <div className="absolute inset-0 rounded-full border border-red-500/25 p-3 pointer-events-none">
                <div className="w-full h-full rounded-full border border-white/10" />
              </div>

              {/* Portrait Image Frame */}
              <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-b from-[#181a24] via-[#0d0f18] to-[#07080c] border border-white/20 shadow-2xl flex items-center justify-center">
                {!imgError ? (
                  <img
                    src="/images/profile/hitesh-profile.png"
                    alt="Hitesh Vairale"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top rounded-full filter contrast-[1.04] brightness-[0.98] transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-[#0a0c14] flex flex-col items-center justify-center p-6 text-center select-none">
                    <div className="w-20 h-20 rounded-2xl bg-[#e50914] flex items-center justify-center text-white font-display font-black text-4xl mb-2">
                      HV
                    </div>
                    <span className="font-display font-bold text-xl text-white uppercase">
                      HITESH VAIRALE
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase mt-0.5">
                      SSGMCE SHEGAON
                    </span>
                  </div>
                )}
              </div>

              {/* Floating Technical Card 1: Academic Score (Top Left) */}
              <div className="absolute -top-3 -left-4 sm:-left-8 glass-board px-4 py-2.5 rounded-2xl shadow-2xl pointer-events-none">
                <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider mb-0.5">
                  DIPLOMA DISTINCTION
                </div>
                <div className="font-display font-black text-base sm:text-lg text-emerald-400 tabular-nums leading-tight">
                  93.05% Aggregate
                </div>
                <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
                  GOVT. POLYTECHNIC ACHALPUR
                </div>
              </div>

              {/* Floating Technical Card 2: Industry Exposure (Top Right) */}
              <div className="absolute top-6 -right-4 sm:-right-8 glass-board px-4 py-2.5 rounded-2xl shadow-2xl pointer-events-none">
                <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider mb-0.5">
                  INDUSTRY INTERNSHIPS
                </div>
                <div className="font-display font-black text-base sm:text-lg text-[#e50914] tabular-nums leading-tight">
                  2 Formal Tenures
                </div>
                <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
                  STIPEND-BASED AI/ML &amp; ANDROID
                </div>
              </div>

              {/* Floating Technical Card 3: Current Degree (Bottom Left) */}
              <div className="absolute -bottom-2 -left-2 sm:-left-6 glass-board px-4 py-2.5 rounded-2xl shadow-2xl pointer-events-none">
                <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider mb-0.5">
                  ACTIVE DEGREE
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-white leading-tight">
                  B.E. Computer Science
                </div>
                <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
                  SSGMCE SHEGAON (2ND YEAR)
                </div>
              </div>

              {/* Floating Technical Card 4: Stack & Systems (Bottom Right) */}
              <div className="absolute -bottom-3 -right-2 sm:-right-6 glass-board px-4 py-2.5 rounded-2xl shadow-2xl pointer-events-none">
                <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider mb-0.5">
                  CORE FOCUS
                </div>
                <div className="font-mono font-bold text-xs sm:text-sm text-cyan-400 leading-tight">
                  Java · AI/ML · Hardware
                </div>
                <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
                  SYSTEMS INTEGRATION
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Core Engineering Disciplines Row */}
        <div className="mt-14 pt-8 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                Core Engineering Disciplines
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              Cross-disciplinary software, hardware &amp; intelligent systems
            </span>
          </div>

          {/* 4 Architectural Discipline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {disciplines.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.targetId)}
                  className="group text-left p-5 rounded-2xl glass-board hover:border-red-500/70 transition-all duration-300 relative flex flex-col justify-between h-36 cursor-pointer hover:-translate-y-1 hover:shadow-[0_16px_36px_-6px_rgba(229,9,20,0.35)]"
                >
                  {/* Underglow Halo Below Card */}
                  <div className="absolute -bottom-3 inset-x-4 h-6 bg-gradient-to-r from-red-600/30 via-[#e50914]/50 to-rose-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Internal Soft Crimson Radial Light */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600/20 via-red-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/25 group-hover:border-red-500/70 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-black text-lg text-white group-hover:text-red-400 transition-colors uppercase leading-tight mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-mono text-zinc-400">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-300">
                    <span className="text-red-400 font-semibold">{item.highlight}</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

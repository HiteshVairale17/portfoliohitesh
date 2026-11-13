import React, { useState } from 'react';
import { Calendar, MapPin, Building2, BadgeDollarSign, CheckCircle, GraduationCap, Award, Sparkles, Layers, Globe, Briefcase, Cpu } from 'lucide-react';

interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  category: 'internship' | 'milestone';
  companyOverview?: string;
  isStipendBased?: boolean;
  stipendBadgeText?: string;
  corporatePresence?: string[];
  description: string;
  keyTakeaway: string;
  tags: string[];
}

export const Experience: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'internships' | 'milestones'>('internships');

  const experiences: ExperienceEntry[] = [
    {
      id: 'exp-assimilate',
      role: 'AI/ML & Social Media Intern',
      company: 'Assimilate Technologies Pvt. Ltd.',
      duration: '3 Months',
      location: 'Pune, Maharashtra, India',
      category: 'internship',
      isStipendBased: true,
      stipendBadgeText: 'STIPEND-BASED INTERNSHIP',
      corporatePresence: ['Pune (Internship Location)', 'USA', 'UK', 'Dubai'],
      companyOverview:
        'A technology solutions and consulting firm delivering AI systems, machine learning engineering, and digital workflows, with presence in Pune, USA, UK, and Dubai.',
      description:
        'Completed a 3-month stipend-based internship focusing on artificial intelligence tools, machine learning workflows, and digital media automation. Contributed to AI-assisted processes and practical technology delivery.',
      keyTakeaway:
        'Applied AI/ML methodologies to real business pipelines and developed industry-level engineering discipline in a collaborative setting.',
      tags: ['AI / ML', 'Machine Learning', 'Python', 'Social Media Systems', 'Stipend-Based', 'Pune'],
    },
    {
      id: 'exp-ibase',
      role: 'Android Development Intern',
      company: 'iBase Electrosoft LLP',
      duration: '3 Months',
      location: 'Amravati, Maharashtra, India',
      category: 'internship',
      companyOverview:
        'An IT and software services firm based in Amravati, Maharashtra, specializing in Android mobile application development and software implementation.',
      description:
        'Completed a 3-month internship focused on native Android development. Gained hands-on exposure to mobile application architecture, Android SDK components, layout designs, and practical feature implementation.',
      keyTakeaway:
        'Built native mobile features and gained foundational understanding of practical production software workflows.',
      tags: ['Android Development', 'Java', 'Android SDK', 'Mobile UI Architecture', 'Amravati'],
    },
    {
      id: 'exp-wireless-ev',
      role: 'Lead Hardware & Systems Researcher',
      company: 'Wireless EV Charging Initiative',
      duration: 'Capstone Research & Prototyping',
      location: 'Maharashtra, India',
      category: 'milestone',
      companyOverview:
        'Independent academic engineering initiative exploring high-frequency magnetic resonance induction for electric vehicle power transfer.',
      description:
        'Researched and built a working hardware prototype for contactless electric vehicle charging utilizing magnetic resonance induction principles, complemented by an Android telemetry monitoring application.',
      keyTakeaway:
        'Bridged electromagnetic hardware physics with real-time Android monitoring software.',
      tags: ['Magnetic Resonance', 'Hardware Prototyping', 'Android Telemetry', 'Clean Energy'],
    },
    {
      id: 'exp-systems-graphics',
      role: 'Computer Graphics & Systems Explorer',
      company: 'Systems & Low-Level Computing',
      duration: 'Technical Rigor Milestone',
      location: 'Achalpur / Shegaon',
      category: 'milestone',
      companyOverview:
        'Exploration of low-level memory architectures, C primitives, and 2D/3D graphics rendering.',
      description:
        'Engineered an interactive real-time Digital Clock utilizing pure C and OpenGL/GLUT libraries, implementing trigonometric coordinate math to project clock hands and numerical markers on screen without external rendering engines.',
      keyTakeaway:
        'Deepened comprehension of mathematical coordinate projections, memory structures, and hardware graphics pipelines.',
      tags: ['C Programming', 'OpenGL', 'GLUT', 'Trigonometric Rendering', 'Systems Foundations'],
    },
  ];

  const filtered = experiences.filter((exp) => {
    if (activeFilter === 'internships') return exp.category === 'internship';
    if (activeFilter === 'milestones') return exp.category === 'milestone';
    return true;
  });

  return (
    <section
      id="experience"
      className="py-28 px-4 sm:px-6 lg:px-12 bg-[#07080c] relative overflow-hidden border-b border-white/[0.08]"
    >
      {/* Hidden anchor for smooth scroll support */}
      <div id="journey" className="absolute top-0" />

      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-950/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-purple-950/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#e50914] animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-[#e50914] font-bold uppercase">
                EXPERIENCE &amp; INDUSTRY PRACTICE
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
              PROFESSIONAL <span className="text-[#e50914]">EXPERIENCE</span>
            </h2>
          </div>

          <div className="text-xs font-mono text-zinc-400 max-w-md">
            Formal industry internships in mobile architecture and AI/ML, alongside hardware research milestones.
          </div>
        </div>

        {/* Clean Filter Controls (Interactive Buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/[0.08]">
          <button
            onClick={() => setActiveFilter('internships')}
            className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeFilter === 'internships'
                ? 'bg-white text-black font-bold shadow-xl shadow-white/10'
                : 'glass-board text-zinc-400 hover:text-white'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5 text-[#e50914]" />
            <span>Industry Internships (2)</span>
          </button>

          <button
            onClick={() => setActiveFilter('milestones')}
            className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeFilter === 'milestones'
                ? 'bg-white text-black font-bold shadow-xl shadow-white/10'
                : 'glass-board text-zinc-400 hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Milestones (2)</span>
          </button>

          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-white text-black font-bold shadow-xl shadow-white/10'
                : 'glass-board text-zinc-400 hover:text-white'
            }`}
          >
            <span>All Experience ({experiences.length})</span>
          </button>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="relative p-8 sm:p-10 rounded-3xl glass-board hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-2xl"
            >
              {/* Giant Outlined Watermark Number */}
              <div
                className="absolute -top-4 -right-2 font-display font-black text-8xl sm:text-9xl text-stroke-accent select-none pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity"
              >
                0{idx + 1}
              </div>

              <div className="relative z-10">
                {/* Top Role & Duration Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                      {item.category === 'internship' ? 'INDUSTRY INTERNSHIP' : 'TECHNICAL MILESTONE'}
                    </span>
                    <span className="text-zinc-600">·</span>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-300">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{item.duration}</span>
                    </span>
                  </div>

                  {/* Prominent Stipend-Based Badge if applicable */}
                  {item.isStipendBased && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-bold uppercase tracking-wider shadow-md shadow-emerald-950/60 animate-pulse">
                      <BadgeDollarSign className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{item.stipendBadgeText || 'STIPEND-BASED INTERNSHIP'}</span>
                    </div>
                  )}
                </div>

                {/* Role Title */}
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white group-hover:text-red-400 transition-colors uppercase leading-tight mb-2">
                  {item.role}
                </h3>

                {/* Company & Location */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-300 mb-4">
                  <div className="flex items-center gap-1.5 text-white font-bold">
                    <Building2 className="w-3.5 h-3.5 text-[#e50914]" />
                    <span>{item.company}</span>
                  </div>
                  <span className="text-zinc-600">·</span>
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Verified Company Overview */}
                {item.companyOverview && (
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 mb-4 text-xs font-mono text-zinc-400 leading-relaxed">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1 font-semibold">
                      COMPANY PROFILE
                    </span>
                    <p>{item.companyOverview}</p>
                    {item.corporatePresence && (
                      <div className="mt-2 pt-2 border-t border-white/5 text-[11px] text-zinc-400">
                        <span className="text-zinc-500">Global Presence: </span>
                        <span>{item.corporatePresence.join(' · ')}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Work Description */}
                <p className="text-sm text-zinc-300 leading-relaxed font-sans mb-4">
                  {item.description}
                </p>

                {/* Key Takeaway */}
                <div className="p-3.5 rounded-xl bg-red-950/15 border border-red-500/20 text-xs font-mono text-red-200 mb-5">
                  <span className="text-[#e50914] font-bold">Key Takeaway: </span>
                  <span>{item.keyTakeaway}</span>
                </div>
              </div>

              {/* Bottom Tags */}
              <div className="relative z-10 pt-4 border-t border-white/[0.08] flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

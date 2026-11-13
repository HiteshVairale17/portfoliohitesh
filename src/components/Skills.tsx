import React, { useState } from 'react';
import {
  Code2,
  Globe2,
  Database,
  Wrench,
  Bot,
  Binary,
  Network,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { renderSkillOfficialLogo } from './SkillLogos';

interface SkillItem {
  id: string;
  name: string;
  code: string;
  level: string;
  category: string;
  usedIn: string[];
  certifications?: string;
  accent: string;
}

export const Skills: React.FC = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  // Skill items with 2-letter monograms matching the reference site
  const skillsData: Record<string, SkillItem[]> = {
    'Programming Languages': [
      {
        id: 'java',
        name: 'Java',
        code: 'JAVA',
        level: 'Primary Engineering Language',
        category: 'Programming Languages',
        usedIn: ['SheSecure Android App', 'iBase Electrosoft Internship', 'Object-Oriented Architectures'],
        certifications: 'Infosys Springboard Java Programming Certification',
        accent: 'from-red-950/40 via-red-900/10 to-transparent',
      },
      {
        id: 'cpp',
        name: 'C++',
        code: 'C++',
        level: 'Object-Oriented & Systems',
        category: 'Programming Languages',
        usedIn: ['Data Structures & Algorithms', 'Competitive Programming', 'Memory Optimization'],
        certifications: 'Infosys Springboard Programming Using C++ Certification',
        accent: 'from-blue-950/40 via-blue-900/10 to-transparent',
      },
      {
        id: 'python',
        name: 'Python',
        code: 'PYTHON',
        level: 'AI/ML & Automation',
        category: 'Programming Languages',
        usedIn: ['Data Processing', 'Agentic AI Scripts', 'Academic Research'],
        certifications: 'Infosys Springboard Python Basics Certification',
        accent: 'from-amber-950/40 via-amber-900/10 to-transparent',
      },
      {
        id: 'c-lang',
        name: 'C Programming',
        code: 'C',
        level: 'Systems & Graphics Rigor',
        category: 'Programming Languages',
        usedIn: ['Digital Clock (OpenGL/GLUT)', 'Low-level Memory & OS Foundations'],
        certifications: 'MSBTE Diploma Computer Engineering Curriculum',
        accent: 'from-cyan-950/40 via-cyan-900/10 to-transparent',
      },
      {
        id: 'sql',
        name: 'SQL',
        code: 'SQ',
        level: 'Relational Database Queries',
        category: 'Programming Languages',
        usedIn: ['College Complaint System', 'Library Management System', 'MySQL'],
        certifications: 'Database Management Systems MSBTE',
        accent: 'from-emerald-950/40 via-emerald-900/10 to-transparent',
      },
      {
        id: 'android',
        name: 'Android Native',
        code: 'AN',
        level: 'Mobile Systems Engineering',
        category: 'Programming Languages',
        usedIn: ['SheSecure Women Safety App', 'Wireless EV Companion App'],
        certifications: 'Sensor & Background Service Architectures',
        accent: 'from-purple-950/40 via-purple-900/10 to-transparent',
      },
    ],
    'Web Technologies': [
      {
        id: 'html5',
        name: 'HTML5',
        code: 'H5',
        level: 'Semantic Web Structure',
        category: 'Web Technologies',
        usedIn: ['Open Charge Community', 'Library Management System', 'Portfolio Web Apps'],
        certifications: 'Infosys Springboard Web Development Certification',
        accent: 'from-red-950/40 via-red-900/10 to-transparent',
      },
      {
        id: 'css3',
        name: 'CSS3 & Tailwind',
        code: 'CS',
        level: 'Responsive UI Design',
        category: 'Web Technologies',
        usedIn: ['Open Charge Web App', 'Responsive Portfolios'],
        certifications: 'Government Polytechnic Amravati Web Design Competition',
        accent: 'from-cyan-950/40 via-cyan-900/10 to-transparent',
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        code: 'JS',
        level: 'Client & Dynamic Scripting',
        category: 'Web Technologies',
        usedIn: ['Interactive Web Portals', 'Open Charge Dynamic Maps & Forms'],
        certifications: 'Infosys Springboard Web Dev Certification',
        accent: 'from-amber-950/40 via-amber-900/10 to-transparent',
      },
      {
        id: 'bootstrap',
        name: 'Bootstrap',
        code: 'BS',
        level: 'Grid Systems & Rapid UI',
        category: 'Web Technologies',
        usedIn: ['Library Management System', 'Academic Web Projects'],
        accent: 'from-purple-950/40 via-purple-900/10 to-transparent',
      },
      {
        id: 'react',
        name: 'React (Basics)',
        code: 'RE',
        level: 'Modern Component Systems',
        category: 'Web Technologies',
        usedIn: ['Single Page Applications', 'Modern Web Interfaces'],
        accent: 'from-blue-950/40 via-blue-900/10 to-transparent',
      },
    ],
    'Tools & Technologies': [
      {
        id: 'git',
        name: 'Git',
        code: 'GT',
        level: 'Distributed Version Control',
        category: 'Tools & Technologies',
        usedIn: ['All 6 Engineering Repositories', 'Team Collaboration Workflows'],
        accent: 'from-red-950/40 via-red-900/10 to-transparent',
      },
      {
        id: 'github',
        name: 'GitHub',
        code: 'GH',
        level: 'Open Source & Repository Mgmt',
        category: 'Tools & Technologies',
        usedIn: ['github.com/HiteshVairale17', 'Project Releases & Issue Tracking'],
        accent: 'from-zinc-950/40 via-zinc-900/10 to-transparent',
      },
      {
        id: 'vscode',
        name: 'VS Code',
        code: 'VS',
        level: 'Primary Code Studio',
        category: 'Tools & Technologies',
        usedIn: ['Web Engineering', 'C/C++ Projects', 'Python Scripting'],
        accent: 'from-blue-950/40 via-blue-900/10 to-transparent',
      },
      {
        id: 'android-studio',
        name: 'Android Studio',
        code: 'AS',
        level: 'Native Android IDE',
        category: 'Tools & Technologies',
        usedIn: ['SheSecure Development', 'College Complaint Management App', 'Wireless Charging Companion App'],
        accent: 'from-emerald-950/40 via-emerald-900/10 to-transparent',
      },
      {
        id: 'mysql',
        name: 'MySQL Server',
        code: 'MY',
        level: 'Relational Database Engine',
        category: 'Tools & Technologies',
        usedIn: ['Complaint Management Database', 'Library System Schema'],
        accent: 'from-amber-950/40 via-amber-900/10 to-transparent',
      },
    ],
    'Core Fundamentals': [
      {
        id: 'dsa',
        name: 'Data Structures & Algorithms',
        code: 'DS',
        level: 'Computational Efficiency',
        category: 'Core Fundamentals',
        usedIn: ['Algorithms Coursework', 'Competitive Problem Solving'],
        certifications: 'Infosys Springboard DSA Certification',
        accent: 'from-red-950/40 via-red-900/10 to-transparent',
      },
      {
        id: 'oop',
        name: 'Object-Oriented Programming',
        code: 'OO',
        level: 'Polymorphism & Clean Abstraction',
        category: 'Core Fundamentals',
        usedIn: ['Java Software Architecture', 'Android Activity & Service Lifecycles'],
        certifications: 'Infosys Springboard Certified',
        accent: 'from-cyan-950/40 via-cyan-900/10 to-transparent',
      },
      {
        id: 'dbms',
        name: 'Database Management',
        code: 'DB',
        level: 'Schema Normalization & ACID',
        category: 'Core Fundamentals',
        usedIn: ['Relational Data Design', 'Entity Relationship Modeling'],
        accent: 'from-amber-950/40 via-amber-900/10 to-transparent',
      },
      {
        id: 'os',
        name: 'Operating Systems',
        code: 'OS',
        level: 'Processes, Concurrency & Threads',
        category: 'Core Fundamentals',
        usedIn: ['Background Service Threads', 'Linux / Windows System Calls'],
        accent: 'from-purple-950/40 via-purple-900/10 to-transparent',
      },
    ],
  };

  const categories = Object.keys(skillsData);
  const activeCategory = categories[activeCategoryIdx];
  const currentSkills = skillsData[activeCategory] || [];

  return (
    <section
      id="skills"
      className="py-28 px-4 sm:px-6 lg:px-12 bg-[#07080c] relative overflow-hidden border-b border-white/[0.08]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-red-950/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#e50914] animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-[#e50914] font-bold uppercase">
              TECHNICAL SKILLS &amp; PROFICIENCIES
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
            TECHNICAL <span className="text-[#e50914]">SKILLS</span>
          </h2>
          <p className="text-xs font-mono text-zinc-400 mt-2 max-w-xl">
            Hover or tap a skill to see where it shows up across projects and verified certifications.
          </p>
        </div>

        {/* Side-by-Side Glass Board Layout (Reference Style at 01:32 - 01:53) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Category Vertical Selector Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {categories.map((cat, idx) => {
              const isSelected = activeCategoryIdx === idx;
              const count = skillsData[cat]?.length || 0;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategoryIdx(idx);
                    setSelectedSkill(null);
                  }}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 flex items-center justify-between cursor-pointer border ${
                    isSelected
                      ? 'bg-white text-black font-bold shadow-xl shadow-white/10 scale-[1.02] border-white'
                      : 'glass-board text-zinc-300 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? 'bg-[#e50914]' : 'bg-zinc-600'
                      }`}
                    />
                    <div>
                      <span className="font-display font-black text-xl uppercase tracking-tight block leading-tight">
                        {cat}
                      </span>
                      <span className={`text-[10px] font-mono tracking-wider ${isSelected ? 'text-zinc-700' : 'text-zinc-500'}`}>
                        {count} TECHNOLOGIES
                      </span>
                    </div>
                  </div>

                  <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-black/10 text-black' : 'bg-white/[0.05] text-zinc-400'
                  }`}>
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Interactive Tiles with Attractive Crimson Underglow */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="p-6 rounded-3xl glass-board border-white/10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    ACTIVE CATEGORY:
                  </span>
                  <span className="text-xs font-mono font-bold text-white uppercase">
                    {activeCategory}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-red-400">
                  {currentSkills.length} TECHNOLOGIES
                </span>
              </div>

              {/* Grid of official brand skill tiles with attractive cursor underglow */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {currentSkills.map((skill) => {
                  const isHovered = selectedSkill?.id === skill.id;
                  return (
                    <div
                      key={skill.id}
                      onClick={() => setSelectedSkill(skill)}
                      onMouseEnter={() => setSelectedSkill(skill)}
                      className={`relative p-5 rounded-2xl glass-board transition-all duration-300 flex flex-col justify-between h-36 cursor-pointer group hover:-translate-y-1 overflow-visible ${
                        isHovered
                          ? 'border-red-500/80 shadow-[0_16px_36px_-6px_rgba(229,9,20,0.45)] bg-[#141622]'
                          : 'hover:border-red-500/70 hover:shadow-[0_16px_36px_-6px_rgba(229,9,20,0.4)]'
                      }`}
                    >
                      {/* Underglow Light Halo Below Card (From User Reference Image) */}
                      <div
                        className={`absolute -bottom-3 inset-x-4 h-7 bg-gradient-to-r from-red-600/30 via-[#e50914]/60 to-rose-600/30 rounded-full blur-xl pointer-events-none transition-opacity duration-300 ${
                          isHovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                      />

                      {/* Internal Soft Crimson Radial Light (From User Reference Image) */}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600/25 via-red-950/15 to-transparent pointer-events-none transition-opacity duration-300 ${
                          isHovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                      />

                      {/* Top Official Tech Brand Logo */}
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="w-11 h-11 rounded-2xl bg-black/80 border border-red-500/25 group-hover:border-red-500/70 flex items-center justify-center p-2.5 transition-all duration-300 shadow-inner group-hover:scale-105 group-hover:bg-[#1a1217] group-hover:shadow-md group-hover:shadow-red-950/50">
                          {renderSkillOfficialLogo(skill.id, 'w-full h-full object-contain')}
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400 group-hover:text-zinc-200 uppercase font-semibold">
                          {skill.code}
                        </span>
                      </div>

                      {/* Bottom Name & Category */}
                      <div className="relative z-10">
                        <h4 className="font-display font-black text-lg text-white group-hover:text-red-400 transition-colors uppercase leading-tight">
                          {skill.name}
                        </h4>
                        <span className="text-[9px] font-mono text-zinc-400 block truncate mt-0.5">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Active Skill Inspection Drawer / Details Box */}
            {selectedSkill && (
              <div className="p-6 rounded-3xl glass-board border-red-500/30 bg-[#0f111c] animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/[0.08] gap-2">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-black/90 border border-red-500/40 flex items-center justify-center p-2.5 shadow-xl shadow-red-950/60 shrink-0">
                      {renderSkillOfficialLogo(selectedSkill.id, 'w-full h-full object-contain')}
                    </div>
                    <div>
                      <h4 className="font-display font-black text-2xl text-white uppercase leading-none">
                        {selectedSkill.name}
                      </h4>
                      <span className="text-xs font-mono text-red-400 mt-1 block font-medium">
                        {selectedSkill.level}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 self-start sm:self-auto">
                    {selectedSkill.category}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">
                      WHERE IT SHOWS UP IN HITESH'S REPERTOIRE:
                    </span>
                    <ul className="space-y-1">
                      {selectedSkill.usedIn.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-zinc-200">
                          <CheckCircle className="w-3.5 h-3.5 text-[#e50914] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedSkill.certifications && (
                    <div>
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">
                        VERIFIED CREDENTIAL:
                      </span>
                      <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-emerald-400 flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{selectedSkill.certifications}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

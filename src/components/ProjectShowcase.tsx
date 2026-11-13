import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Zap,
  ShieldAlert,
  Globe,
  BookOpen,
  Clock,
  Layers,
  Cpu,
  CheckCircle2,
  X,
  Smartphone,
  Laptop,
  Terminal,
  Activity,
  BatteryCharging,
  Wifi,
  Radio,
  FileText,
  Image as ImageIcon,
  Maximize2
} from 'lucide-react';
import { PROJECTS_LIST, Project } from '../data/portfolioData';

export const ProjectShowcase: React.FC = () => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [selectedModalProject, setSelectedModalProject] = useState<Project | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [viewMode, setViewMode] = useState<'photos' | 'schematic'>('photos');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  const currentProject = PROJECTS_LIST[activeProjectIdx];

  const handleSelectProject = (idx: number) => {
    setActiveProjectIdx(idx);
    setActiveImageIdx(0);
    setViewMode('photos');
  };

  const prev = () => {
    const nextIdx = activeProjectIdx === 0 ? PROJECTS_LIST.length - 1 : activeProjectIdx - 1;
    handleSelectProject(nextIdx);
  };

  const next = () => {
    const nextIdx = activeProjectIdx === PROJECTS_LIST.length - 1 ? 0 : activeProjectIdx + 1;
    handleSelectProject(nextIdx);
  };

  // Distinct accent styles per project
  const accentTheme: Record<
    Project['accentColor'],
    {
      badge: string;
      glow: string;
      border: string;
      activeTab: string;
      button: string;
      text: string;
      hex: string;
    }
  > = {
    rose: {
      badge: 'bg-rose-500/10 text-rose-400 border-rose-500/25',
      glow: 'from-rose-950/40 via-rose-900/10 to-transparent',
      border: 'border-rose-500/40',
      activeTab: 'bg-rose-600 text-white shadow-lg shadow-rose-950/80',
      button: 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-950/50',
      text: 'text-rose-400',
      hex: '#e11d48',
    },
    emerald: {
      badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
      glow: 'from-emerald-950/40 via-emerald-900/10 to-transparent',
      border: 'border-emerald-500/40',
      activeTab: 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/80',
      button: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/50',
      text: 'text-emerald-400',
      hex: '#10b981',
    },
    cyan: {
      badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25',
      glow: 'from-cyan-950/40 via-cyan-900/10 to-transparent',
      border: 'border-cyan-500/40',
      activeTab: 'bg-cyan-600 text-white shadow-lg shadow-cyan-950/80',
      button: 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-950/50',
      text: 'text-cyan-400',
      hex: '#06b6d4',
    },
    amber: {
      badge: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
      glow: 'from-amber-950/40 via-amber-900/10 to-transparent',
      border: 'border-amber-500/40',
      activeTab: 'bg-amber-600 text-white shadow-lg shadow-amber-950/80',
      button: 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-950/50',
      text: 'text-amber-400',
      hex: '#f59e0b',
    },
    blue: {
      badge: 'bg-blue-500/10 text-blue-400 border-blue-500/25',
      glow: 'from-blue-950/40 via-blue-900/10 to-transparent',
      border: 'border-blue-500/40',
      activeTab: 'bg-blue-600 text-white shadow-lg shadow-blue-950/80',
      button: 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-950/50',
      text: 'text-blue-400',
      hex: '#3b82f6',
    },
    violet: {
      badge: 'bg-violet-500/10 text-violet-400 border-violet-500/25',
      glow: 'from-violet-950/40 via-violet-900/10 to-transparent',
      border: 'border-violet-500/40',
      activeTab: 'bg-violet-600 text-white shadow-lg shadow-violet-950/80',
      button: 'bg-violet-600 hover:bg-violet-500 text-white shadow-violet-950/50',
      text: 'text-violet-400',
      hex: '#8b5cf6',
    },
  };

  const currentTheme = accentTheme[currentProject.accentColor];

  // Render realistic device mockups for each engineering case study
  const renderMockup = (proj: Project) => {
    switch (proj.id) {
      case 'wireless-ev-charging':
        return (
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 p-4 sm:p-6 bg-[#0a0c14] rounded-2xl border border-rose-500/20 relative overflow-hidden">
            {/* Ambient coil glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

            {/* Left: Hardware Induction Coil Schematic */}
            <div className="w-full md:w-1/2 flex flex-col justify-between p-4 rounded-2xl bg-zinc-950/80 border border-white/10 text-left">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                  Hardware Coupling
                </span>
                <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                  Resonant ~85 kHz
                </span>
              </div>

              {/* Electromagnetic Coupling Diagram */}
              <div className="space-y-3 my-2">
                <div className="p-3 rounded-xl bg-zinc-900/90 border border-rose-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold text-white">Transmitter Ground Base Pad</div>
                    <div className="text-[10px] font-mono text-zinc-400">High-frequency AC inverter &amp; primary coil</div>
                  </div>
                  <span className="text-[10px] font-mono text-rose-400 font-semibold">230V Supply</span>
                </div>

                <div className="flex justify-center items-center gap-2 py-1">
                  <div className="w-12 h-0.5 bg-rose-500/60 rounded" />
                  <span className="text-[9px] font-mono text-rose-400 uppercase tracking-widest px-2 py-0.5 rounded bg-rose-500/10">
                    Magnetic Flux Field
                  </span>
                  <div className="w-12 h-0.5 bg-rose-500/60 rounded" />
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/90 border border-rose-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold text-white">Receiver Vehicle Undercarriage</div>
                    <div className="text-[10px] font-mono text-zinc-400">Secondary induction coil &amp; rectifier circuit</div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">DC Rectified</span>
                </div>
              </div>

              <div className="text-[10px] font-mono text-zinc-400 pt-3 border-t border-white/5 flex items-center justify-between">
                <span>Power Transfer: Contactless</span>
                <span className="text-rose-400">Prototype Working</span>
              </div>
            </div>

            {/* Right: Realistic Android Smartphone Mockup with Companion App UI */}
            <div className="w-64 sm:w-72 shrink-0 rounded-[36px] bg-[#1a1d26] p-2.5 shadow-2xl border-2 border-zinc-700/60 shadow-rose-950/60">
              {/* Phone Inner Bezel & Screen */}
              <div className="rounded-[30px] bg-[#0c0e16] p-3 text-left overflow-hidden border border-white/10">
                {/* Punch Hole Camera & Status Bar */}
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 px-2 pb-2 mb-2 border-b border-white/5">
                  <span>10:42</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-black border border-zinc-700 mx-auto" />
                  <div className="flex items-center gap-1">
                    <Wifi className="w-3 h-3 text-zinc-300" />
                    <span className="text-emerald-400 font-bold">5G</span>
                  </div>
                </div>

                {/* App Bar */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 block uppercase">Companion App</span>
                    <span className="text-xs font-mono font-bold text-white">EV ChargeSync</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Battery Circular Dial Mock */}
                <div className="my-2 p-3 rounded-2xl bg-[#121522] border border-rose-500/30 flex flex-col items-center justify-center text-center">
                  <BatteryCharging className="w-6 h-6 text-rose-500 mb-1" />
                  <div className="font-display font-black text-3xl text-white tracking-tight tabular-nums">
                    84%
                  </div>
                  <span className="text-[10px] font-mono text-rose-400 uppercase tracking-wider">
                    FAST CHARGING ACTIVE
                  </span>
                </div>

                {/* Real-time Telemetry Stats */}
                <div className="space-y-1.5 text-[11px] font-mono mb-2">
                  <div className="p-2 rounded-xl bg-zinc-950/80 flex justify-between border border-white/5">
                    <span className="text-zinc-500">Charging Rate:</span>
                    <span className="text-white font-semibold">7.2 kW</span>
                  </div>
                  <div className="p-2 rounded-xl bg-zinc-950/80 flex justify-between border border-white/5">
                    <span className="text-zinc-500">Est. Time Remaining:</span>
                    <span className="text-amber-400 font-semibold">22 Mins</span>
                  </div>
                  <div className="p-2 rounded-xl bg-zinc-950/80 flex justify-between border border-white/5">
                    <span className="text-zinc-500">Coil Alignment:</span>
                    <span className="text-emerald-400 font-semibold">Optimal (98%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'shesecure':
        return (
          <div className="w-full flex items-center justify-center p-4 sm:p-8 bg-[#09110d] rounded-2xl border border-emerald-500/25 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

            {/* Realistic Android Smartphone Mockup for SheSecure */}
            <div className="w-72 sm:w-80 rounded-[38px] bg-[#16201a] p-3 shadow-2xl border-2 border-emerald-800/60 shadow-emerald-950/80">
              <div className="rounded-[30px] bg-[#09120c] p-4 text-left overflow-hidden border border-emerald-500/30">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pb-2 mb-3 border-b border-white/5">
                  <span>09:15</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-black border border-emerald-900" />
                  <span className="text-emerald-400 font-bold">LTE · GPS LOCK</span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-white block">SheSecure</span>
                    <span className="text-[10px] font-mono text-emerald-400">Accelerometer Guard Active</span>
                  </div>
                </div>

                {/* Emergency Shake Trigger Simulation */}
                <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-emerald-500/40 mb-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1">
                    <span>SENSOR THRESHOLD</span>
                    <span className="text-emerald-400 font-semibold">&gt; 12.5 m/s² Triggered</span>
                  </div>
                  <div className="text-xs font-mono text-white font-bold flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    RAPID SHAKE DETECTED
                  </div>
                </div>

                {/* SMS Outgoing Dispatch Preview */}
                <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-200">
                  <div className="text-[9px] text-emerald-400 uppercase tracking-widest mb-1">
                    AUTOMATED OUTGOING SMS // 3 RECIPIENTS
                  </div>
                  <p className="text-white leading-normal text-[10px]">
                    "EMERGENCY: Hitesh's device triggered alert! Coordinates: https://maps.google.com/?q=20.7891,76.6845"
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'college-complaint-system':
        return (
          <div className="w-full flex items-center justify-center p-4 sm:p-6 bg-[#091016] rounded-2xl border border-cyan-500/25 relative overflow-hidden">
            {/* Ambient Cyan Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

            {/* Realistic Android Smartphone Mockup */}
            <div className="w-72 sm:w-80 rounded-[40px] bg-[#121922] p-3 shadow-2xl border-2 border-cyan-800/60 shadow-cyan-950/80">
              <div className="rounded-[32px] bg-[#080d14] p-3.5 text-left overflow-hidden border border-cyan-500/30">
                {/* Android Status Bar */}
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pb-2 mb-2 border-b border-white/10">
                  <span className="font-semibold text-zinc-300">10:30</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-black border border-cyan-700 mx-auto" />
                  <div className="flex items-center gap-1">
                    <Wifi className="w-3 h-3 text-cyan-400" />
                    <span className="text-cyan-400 font-bold">5G</span>
                  </div>
                </div>

                {/* Mobile App Header */}
                <div className="flex items-center justify-between mb-2.5 px-0.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                      <Smartphone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-white block leading-tight">
                        Complaint App
                      </span>
                      <span className="text-[9px] font-mono text-cyan-400">Android Mobile UI</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-bold">
                    Native Java
                  </span>
                </div>

                {/* Genuine Application Screenshot within Phone Screen */}
                <div className="relative rounded-xl overflow-hidden border border-cyan-500/30 bg-black aspect-[4/3] mb-2.5 shadow-lg group">
                  <img
                    src="/images/projects/complaint-management/complaint-management-01.jpg"
                    alt="College Complaint Management System Android Screenshot"
                    className="w-full h-full object-cover filter contrast-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-2">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[10px] font-mono text-cyan-300 font-semibold flex items-center gap-1">
                        <Smartphone className="w-3 h-3 text-cyan-400" />
                        Live Mobile Screenshot
                      </span>
                      <span className="text-[9px] font-mono text-zinc-300 bg-black/60 px-1.5 py-0.5 rounded">
                        Ticket Routing
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mobile Ticket Progress UI */}
                <div className="space-y-1.5 font-mono text-xs mb-2">
                  <div className="p-2 rounded-xl bg-zinc-950/80 border border-cyan-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-zinc-400">TICKET #CC-1084</div>
                      <div className="text-white text-[11px] font-semibold">Lab Switch Hardware Issue</div>
                    </div>
                    <span className="text-[9px] font-bold text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-500/30">
                      IN REVIEW
                    </span>
                  </div>

                  <div className="p-2 rounded-xl bg-zinc-950/80 border border-emerald-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-zinc-400">TICKET #CC-1081</div>
                      <div className="text-white text-[11px] font-semibold">Projector Cable Replacement</div>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                      RESOLVED
                    </span>
                  </div>
                </div>

                {/* Mobile App Footer Note */}
                <div className="text-[9px] font-mono text-zinc-400 text-center py-1 bg-white/[0.02] rounded-lg border border-white/5">
                  Android Client: Student Grievance Filing &amp; Admin Triage
                </div>
              </div>
            </div>
          </div>
        );

      case 'opencharge-community':
        return (
          <div className="w-full flex items-center justify-center p-4 sm:p-6 bg-[#130f08] rounded-2xl border border-amber-500/25 relative overflow-hidden">
            {/* Desktop Browser Mockup */}
            <div className="w-full max-w-xl rounded-2xl bg-[#14120f] border border-amber-500/30 shadow-2xl overflow-hidden text-left">
              {/* Browser Window Chrome */}
              <div className="px-4 py-2.5 bg-zinc-950 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 max-w-xs mx-4 px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-[10px] font-mono text-zinc-300 truncate text-center">
                  https://opencharge-community.vercel.app
                </div>
                <div className="w-4 h-4 text-zinc-500" />
              </div>

              {/* Browser Content */}
              <div className="p-5 font-sans space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span className="font-display font-bold text-sm text-white">OPEN CHARGE COMMUNITY</span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Live Production
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950/70 border border-white/5 text-xs text-zinc-300">
                  <div className="font-mono text-[10px] text-amber-400 uppercase mb-1">STATION DISCUSSION FORUM</div>
                  <p className="text-[11px] leading-relaxed">
                    Peer ratings, uptime verification, and connector compatibility (CCS2, Type-2, Bharat DC-001) for electric vehicles.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-300">
                    <span className="text-zinc-500 block">Frontend:</span> React &amp; Tailwind
                  </div>
                  <div className="p-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-300">
                    <span className="text-zinc-500 block">Hosting:</span> Vercel Edge CDN
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'library-management-system':
        return (
          <div className="w-full flex items-center justify-center p-4 sm:p-6 bg-[#090d16] rounded-2xl border border-blue-500/25 relative overflow-hidden">
            {/* Desktop Browser Mockup */}
            <div className="w-full max-w-xl rounded-2xl bg-[#0d121e] border border-blue-500/30 shadow-2xl overflow-hidden text-left">
              <div className="px-4 py-2.5 bg-zinc-950 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 max-w-xs mx-4 px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-[10px] font-mono text-zinc-300 truncate text-center">
                  localhost:8080/library/circulation
                </div>
                <div className="w-4 h-4 text-zinc-500" />
              </div>

              <div className="p-5 font-sans space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-400" />
                    <span className="font-display font-bold text-sm text-white">LIBRARY CIRCULATION PROTOTYPE</span>
                  </div>
                  <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                    7-Day Reminder Concept
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950/80 border border-blue-500/30 font-mono text-xs space-y-1.5">
                  <div className="flex justify-between text-zinc-400 text-[11px]">
                    <span>Book Title:</span>
                    <span className="text-white font-medium">Data Structures &amp; Algorithms in C</span>
                  </div>
                  <div className="flex justify-between text-zinc-400 text-[11px]">
                    <span>Borrower ID:</span>
                    <span className="text-white">CSE-2024-042</span>
                  </div>
                  <div className="flex justify-between text-zinc-400 text-[11px]">
                    <span>Loan Window:</span>
                    <span className="text-amber-400 font-semibold">5 of 7 Days Elapsed</span>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-zinc-400 border-t border-white/5 pt-2">
                  Notification trigger: automated email/SMS dispatched at Day 5 to minimize overdue fines.
                </div>
              </div>
            </div>
          </div>
        );

      case 'digital-clock':
        return (
          <div className="w-full flex items-center justify-center p-4 sm:p-6 bg-[#100a18] rounded-2xl border border-violet-500/25 relative overflow-hidden">
            {/* Terminal / OpenGL Viewport Mockup */}
            <div className="w-full max-w-xl rounded-2xl bg-black border border-violet-500/40 shadow-2xl overflow-hidden text-left font-mono">
              <div className="px-4 py-2 bg-zinc-950 border-b border-white/10 flex items-center justify-between text-[10px] text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-violet-400" />
                  <span>opengl_clock_main.c // gcc -lGL -lGLU -lglut</span>
                </div>
                <span className="text-violet-400 font-bold">60 FPS</span>
              </div>

              <div className="p-6 text-center space-y-4">
                <div className="text-[10px] text-zinc-500 tracking-widest">
                  OPENGL DISPLAY MATRIX // REAL-TIME SYSTEM TIME
                </div>

                {/* Glowing Clock Vector Digits */}
                <div className="font-mono font-black text-4xl sm:text-5xl text-violet-400 tracking-widest drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]">
                  12:45:30
                </div>

                <div className="flex justify-center items-center gap-4 text-[10px] text-zinc-400 border-t border-white/10 pt-3">
                  <span>Transformation: glLoadIdentity()</span>
                  <span>·</span>
                  <span>Buffer: glutSwapBuffers()</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderProjectMedia = (proj: Project) => {
    const hasImages = Boolean(proj.images && proj.images.length > 0);
    const isShowingPhotos = hasImages && viewMode === 'photos';

    return (
      <div className="flex flex-col gap-3 w-full">
        {/* Toggle between Real Photos & Simulator when images exist */}
        {hasImages && (
          <div className="flex items-center justify-between bg-zinc-950/90 p-1.5 rounded-2xl border border-white/10 mb-1">
            <button
              type="button"
              onClick={() => setViewMode('photos')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono flex items-center justify-center gap-2 transition-all cursor-pointer ${
                isShowingPhotos
                  ? 'bg-rose-600 text-white font-semibold shadow-md shadow-rose-950/80'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>
                Project Assets ({proj.images?.length}{' '}
                {proj.id === 'wireless-ev-charging' ? 'Hardware Photos' : 'Screenshots'})
              </span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('schematic')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono flex items-center justify-center gap-2 transition-all cursor-pointer ${
                !isShowingPhotos
                  ? 'bg-zinc-800 text-white font-semibold shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>System Simulator</span>
            </button>
          </div>
        )}

        {isShowingPhotos && proj.images ? (
          <div className="flex flex-col gap-3">
            {/* Main Featured Photo Viewport */}
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl bg-black border border-white/15 overflow-hidden flex items-center justify-center group shadow-2xl">
              <img
                src={proj.images[activeImageIdx]}
                alt={`${proj.title} asset ${activeImageIdx + 1}`}
                className="w-full h-full object-contain filter contrast-[1.02] select-none"
              />

              {/* Top Floating Badge */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-200 flex items-center gap-1.5 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                <span>
                  Asset 0{activeImageIdx + 1} of 0{proj.images.length}
                </span>
              </div>

              {/* Fullscreen Zoom Action */}
              <button
                type="button"
                onClick={() =>
                  setLightboxImage({
                    src: proj.images![activeImageIdx],
                    caption: `${proj.title} — Asset 0${activeImageIdx + 1} of 0${proj.images!.length}`,
                  })
                }
                className="absolute top-3 right-3 p-2 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-white hover:text-rose-400 hover:scale-105 transition-all cursor-pointer shadow-lg"
                title="Expand full resolution"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Next & Prev Arrows */}
              {proj.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIdx((curr) =>
                        curr === 0 ? proj.images!.length - 1 : curr - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black border border-white/20 text-white transition-all cursor-pointer opacity-80 hover:opacity-100 hover:scale-105 shadow-xl"
                    aria-label="Previous asset"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIdx((curr) =>
                        curr === proj.images!.length - 1 ? 0 : curr + 1
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black border border-white/20 text-white transition-all cursor-pointer opacity-80 hover:opacity-100 hover:scale-105 shadow-xl"
                    aria-label="Next asset"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Strip */}
            {proj.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {proj.images.map((img, i) => (
                  <button
                    type="button"
                    key={img}
                    onClick={() => setActiveImageIdx(i)}
                    className={`relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer bg-zinc-950 ${
                      activeImageIdx === i
                        ? 'border-rose-500 scale-102 shadow-lg shadow-rose-950/60 ring-2 ring-rose-500/20'
                        : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 right-1 text-[9px] font-mono font-bold text-white bg-black/80 px-1.5 py-0.5 rounded">
                      0{i + 1}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          renderMockup(proj)
        )}
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="py-28 px-4 sm:px-6 lg:px-12 bg-[#090b10] relative overflow-hidden border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#e50914] animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-[#e50914] font-bold uppercase">
                6 ENGINEERING SYSTEMS · 2024–2026
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
              SELECTED <span className="text-[#e50914]">WORK</span>
            </h2>
            <p className="text-xs font-mono text-zinc-400 mt-2 max-w-xl font-sans">
              Practical software engineering, native mobile systems, and applied hardware prototypes. Open any project for the full architectural breakdown.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 glass-board px-4 py-2 rounded-full border border-white/10 text-xs font-mono">
              <span className="font-bold text-[#e50914] tabular-nums">
                0{activeProjectIdx + 1}
              </span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400 tabular-nums">0{PROJECTS_LIST.length}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={prev}
                aria-label="Previous project"
                className="p-2.5 rounded-full bg-[#12141e] border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next project"
                className="p-2.5 rounded-full bg-[#12141e] border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Selector Segmented Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {PROJECTS_LIST.map((proj, idx) => {
            const isSelected = activeProjectIdx === idx;
            return (
              <button
                key={proj.id}
                onClick={() => handleSelectProject(idx)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer border ${
                  isSelected
                    ? `${accentTheme[proj.accentColor].activeTab} border-transparent font-bold`
                    : 'bg-[#11131c] text-zinc-400 border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                0{idx + 1}. {proj.title}
                {proj.images && proj.images.length > 0 && (
                  <span className="ml-1.5 opacity-70 text-[10px]">({proj.images.length})</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Project Progress Bar */}
        <div className="w-full h-1 bg-white/5 rounded-full mb-10 overflow-hidden">
          <div
            className="h-full transition-all duration-300"
            style={{
              width: `${((activeProjectIdx + 1) / PROJECTS_LIST.length) * 100}%`,
              backgroundColor: currentTheme.hex,
            }}
          />
        </div>

        {/* Primary Featured Wide Project Case Study Card */}
        <div
          className="relative rounded-3xl glass-board border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden transition-all duration-500"
        >
          {/* Subtle Ambient Radial Glow backdrop */}
          <div
            className={`absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl ${currentTheme.glow} pointer-events-none`}
          />

          {/* Top Series Original Bar (Reference Style) */}
          <div className="relative z-10 flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 rounded-full bg-[#e50914] text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-red-950/60">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>FEATURED PROJECT</span>
              </div>
              <span className={`text-[10px] font-mono px-3 py-1 rounded-full border uppercase tracking-wider ${currentTheme.badge}`}>
                {currentProject.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {currentProject.images && currentProject.images.length > 0 && (
                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/[0.05] text-zinc-300 border border-white/10 uppercase tracking-wider flex items-center gap-1">
                  <ImageIcon className="w-3 h-3 text-[#e50914]" />
                  <span>{currentProject.images.length} Real Assets</span>
                </span>
              )}
              <span className="text-[11px] font-mono text-zinc-400 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10">
                2025
              </span>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Project Overview & Factual Specifications */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>

                {/* Project Title */}
                <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-3 tracking-tight">
                  {currentProject.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm sm:text-base font-medium text-zinc-300 mb-4 leading-relaxed font-sans">
                  {currentProject.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-sans">
                  {currentProject.description}
                </p>

                {/* Key Technical Highlights */}
                {currentProject.metricsOrHighlights && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {currentProject.metricsOrHighlights.map((m, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${currentTheme.text} shrink-0`} />
                        <span className="truncate">{m}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-zinc-900 border border-white/[0.08] text-xs font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/[0.08]">
                {currentProject.liveUrl && (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center gap-2 ${currentTheme.button}`}
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  onClick={() => setSelectedModalProject(currentProject)}
                  className="px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 hover:text-white border border-white/10 text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Technical Case Study</span>
                </button>
              </div>
            </div>

            {/* Right Column: High-Fidelity Real Media Gallery or Simulator */}
            <div className="lg:col-span-6 w-full">
              {renderProjectMedia(currentProject)}
            </div>
          </div>
        </div>

        {/* Compact Grid of the other 5 projects for fast access */}
        <div className="mt-14">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-5">
            ALL 6 ENGINEERING CASE STUDIES
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS_LIST.map((proj, idx) => {
              const isCurrent = activeProjectIdx === idx;
              const theme = accentTheme[proj.accentColor];
              return (
                <div
                  key={proj.id}
                  onClick={() => handleSelectProject(idx)}
                  className={`p-5 rounded-2xl transition-all cursor-pointer border flex flex-col justify-between ${
                    isCurrent
                      ? `${theme.border} bg-[#111420] shadow-xl`
                      : 'bg-[#0c0e15]/70 border-white/[0.06] hover:bg-[#111420] hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-zinc-400">0{idx + 1}</span>
                      <span className={`text-[10px] font-mono ${theme.text}`}>
                        {proj.category.split('·')[0]}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-lg text-white mb-1">{proj.title}</h4>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-sans mb-3">
                      {proj.tagline}
                    </p>
                  </div>

                  {proj.images && proj.images.length > 0 && (
                    <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-zinc-400">
                      <ImageIcon className="w-3 h-3 text-rose-400" />
                      <span>{proj.images.length} verified image assets</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Expandable Technical Case Study Modal */}
      {selectedModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedModalProject(null)}
          />
          <div className="relative z-10 max-w-3xl w-full bg-[#0d0f17] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[88vh]">
            <div className="flex items-start justify-between mb-5">
              <div>
                <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest block mb-1">
                  DETAILED CASE STUDY SPECIFICATION
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  {selectedModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedModalProject(null)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-sans">
              {selectedModalProject.fullDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Modal Image Gallery if project has images */}
            {selectedModalProject.images && selectedModalProject.images.length > 0 && (
              <div className="mb-6 p-5 rounded-2xl bg-zinc-950/80 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-rose-400" />
                    <span>Project Assets Archive ({selectedModalProject.images.length})</span>
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    Click any photo to enlarge
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedModalProject.images.map((img, i) => (
                    <div
                      key={img}
                      onClick={() =>
                        setLightboxImage({
                          src: img,
                          caption: `${selectedModalProject.title} — Asset 0${i + 1}`,
                        })
                      }
                      className="group/thumb relative h-28 sm:h-32 rounded-xl overflow-hidden bg-black border border-white/10 hover:border-rose-500/50 cursor-pointer shadow-lg"
                    >
                      <img
                        src={img}
                        alt={`Asset ${i + 1}`}
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                      <div className="absolute bottom-1 right-1 text-[9px] font-mono text-white bg-black/70 px-1.5 py-0.5 rounded">
                        0{i + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedModalProject.architectureDetails && (
              <div className="mb-6 p-5 rounded-2xl bg-zinc-950/80 border border-white/10">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                  Architecture &amp; Integration Layers
                </div>
                <ul className="space-y-2.5 text-xs font-mono text-zinc-300">
                  {selectedModalProject.architectureDetails.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-rose-500 font-bold text-sm leading-none">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono">
              <span className="text-zinc-500">Verified Engineering Project</span>
              {selectedModalProject.liveUrl && (
                <a
                  href={selectedModalProject.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-rose-400 hover:text-rose-300 flex items-center gap-1 font-semibold"
                >
                  <span>Open Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal for Project Images */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
          />
          <div className="relative z-10 max-w-5xl w-full bg-[#0d0f17] border border-white/20 rounded-3xl p-5 sm:p-7 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <span className="text-xs font-mono text-zinc-300 font-semibold truncate">
                {lightboxImage.caption}
              </span>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center overflow-hidden my-2 rounded-xl bg-black border border-white/10">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.caption}
                className="max-w-full max-h-[75vh] object-contain"
              />
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>High-resolution project asset</span>
              <button
                onClick={() => setLightboxImage(null)}
                className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

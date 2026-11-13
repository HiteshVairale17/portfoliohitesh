import React, { useState } from 'react';
import {
  Mail,
  MessageSquare,
  Linkedin,
  Github,
  Check,
  Copy,
  Download,
  ExternalLink,
  MapPin,
  Sparkles,
  ShieldCheck,
  Award,
  GraduationCap,
  Briefcase,
  FileText,
  SendHorizontal,
  Eye,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    senderEmail: '',
    subject: '',
    message: '',
  });
  const [feedbackNotice, setFeedbackNotice] = useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const setPresetSubject = (preset: string) => {
    setFormData((prev) => ({ ...prev, subject: preset }));
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) {
      setFeedbackNotice('Please enter your message before generating the email draft.');
      return;
    }

    const subjectLine = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    );
    const bodyContent = encodeURIComponent(
      `Hi Hitesh,\n\n${formData.message}\n\n---\nFrom: ${formData.name || 'Anonymous'}\nContact: ${
        formData.senderEmail || 'Not provided'
      }`
    );

    const mailtoUrl = `mailto:${PERSONAL_INFO.contact.email}?subject=${subjectLine}&body=${bodyContent}`;
    window.location.href = mailtoUrl;
    setFeedbackNotice('Email client triggered. Thanks for connecting!');
  };

  return (
    <section
      id="resume"
      className="py-28 px-4 sm:px-6 lg:px-12 bg-[#06070a] relative overflow-hidden border-b border-white/[0.08]"
    >
      {/* Hidden anchors for smooth scroll navigation */}
      <div id="screenplay" className="absolute top-0" />

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-red-950/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-purple-950/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* ============================================================ */}
        {/* PART 1: MASTER DOSSIER // RESUME */}
        {/* ============================================================ */}
        <div className="mb-28 pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#e50914] animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-[#e50914] font-bold uppercase">
                  MASTER DOSSIER &amp; CREDENTIALS
                </span>
              </div>
              <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
                OFFICIAL <span className="text-[#e50914]">RESUME</span>
              </h2>
            </div>
            <p className="text-xs font-mono text-zinc-400 max-w-md">
              Complete verified academic qualifications, industry internships, engineering projects, and accreditations.
            </p>
          </div>

          {/* Master Resume Glass Board */}
          <div className="p-8 sm:p-10 rounded-3xl glass-board border-white/10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Profile Card & Actions */}
              <div className="lg:col-span-4 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1c1e2a] to-[#0c0e14] border border-white/20 flex items-center justify-center font-display font-black text-white text-2xl shadow-lg">
                    H<span className="text-[#e50914]">V</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest block font-bold">
                      CANDIDATE DOSSIER
                    </span>
                    <h3 className="font-display font-black text-2xl text-white uppercase leading-none">
                      HITESH VAIRALE
                    </h3>
                  </div>
                </div>

                <div className="text-xs font-mono text-zinc-300 space-y-1.5 pt-3 border-t border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#e50914]" />
                    <span className="truncate">{PERSONAL_INFO.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Maharashtra, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                    <span>linkedin.com/in/hitesh-vairale</span>
                  </div>
                </div>

                {/* Runtime Stats Counter */}
                <div className="p-4 rounded-2xl bg-black/50 border border-white/5 grid grid-cols-4 gap-2 text-center mt-2">
                  <div>
                    <span className="font-display font-black text-xl text-emerald-400 block leading-tight">
                      93.05%
                    </span>
                    <span className="text-[9px] font-mono text-zinc-400 uppercase">Diploma</span>
                  </div>
                  <div>
                    <span className="font-display font-black text-xl text-white block leading-tight">
                      6
                    </span>
                    <span className="text-[9px] font-mono text-zinc-400 uppercase">Projects</span>
                  </div>
                  <div>
                    <span className="font-display font-black text-xl text-[#e50914] block leading-tight">
                      2
                    </span>
                    <span className="text-[9px] font-mono text-zinc-400 uppercase">Internships</span>
                  </div>
                  <div>
                    <span className="font-display font-black text-xl text-amber-400 block leading-tight">
                      5
                    </span>
                    <span className="text-[9px] font-mono text-zinc-400 uppercase">Certs</span>
                  </div>
                </div>

                {/* View & Download Resume Actions */}
                <div className="flex flex-col gap-2 pt-2">
                  <a
                    href="/Hitesh-Resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-full py-3 px-4 rounded-xl bg-white text-black hover:bg-zinc-200 font-mono text-xs uppercase tracking-wider font-bold transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Eye className="w-4 h-4 text-black" />
                    <span>View Resume (PDF)</span>
                  </a>
                  <a
                    href="/Hitesh-Resume.pdf"
                    download="Hitesh_Vairale_Resume.pdf"
                    className="w-full py-2.5 px-4 rounded-xl glass-board hover:border-white/30 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-zinc-400" />
                    <span>Download Resume (PDF)</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Complete Categorized Breakdown */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-mono">
                {/* Academic Dossier */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold mb-2">
                    EDUCATION
                  </span>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-white font-semibold">Shri Sant Gajanan Maharaj College of Engineering (SSGMCE)</h4>
                      <p className="text-zinc-400 text-[11px]">B.E. CSE · Shegaon, Buldhana dist. · 2026–2029 (Currently Pursuing, 2nd Year)</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Government Polytechnic, Achalpur</h4>
                      <p className="text-emerald-400 text-[11px] font-bold">Diploma in Computer Engg. · 93.05% Distinction (2023–2026, Completed)</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Maharashtra Vidyalaya, Rajna Purna</h4>
                      <p className="text-cyan-400 text-[11px] font-bold">Secondary School Certificate (SSC) · 91.80% (Year: 2023, Completed)</p>
                    </div>
                  </div>
                </div>

                {/* Industry Experience */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold mb-2">
                    WORK EXPERIENCE
                  </span>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-white font-semibold">iBase Electrosoft LLP · Android Intern</h4>
                      <p className="text-zinc-400 text-[11px]">3 Months · Amravati, Maharashtra, India</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h4 className="text-white font-semibold">Assimilate Technologies · AI/ML Intern</h4>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 uppercase font-bold">
                          Stipend-Based
                        </span>
                      </div>
                      <p className="text-zinc-400 text-[11px]">3 Months · Pune, India (Presence: USA, UK, Dubai)</p>
                    </div>
                  </div>
                </div>

                {/* Engineering Projects */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold mb-2">
                    ENGINEERING PROJECTS
                  </span>
                  <ul className="space-y-1 text-zinc-300">
                    <li>• Wireless Car Charging System (Hardware / Engineering)</li>
                    <li>• SheSecure (Android Application)</li>
                    <li>• College Complaint Management System (Android Application)</li>
                    <li>• Open Charge Community (Web Application)</li>
                    <li>• Library Management System (Software Application)</li>
                    <li>• Digital Clock (OpenGL / GLUT / C)</li>
                  </ul>
                </div>

                {/* Certified Accreditations */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold mb-2">
                    CERTIFICATIONS &amp; HONORS
                  </span>
                  <ul className="space-y-1 text-zinc-300">
                    <li>• Infosys Springboard: Java Programming</li>
                    <li>• Infosys Springboard: Python Basics</li>
                    <li>• Infosys Springboard: Programming in C++</li>
                    <li>• Infosys Springboard: HTML5 &amp; Web Basics</li>
                    <li>• Infosys Springboard: C Programming</li>
                    <li>• GP Amravati Techfest: Web Design Winner</li>
                    <li>• IIT Bombay Techfest: National Technical Participant</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* PART 2: CONTACT & COLLABORATION */}
        {/* ============================================================ */}
        <div id="contact" className="pt-12">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-[#e50914] font-bold uppercase block mb-3">
              GET IN TOUCH
            </span>
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] uppercase tracking-tight text-white leading-[0.88] select-none">
              LET'S <span className="text-[#e50914]">CONNECT</span>
            </h2>
            <div className="font-mono text-xs sm:text-sm text-zinc-400 uppercase tracking-wider mt-3">
              HITESH VAIRALE · COMPUTER SCIENCE &amp; ENGINEERING
            </div>

            {/* Quick Action Strip */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="px-5 py-2.5 rounded-full bg-[#e50914] hover:bg-[#f40612] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-lg shadow-red-950/80 hover:scale-105 flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>EMAIL DIRECT</span>
              </a>

              <a
                href={PERSONAL_INFO.contact.whatsappLink}
                target="_blank"
                rel="noreferrer noopener"
                className="px-5 py-2.5 rounded-full glass-board hover:border-emerald-500/50 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all hover:scale-105 flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WHATSAPP (+91 8956554635)</span>
              </a>

              <a
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="px-5 py-2.5 rounded-full glass-board hover:border-blue-500/50 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all hover:scale-105 flex items-center gap-2"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LINKEDIN</span>
              </a>

              <a
                href={PERSONAL_INFO.contact.github}
                target="_blank"
                rel="noreferrer noopener"
                className="px-5 py-2.5 rounded-full glass-board hover:border-white text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all hover:scale-105 flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5 text-zinc-300" />
                <span>GITHUB</span>
              </a>
            </div>
          </div>

          {/* Interactive Contact & Inquiry Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Channel Information */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 sm:p-8 rounded-3xl glass-board space-y-6">
                <span className="text-xs font-mono text-[#e50914] uppercase tracking-widest font-semibold block">
                  COMMUNICATION CHANNELS
                </span>

                <div className="space-y-4">
                  {/* Verified Email Card with One-Click Copy */}
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                        DIRECT EMAIL
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.contact.email}`}
                        className="text-xs sm:text-sm font-mono text-white hover:text-[#e50914] transition-colors truncate block font-bold"
                      >
                        {PERSONAL_INFO.contact.email}
                      </a>
                    </div>
                    <button
                      onClick={copyEmail}
                      className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
                      aria-label="Copy Email Address"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-zinc-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* WhatsApp Direct Card */}
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                        MOBILE &amp; WHATSAPP
                      </span>
                      <span className="text-xs sm:text-sm font-mono text-white font-bold">
                        {PERSONAL_INFO.contact.whatsappNumber}
                      </span>
                    </div>
                    <a
                      href={PERSONAL_INFO.contact.whatsappLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="px-3 py-1.5 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-600/30 text-xs font-mono flex items-center gap-1.5 transition-all"
                    >
                      <span>Open Chat</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Campus & Location */}
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                      COLLEGE CAMPUS
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-zinc-200 block font-semibold">
                      SSGMCE · Shegaon, Buldhana dist., Maharashtra
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500 mt-1 block">
                      Hometown: Amravati, Maharashtra · Open to Relocation
                    </span>
                  </div>
                </div>
              </div>

              {/* Preset Quick Inquiries */}
              <div className="p-6 rounded-3xl glass-board">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-3 font-semibold">
                  FREQUENT DISCUSSION TOPICS
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Internship Opportunities',
                    'Android / Mobile Project Collaboration',
                    'AI / ML & Agentic Systems',
                    'Wireless EV Charging Hardware',
                    'Full-Stack Java Systems',
                  ].map((topic, i) => (
                    <button
                      key={i}
                      onClick={() => setPresetSubject(topic)}
                      className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-zinc-300 transition-all cursor-pointer text-left"
                    >
                      + {topic}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: RFC-Compliant Mailto Form */}
            <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl glass-board relative overflow-hidden">
              <span className="text-xs font-mono text-[#e50914] uppercase tracking-widest font-semibold block mb-2">
                DIRECT INQUIRY FORM
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2">
                DISPATCH A MESSAGE
              </h3>
              <p className="text-xs font-mono text-zinc-400 mb-6 font-sans">
                Fill this form to draft a direct message to Hitesh via your preferred email client.
              </p>

              <form onSubmit={handleSendMail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[#e50914] focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={formData.senderEmail}
                      onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[#e50914] focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Enter discussion title..."
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[#e50914] focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Message <span className="text-[#e50914]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your note, role specifications, or project details..."
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[#e50914] focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors resize-none font-sans"
                    required
                  />
                </div>

                {feedbackNotice && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 text-xs font-mono text-red-300">
                    {feedbackNotice}
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-[11px] font-mono text-zinc-500">
                    Direct RFC-compliant draft dispatch to {PERSONAL_INFO.contact.email}
                  </span>

                  <button
                    type="submit"
                    className="px-7 py-3 rounded-full bg-[#e50914] hover:bg-[#f40612] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-xl shadow-red-950/70 hover:scale-[1.03] flex items-center gap-2 cursor-pointer shrink-0"
                  >
                    <span>Launch Draft</span>
                    <SendHorizontal className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

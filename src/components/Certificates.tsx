import React, { useState } from 'react';
import {
  Award,
  CheckCircle,
  ExternalLink,
  Sparkles,
  X,
  ShieldCheck,
  FileText,
  Download,
  Eye,
  Maximize2,
  Calendar,
  Building2,
  MapPin
} from 'lucide-react';
import { CERTIFICATES_LIST, PARTICIPATION_LIST, Certificate, Participation } from '../data/portfolioData';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string; subtitle: string; pdfUrl?: string } | null>(null);

  return (
    <section
      id="certificates"
      className="py-28 px-4 sm:px-6 lg:px-12 bg-[#090b10] relative overflow-hidden border-b border-white/[0.08]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-950/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-rose-950/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 relative">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#e50914] animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-[#e50914] font-bold uppercase">
                ACCREDITATIONS &amp; RECOGNITION
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
              HONORS &amp; <span className="text-[#e50914]">CERTIFICATIONS</span>
            </h2>
            <p className="text-xs font-mono text-zinc-400 mt-2 max-w-xl font-sans">
              Verified technical certifications from Infosys Springboard, state-level competitions, and national engineering symposiums.
            </p>
          </div>
        </div>

        {/* Top Moments Laurel Wreath Cards (Exact Reference Style at 01:54 - 01:57) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Moment 1 */}
          <div className="p-7 rounded-3xl glass-board hover:border-amber-500/50 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7" />
            </div>
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold mb-1">
              ACADEMIC HONORS
            </span>
            <h3 className="font-display font-black text-2xl text-white uppercase mb-2">
              93.05% AGGREGATE
            </h3>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
              MSBTE DIPLOMA DISTINCTION
            </span>
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              Graduated with First Class with Distinction from state-accredited Computer Technology program.
            </p>
          </div>

          {/* Moment 2 */}
          <div className="p-7 rounded-3xl glass-board hover:border-red-500/50 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-[#e50914] mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-7 h-7" />
            </div>
            <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest font-bold mb-1">
              NATIONAL SYMPOSIUM
            </span>
            <h3 className="font-display font-black text-2xl text-white uppercase mb-2">
              IIT BOMBAY TECHFEST
            </h3>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
              NATIONAL EVENT ATTENDEE
            </span>
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              Participated in national level technical exhibitions, workshops, and symposiums at IIT Bombay.
            </p>
          </div>

          {/* Moment 3 */}
          <div className="p-7 rounded-3xl glass-board hover:border-cyan-500/50 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7" />
            </div>
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold mb-1">
              STATE COMPETITION
            </span>
            <h3 className="font-display font-black text-2xl text-white uppercase mb-2">
              GP AMRAVATI TECHFEST
            </h3>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
              STATE LEVEL WEB DESIGN
            </span>
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              Competed in state-level technical festival in web design with certificate recognition.
            </p>
          </div>

          {/* Moment 4 */}
          <div className="p-7 rounded-3xl glass-board hover:border-emerald-500/50 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold mb-1">
              CONTINUOUS LEARNING
            </span>
            <h3 className="font-display font-black text-2xl text-white uppercase mb-2">
              5 CERTIFICATIONS
            </h3>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
              INFOSYS SPRINGBOARD
            </span>
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              Verified certifications in Java, Python, Web Development, and Data Structures &amp; Algorithms.
            </p>
          </div>
        </div>

        {/* Section Part 2: Certified Credentials Gallery */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-2">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified · 5 Official Credentials</span>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              Click any certificate card to inspect official preview &amp; download PDF
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATES_LIST.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="group relative rounded-3xl bg-[#0c0e15] border border-white/[0.08] hover:border-amber-500/40 hover:bg-[#10121d] transition-all duration-300 shadow-2xl cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Certificate Preview Visual Frame */}
                {cert.previewUrl ? (
                  <div className="relative w-full h-48 bg-zinc-950 overflow-hidden border-b border-white/[0.06] group-hover:brightness-105 transition-all">
                    <img
                      src={cert.previewUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e15] via-transparent to-black/20" />
                    
                    {/* Floating Action Hint */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-amber-400">
                      <Eye className="w-3 h-3" />
                      <span>Inspect</span>
                    </div>

                    {cert.pdfUrl && (
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono text-emerald-300 font-semibold">
                        <FileText className="w-3 h-3" />
                        <span>PDF Ready</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-6 pb-0 flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 shadow-inner group-hover:scale-105 transition-transform">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 uppercase tracking-wider font-semibold">
                      Authorized
                    </span>
                  </div>
                )}

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">
                        {cert.platform}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Verified
                      </span>
                    </div>

                    <h3 className="font-display font-black text-xl sm:text-2xl text-white mb-1 group-hover:text-amber-300 transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-xs font-mono text-zinc-400 mb-4">
                      {cert.issuer}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06] mb-4">
                      {cert.skillsCovered.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded-md bg-zinc-900 border border-white/5 text-[10px] font-mono text-zinc-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-amber-400 transition-colors pt-2">
                      <span className="flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" />
                        <span>View Document &amp; PDF</span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Part 2: Participation & Symposiums */}
        <div>
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-8 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-rose-500" />
            <span>Technical Festivals &amp; Academic Participation (With Real Documentation)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PARTICIPATION_LIST.map((part) => (
              <div
                key={part.id}
                className="rounded-3xl bg-[#0c0e15] border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-2xl relative overflow-hidden flex flex-col justify-between"
              >
                {/* Event Photo / Certificate Banner if present */}
                {part.image && (
                  <div
                    onClick={() =>
                      setSelectedPhoto({
                        src: part.image!,
                        title: part.title,
                        subtitle: `${part.venue} · Event Photo`,
                      })
                    }
                    className="relative w-full h-64 bg-zinc-950 overflow-hidden cursor-pointer group/img border-b border-white/[0.08]"
                  >
                    <img
                      src={part.image}
                      alt={part.title}
                      className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500 filter contrast-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e15] via-transparent to-black/30" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-rose-600/80 backdrop-blur-md text-white text-[10px] font-mono font-semibold flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      <span>IIT Bombay Techfest Campus</span>
                    </div>
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-black transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="absolute bottom-3 left-4 text-[11px] font-mono text-zinc-300 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm">
                      Hitesh Vairale at IIT Bombay
                    </div>
                  </div>
                )}

                {part.previewUrl && (
                  <div
                    onClick={() =>
                      setSelectedPhoto({
                        src: part.previewUrl!,
                        title: part.title,
                        subtitle: `${part.venue} · State-Level Certificate`,
                        pdfUrl: part.pdfUrl,
                      })
                    }
                    className="relative w-full h-56 bg-zinc-950 overflow-hidden cursor-pointer group/img border-b border-white/[0.08]"
                  >
                    <img
                      src={part.previewUrl}
                      alt={part.title}
                      className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e15] via-transparent to-black/30" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-600/80 backdrop-blur-md text-white text-[10px] font-mono font-semibold flex items-center gap-1.5">
                      <Award className="w-3 h-3" />
                      <span>State Tech Fest Certificate</span>
                    </div>
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-black transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}

                <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/25 uppercase tracking-wider font-semibold">
                        {part.type}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                        Official Participant
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-1">
                      {part.title}
                    </h3>

                    <p className="text-base font-mono text-rose-400 font-semibold mb-6">
                      {part.venue}
                    </p>

                    <p className="text-sm text-zinc-300 leading-relaxed font-sans border-t border-white/[0.06] pt-5">
                      {part.note}
                    </p>
                  </div>

                  {part.pdfUrl && (
                    <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-mono text-zinc-400">
                        Official State Certificate Document
                      </span>
                      <div className="flex items-center gap-2">
                        <a
                          href={part.pdfUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/15 text-white text-xs font-mono flex items-center gap-1.5 transition-all"
                        >
                          <FileText className="w-3.5 h-3.5 text-emerald-400" />
                          <span>View PDF</span>
                        </a>
                        <a
                          href={part.pdfUrl}
                          download="gp-amravati-state-techfest.pdf"
                          className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono flex items-center gap-1.5 transition-all font-semibold"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal Document Preview & PDF Actions */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          />
          <div className="relative z-10 max-w-2xl w-full bg-[#0d0f17] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            {/* Header */}
            <div className="flex items-start justify-between mb-5 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-0.5">
                    AUTHENTICATED CREDENTIAL
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                    {selectedCert.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Real Certificate Image Visual */}
            {selectedCert.previewUrl && (
              <div className="mb-6 rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl">
                <img
                  src={selectedCert.previewUrl}
                  alt={`${selectedCert.title} Certificate`}
                  className="w-full h-auto max-h-[420px] object-contain mx-auto"
                />
              </div>
            )}

            {/* Document Details Frame */}
            <div className="p-5 rounded-2xl bg-zinc-950/90 border border-white/10 mb-6 space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-500">Issuing Organization:</span>
                <span className="text-white font-semibold">{selectedCert.issuer}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-500">Platform:</span>
                <span className="text-zinc-300">{selectedCert.platform}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Verification Status:</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" />
                  Verified Completion Record
                </span>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2.5">
                Verified Curriculum Competencies
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedCert.skillsCovered.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-lg bg-zinc-900 border border-white/[0.08] text-xs font-mono text-zinc-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar with Real PDF links */}
            <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-zinc-500">
                Official Infosys Springboard Document
              </span>

              <div className="flex items-center gap-2">
                {selectedCert.pdfUrl && (
                  <>
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white font-mono text-xs uppercase flex items-center gap-1.5 transition-all"
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-400" />
                      <span>View PDF</span>
                    </a>
                    <a
                      href={selectedCert.pdfUrl}
                      download={`${selectedCert.id}.pdf`}
                      className="px-5 py-2.5 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-mono text-xs uppercase font-semibold flex items-center gap-1.5 transition-all shadow-lg shadow-amber-950/60"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </a>
                  </>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono text-xs uppercase cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox / Modal for Photos (e.g. IIT Bombay Techfest photo or Techfest Certificate) */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedPhoto(null)}
          />
          <div className="relative z-10 max-w-4xl w-full bg-[#0d0f17] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest block mb-0.5">
                  EVENT DOCUMENTATION
                </span>
                <h3 className="font-display font-black text-2xl text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-0.5">
                  {selectedPhoto.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black my-4 flex items-center justify-center max-h-[65vh]">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">
                Verified portfolio document asset
              </span>
              <div className="flex items-center gap-2">
                {selectedPhoto.pdfUrl && (
                  <a
                    href={selectedPhoto.pdfUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase flex items-center gap-1.5 transition-all font-semibold"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Certificate PDF</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white font-mono text-xs uppercase cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

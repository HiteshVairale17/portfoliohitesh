import React from 'react';
import { ArrowUp, Github, Linkedin, MessageSquare, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-12 bg-[#050609] border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand: Monogram & Identity */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1c1e2a] to-[#0c0e14] border border-white/20 flex items-center justify-center font-display font-black text-white text-lg">
                H<span className="text-[#e50914]">V</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-2xl tracking-wider text-white">
                  HITESH VAIRALE
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#e50914] font-bold uppercase">
                  PORTFOLIO
                </span>
              </div>
            </div>
            <p className="text-xs font-mono text-zinc-400 max-w-lg leading-relaxed font-sans">
              Computer Science &amp; Engineering Student at SSGMCE Shegaon · Exploring AI/ML, Systems Engineering, and Forward Deployed Practice.
            </p>
          </div>

          {/* Social Channels & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="p-3 rounded-full glass-board hover:border-[#e50914] hover:text-[#e50914] text-zinc-400 transition-all hover:scale-105"
              aria-label="Email Hitesh"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.contact.whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              className="p-3 rounded-full glass-board hover:border-emerald-500 hover:text-emerald-400 text-zinc-400 transition-all hover:scale-105"
              aria-label="WhatsApp Hitesh"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="p-3 rounded-full glass-board hover:border-blue-500 hover:text-blue-400 text-zinc-400 transition-all hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noreferrer noopener"
              className="p-3 rounded-full glass-board hover:border-white text-zinc-400 hover:text-white transition-all hover:scale-105"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-[#e50914] hover:bg-[#f40612] text-white transition-all cursor-pointer ml-2 hover:scale-105 shadow-lg shadow-red-950/60"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#181a24] border border-white/20 flex items-center justify-center font-display font-black text-[9px] text-white">
              H
            </div>
            <span>
              &copy; {new Date().getFullYear()} Hitesh Vairale
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              SSGMCE Shegaon, Maharashtra
            </span>
            <span>·</span>
            <span className="text-red-400 font-semibold">B.E. 2nd Year</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

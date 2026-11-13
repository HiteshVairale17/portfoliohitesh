import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Work', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Certifications', href: '#certificates', id: 'certificates' },
    { label: 'Resume', href: '#resume', id: 'resume' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Floating Glass Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
        <header
          className={`pointer-events-auto transition-all duration-300 w-full max-w-7xl rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-2 flex items-center justify-between border ${
            isScrolled
              ? 'glass-board border-white/[0.14] shadow-2xl shadow-black/90 bg-[#0a0c14]/90'
              : 'glass-board border-white/[0.08] shadow-xl shadow-black/60 bg-[#0d0f18]/80'
          }`}
        >
          {/* Brand: Monogram & Identity */}
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, '#hero')}
            className="flex items-center gap-3 group shrink-0 select-none"
            aria-label="Hitesh Vairale — Engineering Portfolio"
          >
            {/* Monogram Emblem */}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a1c26] to-[#0d0f16] border border-white/20 flex items-center justify-center font-display font-black text-white text-lg tracking-tight shadow-md group-hover:border-red-500/50 transition-colors">
              H<span className="text-[#e50914]">V</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-display font-black text-base tracking-wider text-white group-hover:text-red-400 transition-colors uppercase">
                  HITESH VAIRALE
                </span>
              </div>
              <span className="text-[9px] font-mono text-zinc-400 tracking-wider uppercase mt-0.5">
                SSGMCE · COMPUTER SCIENCE
              </span>
            </div>
          </a>

          {/* Center Links (Natural Engineering Section Names) */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-mono">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`relative px-3 py-1.5 rounded-full uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold bg-white/[0.08]'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.03]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#e50914] rounded-full shadow-[0_0_8px_rgba(229,9,20,0.9)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Let's Connect & Mobile Toggle */}
          <div className="flex items-center gap-2.5 shrink-0">

            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="group px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#e50914] hover:bg-[#f40612] text-white transition-all duration-200 shadow-lg shadow-red-950/60 hover:shadow-red-600/40 hover:scale-[1.03] flex items-center gap-1.5 cursor-pointer"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-full transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-20 right-4 left-4 p-6 glass-board bg-[#0c0e16]/95 border-white/15 rounded-3xl shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-[#181a24] border border-white/20 flex items-center justify-center font-display font-black text-white text-xs">
                  H<span className="text-[#e50914]">V</span>
                </div>
                <span className="text-xs font-mono text-zinc-200 uppercase tracking-widest font-bold">
                  HITESH VAIRALE
                </span>
              </div>
              <span className="text-[10px] font-mono text-red-400 font-semibold uppercase">
                PORTFOLIO
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-red-500/15 text-red-300 font-semibold border border-red-500/30'
                        : 'text-zinc-300 hover:text-white bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#e50914]" />}
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="/Hitesh-Resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="w-full py-2.5 px-4 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 text-white text-xs font-mono text-center font-medium flex items-center justify-center gap-2"
              >
                <FileText className="w-3.5 h-3.5 text-red-400" />
                <span>View Resume (PDF)</span>
              </a>
              <a
                href={PERSONAL_INFO.contact.whatsappLink}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center font-medium"
              >
                WhatsApp Direct (+91 8956554635)
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="w-full py-2.5 px-4 rounded-xl bg-[#e50914] text-white text-xs font-mono text-center font-semibold uppercase tracking-wider"
              >
                Connect With Hitesh
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

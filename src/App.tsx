import React, { useState, useEffect } from 'react';
import { PageIntro } from './components/PageIntro';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Highlights } from './components/Highlights';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AskHiteshChatbot } from './components/AskHiteshChatbot';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'projects',
      'experience',
      'journey',
      'toppicks',
      'education',
      'skills',
      'certificates',
      'resume',
      'screenplay',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Map legacy ids to active navigation keys
            const id = entry.target.id;
            if (id === 'journey') {
              setActiveSection('experience');
            } else if (id === 'screenplay') {
              setActiveSection('resume');
            } else {
              setActiveSection(id);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#07080c] text-zinc-100 font-sans selection:bg-[#e50914]/30 selection:text-red-200">
      {/* High-Craft Initial Monogram Intro Reveal */}
      <PageIntro />

      {/* Floating Horizontal Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Portfolio Sections */}
      <main>
        <Hero />
        <About />
        <ProjectShowcase />
        <Experience />
        <Highlights />
        <Education />
        <Skills />
        <Certificates />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Grounded Floating Portfolio Chatbot */}
      <AskHiteshChatbot />
    </div>
  );
}

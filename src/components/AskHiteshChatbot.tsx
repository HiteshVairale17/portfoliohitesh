import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, User, CornerDownLeft, MessageSquare, Terminal, ShieldCheck } from 'lucide-react';
import { CHATBOT_KNOWLEDGE_BASE, PERSONAL_INFO } from '../data/portfolioData';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export const AskHiteshChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hello! I am Hitesh's portfolio intelligence agent. I can answer questions regarding his primary language (Java), other languages (C, C++, Python), software & hardware projects, verified academic scores, industry internships, or Forward Deployed Engineering focus.",
      timestamp: 'Just now',
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Project-first question answering logic with normalization, token scoring, and aliases
  const findAnswer = (query: string): string => {
    const raw = query.toLowerCase().trim();
    const normalized = raw.replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
    const tokens = normalized.split(' ').filter(Boolean);

    if (!tokens.length) {
      return `Please enter a question about Hitesh's projects, internships, scores, skills, or contact info!`;
    }

    const projectTopics = [
      'Wireless Car Charging System',
      'SheSecure Project',
      'College Complaint Management System',
      'Open Charge Community',
      'Library Management System',
      'Digital Clock Project',
    ];

    // Priority 1: Check project-specific entries first if query mentions project keywords
    let bestProjectMatch: { item: typeof CHATBOT_KNOWLEDGE_BASE[0]; score: number } | null = null;
    for (const item of CHATBOT_KNOWLEDGE_BASE) {
      if (projectTopics.includes(item.topic)) {
        let score = 0;
        for (const kw of item.keywords) {
          const kwNorm = kw.toLowerCase();
          if (normalized.includes(kwNorm)) {
            // Full phrase match
            score += kwNorm.includes(' ') ? 120 : 60;
          } else if (tokens.includes(kwNorm)) {
            score += 50;
          }
        }
        if (score > (bestProjectMatch?.score || 0)) {
          bestProjectMatch = { item, score };
        }
      }
    }

    if (bestProjectMatch && bestProjectMatch.score >= 50) {
      return bestProjectMatch.item.answer;
    }

    // Priority 2: General scoring across all 25 FAQs
    let bestMatch: { item: typeof CHATBOT_KNOWLEDGE_BASE[0]; score: number } | null = null;

    for (const item of CHATBOT_KNOWLEDGE_BASE) {
      let score = 0;

      // Check keywords
      for (const kw of item.keywords) {
        const kwNorm = kw.toLowerCase();
        if (normalized.includes(kwNorm)) {
          score += kwNorm.includes(' ') ? 80 : 40;
        } else if (tokens.includes(kwNorm)) {
          score += 35;
        }
      }

      // Check question text similarity
      const qTokens = item.question
        .toLowerCase()
        .replace(/[^\w\s]/g, ' ')
        .split(' ')
        .filter((w) => w.length > 3);
      for (const qt of qTokens) {
        if (tokens.includes(qt)) {
          score += 15;
        }
      }

      if (score > (bestMatch?.score || 0)) {
        bestMatch = { item, score };
      }
    }

    if (bestMatch && bestMatch.score >= 30) {
      return bestMatch.item.answer;
    }

    // Polite fallback for queries outside the verified knowledge base
    return `I don't have verified records regarding that in Hitesh's portfolio dossier. You can reach out directly to Hitesh via email at ${PERSONAL_INFO.contact.email} or WhatsApp at ${PERSONAL_INFO.contact.whatsappNumber} to discuss this in person!`;
  };

  const handleSendMessage = (textToSend?: string) => {
    const question = (textToSend || inputText).trim();
    if (!question) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: question,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    setTimeout(() => {
      const answer = findAnswer(question);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 280);
  };

  const suggestedWelcomeChips = [
    "What is Hitesh's primary programming language?",
    'Do you work with Spring Boot?',
    'What other programming languages do you know?',
    'Tell me about the Wireless EV Charging project',
    'Tell me about his stipend-based internship',
    'What are his verified academic scores?',
    'How do I contact or hire Hitesh directly?',
  ];

  const quickPrompts = [
    'Primary Language (Java)',
    'Other Languages (C, C++, Python)',
    'Spring Boot & Backend',
    'Wireless EV Charging',
    'Stipend-based Internship',
    'Academic Scores (93.05% & 91.80%)',
    'Why Consider Hitesh?',
    'Contact & Resume',
  ];

  return (
    <>
      {/* Floating Glass Activation Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Ask Hitesh Portfolio AI"
        className="fixed bottom-6 right-6 z-40 px-4 py-3 rounded-full bg-gradient-to-r from-rose-600 via-rose-700 to-rose-800 hover:from-rose-500 hover:to-rose-600 text-white shadow-2xl shadow-rose-950/80 border border-white/20 flex items-center gap-2.5 group transition-all duration-300 hover:scale-105 cursor-pointer"
      >
        <div className="relative">
          <Bot className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-black shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
        </div>
        <span className="font-mono text-xs uppercase tracking-wider font-semibold">
          Ask Hitesh AI
        </span>
      </button>

      {/* Floating Glass Chatbot Drawer / Modal */}
      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-40 w-[94vw] sm:w-[460px] max-h-[620px] h-[560px] rounded-3xl bg-[#0b0d15]/95 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-[#10131f] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 shadow-inner">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                  <span>ASK HITESH</span>
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-semibold">
                    25 VERIFIED FAQS
                  </span>
                </h4>
                <p className="text-[10px] font-mono text-zinc-400">
                  Answers restricted to verified portfolio dossier
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 scrollbar-thin">
            {messages.map((m) => {
              const isUser = m.sender === 'user';
              const isWelcome = m.id === 'welcome';
              return (
                <div
                  key={m.id}
                  className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div
                    className={`max-w-[88%] rounded-2xl p-3.5 text-xs leading-relaxed whitespace-pre-wrap font-sans ${
                      isUser
                        ? 'bg-rose-600 text-white rounded-tr-none shadow-md shadow-rose-950/40'
                        : 'bg-zinc-900/90 border border-white/10 text-zinc-200 rounded-tl-none'
                    }`}
                  >
                    <p>{m.text}</p>
                    
                    {/* Welcome Screen Suggested Question Chips */}
                    {isWelcome && (
                      <div className="mt-3.5 pt-3 border-t border-white/10 space-y-2">
                        <p className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-rose-400" /> Suggested Questions
                        </p>
                        <div className="flex flex-col gap-1.5">
                          {suggestedWelcomeChips.map((chip, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSendMessage(chip)}
                              className="text-left text-[11px] px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-rose-500/20 border border-white/10 hover:border-rose-500/40 text-zinc-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 group/chip"
                            >
                              <span className="text-rose-400 font-mono text-[9px] group-hover/chip:translate-x-0.5 transition-transform">▸</span>
                              <span>{chip}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <span
                      className={`text-[9px] font-mono mt-1.5 block ${
                        isUser ? 'text-rose-200' : 'text-zinc-500'
                      }`}
                    >
                      {m.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-3.5 py-2.5 bg-zinc-950/70 border-t border-white/5 overflow-x-auto whitespace-nowrap flex gap-1.5 scrollbar-none">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(prompt)}
                className="px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-[10px] font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3.5 bg-[#0f121d] border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about projects, internships, scores, skills..."
              className="flex-1 px-4 py-2.5 rounded-full bg-zinc-900 border border-white/10 focus:border-rose-500 focus:outline-none text-xs text-white placeholder-zinc-500 font-sans"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-full bg-rose-600 hover:bg-rose-500 disabled:opacity-40 disabled:hover:bg-rose-600 text-white transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";

interface LandingPageProps {
  onStartDesigning: () => void;
}

export function LandingPage({ onStartDesigning }: LandingPageProps) {
  // Interactive scene states
  const [activeHour, setActiveHour] = useState<number>(0);
  const [connectedDemo, setConnectedDemo] = useState<boolean>(true);
  const [activeProtoScreen, setActiveProtoScreen] = useState<"home" | "details">("home");
  const [aiDraftStep, setAiDraftStep] = useState<number>(2);
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Auto-tick the hero scene like onbrain.app's ticking clock
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHour((prev) => (prev + 1) % 5);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const timelineSteps = [
    {
      time: "9:00",
      title: "Blank Canvas to Screen Layout",
      desc: "Phone and desktop frames set up on a 4dp magnetic grid",
      badge: "Canvas",
      color: "#2563eb",
      soft: "#e9f0fe",
      icon: "grid",
    },
    {
      time: "9:15",
      title: "Real M3 Expressive Components",
      desc: "Buttons, FABs, Cards, Rails and Navigation auto-snapped",
      badge: "Components",
      color: "#6c4df6",
      soft: "#efecfe",
      icon: "widgets",
    },
    {
      time: "9:30",
      title: "Interactive Navigation & Flows",
      desc: "Tap & swipe triggers configured with expressive spring transitions",
      badge: "Prototyping",
      color: "#16a34a",
      soft: "#e8f7ee",
      icon: "animation",
    },
    {
      time: "10:00",
      title: "AI Behavior & Spec Drafting",
      desc: "Drafting assistant wrote component behaviors and design notes",
      badge: "AI Studio",
      color: "#d97706",
      soft: "#fcf3e3",
      icon: "auto_awesome",
    },
    {
      time: "10:30",
      title: "Vibe-Coding Prompt Ready",
      desc: "One structured brief copied for Claude Code, Cursor or Codex",
      badge: "Export",
      color: "#6c4df6",
      soft: "#efecfe",
      icon: "terminal",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f6f9] text-[#191b23] font-sans selection:bg-[#efecfe] selection:text-[#5636e3] overflow-x-hidden antialiased">
      {/* OnBrain custom styling overrides for authentic look */}
      <style jsx global>{`
        :root {
          --ob-brand: #6c4df6;
          --ob-brand-dark: #5636e3;
          --ob-brand-soft: #efecfe;
          --ob-brand-line: #cfc4fd;
          --ob-bg: #f6f6f9;
          --ob-card: #ffffff;
          --ob-fg: #191b23;
          --ob-muted: #63687a;
          --ob-border: #e7e8ef;
          --ob-border-strong: #d5d7e2;
        }

        .thread-underline {
          background: linear-gradient(var(--ob-brand), var(--ob-brand)) no-repeat 0 92% / 100% 0.08em;
          box-decoration-break: clone;
          -webkit-box-decoration-break: clone;
        }

        .btn-ob-primary {
          background: #6c4df6;
          color: #ffffff;
          box-shadow: 0 6px 20px -6px rgba(108, 77, 246, 0.65);
          transition: all 180ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .btn-ob-primary:hover {
          background: #5636e3;
          box-shadow: 0 8px 24px -6px rgba(86, 54, 227, 0.75);
          transform: translateY(-1px);
        }
        .btn-ob-primary:active {
          transform: scale(0.97);
        }

        .btn-ob-secondary {
          background: #ffffff;
          color: #191b23;
          border: 1px solid #d5d7e2;
          box-shadow: 0 1px 3px rgba(25, 27, 35, 0.04);
          transition: all 180ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .btn-ob-secondary:hover {
          border-color: #cfc4fd;
          color: #6c4df6;
          background: #fafafc;
        }

        .card-ob {
          background: #ffffff;
          border: 1px solid #e7e8ef;
          border-radius: 1.25rem;
          box-shadow: 0 1px 2px rgba(25, 27, 35, 0.04), 0 4px 16px -6px rgba(25, 27, 35, 0.07);
        }

        .chip-ob {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.2rem 0.65rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          line-height: 1.4;
        }
      `}</style>

      {/* TOP NAVIGATION */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#f6f6f9]/85 border-b border-[#e7e8ef] transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo brand (OnBrain typography: bold with colored symbol) */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-8 h-8 rounded-full bg-[#efecfe] border border-[#cfc4fd] flex items-center justify-center p-1.5 shadow-sm">
              <Logo size={22} color="#6c4df6" glyph="#ffffff" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-[#191b23]">
              Ploceus
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[0.92rem] font-semibold text-[#63687a]">
            <a href="#how" className="hover:text-[#191b23] transition-colors">How it works</a>
            <a href="#canvas" className="hover:text-[#191b23] transition-colors">Canvas</a>
            <a href="#flow" className="hover:text-[#191b23] transition-colors">Prototyping</a>
            <a href="#ai" className="hover:text-[#191b23] transition-colors">AI &amp; Prompts</a>
            <a href="#tools" className="hover:text-[#191b23] transition-colors">Integrations</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onStartDesigning}
              className="hidden sm:inline-flex text-[0.92rem] font-bold text-[#191b23] hover:text-[#6c4df6] px-3 py-1.5 transition-colors"
            >
              Open Canvas
            </button>
            <button
              onClick={onStartDesigning}
              className="btn-ob-primary px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer"
            >
              <span>Start Designing Free</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#191b23] rounded-lg hover:bg-[#e7e8ef]"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#e7e8ef] px-4 py-4 space-y-3 font-semibold text-sm shadow-xl">
            <a href="#how" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#191b23] border-b border-[#f6f6f9]">How it works</a>
            <a href="#canvas" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#191b23] border-b border-[#f6f6f9]">Canvas</a>
            <a href="#flow" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#191b23] border-b border-[#f6f6f9]">Prototyping</a>
            <a href="#ai" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#191b23] border-b border-[#f6f6f9]">AI &amp; Prompts</a>
            <button onClick={() => { setMobileMenuOpen(false); onStartDesigning(); }} className="w-full btn-ob-primary py-2.5 rounded-xl font-bold mt-2">
              Start Designing Free &rarr;
            </button>
          </div>
        )}
      </header>

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden text-center">
        {/* Ambient violet radial gradient like onbrain.app */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[500px] bg-[radial-gradient(50%_45%_at_50%_18%,rgba(108,77,246,0.15),transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
          {/* Animated Central Brand Symbol (like OnBrain's hero-mark) */}
          <div className="relative mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-2 border-[#cfc4fd] p-4 shadow-xl shadow-purple-500/10 flex items-center justify-center animate-pulse">
              <Logo size={48} color="#6c4df6" glyph="#5636e3" />
            </div>
            {/* Ambient signal ring */}
            <div className="absolute -inset-3 rounded-full border border-dashed border-[#6c4df6]/30 animate-spin [animation-duration:20s] pointer-events-none" />
          </div>

          {/* Main Headline with OnBrain's signature brush underline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.04em] text-[#191b23] leading-[1.05] max-w-3xl mb-6">
            AI finally brings <span className="thread-underline">order</span> to your <span className="text-[#8b90a3]">design vision.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#63687a] max-w-2xl mx-auto leading-relaxed mb-8">
            Sketch Material 3 Expressive screens in the browser, link them into tap-through prototypes, and copy a precise prompt for Claude Code, Cursor, or Codex.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
            <button
              onClick={onStartDesigning}
              className="btn-ob-primary px-7 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 cursor-pointer shadow-lg"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 3c.6 4.3 2.3 6.4 7 7.5-4.7 1.1-6.4 3.2-7 7.5-.6-4.3-2.3-6.4-7-7.5 4.7-1.1 6.4-3.2 7-7.5Z" />
              </svg>
              <span>Start Designing Free</span>
              <span className="text-white/80">&rarr;</span>
            </button>

            <a
              href="#how"
              className="btn-ob-secondary px-6 py-3.5 rounded-xl text-base font-bold flex items-center gap-2"
            >
              <span>How Ploceus Works</span>
              <svg className="w-4 h-4 text-[#63687a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* ===================== HERO INTERACTIVE MOCKUP SCENE =====================
               Faithful replica of OnBrain's live "Tu día" hero card with ticking clock */}
          <div className="w-full max-w-xl mx-auto text-left">
            <div className="card-ob overflow-hidden border border-[#d5d7e2] shadow-2xl">
              {/* Card Header with live ticking time */}
              <div className="px-5 py-4 bg-[#fafafc] border-b border-[#e7e8ef] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#6c4df6] animate-ping" />
                  <span className="font-extrabold text-sm text-[#191b23]">Your Session with Ploceus</span>
                  <span className="text-[11px] font-semibold text-[#63687a] bg-[#eef0f4] px-2 py-0.5 rounded-md">Live Demo</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#6c4df6] bg-[#efecfe] px-2.5 py-1 rounded-lg">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  <span>{timelineSteps[activeHour].time}</span>
                </div>
              </div>

              {/* Progress steps list */}
              <div className="p-4 sm:p-5 space-y-3 bg-white">
                {timelineSteps.map((step, idx) => {
                  const isActive = idx === activeHour;
                  const isPassed = idx <= activeHour;

                  return (
                    <div
                      key={step.time}
                      onClick={() => setActiveHour(idx)}
                      className={`p-3 rounded-xl transition-all cursor-pointer flex items-start gap-3.5 ${
                        isActive
                          ? "bg-[#faf9ff] border-2 border-[#6c4df6] shadow-sm"
                          : isPassed
                          ? "bg-white border border-[#e7e8ef] opacity-90"
                          : "bg-white border border-[#e7e8ef]/50 opacity-40 hover:opacity-75"
                      }`}
                    >
                      <span className="font-mono text-xs font-bold text-[#63687a] mt-0.5 w-10">
                        {step.time}
                      </span>

                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: step.soft, color: step.color }}>
                        {isPassed ? (
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="m5 12.5 4.5 4.5L19 7.5" />
                          </svg>
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-current" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <b className="text-xs sm:text-sm text-[#191b23]">{step.title}</b>
                          <span
                            className="chip-ob text-[10px]"
                            style={{ background: step.soft, color: step.color }}
                          >
                            {step.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[#63687a] mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Card Footer Motto (like onbrain's "Be human" foot) */}
              <div className="px-5 py-3.5 bg-[#fafafc] border-t border-[#e7e8ef] flex items-center justify-between text-xs text-[#63687a]">
                <div className="flex items-center gap-2">
                  <Logo size={18} color="#6c4df6" />
                  <span>
                    <strong className="text-[#191b23]">Be creative.</strong> Ploceus shapes the code. The vision is yours.
                  </span>
                </div>
                <button
                  onClick={onStartDesigning}
                  className="font-bold text-[#6c4df6] hover:underline"
                >
                  Try now &rarr;
                </button>
              </div>
            </div>

            <p className="text-center text-xs font-semibold text-[#63687a] mt-4 flex items-center justify-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#6c4df6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 3c.6 4.3 2.3 6.4 7 7.5-4.7 1.1-6.4 3.2-7 7.5-.6-4.3-2.3-6.4-7-7.5 4.7-1.1 6.4-3.2 7-7.5Z" />
              </svg>
              <span>100% in-browser &middot; No accounts &middot; Real Material 3 Expressive parts</span>
            </p>
          </div>
        </div>
      </section>

      {/* ===================== THREE PRINCIPLES BAR (Dark on onbrain) ===================== */}
      <section className="bg-[#191b23] text-[#eceaf6] py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#cfc4fd] flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3.5 19 6v5.5c0 4.3-2.9 7.8-7 9-4.1-1.2-7-4.7-7-9V6l7-2.5Z" />
                <path d="m9 12 2.2 2.2L15.5 10" />
              </svg>
            </div>
            <div>
              <strong className="block text-white text-sm font-extrabold mb-1">
                Real M3 Expressive Tokens.
              </strong>
              <p className="text-xs text-[#a0a5b8] leading-relaxed">
                No hallucinated buttons or inconsistent padding. True Material 3 Expressive shapes, spring dynamics, and color schemes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#cfc4fd] flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="9" y="9" width="6" height="6" />
                <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
              </svg>
            </div>
            <div>
              <strong className="block text-white text-sm font-extrabold mb-1">
                Zero-Latency In-Browser.
              </strong>
              <p className="text-xs text-[#a0a5b8] leading-relaxed">
                Everything runs in your browser. Nothing to install, no backend database required, and automatic instant local autosave.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#cfc4fd] flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m10 15 5-3-5-3v6Z" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </div>
            <div>
              <strong className="block text-white text-sm font-extrabold mb-1">
                Universal AI Coding Handoff.
              </strong>
              <p className="text-xs text-[#a0a5b8] leading-relaxed">
                Your visual screens translate into concise briefs ready for Claude Code, Cursor, Codex, or Gemini CLI to build instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== THE TIMELINE RAIL SECTION (OnBrain's .dayline) ===================== */}
      <section id="how" className="py-20 md:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Section Chapter Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.04em] text-[#191b23] leading-tight mb-4">
            From first idea to <span className="thread-underline">working app</span> in four steps.
          </h2>
          <p className="text-base text-[#63687a]">
            An interconnected workflow that replaces messy wireframes and vague prompts with precision design and structured execution.
          </p>
        </div>

        {/* Timeline Rail Container */}
        <div className="relative pl-6 md:pl-10 space-y-20 border-l-2 border-[#cfc4fd]">
          {/* STEP 1: SKETCH WITH MAGNETIC PARTS */}
          <article id="canvas" className="relative group">
            {/* Timeline Dot */}
            <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#6c4df6] border-4 border-white shadow-md" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-3">
                <p className="text-xs font-semibold text-[#6c4df6] uppercase tracking-wider">Step 01 &middot; 4dp Grid</p>
                <p className="text-xs italic text-[#63687a] bg-[#efecfe] px-3 py-1.5 rounded-lg w-fit">
                  &laquo;Where do I start sketching?&raquo;
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#191b23] tracking-tight">
                  Drag real parts. They fuse together magnetically.
                </h3>
                <p className="text-sm text-[#63687a] leading-relaxed">
                  Buttons, FABs, app bars, cards, tabs, chips, and navigation rails snap on a 4dp grid. When you bring them close, corners soften automatically where they meet.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="chip-ob bg-[#efecfe] text-[#5636e3]">Magnetic Connections</span>
                  <span className="chip-ob bg-[#f6f6f9] border border-[#d5d7e2] text-[#63687a]">7 Color Palettes</span>
                  <span className="chip-ob bg-[#f6f6f9] border border-[#d5d7e2] text-[#63687a]">Phone &amp; Desktop</span>
                </div>
              </div>

              {/* Interactive Scene 1: Magnetic Connection Demo */}
              <div className="lg:col-span-7">
                <div className="card-ob p-6 bg-white shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-between pb-4 border-b border-[#e7e8ef] mb-6">
                    <span className="text-xs font-bold text-[#191b23]">Magnetic Component Fusion</span>
                    <button
                      onClick={() => setConnectedDemo(!connectedDemo)}
                      className="text-xs font-bold text-[#6c4df6] hover:underline cursor-pointer"
                    >
                      {connectedDemo ? "Separate items" : "Fuse together"}
                    </button>
                  </div>

                  {/* Visual interactive representation */}
                  <div className="h-48 bg-[#fafafc] rounded-xl border border-dashed border-[#cfc4fd] flex items-center justify-center p-4">
                    <div className="flex items-center transition-all duration-300 gap-0">
                      <button
                        className={`px-5 py-2.5 bg-[#6c4df6] text-white text-xs font-bold transition-all ${
                          connectedDemo ? "rounded-l-2xl rounded-r-xs" : "rounded-2xl mx-2 shadow-md"
                        }`}
                      >
                        Add to Order
                      </button>
                      <button
                        className={`px-3 py-2.5 bg-[#5636e3] text-white text-xs font-bold transition-all ${
                          connectedDemo ? "rounded-r-2xl rounded-l-xs border-l border-white/20" : "rounded-2xl mx-2 shadow-md"
                        }`}
                      >
                        &or;
                      </button>
                    </div>
                  </div>

                  <p className="text-center text-xs text-[#63687a] mt-4">
                    {connectedDemo
                      ? "✨ Components fused into an M3 Split Button with soft merged radii."
                      : "Separated parts with individual 24dp pill corners."}
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* STEP 2: LINK SCREENS & TAP THROUGH */}
          <article id="flow" className="relative group">
            {/* Timeline Dot */}
            <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#16a34a] border-4 border-white shadow-md" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-3">
                <p className="text-xs font-semibold text-[#16a34a] uppercase tracking-wider">Step 02 &middot; Motion</p>
                <p className="text-xs italic text-[#63687a] bg-[#e8f7ee] px-3 py-1.5 rounded-lg w-fit text-[#16a34a]">
                  &laquo;Will the user flow feel natural?&raquo;
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#191b23] tracking-tight">
                  Tap through the prototype before writing code.
                </h3>
                <p className="text-sm text-[#63687a] leading-relaxed">
                  Link any button, navigation rail tab, or card to another screen. Set up slide, fade, or expand transitions. Tap through in real time with physics-based expressive springs.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="chip-ob bg-[#e8f7ee] text-[#16a34a]">Expressive Springs</span>
                  <span className="chip-ob bg-[#f6f6f9] border border-[#d5d7e2] text-[#63687a]">Swipe Gestures</span>
                  <span className="chip-ob bg-[#f6f6f9] border border-[#d5d7e2] text-[#63687a]">Scroll Insets</span>
                </div>
              </div>

              {/* Interactive Scene 2: Live Prototype Simulator */}
              <div className="lg:col-span-7">
                <div className="card-ob p-6 bg-white shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-[#e7e8ef] mb-4">
                    <span className="text-xs font-bold text-[#191b23]">Interactive Preview Stage</span>
                    <span className="chip-ob bg-[#e8f7ee] text-[#16a34a] text-[10px]">
                      Screen: {activeProtoScreen.toUpperCase()}
                    </span>
                  </div>

                  {/* Phone Mockup Frame */}
                  <div className="w-full max-w-[320px] mx-auto bg-[#191b23] rounded-3xl p-3 shadow-2xl border-4 border-zinc-700">
                    <div className="bg-[#f6f6f9] rounded-2xl h-[340px] overflow-hidden flex flex-col justify-between p-4 relative">
                      {activeProtoScreen === "home" ? (
                        <div className="space-y-3 animate-fadeIn">
                          <div className="flex items-center justify-between">
                            <span className="font-extrabold text-sm text-[#191b23]">Coffee Lab</span>
                            <span className="w-6 h-6 rounded-full bg-[#efecfe] text-[#6c4df6] flex items-center justify-center text-xs font-bold">&equiv;</span>
                          </div>
                          <div className="bg-white p-3 rounded-xl border border-[#e7e8ef] shadow-sm">
                            <div className="h-16 bg-[#efecfe] rounded-lg mb-2 flex items-center justify-center text-xs text-[#6c4df6] font-bold">Featured Blend</div>
                            <b className="text-xs text-[#191b23] block">Cold Brew Reserva</b>
                            <span className="text-[11px] text-[#63687a]">$4.50</span>
                          </div>
                          <button
                            onClick={() => setActiveProtoScreen("details")}
                            className="w-full py-2 bg-[#6c4df6] text-white text-xs font-bold rounded-xl active:scale-95 transition shadow"
                          >
                            Tap to Customize &rarr;
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-3 animate-fadeIn">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setActiveProtoScreen("home")}
                              className="text-xs font-bold text-[#6c4df6] bg-white px-2 py-1 rounded-md border border-[#e7e8ef]"
                            >
                              &larr; Back
                            </button>
                            <span className="font-bold text-xs text-[#191b23]">Customize Order</span>
                          </div>
                          <div className="bg-white p-3 rounded-xl border border-[#e7e8ef] text-xs space-y-2">
                            <div className="flex justify-between font-bold">
                              <span>Oat Milk</span>
                              <span className="text-[#16a34a]">+ $0.50</span>
                            </div>
                            <div className="flex justify-between font-bold">
                              <span>Extra Shot</span>
                              <span className="text-[#16a34a]">+ $1.00</span>
                            </div>
                          </div>
                          <button
                            onClick={() => setActiveProtoScreen("home")}
                            className="w-full py-2 bg-[#16a34a] text-white text-xs font-bold rounded-xl active:scale-95 transition shadow"
                          >
                            Confirm ($6.00) &check;
                          </button>
                        </div>
                      )}

                      <div className="w-16 h-1 bg-zinc-300 rounded-full mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* STEP 3: OPTIONAL AI DRAFTING */}
          <article id="ai" className="relative group">
            {/* Timeline Dot */}
            <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#d97706] border-4 border-white shadow-md" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-3">
                <p className="text-xs font-semibold text-[#d97706] uppercase tracking-wider">Step 03 &middot; Intelligence</p>
                <p className="text-xs italic text-[#63687a] bg-[#fcf3e3] px-3 py-1.5 rounded-lg w-fit text-[#d97706]">
                  &laquo;Writing component specs by hand takes hours.&raquo;
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#191b23] tracking-tight">
                  Draft with AI. Your keys stay on your machine.
                </h3>
                <p className="text-sm text-[#63687a] leading-relaxed">
                  Bring your own key for Claude, OpenAI, Gemini, or DeepSeek. Draft an entire layout from a sentence, or let AI write behavior notes for each part. Direct API requests straight from your browser.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="chip-ob bg-[#fcf3e3] text-[#d97706]">BYO Key Security</span>
                  <span className="chip-ob bg-[#f6f6f9] border border-[#d5d7e2] text-[#63687a]">Claude &middot; OpenAI &middot; Gemini</span>
                  <span className="chip-ob bg-[#f6f6f9] border border-[#d5d7e2] text-[#63687a]">100% Undoable</span>
                </div>
              </div>

              {/* Interactive Scene 3: AI Assistant Preview */}
              <div className="lg:col-span-7">
                <div className="card-ob p-6 bg-white shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-[#e7e8ef] mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#d97706]" />
                      <span className="text-xs font-bold text-[#191b23]">AI Draft Studio</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#63687a]">Direct Client Request</span>
                  </div>

                  <div className="bg-[#fafafc] p-4 rounded-xl border border-[#e7e8ef] space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#191b23] font-medium bg-white p-2.5 rounded-lg border border-[#e7e8ef]">
                      <span className="text-[#d97706]">&bull;</span>
                      <span>&ldquo;Design a pantry inventory app with category chips and search.&rdquo;</span>
                    </div>

                    <div className="p-3 bg-[#fcf3e3] rounded-lg border border-[#fdecd5] text-xs text-[#b45309] space-y-1">
                      <div className="font-bold flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 3c.6 4.3 2.3 6.4 7 7.5-4.7 1.1-6.4 3.2-7 7.5-.6-4.3-2.3-6.4-7-7.5 4.7-1.1 6.4-3.2 7-7.5Z" />
                        </svg>
                        <span>Draft Generated (3 Screens, 18 Components)</span>
                      </div>
                      <p className="text-[11px] text-[#92400e]">
                        Pantry Overview &rarr; Item Detail Sheet &rarr; Add Item Form with expiry date pickers.
                      </p>
                    </div>

                    <div className="flex gap-2 pt-1">
                      <button
                        onClick={onStartDesigning}
                        className="btn-ob-primary py-1.5 px-3 rounded-lg text-xs font-bold"
                      >
                        Accept &amp; Open on Canvas
                      </button>
                      <button
                        onClick={() => setAiDraftStep((s) => (s + 1) % 3)}
                        className="btn-ob-secondary py-1.5 px-3 rounded-lg text-xs font-bold"
                      >
                        Try another variant
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* STEP 4: VIBE CODING PROMPT EXPORT */}
          <article className="relative group">
            {/* Timeline Dot */}
            <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#6c4df6] border-4 border-white shadow-md" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-3">
                <p className="text-xs font-semibold text-[#6c4df6] uppercase tracking-wider">Step 04 &middot; Handoff</p>
                <p className="text-xs italic text-[#63687a] bg-[#efecfe] px-3 py-1.5 rounded-lg w-fit text-[#6c4df6]">
                  &laquo;Turn this entire design into a working application.&raquo;
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#191b23] tracking-tight">
                  One prompt. Any AI coding tool builds the app.
                </h3>
                <p className="text-sm text-[#63687a] leading-relaxed">
                  Export the whole project or a single screen as a concise, structured brief. Paste it into Claude Code, Cursor, Codex, or Gemini CLI. The layout, tokens, spring motions, and flows are preserved.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="chip-ob bg-[#efecfe] text-[#6c4df6]">Android or Web Target</span>
                  <span className="chip-ob bg-[#f6f6f9] border border-[#d5d7e2] text-[#63687a]">Claude Code &middot; Cursor</span>
                  <span className="chip-ob bg-[#f6f6f9] border border-[#d5d7e2] text-[#63687a]">4 Languages</span>
                </div>
              </div>

              {/* Interactive Scene 4: Prompt Copy Box */}
              <div className="lg:col-span-7">
                <div className="card-ob p-6 bg-white shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-[#e7e8ef] mb-4">
                    <span className="text-xs font-bold text-[#191b23]">AI Handoff Brief</span>
                    <button
                      onClick={() => {
                        setCopiedPrompt(true);
                        setTimeout(() => setCopiedPrompt(false), 2000);
                      }}
                      className="btn-ob-primary px-3 py-1 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1.5"
                    >
                      {copiedPrompt ? "Copied! \u2713" : "Copy Prompt \u2398"}
                    </button>
                  </div>

                  <div className="bg-[#191b23] text-[#cfc4fd] p-4 rounded-xl font-mono text-[11px] leading-relaxed overflow-x-auto shadow-inner">
                    <p className="text-emerald-400 font-bold"># PLOCEUS M3 EXPRESSIVE APP SPECIFICATION</p>
                    <p className="text-zinc-400 mt-1">Platform: Web App (React 19, Tailwind, Motion)</p>
                    <p className="text-zinc-400">Theme: Expressive Spring &middot; Primary: #6750A4</p>
                    <p className="mt-2 text-white">## Screen 1: Pantry Inventory (412x892 phone)</p>
                    <p className="text-zinc-300">- TopAppBar: &quot;My Pantry&quot; (small, height 64dp)</p>
                    <p className="text-zinc-300">- FilterChips: All, Dairy, Produce, Bakery (magnetic run)</p>
                    <p className="text-zinc-300">- CardGrid: 12 item cards with thumbnail and expiry badges</p>
                    <p className="text-zinc-300">- ExtendedFAB: &quot;+ Add Item&quot; (bottom-end, opens Sheet on tap)</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ===================== THE ECOSYSTEM / MCP CONNECTOR MAP =====================
           Faithful adaptation of OnBrain's SVG connector map with curved threads */}
      <section id="tools" className="py-20 md:py-28 px-4 sm:px-6 bg-[#ffffff] border-y border-[#e7e8ef]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="chip-ob bg-[#efecfe] text-[#6c4df6] mb-3">AI ECOSYSTEM INTEGRATION</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.04em] text-[#191b23] mb-4">
              All your visual designs in <span className="thread-underline">Claude &amp; Cursor</span>.
            </h2>
            <p className="text-sm sm:text-base text-[#63687a]">
              Ploceus connects your visual sketches directly into your AI coding tool of choice with zero manual translation.
            </p>
          </div>

          {/* SVG Thread Connector Diagram */}
          <div className="w-full max-w-4xl mx-auto bg-[#fafafc] rounded-3xl p-6 sm:p-10 border border-[#e7e8ef] shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Left Column: Visual Inputs */}
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-[#63687a] uppercase tracking-wider block mb-2">Visual Design System</span>
                <div className="p-3 bg-white rounded-xl border border-[#e7e8ef] shadow-sm flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#6c4df6]" />
                  <span className="text-xs font-bold text-[#191b23]">Material 3 Tokens</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#e7e8ef] shadow-sm flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#2563eb]" />
                  <span className="text-xs font-bold text-[#191b23]">Screen Flow Transitions</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#e7e8ef] shadow-sm flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#16a34a]" />
                  <span className="text-xs font-bold text-[#191b23]">Spring Physics Specs</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#e7e8ef] shadow-sm flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#d97706]" />
                  <span className="text-xs font-bold text-[#191b23]">Component Constraints</span>
                </div>
              </div>

              {/* Center Hub: Ploceus Canvas Engine */}
              <div className="text-center py-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#6c4df6] to-[#5636e3] text-white p-4 shadow-xl shadow-purple-500/25 flex items-center justify-center mb-3">
                  <Logo size={42} color="#ffffff" glyph="#191b23" />
                </div>
                <b className="text-sm text-[#191b23]">Ploceus Studio</b>
                <span className="text-xs text-[#63687a]">Universal Prompt Generator</span>
              </div>

              {/* Right Column: AI Coding Targets */}
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-[#63687a] uppercase tracking-wider block mb-2">Build Target Engine</span>
                <div className="p-3 bg-white rounded-xl border border-[#e7e8ef] shadow-sm flex items-center justify-between">
                  <span className="text-xs font-bold text-[#191b23]">Claude Code</span>
                  <span className="chip-ob bg-[#fdecec] text-[#dc2626] text-[10px]">Terminal</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#e7e8ef] shadow-sm flex items-center justify-between">
                  <span className="text-xs font-bold text-[#191b23]">Cursor AI</span>
                  <span className="chip-ob bg-[#efecfe] text-[#6c4df6] text-[10px]">IDE</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#e7e8ef] shadow-sm flex items-center justify-between">
                  <span className="text-xs font-bold text-[#191b23]">Codex &amp; Gemini CLI</span>
                  <span className="chip-ob bg-[#e9f0fe] text-[#2563eb] text-[10px]">Agent</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#e7e8ef] shadow-sm flex items-center justify-between">
                  <span className="text-xs font-bold text-[#191b23]">Direct Share Link</span>
                  <span className="chip-ob bg-[#e8f7ee] text-[#16a34a] text-[10px]">P2P Link</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SUMMARY TALLY (OnBrain's .tally) ===================== */}
      <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="card-ob p-8 sm:p-10 bg-white border border-[#d5d7e2] shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#6c4df6] mb-6">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 3c.6 4.3 2.3 6.4 7 7.5-4.7 1.1-6.4 3.2-7 7.5-.6-4.3-2.3-6.4-7-7.5 4.7-1.1 6.4-3.2 7-7.5Z" />
            </svg>
            <span>WHAT PLOCEUS HANDLES FOR YOU</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-8 border-b border-[#e7e8ef]">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#191b23] block tracking-tight">48+</span>
              <span className="text-xs text-[#63687a]">Real M3 parts ready to drop</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#191b23] block tracking-tight">4dp</span>
              <span className="text-xs text-[#63687a]">Automatic magnetic snapping</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#191b23] block tracking-tight">100%</span>
              <span className="text-xs text-[#63687a]">Client-side private execution</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#191b23] block tracking-tight">1 click</span>
              <span className="text-xs text-[#63687a]">Vibe-coding prompt generation</span>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <b className="text-sm text-[#191b23] block">What you do:</b>
              <span className="text-xs text-[#63687a]">10 minutes of visual sketching. Zero boilerplate code written by hand.</span>
            </div>
            <button
              onClick={onStartDesigning}
              className="btn-ob-primary px-6 py-2.5 rounded-xl text-xs font-bold flex-shrink-0 cursor-pointer"
            >
              Start Designing Free &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* ===================== FINAL CALL TO ACTION ===================== */}
      <section className="py-20 md:py-28 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.04em] text-[#191b23] mb-4">
            Your ideas deserve <span className="thread-underline">better tools</span>.
          </h2>
          <p className="text-base text-[#63687a] max-w-xl mx-auto mb-8">
            Start sketching Material 3 Expressive screens in seconds. Free forever, open-source, and runs entirely in your browser.
          </p>

          <button
            onClick={onStartDesigning}
            className="btn-ob-primary px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2 cursor-pointer shadow-xl"
          >
            <span>Start Designing Free</span>
            <span className="text-white/80">&rarr;</span>
          </button>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#63687a] mt-6">
            <span>&check; No account needed</span>
            <span>&bull;</span>
            <span>&check; MIT Licensed &amp; Free</span>
            <span>&bull;</span>
            <span>&check; Runs 100% offline</span>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="border-t border-[#e7e8ef] bg-white py-12 px-4 sm:px-6 text-xs text-[#63687a]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <Logo size={20} color="#6c4df6" />
            <span className="font-extrabold text-sm text-[#191b23]">Ploceus</span>
            <span className="text-[#a0a5b8]">&middot; Open-source Material 3 Expressive Canvas</span>
          </div>

          <div className="flex items-center gap-6 font-semibold">
            <button onClick={onStartDesigning} className="hover:text-[#191b23]">Canvas Editor</button>
            <a href="https://github.com/ns-kishor/Ploceus" target="_blank" rel="noreferrer" className="hover:text-[#191b23]">GitHub</a>
            <a href="#how" className="hover:text-[#191b23]">Workflow</a>
            <a href="#ai" className="hover:text-[#191b23]">Prompt Guide</a>
          </div>

          <div>
            &copy; {new Date().getFullYear()} Ploceus &middot; MIT License
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Logo } from "./Logo";

interface LandingPageProps {
  onStartDesigning: () => void;
}

export function LandingPage({ onStartDesigning }: LandingPageProps) {
  const [activeCodeTab, setActiveCodeTab] = useState<"react" | "tailwind" | "swift">("react");
  const [typographyWeight, setTypographyWeight] = useState<number>(600);

  return (
    <div className="min-h-screen bg-[#07060A] text-zinc-100 font-sans selection:bg-purple-600 selection:text-white overflow-x-hidden">
      {/* Background glow effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/15 blur-[140px] rounded-full" />
        <div className="absolute top-[35%] -left-[200px] w-[600px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full" />
        <div className="absolute top-[65%] -right-[200px] w-[600px] h-[500px] bg-purple-700/10 blur-[130px] rounded-full" />
        <div className="absolute -bottom-[100px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-violet-600/15 blur-[140px] rounded-full" />
      </div>

      {/* Top Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#07060A]/80 border-b border-white/[0.06] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center p-1 shadow-md shadow-purple-500/20">
              <Logo size={24} color="#FFFFFF" glyph="#07060A" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white flex items-center gap-2">
              Ploceus
              <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400">
                BETA
              </span>
            </span>
          </div>

          {/* Navigation links pill */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] p-1 rounded-full shadow-inner">
            <button className="px-4 py-1.5 rounded-full text-xs font-medium text-white bg-white/[0.08] shadow-sm transition">
              Product
            </button>
            <a href="#features" className="px-4 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition">
              Features
            </a>
            <a href="#tools" className="px-4 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition">
              Resources
            </a>
            <a href="#community" className="px-4 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition">
              Community
            </a>
            <a href="#pricing" className="px-4 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition">
              Pricing
            </a>
          </nav>

          {/* Right action buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={onStartDesigning}
              className="text-xs font-medium text-zinc-300 hover:text-white transition hidden sm:block"
            >
              Sign in
            </button>
            <button
              onClick={onStartDesigning}
              className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/30 active:scale-95 transition-all flex items-center gap-1.5"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          {/* Announcement pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/[0.08] border border-purple-500/25 text-purple-300 text-xs font-medium mb-8 hover:bg-purple-500/15 transition cursor-pointer" onClick={onStartDesigning}>
            <span className="flex h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            <span>Introducing Ploceus 2.0 &mdash; The AI-Native Creative Canvas</span>
            <span className="text-purple-400">&rarr;</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.05] mb-6">
            Design Without Limits.
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            An intuitive creative workspace built for visionaries who want to turn ambitious ideas into production-ready digital experiences. Infinite canvas, expressive motion, AI-powered drafting, and one-click code generation.
          </p>

          {/* Main CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={onStartDesigning}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Start Designing Free</span>
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M1 8a.75.75 0 0 1 .75-.75h11.69L9.22 3.03a.75.75 0 0 1 1.06-1.06l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06l4.22-4.22H1.75A.75.75 0 0 1 1 8Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Social Proof Text & Logos */}
          <div className="pt-2">
            <p className="text-[11px] tracking-wider uppercase text-zinc-500 font-semibold mb-6">
              MADE FOR THE BOLD &middot; TRUSTED BY OVER 50,000+ CREATORS &middot; USED BY TEAMS AT TOP COMPANIES WORLDWIDE
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-50 grayscale hover:grayscale-0 hover:opacity-80 transition duration-300">
              <span className="flex items-center gap-1.5 font-bold tracking-tight text-sm text-zinc-300">
                <span className="text-white">&Delta;</span> VERCEL
              </span>
              <span className="flex items-center gap-1.5 font-bold tracking-tight text-sm text-zinc-300">
                <span className="text-indigo-400">&diams;</span> LINEAR
              </span>
              <span className="flex items-center gap-1.5 font-bold tracking-tight text-sm text-zinc-300">
                <span className="text-emerald-400">&bull;</span> SUPABASE
              </span>
              <span className="flex items-center gap-1.5 font-bold tracking-tight text-sm text-zinc-300">
                <span className="text-red-400">&#10022;</span> RAYCAST
              </span>
              <span className="flex items-center gap-1.5 font-bold tracking-tight text-sm text-zinc-300">
                <span className="text-purple-400">&#9632;</span> FIGMA
              </span>
            </div>
          </div>

          {/* HERO APP PREVIEW / MOCKUP */}
          <div className="mt-14 relative group cursor-pointer" onClick={onStartDesigning}>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-indigo-600/20 to-purple-600/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative rounded-xl border border-white/[0.12] bg-[#0E0D14] shadow-2xl overflow-hidden text-left">
              {/* Window Titlebar */}
              <div className="h-10 border-b border-white/[0.08] bg-[#12111A] px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                  <div className="h-4 w-[1px] bg-white/[0.1] mx-2" />
                  <div className="flex items-center gap-2 text-xs text-zinc-400 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]">
                    <span className="text-purple-400">&#9638;</span>
                    <span className="text-zinc-200 font-medium">dashboard-v2-dark.m3e</span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-3">
                  <div className="flex items-center -space-x-1.5">
                    <span className="w-6 h-6 rounded-full bg-pink-500 border-2 border-[#12111A] text-[9px] font-bold flex items-center justify-center text-white">EM</span>
                    <span className="w-6 h-6 rounded-full bg-cyan-500 border-2 border-[#12111A] text-[9px] font-bold flex items-center justify-center text-white">AC</span>
                    <span className="w-6 h-6 rounded-full bg-purple-500 border-2 border-[#12111A] text-[9px] font-bold flex items-center justify-center text-white">NK</span>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                  </span>
                  <div className="px-2.5 py-1 rounded bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500 transition">
                    Share
                  </div>
                </div>
              </div>

              {/* Canvas Workspace View */}
              <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[480px] bg-[#0A0910]">
                {/* Left Mini Sidebar */}
                <div className="hidden lg:block border-r border-white/[0.06] p-3 text-xs bg-[#0C0B12]">
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Layers &bull; 8 Items</div>
                  <div className="space-y-1">
                    <div className="px-2 py-1.5 rounded bg-purple-600/15 text-purple-300 font-medium flex items-center justify-between border border-purple-500/20">
                      <span># Billing Dashboard</span>
                      <span className="text-[10px] text-purple-400">Frame</span>
                    </div>
                    <div className="px-2 py-1.5 rounded text-zinc-400 hover:bg-white/[0.03] flex items-center justify-between pl-4">
                      <span>&bull; Metric Card Header</span>
                      <span className="text-[10px] text-zinc-600">Row</span>
                    </div>
                    <div className="px-2 py-1.5 rounded text-zinc-400 hover:bg-white/[0.03] flex items-center justify-between pl-4">
                      <span>&bull; Net Revenue Stat</span>
                      <span className="text-[10px] text-zinc-600">Text</span>
                    </div>
                    <div className="px-2 py-1.5 rounded text-zinc-400 hover:bg-white/[0.03] flex items-center justify-between pl-4">
                      <span>&bull; Spline Vector Curve</span>
                      <span className="text-[10px] text-zinc-600">Vector</span>
                    </div>
                    <div className="px-2 py-1.5 rounded text-zinc-400 hover:bg-white/[0.03] flex items-center justify-between pl-4">
                      <span>&bull; Breakdown Columns</span>
                      <span className="text-[10px] text-zinc-600">Grid</span>
                    </div>
                  </div>
                </div>

                {/* Central Canvas Board */}
                <div className="lg:col-span-2 p-6 sm:p-10 flex flex-col items-center justify-center relative overflow-hidden bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px]">
                  {/* Floating Inspector Badges */}
                  <div className="absolute top-6 left-8 bg-purple-950/80 border border-purple-500/40 text-purple-300 px-2 py-1 rounded text-[10px] font-mono shadow-lg flex items-center gap-1">
                    <span>elevation: 12dp</span>
                  </div>
                  <div className="absolute top-6 right-8 bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 px-2 py-1 rounded text-[10px] font-mono shadow-lg flex items-center gap-1">
                    <span>padding: 24dp</span>
                  </div>

                  {/* Main Interactive Metric Card Mockup */}
                  <div className="w-full max-w-md bg-[#13121C] border border-purple-500/30 rounded-2xl p-6 shadow-2xl relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-zinc-400">Total Net Revenue</span>
                      <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        +14.8%
                      </span>
                    </div>
                    <div className="text-3xl font-extrabold text-white tracking-tight mb-4">
                      $184,320.45
                    </div>

                    {/* Glowing SVG Wave/Chart */}
                    <div className="h-28 w-full my-2 relative">
                      <svg viewBox="0 0 360 100" className="w-full h-full overflow-visible">
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Area fill */}
                        <path
                          d="M 0 80 Q 60 20, 120 60 T 240 30 T 360 40 L 360 100 L 0 100 Z"
                          fill="url(#chartGrad)"
                        />
                        {/* Stroke line */}
                        <path
                          d="M 0 80 Q 60 20, 120 60 T 240 30 T 360 40"
                          fill="none"
                          stroke="#A78BFA"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        {/* Anchor Node Highlights */}
                        <circle cx="120" cy="60" r="4" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2" />
                        <circle cx="240" cy="30" r="4" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2" />
                      </svg>
                    </div>

                    {/* Breakdown metrics */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/[0.08] text-center">
                      <div>
                        <div className="text-[10px] text-zinc-500 font-medium">TOTAL ORDERS</div>
                        <div className="text-xs font-bold text-zinc-200 mt-0.5">42.1K</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-zinc-500 font-medium">CONVERSION</div>
                        <div className="text-xs font-bold text-zinc-200 mt-0.5">4.8%</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-zinc-500 font-medium">ACTIVE</div>
                        <div className="text-xs font-bold text-emerald-400 mt-0.5">1,842</div>
                      </div>
                    </div>
                  </div>

                  {/* Click to open overlay hint */}
                  <div className="mt-6 flex items-center gap-2 text-xs text-purple-400 font-medium bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20 group-hover:bg-purple-500/20 transition">
                    <span>Click anywhere to open live interactive canvas</span>
                    <span>&rarr;</span>
                  </div>
                </div>

                {/* Right Inspector Panel */}
                <div className="hidden lg:block border-l border-white/[0.06] p-4 text-xs bg-[#0C0B12] space-y-4">
                  <div>
                    <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Transform &bull; Layout</div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="bg-white/[0.03] p-1.5 rounded border border-white/[0.06] flex justify-between">
                        <span className="text-zinc-500">X</span>
                        <span className="font-mono text-zinc-200">1824</span>
                      </div>
                      <div className="bg-white/[0.03] p-1.5 rounded border border-white/[0.06] flex justify-between">
                        <span className="text-zinc-500">Y</span>
                        <span className="font-mono text-zinc-200">720</span>
                      </div>
                      <div className="bg-white/[0.03] p-1.5 rounded border border-white/[0.06] flex justify-between">
                        <span className="text-zinc-500">W</span>
                        <span className="font-mono text-zinc-200">680</span>
                      </div>
                      <div className="bg-white/[0.03] p-1.5 rounded border border-white/[0.06] flex justify-between">
                        <span className="text-zinc-500">H</span>
                        <span className="font-mono text-zinc-200">420</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Fill &amp; Stroke</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded bg-[#13121C] border border-white/[0.2]" />
                        <span className="font-mono text-zinc-300 text-[11px]">#13121C &bull; 100%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded bg-[#8B5CF6] border border-white/[0.2]" />
                        <span className="font-mono text-zinc-300 text-[11px]">#8B5CF6 &bull; 30%</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <button className="w-full py-2 px-3 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-zinc-200 text-xs font-medium flex items-center justify-center gap-2 transition border border-white/[0.08]">
                      <span>&lt;/&gt;</span> Copy Component Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: EVERYTHING YOU NEED TO CREATE */}
        <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-purple-400 mb-2 block">
                STREAMLINED WORKFLOW / POWERFUL TECH
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Everything You Need to Create.
              </h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-md font-normal leading-relaxed">
              Designed from core latency principles. Zero-lag synchronization empowers high-level tactical execution and move-fast creative workflow.
            </p>
          </div>

          {/* 2x2 Feature Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-[#0E0D14] border border-white/[0.08] hover:border-purple-500/40 transition group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Infinite Canvas</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Scale effortlessly through millions of vector objects at once. 120 FPS infinite-artboard nesting with zero frame rate drops or memory degradation.
              </p>
              <button onClick={onStartDesigning} className="text-xs font-semibold text-purple-400 group-hover:text-purple-300 flex items-center gap-1.5 transition">
                Explore Canvas <span>&rarr;</span>
              </button>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-[#0E0D14] border border-white/[0.08] hover:border-indigo-500/40 transition group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Components</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Build reusable systems that adapt instantly. Parameter and variant inheritance, responsive constraint engines, and strict semantic token binding.
              </p>
              <button onClick={onStartDesigning} className="text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1.5 transition">
                Token Architecture <span>&rarr;</span>
              </button>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-[#0E0D14] border border-white/[0.08] hover:border-pink-500/40 transition group">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/25 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Interactive Prototyping</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Validate physics-powered native animations, boolean variables, and conditional decision trees. Real-time tactile feedback simulation.
              </p>
              <button onClick={onStartDesigning} className="text-xs font-semibold text-pink-400 group-hover:text-pink-300 flex items-center gap-1.5 transition">
                Smart Nodes <span>&rarr;</span>
              </button>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl bg-[#0E0D14] border border-white/[0.08] hover:border-cyan-500/40 transition group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Real-Time Collaboration</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Simultaneous multiplayer synchronization with zero conflict locks. Built-in contextual audio huddles, inline threads, and branching version control.
              </p>
              <button onClick={onStartDesigning} className="text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1.5 transition">
                CRDT Engine Basics <span>&rarr;</span>
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 3: SURGICAL PRECISION IN EVERY TOOL */}
        <section id="tools" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-widest uppercase text-purple-400 mb-2 block">
              ARCHITECTED FOR SCALE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Surgical Precision in Every Tool.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              A reimagined artisan toolbox designed to support craft values on top of 10x modern speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tool 1: Vector */}
            <div className="p-6 rounded-2xl bg-[#0E0D14] border border-white/[0.08] hover:border-purple-500/30 transition flex flex-col justify-between">
              <div>
                <div className="h-36 rounded-xl bg-[#13121C] border border-white/[0.06] p-4 flex items-center justify-center mb-4 relative overflow-hidden">
                  <svg viewBox="0 0 200 80" className="w-full h-full">
                    <path d="M 20 60 C 60 10, 140 10, 180 60" fill="none" stroke="#8B5CF6" strokeWidth="2.5" />
                    {/* Handles */}
                    <line x1="20" y1="60" x2="60" y2="10" stroke="#71717A" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="180" y1="60" x2="140" y2="10" stroke="#71717A" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="60" cy="10" r="3.5" fill="#C084FC" />
                    <circle cx="140" cy="10" r="3.5" fill="#C084FC" />
                    <rect x="17" y="57" width="6" height="6" fill="#FFFFFF" />
                    <rect x="177" y="57" width="6" height="6" fill="#FFFFFF" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-white mb-1">Precision Vector Editing</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Bezier handles with sub-pixel rounding. Compound path boolean operations and pathfinder tools built with GPU-accelerated computing.
                </p>
              </div>
            </div>

            {/* Tool 2: Typography */}
            <div className="p-6 rounded-2xl bg-[#0E0D14] border border-white/[0.08] hover:border-purple-500/30 transition flex flex-col justify-between">
              <div>
                <div className="h-36 rounded-xl bg-[#13121C] border border-white/[0.06] p-4 flex flex-col items-center justify-center mb-4">
                  <span className="text-3xl text-white tracking-wider" style={{ fontWeight: typographyWeight }}>
                    Aa Bb Gg 99
                  </span>
                  <div className="w-full mt-4 flex items-center gap-2">
                    <span className="text-[10px] text-zinc-500 font-mono">Weight</span>
                    <input
                      type="range"
                      min="300"
                      max="900"
                      step="100"
                      value={typographyWeight}
                      onChange={(e) => setTypographyWeight(Number(e.target.value))}
                      className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                    <span className="text-[10px] text-zinc-400 font-mono w-6">{typographyWeight}</span>
                  </div>
                </div>
                <h4 className="text-base font-bold text-white mb-1">Advanced Typography</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Variable font axes, OpenType features, optical kerning, and localized typography styling for any script.
                </p>
              </div>
            </div>

            {/* Tool 3: Color Systems */}
            <div className="p-6 rounded-2xl bg-[#0E0D14] border border-white/[0.08] hover:border-purple-500/30 transition flex flex-col justify-between">
              <div>
                <div className="h-36 rounded-xl bg-[#13121C] border border-white/[0.06] p-3 flex flex-col justify-center gap-2 mb-4">
                  <div className="flex items-center justify-between bg-purple-900/40 p-1.5 rounded border border-purple-500/30">
                    <div className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded bg-purple-500" />
                      <span className="text-[11px] text-zinc-300 font-mono">sys.color.primary</span>
                    </div>
                    <span className="text-[10px] text-purple-300 font-mono">#8B5CF6</span>
                  </div>
                  <div className="flex items-center justify-between bg-zinc-800/40 p-1.5 rounded border border-zinc-700/30">
                    <div className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded bg-zinc-400" />
                      <span className="text-[11px] text-zinc-300 font-mono">sys.color.surface</span>
                    </div>
                    <span className="text-[10px] text-zinc-400 font-mono">#18181B</span>
                  </div>
                </div>
                <h4 className="text-base font-bold text-white mb-1">Color Systems</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Dynamic tonal palettes, standardized contrast ratios, dark/light modes, and single-click accessible token generation.
                </p>
              </div>
            </div>

            {/* Tool 4: Timeline */}
            <div className="p-6 rounded-2xl bg-[#0E0D14] border border-white/[0.08] hover:border-purple-500/30 transition flex flex-col justify-between">
              <div>
                <div className="h-36 rounded-xl bg-[#13121C] border border-white/[0.06] p-4 flex flex-col justify-center mb-4">
                  <div className="text-[10px] text-zinc-500 font-mono mb-2 flex justify-between">
                    <span>SPRING TRANSITION</span>
                    <span className="text-purple-400">damping: 24, mass: 1</span>
                  </div>
                  <div className="h-10 w-full bg-zinc-900 rounded border border-white/[0.06] relative flex items-center px-2">
                    <div className="h-1 w-full bg-zinc-800 rounded relative">
                      <div className="absolute top-1/2 -translate-y-1/2 left-[30%] w-3 h-3 rotate-45 bg-purple-500 border border-white shadow" />
                      <div className="absolute top-1/2 -translate-y-1/2 left-[75%] w-3 h-3 rotate-45 bg-indigo-500 border border-white shadow" />
                    </div>
                  </div>
                </div>
                <h4 className="text-base font-bold text-white mb-1">Timeline / Keyframing</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Easings, spring physics, and time-based transitions with state-machine coordination across screen flows.
                </p>
              </div>
            </div>

            {/* Tool 5: CRDT Collaboration */}
            <div className="p-6 rounded-2xl bg-[#0E0D14] border border-white/[0.08] hover:border-purple-500/30 transition flex flex-col justify-between">
              <div>
                <div className="h-36 rounded-xl bg-[#13121C] border border-white/[0.06] p-4 flex flex-col justify-center gap-2 mb-4 relative">
                  <div className="flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 px-3 py-1.5 rounded-full w-fit">
                    <span className="w-2 h-2 rounded-full bg-pink-500" />
                    <span className="text-xs text-pink-300 font-medium">Alex Chen (Editing Header)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1.5 rounded-full w-fit ml-8">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    <span className="text-xs text-cyan-300 font-medium">Eva Morales (Inspecting Grid)</span>
                  </div>
                </div>
                <h4 className="text-base font-bold text-white mb-1">CRDT Collaboration</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Zero-collision peer-to-peer sync, encrypted WebRTC data channels, and atomic tree resolutions.
                </p>
              </div>
            </div>

            {/* Tool 6: Production Export */}
            <div className="p-6 rounded-2xl bg-[#0E0D14] border border-white/[0.08] hover:border-purple-500/30 transition flex flex-col justify-between">
              <div>
                <div className="h-36 rounded-xl bg-[#13121C] border border-white/[0.06] p-3 flex flex-col justify-between mb-4">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveCodeTab("react")}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${activeCodeTab === "react" ? "bg-purple-600 text-white" : "text-zinc-500"}`}
                      >
                        React
                      </button>
                      <button
                        onClick={() => setActiveCodeTab("tailwind")}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${activeCodeTab === "tailwind" ? "bg-purple-600 text-white" : "text-zinc-500"}`}
                      >
                        Tailwind
                      </button>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">100% Ready</span>
                  </div>
                  <pre className="text-[10px] font-mono text-zinc-300 overflow-hidden leading-tight">
                    {activeCodeTab === "react"
                      ? `<Button variant="filled"\n  elevation={2}\n  onClick={handleCheckout}\n>`
                      : `<div className="flex items-center\n  p-6 rounded-2xl bg-zinc-900\n  shadow-xl shadow-purple-500/10">`}
                  </pre>
                </div>
                <h4 className="text-base font-bold text-white mb-1">One-Click Production Export</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Zero-friction handoff between designers and developers. Generate clean, semantic production code without bloated abstractions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: FROM FIRST IDEA TO FINAL EXPERIENCE */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-widest uppercase text-purple-400 mb-2 block">
              FRICTIONLESS FLOW
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              From First Idea to Final Experience.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              A seamless 4-stage pipeline that eliminates friction between ideation and production shipping.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-[#0E0D14] border border-white/[0.08] relative">
              <div className="text-4xl font-black text-purple-500/30 mb-4 font-mono">01</div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span>&#10022;</span> Imagine
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Iterative brainstorming, generative moodboarding, and AI-prompt conceptualization.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-[#0E0D14] border border-white/[0.08] relative">
              <div className="text-4xl font-black text-indigo-500/30 mb-4 font-mono">02</div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span>&#9638;</span> Design
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Fluid canvas layout, responsive auto-flow, and precise Material 3 token implementation.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-[#0E0D14] border border-white/[0.08] relative">
              <div className="text-4xl font-black text-pink-500/30 mb-4 font-mono">03</div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span>&#9654;</span> Prototype
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                High-fidelity interaction states, haptic physics, spring curves, and tap-through journeys.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-[#0E0D14] border border-white/[0.08] relative">
              <div className="text-4xl font-black text-cyan-500/30 mb-4 font-mono">04</div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span>&rarr;</span> Launch
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Instant code export, zero-drift design tokens, live component sandboxes, and documentation.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: FUEL YOUR CREATIVITY WITH COMMUNITY KITS */}
        <section id="community" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-purple-400 mb-2 block">
                ECOSYSTEM
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Fuel Your Creativity With Community Kits.
              </h2>
            </div>
            <button onClick={onStartDesigning} className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1.5 transition">
              Explore All Templates &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kit 1 */}
            <div className="rounded-2xl bg-[#0E0D14] border border-white/[0.08] overflow-hidden group cursor-pointer hover:border-purple-500/40 transition" onClick={onStartDesigning}>
              <div className="h-44 bg-gradient-to-br from-purple-900/40 via-zinc-900 to-[#12111C] p-4 flex items-center justify-center border-b border-white/[0.06]">
                <div className="w-3/4 h-28 rounded-lg bg-[#181724] border border-purple-500/20 shadow-xl flex items-center justify-center p-3 text-center">
                  <div>
                    <div className="text-xs font-bold text-white mb-1">Design System Kit</div>
                    <div className="text-[10px] text-purple-300">Tokens &bull; Icons &bull; Variables</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                  <span>Design System</span>
                  <span className="text-purple-400 font-medium">48 Screens</span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">Modern Dark UI System</h4>
                <p className="text-xs text-zinc-400">
                  Full enterprise design system with M3 Expressive tokens and interactive components.
                </p>
              </div>
            </div>

            {/* Kit 2 */}
            <div className="rounded-2xl bg-[#0E0D14] border border-white/[0.08] overflow-hidden group cursor-pointer hover:border-indigo-500/40 transition" onClick={onStartDesigning}>
              <div className="h-44 bg-gradient-to-br from-indigo-900/40 via-zinc-900 to-[#12111C] p-4 flex items-center justify-center border-b border-white/[0.06]">
                <div className="w-3/4 h-28 rounded-lg bg-[#181724] border border-indigo-500/20 shadow-xl flex items-center justify-center p-3 text-center">
                  <div>
                    <div className="text-xs font-bold text-white mb-1">SaaS Analytics Suite</div>
                    <div className="text-[10px] text-indigo-300">Charts &bull; Tables &bull; Widgets</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                  <span>Web App</span>
                  <span className="text-indigo-400 font-medium">24 Screens</span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">SaaS Analytics Suite</h4>
                <p className="text-xs text-zinc-400">
                  Responsive analytics dashboards with real-time stats and metrics filters.
                </p>
              </div>
            </div>

            {/* Kit 3 */}
            <div className="rounded-2xl bg-[#0E0D14] border border-white/[0.08] overflow-hidden group cursor-pointer hover:border-pink-500/40 transition" onClick={onStartDesigning}>
              <div className="h-44 bg-gradient-to-br from-pink-900/40 via-zinc-900 to-[#12111C] p-4 flex items-center justify-center border-b border-white/[0.06]">
                <div className="w-3/4 h-28 rounded-lg bg-[#181724] border border-pink-500/20 shadow-xl flex items-center justify-center p-3 text-center">
                  <div>
                    <div className="text-xs font-bold text-white mb-1">Taskflow Mobile App</div>
                    <div className="text-[10px] text-pink-300">iOS &bull; Android &bull; Micro-interactions</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                  <span>Mobile Kit</span>
                  <span className="text-pink-400 font-medium">36 Screens</span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">Taskflow Mobile App</h4>
                <p className="text-xs text-zinc-400">
                  Comprehensive mobile productivity app flow with transitions and gestures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: BOTTOM CALL TO ACTION BANNER */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-14 lg:p-20 bg-gradient-to-b from-[#131120] to-[#0D0C15] border border-purple-500/30 overflow-hidden text-center shadow-2xl">
            {/* Ambient banner glow */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/30 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-[11px] font-bold tracking-widest uppercase text-purple-400 mb-4 inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                READY TO START?
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
                Your Ideas Deserve Better Tools.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
                Everything you need to leap from ideas to code in minutes. Free forever to use, upgrade for high-performance teams and unlimited workspaces.
              </p>

              <button
                onClick={onStartDesigning}
                className="px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-600/40 hover:shadow-purple-600/60 hover:scale-105 active:scale-95 transition cursor-pointer mb-6"
              >
                Start Designing &mdash; It&apos;s Free &rarr;
              </button>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-500 font-medium">
                <span>&check; No credit card required</span>
                <span>&bull;</span>
                <span>&check; Free forever tier</span>
                <span>&bull;</span>
                <span>&check; Open Source &amp; MIT Licensed</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] bg-[#050408] text-zinc-400 text-xs py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Brand column */}
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center p-1">
                  <Logo size={20} color="#FFFFFF" glyph="#07060A" />
                </div>
                <span className="font-bold text-base tracking-tight text-white">Ploceus</span>
              </div>
              <p className="text-xs text-zinc-500 max-w-sm leading-relaxed mb-4">
                Next-generation canvas environment for modern design systems, spatial layouts, and high-velocity product teams.
              </p>
              <div className="text-[11px] text-zinc-600">
                Crafted for creators &amp; vibe coders worldwide.
              </div>
            </div>

            {/* Links column 1 */}
            <div>
              <div className="font-semibold text-white uppercase text-[11px] tracking-wider mb-3">Product</div>
              <ul className="space-y-2">
                <li><button onClick={onStartDesigning} className="hover:text-white transition">Canvas Editor</button></li>
                <li><button onClick={onStartDesigning} className="hover:text-white transition">Design System</button></li>
                <li><button onClick={onStartDesigning} className="hover:text-white transition">Prototyping</button></li>
                <li><button onClick={onStartDesigning} className="hover:text-white transition">Code Export</button></li>
                <li><button onClick={onStartDesigning} className="hover:text-white transition">Releases</button></li>
              </ul>
            </div>

            {/* Links column 2 */}
            <div>
              <div className="font-semibold text-white uppercase text-[11px] tracking-wider mb-3">Resources</div>
              <ul className="space-y-2">
                <li><a href="https://github.com/ns-kishor/Ploceus" target="_blank" rel="noreferrer" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#features" className="hover:text-white transition">Design Tokens</a></li>
                <li><a href="#tools" className="hover:text-white transition">API Reference</a></li>
                <li><a href="#community" className="hover:text-white transition">Tutorials</a></li>
                <li><a href="#community" className="hover:text-white transition">Plugin Market</a></li>
              </ul>
            </div>

            {/* Links column 3 */}
            <div>
              <div className="font-semibold text-white uppercase text-[11px] tracking-wider mb-3">Community</div>
              <ul className="space-y-2">
                <li><a href="#community" className="hover:text-white transition">Showcase</a></li>
                <li><a href="https://github.com/ns-kishor/Ploceus" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a></li>
                <li><a href="https://github.com/ns-kishor/Ploceus/discussions" target="_blank" rel="noreferrer" className="hover:text-white transition">Discussions</a></li>
                <li><a href="#features" className="hover:text-white transition">Templates</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Discord Guild</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
            <div>&copy; 2026 Ploceus Studio Inc. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
              <span className="hover:text-zinc-400 cursor-pointer">Cookie Settings</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

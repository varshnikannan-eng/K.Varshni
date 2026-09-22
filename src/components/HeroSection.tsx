import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, FolderCode } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroVisual } from './HeroVisual';

export const HeroSection: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const elem = document.querySelector(selector);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden"
    >
      {/* Background Tech Grid effect (CSS-based, crisp, low opacity) */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-40 -z-10"
        aria-hidden="true"
      />

      {/* Subtle radial top glow */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Small Label */}
            <div
              id="hero-status-pill"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-300 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="font-semibold text-slate-200">
                {PERSONAL_INFO.role}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1
                id="hero-main-title"
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
              >
                Hi, I'm <span className="text-blue-400">VARSHNI</span>
              </h1>

              {/* Supporting Heading */}
              <h2
                id="hero-supporting-title"
                className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 tracking-normal"
              >
                {PERSONAL_INFO.tagline}
              </h2>
            </div>

            {/* Description */}
            <p
              id="hero-description-text"
              className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed"
            >
              {PERSONAL_INFO.introduction}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                id="hero-cta-projects"
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/25 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <FolderCode className="w-5 h-5" />
                <span>View My Projects</span>
              </a>

              <a
                id="hero-cta-connect"
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-750 hover:bg-slate-700 active:scale-[0.98] text-slate-200 border border-slate-700 font-semibold text-sm sm:text-base transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Focus Summary badges */}
            <div className="pt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-400 font-mono">
              <span className="text-slate-500">Core Foundations:</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-blue-300">
                Python Fundamentals
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Web Development
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-purple-300">
                Generative AI
              </span>
            </div>
          </div>

          {/* Right Column: AI / Tech Visual */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            id="hero-scroll-indicator"
            href="#about"
            onClick={(e) => handleScrollTo(e, '#about')}
            className="flex flex-col items-center gap-1.5 text-xs text-slate-500 hover:text-blue-400 transition-colors py-2 focus:outline-none"
            aria-label="Scroll down to About Me section"
          >
            <span className="font-mono tracking-wider">EXPLORE PORTFOLIO</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#080C14] border-t border-slate-800/90 py-12 text-slate-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand & Subtitle */}
          <div className="text-center md:text-left">
            <h3 id="footer-brand-title" className="text-2xl font-black tracking-wider text-white">
              VARSHNI
            </h3>
            <p id="footer-brand-subtitle" className="text-sm text-slate-400 mt-1">
              B.Tech CSE Student • Aspiring AI Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              id="footer-link-github"
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-850 transition-colors text-xs font-semibold"
              aria-label="Varshni on GitHub"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              id="footer-link-linkedin"
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/40 hover:bg-blue-950/20 transition-colors text-xs font-semibold"
              aria-label="Varshni on LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <button
              id="footer-scroll-top-btn"
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors ml-2"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p id="footer-copyright-text">
            © 2026 VARSHNI. All rights reserved.
          </p>
          <p className="text-[11px] font-mono">
            Designed for authentic student learning & development
          </p>
        </div>
      </div>
    </footer>
  );
};

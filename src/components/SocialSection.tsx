import React from 'react';
import { Github, Linkedin, ExternalLink, ArrowUpRight, Share2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const SocialSection: React.FC = () => {
  return (
    <section
      id="social"
      aria-label="Connect on Social Platforms"
      className="py-20 lg:py-24 bg-[#0B0F19] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono font-medium mb-3">
            <Share2 className="w-3.5 h-3.5" />
            <span>ONLINE PROFILES</span>
          </div>
          <h2
            id="social-section-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Connect With Me
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-2xl">
            Follow my technical journey, inspect my code repositories, or connect professionally.
          </p>
          <div className="w-16 h-1 bg-blue-600 rounded-full mt-4" />
        </div>

        {/* Two Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: GitHub */}
          <div
            id="social-card-github"
            className="group bg-[#121927] border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                  Code Repository
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">GitHub</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Explore my Python programs repository, where I practice coding problems and upload beginner algorithmic exercises.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <a
                id="btn-social-github"
                href={PERSONAL_INFO.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 group-hover:bg-slate-700"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 ml-auto" />
              </a>
            </div>
          </div>

          {/* Card 2: LinkedIn */}
          <div
            id="social-card-linkedin"
            className="group bg-[#121927] border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-950/20 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-blue-300 bg-blue-950 px-3 py-1 rounded-full border border-blue-800/40">
                  Professional Network
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">LinkedIn</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Connect with me on LinkedIn to follow my educational milestones, student activities, and growing interest in AI.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <a
                id="btn-social-linkedin"
                href={PERSONAL_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-semibold text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 shadow-md shadow-blue-600/20"
              >
                <Linkedin className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-blue-200 ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

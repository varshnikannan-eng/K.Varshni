import React from 'react';
import { BookOpen, Cpu, TrendingUp, Sparkles, Compass } from 'lucide-react';
import { GOAL_AREAS } from '../data/portfolioData';

export const GoalSection: React.FC = () => {
  return (
    <section
      id="goal"
      aria-label="Varshni Career Goal"
      className="py-20 lg:py-28 bg-[#0D121F] border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Decorative gradient blur backdrop */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-indigo-900/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading & Quote */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-800/40 text-purple-400 text-xs font-mono font-medium mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>VISION & ASPIRATION</span>
          </div>

          <h2
            id="goal-section-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            My Goal
          </h2>
          <div className="w-16 h-1 bg-purple-600 rounded-full mx-auto mt-4 mb-6" />

          <blockquote
            id="goal-quote-text"
            className="text-lg sm:text-xl text-slate-200 font-medium italic leading-relaxed px-4 py-2 border-l-2 sm:border-l-0 sm:border-y border-slate-800/80 bg-slate-900/40 rounded-xl"
          >
            "My goal is to grow from a curious computer science student into a skilled AI Engineer by continuously learning, experimenting, and building meaningful technology."
          </blockquote>
        </div>

        {/* 3 Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Focus Area 1: Learn */}
          <div
            id="goal-card-learn"
            className="bg-[#121927] border border-slate-800 rounded-2xl p-7 flex flex-col justify-between hover:border-blue-500/50 hover:bg-[#141d2e] transition-all duration-300 shadow-md group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-1">
                Pillar 01
              </span>

              <h3 className="text-2xl font-bold text-white mb-3">Learn</h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Continuously strengthen my programming and computer science fundamentals.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Data structures, Python & syntax
              </span>
            </div>
          </div>

          {/* Focus Area 2: Build */}
          <div
            id="goal-card-build"
            className="bg-[#121927] border border-slate-800 rounded-2xl p-7 flex flex-col justify-between hover:border-purple-500/50 hover:bg-[#141d2e] transition-all duration-300 shadow-md group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-600/15 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-105 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider block mb-1">
                Pillar 02
              </span>

              <h3 className="text-2xl font-bold text-white mb-3">Build</h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Create practical projects using AI and software technologies.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Hands-on applications & problem-solving
              </span>
            </div>
          </div>

          {/* Focus Area 3: Grow */}
          <div
            id="goal-card-grow"
            className="bg-[#121927] border border-slate-800 rounded-2xl p-7 flex flex-col justify-between hover:border-emerald-500/50 hover:bg-[#141d2e] transition-all duration-300 shadow-md group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-600/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-105 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                Pillar 03
              </span>

              <h3 className="text-2xl font-bold text-white mb-3">Grow</h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Develop the knowledge and skills required for a career in Artificial Intelligence.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                From student learner to AI Engineer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

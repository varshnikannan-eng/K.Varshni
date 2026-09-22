import React from 'react';
import { Terminal, Globe, Sparkles, Code2, FileCode2, Palette, Braces, BookOpen } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      aria-label="Skills and Technologies"
      className="py-20 lg:py-28 bg-[#0B0F19] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono font-medium mb-3">
            <span>TECHNICAL TOOLKIT</span>
          </div>
          <h2
            id="skills-section-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Skills & Technologies
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-2xl">
            My foundational toolkit as a first-year student. Focused on strong conceptual basics rather than superficial claims.
          </p>
          <div className="w-16 h-1 bg-blue-600 rounded-full mt-4" />
        </div>

        {/* 3 Categories Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Category 1: Programming */}
          <div
            id="skill-category-programming"
            className="bg-[#121927] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-200 shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  Core Logic
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">Programming</h3>
              <p className="text-xs text-slate-400 mb-6">
                Core language and structured problem-solving.
              </p>

              {/* Skill Item */}
              <div
                id="skill-item-python"
                className="bg-slate-900/90 rounded-xl p-4 border border-slate-800/90 space-y-2 hover:border-blue-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Code2 className="w-5 h-5 text-blue-400" />
                    <span className="font-bold text-slate-100 text-base">Python</span>
                  </div>
                  <span className="text-[11px] font-medium font-mono text-blue-300 bg-blue-950 px-2 py-0.5 rounded border border-blue-800/40">
                    Foundational
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Building my programming fundamentals and learning to solve problems using Python.
                </p>
                <div className="pt-2 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-800">Syntax</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800">Conditionals</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800">Loops</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800">Functions</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
              Status: Active daily practice
            </div>
          </div>

          {/* Category 2: Web Development */}
          <div
            id="skill-category-web"
            className="bg-[#121927] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-200 shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  Foundations
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">Web Development</h3>
              <p className="text-xs text-slate-400 mb-6">
                Foundational web technologies for building user interfaces.
              </p>

              {/* Web Skills Stack */}
              <div className="space-y-3">
                {/* HTML */}
                <div
                  id="skill-item-html"
                  className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800/90 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <FileCode2 className="w-4 h-4 text-orange-400" />
                      <span className="font-bold text-slate-100 text-sm">HTML</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      Foundational
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Understanding semantic tags, page structure, and accessible document layout.
                  </p>
                </div>

                {/* CSS */}
                <div
                  id="skill-item-css"
                  className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800/90 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-sky-400" />
                      <span className="font-bold text-slate-100 text-sm">CSS</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      Foundational
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Learning styling, box model, colors, typography, and responsive layouts.
                  </p>
                </div>

                {/* JavaScript */}
                <div
                  id="skill-item-javascript"
                  className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800/90 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Braces className="w-4 h-4 text-yellow-400" />
                      <span className="font-bold text-slate-100 text-sm">JavaScript</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      Foundational
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Learning basic scripting, DOM manipulation, and interactive web behaviors.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
              Status: Actively learning in Year 1
            </div>
          </div>

          {/* Category 3: Generative AI */}
          <div
            id="skill-category-genai"
            className="bg-[#121927] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-200 shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  Exploration
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">Generative AI</h3>
              <p className="text-xs text-slate-400 mb-6">
                Exploring generative models and practical introductory AI concepts.
              </p>

              {/* Generative AI Skill Item */}
              <div
                id="skill-item-generative-ai"
                className="bg-slate-900/90 rounded-xl p-4 border border-slate-800/90 space-y-2 hover:border-purple-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <span className="font-bold text-slate-100 text-base">Generative AI</span>
                  </div>
                  <span className="text-[11px] font-medium font-mono text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-800/40">
                    Exploring
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Exploring Generative AI concepts and building beginner-level AI projects.
                </p>
                <div className="pt-2 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-800">Prompting</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800">AI APIs</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800">Beginner Prototypes</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
              Status: Exploring AI applications
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

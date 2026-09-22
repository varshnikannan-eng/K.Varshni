import React, { useState } from 'react';
import { Terminal, Cpu, Sparkles, Play, CheckCircle2, Code2 } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'code' | 'nodes'>('code');
  const [hasRun, setHasRun] = useState(false);

  return (
    <div
      id="hero-tech-visual-container"
      className="relative w-full max-w-lg mx-auto lg:max-w-none"
    >
      {/* Ambient background glow (subtle and controlled) */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-60 pointer-events-none" />

      {/* Main Container Card */}
      <div
        id="hero-visual-card"
        className="relative bg-[#111827] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0c1220] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-xs font-mono text-slate-400 font-medium">varshni_ai_path.py</span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-800/80 rounded-lg p-0.5 border border-slate-700/60">
            <button
              id="hero-tab-code-btn"
              type="button"
              onClick={() => setActiveTab('code')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Python</span>
            </button>
            <button
              id="hero-tab-nodes-btn"
              type="button"
              onClick={() => setActiveTab('nodes')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'nodes'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>AI Graph</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Code View */}
        {activeTab === 'code' && (
          <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 space-y-3 bg-[#0d1424]">
            <div className="space-y-1">
              <div className="text-slate-500"># First-Year CSE Student Foundation</div>
              <div className="text-blue-400">
                <span className="text-purple-400">class</span> <span className="text-yellow-300">Varshni</span>:
              </div>
              <div className="pl-4 text-slate-300">
                <span className="text-purple-400">def</span> <span className="text-blue-300">__init__</span>(self):
              </div>
              <div className="pl-8 text-slate-300">
                self.degree = <span className="text-emerald-300">"B.Tech CSE"</span>
              </div>
              <div className="pl-8 text-slate-300">
                self.aspiration = <span className="text-emerald-300">"AI Engineer"</span>
              </div>
              <div className="pl-8 text-slate-300">
                self.skills = [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"Web Dev"</span>, <span className="text-emerald-300">"GenAI"</span>]
              </div>
              <div className="pl-8 text-slate-300">
                self.status = <span className="text-emerald-300">"Actively Learning"</span>
              </div>
              <div className="pl-4 pt-2 text-slate-300">
                <span className="text-purple-400">def</span> <span className="text-blue-300">run_goal</span>(self):
              </div>
              <div className="pl-8 text-slate-300">
                <span className="text-purple-400">return</span> <span className="text-emerald-300">"Learn → Build → Grow → AI Engineer"</span>
              </div>
            </div>

            {/* Run script trigger & output */}
            <div className="pt-3 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <button
                  id="hero-run-python-button"
                  type="button"
                  onClick={() => setHasRun(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/30 text-xs font-semibold transition-all focus:outline-none focus:ring-1 focus:ring-emerald-400"
                >
                  <Play className="w-3 h-3 fill-emerald-300" />
                  <span>{hasRun ? 'Re-execute' : 'Run Script'}</span>
                </button>
                <span className="text-[11px] text-slate-500">Python 3.12 • Output Ready</span>
              </div>

              {hasRun && (
                <div
                  id="hero-terminal-output"
                  className="mt-2.5 p-2.5 bg-slate-950/80 rounded-lg border border-slate-800 text-[12px] text-emerald-400 space-y-1 animate-fadeIn"
                >
                  <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Process completed with code 0:</span>
                  </div>
                  <div className="font-semibold text-slate-200">
                    &gt; Student: Varshni | Year 1 | Goal: AI Engineer
                  </div>
                  <div className="text-blue-400 text-[11px]">
                    &gt; "Exploring technology to solve real-world problems."
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Minimal Neural/AI Nodes Visual */}
        {activeTab === 'nodes' && (
          <div className="p-6 bg-[#0d1424] flex flex-col items-center justify-center min-h-[260px]">
            <svg
              className="w-full max-w-[340px] h-48"
              viewBox="0 0 340 190"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Connection Lines */}
              <line x1="50" y1="50" x2="170" y2="95" stroke="#334155" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="50" y1="95" x2="170" y2="95" stroke="#3B82F6" strokeWidth="2" />
              <line x1="50" y1="140" x2="170" y2="95" stroke="#334155" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="170" y1="95" x2="290" y2="95" stroke="#8B5CF6" strokeWidth="2.5" />

              {/* Data pulse animated circles */}
              <circle cx="110" cy="95" r="3" fill="#60A5FA">
                <animate attributeName="cx" from="50" to="170" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="230" cy="95" r="3.5" fill="#C084FC">
                <animate attributeName="cx" from="170" to="290" dur="1.8s" repeatCount="indefinite" />
              </circle>

              {/* Input Nodes (Foundations) */}
              <g>
                <circle cx="50" cy="50" r="18" fill="#1E293B" stroke="#60A5FA" strokeWidth="1.5" />
                <text x="50" y="53" textAnchor="middle" fill="#93C5FD" fontSize="8" fontFamily="monospace" fontWeight="bold">PY</text>
                <text x="50" y="30" textAnchor="middle" fill="#94A3B8" fontSize="9">Python</text>
              </g>

              <g>
                <circle cx="50" cy="95" r="18" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
                <text x="50" y="98" textAnchor="middle" fill="#7DD3FC" fontSize="8" fontFamily="monospace" fontWeight="bold">WEB</text>
                <text x="50" y="117" textAnchor="middle" fill="#94A3B8" fontSize="9">Web Dev</text>
              </g>

              <g>
                <circle cx="50" cy="140" r="18" fill="#1E293B" stroke="#A78BFA" strokeWidth="1.5" />
                <text x="50" y="143" textAnchor="middle" fill="#DDD6FE" fontSize="8" fontFamily="monospace" fontWeight="bold">AI</text>
                <text x="50" y="162" textAnchor="middle" fill="#94A3B8" fontSize="9">GenAI</text>
              </g>

              {/* Middle Layer (Varshni / Student Engine) */}
              <g>
                <circle cx="170" cy="95" r="26" fill="#1E293B" stroke="#3B82F6" strokeWidth="2" />
                <text x="170" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">FIRST-YEAR</text>
                <text x="170" y="103" textAnchor="middle" fill="#60A5FA" fontSize="8" fontFamily="monospace">CSE</text>
              </g>

              {/* Target / Output Node (AI Engineer) */}
              <g>
                <circle cx="290" cy="95" r="26" fill="#2E1065" stroke="#A855F7" strokeWidth="2" />
                <text x="290" y="92" textAnchor="middle" fill="#F3E8FF" fontSize="9" fontWeight="bold">AI</text>
                <text x="290" y="103" textAnchor="middle" fill="#C084FC" fontSize="8" fontWeight="bold">ENGINEER</text>
              </g>
            </svg>

            <p className="text-xs text-slate-400 mt-2 text-center">
              Learning foundations to gradually advance into Artificial Intelligence engineering.
            </p>
          </div>
        )}

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-[#0a0f1a] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span>Varshni • B.Tech CSE</span>
          </div>
          <span className="text-slate-500">Student Portfolio 2026</span>
        </div>
      </div>
    </div>
  );
};

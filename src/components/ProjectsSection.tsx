import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Play, CheckCircle2, AlertCircle, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  // Interactive mini-demo states for Project 1 (Calculator)
  const [calcNum1, setCalcNum1] = useState<string>('24');
  const [calcOp, setCalcOp] = useState<string>('+');
  const [calcNum2, setCalcNum2] = useState<string>('8');
  const [calcResult, setCalcResult] = useState<string | null>('32');
  const [showCalcDemo, setShowCalcDemo] = useState<boolean>(false);

  // Interactive mini-demo states for Project 2 (Voting)
  const [votingAge, setVotingAge] = useState<string>('18');
  const [votingResult, setVotingResult] = useState<{ eligible: boolean; message: string } | null>({
    eligible: true,
    message: 'Eligible to vote! You are 18 years old.'
  });
  const [showVotingDemo, setShowVotingDemo] = useState<boolean>(false);

  const runCalculator = () => {
    const n1 = parseFloat(calcNum1);
    const n2 = parseFloat(calcNum2);
    if (isNaN(n1) || isNaN(n2)) {
      setCalcResult('Please enter valid numbers');
      return;
    }
    switch (calcOp) {
      case '+':
        setCalcResult(`${n1} + ${n2} = ${n1 + n2}`);
        break;
      case '-':
        setCalcResult(`${n1} - ${n2} = ${n1 - n2}`);
        break;
      case '*':
        setCalcResult(`${n1} × ${n2} = ${n1 * n2}`);
        break;
      case '/':
        setCalcResult(n2 === 0 ? 'Cannot divide by zero' : `${n1} ÷ ${n2} = ${(n1 / n2).toFixed(2)}`);
        break;
      default:
        setCalcResult('Invalid operator');
    }
  };

  const runVotingCheck = () => {
    const age = parseInt(votingAge, 10);
    if (isNaN(age) || age < 0) {
      setVotingResult({ eligible: false, message: 'Please enter a valid age (e.g., 18).' });
      return;
    }
    const VOTING_AGE = 18;
    if (age >= VOTING_AGE) {
      setVotingResult({
        eligible: true,
        message: `Eligible to vote! You are ${age} years old.`
      });
    } else {
      const yearsLeft = VOTING_AGE - age;
      setVotingResult({
        eligible: false,
        message: `Not eligible yet. You need ${yearsLeft} more year${yearsLeft > 1 ? 's' : ''} to vote.`
      });
    }
  };

  return (
    <section
      id="projects"
      aria-label="Student Projects"
      className="py-20 lg:py-28 bg-[#0D121F] border-t border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono font-medium mb-3">
            <span>PORTFOLIO WORK</span>
          </div>
          <h2
            id="projects-section-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            My Projects
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-2xl">
            Real foundational Python projects I built to apply core logic, conditional branches, and arithmetic operations in code.
          </p>
          <div className="w-16 h-1 bg-blue-600 rounded-full mt-4" />
        </div>

        {/* 2-Column Grid on Desktop, 1-Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Project 1: Student Calculator */}
          <div
            id="project-card-student-calculator"
            className="group bg-[#121927] border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-950/20 transition-all duration-300"
          >
            <div>
              {/* Category & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-950/70 text-blue-400 border border-blue-800/40">
                  {PROJECTS[0].category}
                </span>
                <span className="text-xs text-slate-500 font-mono">Project #1</span>
              </div>

              {/* Title */}
              <h3
                id="project-title-student-calculator"
                className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3"
              >
                {PROJECTS[0].title}
              </h3>

              {/* Description */}
              <p
                id="project-desc-student-calculator"
                className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5"
              >
                {PROJECTS[0].description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {PROJECTS[0].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-900 border border-slate-700/80 text-blue-300"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{tech}</span>
                  </span>
                ))}
                <span className="text-xs text-slate-500 font-mono">Beginner Logic</span>
              </div>

              {/* Interactive Logic Preview Toggle */}
              <div className="mb-6 border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60">
                <button
                  id="calc-demo-toggle-btn"
                  type="button"
                  onClick={() => setShowCalcDemo(!showCalcDemo)}
                  className="w-full px-4 py-2.5 flex items-center justify-between text-xs font-mono text-slate-300 hover:text-white bg-slate-850 hover:bg-slate-800 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Play className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
                    <span>{showCalcDemo ? 'Hide Interactive Demo' : 'Try Live Python Logic Demo'}</span>
                  </span>
                  {showCalcDemo ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {showCalcDemo && (
                  <div className="p-4 border-t border-slate-800 space-y-3 font-mono text-xs">
                    <p className="text-slate-400 text-[11px]">
                      Test the calculator logic implemented in Python:
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Number 1</label>
                        <input
                          id="calc-input-num1"
                          type="number"
                          value={calcNum1}
                          onChange={(e) => setCalcNum1(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Operator</label>
                        <select
                          id="calc-input-operator"
                          value={calcOp}
                          onChange={(e) => setCalcOp(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1.5 text-white focus:outline-none focus:border-blue-500"
                        >
                          <option value="+">+</option>
                          <option value="-">-</option>
                          <option value="*">×</option>
                          <option value="/">÷</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Number 2</label>
                        <input
                          id="calc-input-num2"
                          type="number"
                          value={calcNum2}
                          onChange={(e) => setCalcNum2(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        id="calc-run-btn"
                        type="button"
                        onClick={runCalculator}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded font-sans text-xs font-semibold transition-colors"
                      >
                        Calculate
                      </button>
                      {calcResult && (
                        <span className="text-emerald-400 font-bold bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                          Result: {calcResult}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* GitHub Button */}
            <div className="pt-4 border-t border-slate-800/80">
              <a
                id="btn-github-student-calculator"
                href={PROJECTS[0].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-auto" />
              </a>
            </div>
          </div>

          {/* Project 2: Voting Eligibility Calculator */}
          <div
            id="project-card-voting-calculator"
            className="group bg-[#121927] border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-950/20 transition-all duration-300"
          >
            <div>
              {/* Category & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-950/70 text-blue-400 border border-blue-800/40">
                  {PROJECTS[1].category}
                </span>
                <span className="text-xs text-slate-500 font-mono">Project #2</span>
              </div>

              {/* Title */}
              <h3
                id="project-title-voting-calculator"
                className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3"
              >
                {PROJECTS[1].title}
              </h3>

              {/* Description */}
              <p
                id="project-desc-voting-calculator"
                className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5"
              >
                {PROJECTS[1].description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {PROJECTS[1].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-900 border border-slate-700/80 text-blue-300"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{tech}</span>
                  </span>
                ))}
                <span className="text-xs text-slate-500 font-mono">Conditionals & Logic</span>
              </div>

              {/* Interactive Logic Preview Toggle */}
              <div className="mb-6 border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60">
                <button
                  id="voting-demo-toggle-btn"
                  type="button"
                  onClick={() => setShowVotingDemo(!showVotingDemo)}
                  className="w-full px-4 py-2.5 flex items-center justify-between text-xs font-mono text-slate-300 hover:text-white bg-slate-850 hover:bg-slate-800 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Play className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
                    <span>{showVotingDemo ? 'Hide Interactive Demo' : 'Try Live Python Logic Demo'}</span>
                  </span>
                  {showVotingDemo ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {showVotingDemo && (
                  <div className="p-4 border-t border-slate-800 space-y-3 font-mono text-xs">
                    <p className="text-slate-400 text-[11px]">
                      Test the voting condition (`if age &gt;= 18`):
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <label className="text-[10px] text-slate-400 block mb-1">Enter Age</label>
                        <input
                          id="voting-input-age"
                          type="number"
                          value={votingAge}
                          min="1"
                          max="120"
                          onChange={(e) => setVotingAge(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <button
                        id="voting-run-btn"
                        type="button"
                        onClick={runVotingCheck}
                        className="mt-4 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded font-sans text-xs font-semibold transition-colors shrink-0"
                      >
                        Check
                      </button>
                    </div>

                    {votingResult && (
                      <div
                        id="voting-result-box"
                        className={`p-2.5 rounded border text-xs flex items-start gap-2 ${
                          votingResult.eligible
                            ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300'
                            : 'bg-amber-950/40 border-amber-800/60 text-amber-300'
                        }`}
                      >
                        {votingResult.eligible ? (
                          <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                        )}
                        <span>{votingResult.message}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* GitHub Button */}
            <div className="pt-4 border-t border-slate-800/80">
              <a
                id="btn-github-voting-calculator"
                href={PROJECTS[1].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { TIMELINE_STEPS } from '../data/portfolioData';
import { CheckCircle2, Clock, Compass, Target, ArrowRight } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section
      id="journey"
      aria-label="Varshni Learning Journey"
      className="py-20 lg:py-28 bg-[#0B0F19] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono font-medium mb-3">
            <span>PROGRESSION</span>
          </div>
          <h2
            id="journey-section-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            My Learning Journey
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-2xl">
            A milestone-by-milestone look at how I am building my foundation in computer science and moving toward AI engineering.
          </p>
          <div className="w-16 h-1 bg-blue-600 rounded-full mt-4" />
        </div>

        {/* Desktop View: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative pt-8 pb-12">
            {/* Connecting Horizontal Line */}
            <div
              className="absolute top-16 left-6 right-6 h-1 bg-slate-800 rounded-full -z-0"
              aria-hidden="true"
            >
              {/* Progress bar fill for active progress */}
              <div className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 w-3/4 rounded-full" />
            </div>

            {/* 5 Timeline Steps Horizontal Grid */}
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {TIMELINE_STEPS.map((item) => {
                const isCompleted = item.status === 'completed';
                const isInProgress = item.status === 'in-progress';
                const isFuture = item.status === 'future';

                return (
                  <div
                    key={`desktop-step-${item.step}`}
                    id={`timeline-step-desktop-${item.step}`}
                    className="flex flex-col items-start pr-2 group"
                  >
                    {/* Step Node Marker */}
                    <div className="flex items-center justify-center mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md ${
                          isCompleted
                            ? 'bg-blue-600 text-white border-2 border-blue-400 shadow-blue-500/20'
                            : isInProgress
                            ? 'bg-[#16213b] text-blue-300 border-2 border-blue-500 ring-4 ring-blue-500/10'
                            : 'bg-slate-900 text-slate-400 border-2 border-slate-700'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-6 h-6 text-white" />
                        ) : isInProgress ? (
                          <Clock className="w-5 h-5 text-blue-400 animate-spin-slow" />
                        ) : (
                          <Target className="w-5 h-5 text-purple-400" />
                        )}
                      </div>
                    </div>

                    {/* Step Card Content */}
                    <div className="bg-[#121927] border border-slate-800 rounded-xl p-4 w-full h-full flex flex-col justify-between group-hover:border-slate-700 transition-colors">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-mono text-slate-500 font-bold">
                            STEP 0{item.step}
                          </span>
                          <span
                            className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-semibold ${
                              isCompleted
                                ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/40'
                                : isInProgress
                                ? 'bg-blue-950 text-blue-300 border border-blue-800/40'
                                : 'bg-purple-950 text-purple-300 border border-purple-800/40'
                            }`}
                          >
                            {isCompleted ? 'Done' : isInProgress ? 'Active' : 'Target'}
                          </span>
                        </div>

                        <h3 className="text-sm font-bold text-slate-100 mb-2 leading-snug">
                          {item.title}
                        </h3>

                        <p className="text-xs text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-2 border-t border-slate-800/80 text-[10px] text-slate-500 font-mono">
                        {item.step === 1 && 'Started Semester 1'}
                        {item.step === 2 && 'Core Logic & Scripts'}
                        {item.step === 3 && 'HTML, CSS & JS'}
                        {item.step === 4 && 'AI Models & Prompts'}
                        {item.step === 5 && 'AI Engineer'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile View: Vertical Timeline */}
        <div className="block lg:hidden">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-8 ml-3">
            {TIMELINE_STEPS.map((item) => {
              const isCompleted = item.status === 'completed';
              const isInProgress = item.status === 'in-progress';
              const isFuture = item.status === 'future';

              return (
                <div
                  key={`mobile-step-${item.step}`}
                  id={`timeline-step-mobile-${item.step}`}
                  className="relative group"
                >
                  {/* Timeline bullet on the vertical line */}
                  <div
                    className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-bold text-xs transition-colors shadow-sm ${
                      isCompleted
                        ? 'bg-blue-600 text-white border border-blue-400'
                        : isInProgress
                        ? 'bg-[#152037] text-blue-300 border-2 border-blue-500'
                        : 'bg-slate-900 text-slate-400 border border-slate-700'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    ) : isInProgress ? (
                      <span className="font-mono text-xs text-blue-400">0{item.step}</span>
                    ) : (
                      <Target className="w-4 h-4 text-purple-400" />
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="bg-[#121927] border border-slate-800 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-semibold text-blue-400">
                        Step {item.step}
                      </span>
                      <span
                        className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-semibold ${
                          isCompleted
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/40'
                            : isInProgress
                            ? 'bg-blue-950 text-blue-300 border border-blue-800/40'
                            : 'bg-purple-950 text-purple-300 border border-purple-800/40'
                        }`}
                      >
                        {isCompleted ? 'Completed' : isInProgress ? 'In Progress' : 'Future Goal'}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-1.5">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

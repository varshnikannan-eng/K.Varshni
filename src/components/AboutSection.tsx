import React from 'react';
import { User, GraduationCap, Calendar, Target, Layers, Sparkles, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Varshni"
      className="py-20 lg:py-28 bg-[#0D121F] border-t border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono font-medium mb-3">
            <span>DISCOVER</span>
          </div>
          <h2
            id="about-section-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mt-3" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Authentic Student Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p id="about-intro-p1">
                I am a first-year <strong className="text-white font-semibold">B.Tech Computer Science Engineering</strong> student with a deep interest in Artificial Intelligence. I am at the exciting beginning of my journey toward becoming an <strong className="text-blue-400 font-semibold">AI Engineer</strong>.
              </p>

              <p id="about-intro-p2" className="text-slate-300">
                Right now, I am actively building my foundational skills in <span className="text-white font-medium">Python</span> and learning the essentials of <span className="text-white font-medium">web development</span>. Alongside programming fundamentals, I have started experimenting with beginner-level <span className="text-purple-300 font-medium">Generative AI</span> projects to explore how modern AI models interact with data and user inputs.
              </p>

              <p id="about-intro-p3" className="text-slate-300">
                I believe that practical, hands-on building is the most authentic way to learn. Rather than just reading theory, I write code, test logic, troubleshoot mistakes, and build small functional projects. My core aim is to continuously improve my technical skills and steadily develop the disciplined thinking needed for future engineering.
              </p>
            </div>

            {/* Student Principles Checklist */}
            <div
              id="about-learning-values-card"
              className="mt-8 p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3"
            >
              <h3 className="text-sm font-semibold text-slate-200 tracking-wide flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>My Learning Approach</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Curious and consistent student learner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hands-on practice through code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strong computer science fundamentals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Grounded exploration of Generative AI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Information Card */}
          <div className="lg:col-span-5 w-full">
            <div
              id="profile-info-card"
              className="bg-[#121927] border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-xl shadow-black/30 relative overflow-hidden"
            >
              {/* Card Accent Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                    Profile Summary
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    {PERSONAL_INFO.profileCard.name}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <User className="w-6 h-6" />
                </div>
              </div>

              {/* Profile Details List */}
              <dl className="divide-y divide-slate-800/80 text-sm">
                {/* Name */}
                <div className="py-3.5 flex items-start justify-between gap-4">
                  <dt className="text-slate-400 font-medium flex items-center gap-2 shrink-0">
                    <User className="w-4 h-4 text-slate-500" />
                    <span>Name</span>
                  </dt>
                  <dd className="font-semibold text-slate-200 text-right">
                    {PERSONAL_INFO.profileCard.name}
                  </dd>
                </div>

                {/* Education */}
                <div className="py-3.5 flex items-start justify-between gap-4">
                  <dt className="text-slate-400 font-medium flex items-center gap-2 shrink-0">
                    <GraduationCap className="w-4 h-4 text-slate-500" />
                    <span>Education</span>
                  </dt>
                  <dd className="font-medium text-slate-200 text-right">
                    {PERSONAL_INFO.profileCard.education}
                  </dd>
                </div>

                {/* Year */}
                <div className="py-3.5 flex items-start justify-between gap-4">
                  <dt className="text-slate-400 font-medium flex items-center gap-2 shrink-0">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span>Year</span>
                  </dt>
                  <dd className="font-medium text-slate-200 text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-900/40 text-blue-300 border border-blue-700/50">
                      {PERSONAL_INFO.profileCard.year}
                    </span>
                  </dd>
                </div>

                {/* Career Goal */}
                <div className="py-3.5 flex items-start justify-between gap-4">
                  <dt className="text-slate-400 font-medium flex items-center gap-2 shrink-0">
                    <Target className="w-4 h-4 text-slate-500" />
                    <span>Career Goal</span>
                  </dt>
                  <dd className="font-semibold text-blue-400 text-right">
                    {PERSONAL_INFO.profileCard.careerGoal}
                  </dd>
                </div>

                {/* Current Focus */}
                <div className="py-3.5 flex flex-col gap-2">
                  <dt className="text-slate-400 font-medium flex items-center gap-2">
                    <Layers className="w-4 h-4 text-slate-500" />
                    <span>Current Focus</span>
                  </dt>
                  <dd className="font-mono text-xs text-slate-200 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                    {PERSONAL_INFO.profileCard.currentFocus}
                  </dd>
                </div>
              </dl>

              {/* Status Note */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>Open to learning & connecting with peers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

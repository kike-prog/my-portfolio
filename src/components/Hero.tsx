import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium animate-fadeIn shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Hello, I'm</span>
            </div>

            {/* Main Name & Title matching reference */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                {personal.name}
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent glow-text">
                {personal.title}
              </h2>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {personal.shortBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="px-7 py-3.5 rounded-full font-semibold text-slate-200 glass-card hover:bg-white/10 hover:border-purple-400/50 hover:text-white transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-11 h-11 rounded-full glass-card hover:border-purple-500/60 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-11 h-11 rounded-full glass-card hover:border-purple-500/60 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personal.social.email}`}
                aria-label="Send Email"
                className="w-11 h-11 rounded-full glass-card hover:border-purple-500/60 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Tech Pill List */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-xs text-slate-400 font-medium mr-1">Stack:</span>
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Right Hero Visual (matching the 3D developer desk aesthetic in reference) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-lg">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-purple-600/40 via-indigo-500/30 to-cyan-400/40 blur-xl opacity-75 animate-pulse -z-10" />

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden glass-card border border-purple-500/20 shadow-2xl p-2 group">
                <img
                  src={personal.heroImage}
                  alt="Frontend Developer Workspace 3D Art"
                  className="w-full h-auto rounded-xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Floating Floating Badges matching the reference look */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl glass-card border border-purple-500/40 flex items-center gap-2 shadow-lg backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-semibold text-white">Frontend Pro</span>
                </div>

                <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-xl glass-card border border-emerald-500/40 flex items-center gap-2 shadow-lg backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs font-semibold text-emerald-300">Clean UI / UX</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

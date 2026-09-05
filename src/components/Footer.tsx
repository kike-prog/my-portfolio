import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-md relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]">
              {personal.initials}
            </div>
            <div>
              <span className="text-base font-bold text-white">
                {personal.name}
              </span>
              <span className="block text-xs text-purple-400">
                Frontend Developer Portfolio
              </span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium text-slate-400">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Socials & Scroll to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full glass-card hover:text-white text-slate-400 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full glass-card hover:text-white text-slate-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.social.email}`}
              aria-label="Email"
              className="p-2 rounded-full glass-card hover:text-white text-slate-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-full bg-purple-600/30 border border-purple-500/40 text-purple-300 hover:bg-purple-600 hover:text-white transition-all shadow-[0_0_15px_rgba(124,58,237,0.3)] ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom text */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {personal.name}. Built with React, TypeScript & Tailwind CSS.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for high-performance web experiences.
          </p>
        </div>

      </div>
    </footer>
  );
};

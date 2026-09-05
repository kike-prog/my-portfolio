import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'react' | 'nextjs'>('all');
  const { projects } = portfolioData;

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter || project.tags.map(t => t.toLowerCase()).includes(filter);
  });

  return (
    <section id="projects" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
            Selected frontend applications demonstrating responsive design, state management, and modern UI engineering.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-3 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'react', label: 'React.js' },
            { id: 'nextjs', label: 'Next.js' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filter === tab.id
                  ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.5)] border border-purple-400'
                  : 'glass-card text-slate-300 hover:text-white hover:border-purple-500/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Callout Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl glass-card border border-white/10 max-w-xl mx-auto">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-white font-bold text-sm sm:text-base">Looking for more experiments?</h4>
              <p className="text-xs text-slate-400">Check out my repositories, code sandboxes, and open source work on GitHub.</p>
            </div>
            <a
              href={portfolioData.personal.social.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 whitespace-nowrap shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all"
            >
              Visit GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Check, X } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="group rounded-2xl glass-card hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden hover:shadow-[0_0_30px_rgba(124,58,237,0.25)]">
        
        {/* Project Image Preview with Overlay */}
        <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
          
          {project.featured && (
            <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-purple-600/90 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg border border-purple-400/40">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Featured App</span>
            </div>
          )}

          {/* Quick Action Overlay Buttons */}
          <div className="absolute top-3.5 right-3.5 flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} GitHub repository`}
              className="p-2 rounded-full glass-card hover:bg-white/20 text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} live demo`}
              className="p-2 rounded-full glass-card hover:bg-white/20 text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
              {project.tagline}
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-white/5 flex items-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 transition-colors text-center"
              >
                Project Details
              </button>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(124,58,237,0.3)]"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Project Modal Preview */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative max-w-2xl w-full rounded-2xl glass-card border border-purple-500/30 p-6 sm:p-8 bg-slate-950/95 max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(124,58,237,0.3)]">
            
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full glass-card hover:bg-white/10 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs uppercase font-semibold tracking-wider text-purple-400">
                {project.tagline}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
            </div>

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-xl border border-white/10 mb-6"
            />

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {project.description}
            </p>

            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Key Features & Architectural Highlights:
            </h4>

            <ul className="space-y-2 mb-6">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-md bg-purple-600/20 text-purple-300 border border-purple-500/30 font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.4)]"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-5 rounded-xl font-semibold text-sm text-slate-200 glass-card hover:bg-white/10 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

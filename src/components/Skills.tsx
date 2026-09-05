import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Atom, 
  Flame, 
  FileCode2, 
  Braces, 
  Palette, 
  Smartphone, 
  Globe, 
  Sparkles, 
  GitBranch, 
  Github, 
  Terminal, 
  Zap, 
  Layers, 
  Cloud,
  Check
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'tools'>('all');

  const getIcon = (iconName: string, color: string) => {
    const props = { className: "w-6 h-6", style: { color } };
    switch (iconName) {
      case 'Atom': return <Atom {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'FileCode2': return <FileCode2 {...props} />;
      case 'Braces': return <Braces {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      case 'Github': return <Github {...props} />;
      case 'Terminal': return <Terminal {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      default: return <Atom {...props} />;
    }
  };

  const frontendSkills = portfolioData.skills[0].items;
  const toolSkills = portfolioData.skills[1].items;

  const displaySkills = 
    activeTab === 'frontend' ? frontendSkills :
    activeTab === 'tools' ? toolSkills :
    [...frontendSkills, ...toolSkills];

  return (
    <section id="skills" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Technical <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
            The core tools, languages, and modern frontend technologies I use to build robust digital experiences.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-3 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Technologies' },
            { id: 'frontend', label: 'Frontend Stack' },
            { id: 'tools', label: 'Tools & Workflow' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.5)] border border-purple-400'
                  : 'glass-card text-slate-300 hover:text-white hover:border-purple-500/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modern Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displaySkills.map((skill, index) => (
            <div
              key={index}
              className="group p-5 rounded-2xl glass-card hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle gradient hover wash */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-500/30 group-hover:scale-110 transition-all duration-300">
                    {getIcon(skill.icon, skill.color)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Production Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skill Badges Strip */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-white font-bold text-base">Key Frontend Strengths</h4>
            <p className="text-xs text-slate-400">Core architectural patterns and principles I implement daily</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
            {[
              'Responsive Web Design',
              'Performance Optimization',
              'Clean Component Architecture',
              'REST API Integration',
              'State Management',
              'SEO & Web Accessibility'
            ].map((strength, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 text-purple-200 font-medium"
              >
                {strength}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

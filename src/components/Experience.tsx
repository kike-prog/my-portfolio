import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Work <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
            My frontend development experience contributing to products, startups, and client web solutions.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-3 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-400 -translate-x-1/2 hidden sm:block" />

          {experience.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col sm:flex-row items-center ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Node */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-purple-500 items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.6)] z-10">
                  <Briefcase className="w-4 h-4 text-purple-300" />
                </div>

                {/* Content Card */}
                <div className="w-full sm:w-[calc(50%-2rem)]">
                  <div className="p-6 sm:p-7 rounded-2xl glass-card hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.2)] group">
                    
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {item.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.role}
                    </h3>
                    
                    <div className="flex items-center gap-3 text-sm text-cyan-400 font-medium mt-1 mb-4">
                      <span>{item.company}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 mb-5">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-0.5 rounded-md bg-white/5 text-slate-300 font-medium border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

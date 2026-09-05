import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Education & <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
            Solid foundation in Computer Science, software design principles, algorithms, and web engineering.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-3 rounded-full" />
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          {education.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl glass-card border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 relative overflow-hidden group shadow-[0_0_30px_rgba(124,58,237,0.15)]"
            >
              {/* Top Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-cyan-400 text-sm font-semibold mt-0.5">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Grade / Honor Pill */}
              {item.grade && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-5">
                  <Award className="w-4 h-4" />
                  <span>{item.grade}</span>
                </div>
              )}

              {/* Bullet Details */}
              <div className="space-y-3 pt-3 border-t border-white/10">
                {item.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <BookOpen className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

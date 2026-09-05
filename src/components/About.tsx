import React from 'react';
import { FolderCheck, Code2, Smile, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const statIcons: Record<string, React.ReactNode> = {
    FolderCheck: <FolderCheck className="w-5 h-5 text-purple-400" />,
    Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
    Smile: <Smile className="w-5 h-5 text-pink-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />
  };

  const highlights = [
    "Translating complex Figma/UI designs into responsive, production-ready code",
    "Writing clean, modular, and maintainable TypeScript & React components",
    "Obsessed with performance, accessibility, smooth animations, and UX micro-details",
    "Continuous learner adapting to the cutting-edge of the React & Next.js ecosystem"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            Discover
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Profile Portrait (styled exactly as reference photo with rounded gradient borders) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group max-w-xs sm:max-w-sm w-full">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-400 rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-2xl overflow-hidden glass-card border border-white/10 p-2 shadow-2xl">
                <img
                  src="/avartar.png"
                  alt={personal.name}
                  className="w-full h-80 sm:h-96 object-cover object-top rounded-xl transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-xl flex flex-col justify-end p-5">
                  <span className="text-white font-bold text-lg">{personal.name}</span>
                  <span className="text-purple-300 text-sm font-medium">Frontend Developer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio & Highlights & Stats */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Passionate about crafting impactful web experiences
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {personal.fullBio}
              </p>
            </div>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Cards (matching reference bottom metrics) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              {personal.stats.slice(0, 3).map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl glass-card hover:border-purple-500/40 transition-all duration-300 flex items-center gap-3.5 group"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 group-hover:bg-purple-500/20 transition-colors">
                    {statIcons[stat.icon]}
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

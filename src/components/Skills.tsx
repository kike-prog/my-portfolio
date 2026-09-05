import React from 'react';
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
  CheckCircle2,
  Code2,
  Wrench,
  Rocket
} from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string, color: string) => {
    const props = { className: "w-4 h-4 flex-shrink-0", style: { color } };
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

  const skillGroups = [
    {
      title: "Frontend Core",
      icon: <Code2 className="w-5 h-5 text-purple-400" />,
      tagline: "Core web languages & frameworks",
      skills: [
        { name: "React", level: "Advanced", icon: "Atom", color: "#61DAFB" },
        { name: "Next.js", level: "Advanced", icon: "Flame", color: "#ffffff" },
        { name: "TypeScript", level: "Advanced", icon: "FileCode2", color: "#3178C6" },
        { name: "JavaScript (ES6+)", level: "Advanced", icon: "Braces", color: "#F7DF1E" },
      ]
    },
    {
      title: "Styling & UI",
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      tagline: "Responsive design & animations",
      skills: [
        { name: "Tailwind CSS", level: "Expert", icon: "Palette", color: "#38BDF8" },
        { name: "CSS3 & Animations", level: "Expert", icon: "Sparkles", color: "#38BDF8" },
        { name: "HTML5 & Semantic UI", level: "Expert", icon: "Globe", color: "#E34F26" },
        { name: "React Native", level: "Intermediate", icon: "Smartphone", color: "#61DAFB" },
      ]
    },
    {
      title: "Tools & Workflow",
      icon: <Wrench className="w-5 h-5 text-indigo-400" />,
      tagline: "Version control & editors",
      skills: [
        { name: "Git & Version Control", level: "Advanced", icon: "GitBranch", color: "#F05032" },
        { name: "GitHub Collaboration", level: "Advanced", icon: "Github", color: "#ffffff" },
        { name: "VS Code & Debugging", level: "Expert", icon: "Terminal", color: "#007ACC" },
        { name: "Figma to Pixel-Code", level: "Advanced", icon: "Layers", color: "#F24E1E" },
      ]
    },
    {
      title: "Build & Performance",
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
      tagline: "Toolchains & deployments",
      skills: [
        { name: "Vite Bundler & HMR", level: "Advanced", icon: "Zap", color: "#646CFF" },
        { name: "Vercel & Netlify CI/CD", level: "Advanced", icon: "Cloud", color: "#00f2fe" },
        { name: "Responsive & Mobile UI", level: "Expert", icon: "Smartphone", color: "#a855f7" },
        { name: "Clean Architecture", level: "Advanced", icon: "Atom", color: "#34d399" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-14 sm:py-16 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            Technical <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-1.5">
            Core technologies and tools I utilize to craft performant, responsive web applications.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-2.5 rounded-full" />
        </div>

        {/* 4 In a Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {skillGroups.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="p-5 rounded-2xl glass-card hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-white/10 mb-3.5">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {group.title}
                    </h3>
                    <span className="text-[11px] text-slate-400">
                      {group.tagline}
                    </span>
                  </div>
                </div>

                {/* Skills Inside Category */}
                <div className="space-y-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {getIcon(skill.icon, skill.color)}
                        <span className="text-xs font-semibold text-slate-200 truncate">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 whitespace-nowrap ml-2">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Ready Badge */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Production Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

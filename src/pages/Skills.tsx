import { motion } from "framer-motion";
import { Layers, Monitor, Server, Palette } from "lucide-react";

export default function Skills() {
  const categories = [
    { 
      name: "Web Design & UX", 
      icon: <Layers size={14} className="text-neutral-400" />,
      skills: [ { n: "Figma", p: 60 }, { n: "Prototypage UI", p: 80 }, { n: "Wordpress", p: 85 } ] 
    },
    { 
      name: "Dev Front-End", 
      icon: <Monitor size={14} className="text-neutral-400" />,
      skills: [ { n: "HTML / CSS", p: 90 }, { n: "JavaScript", p: 40 }, { n: "React.js", p: 55 }, { n: "three.js", p: 40 }, { n: "tailwind.css", p: 60 } ] 
    },
    { 
      name: "Dev Back-End", 
      icon: <Server size={14} className="text-neutral-400" />,
      skills: [ { n: "SQL", p: 65 }, { n: "PHP", p: 55 } ] 
    },
    { 
      name: "Design Graphique", 
      icon: <Palette size={14} className="text-neutral-400" />,
      skills: [ { n: "Photoshop (Compositing)", p: 80 }, { n: "After Effects (Motion)", p: 70 }, { n: "Premiere Pro (Montage)", p: 60 } ] 
    }
  ];

  return (
    <div className="md:col-span-12 md:row-span-4 grid grid-cols-1 md:grid-cols-2 gap-4 h-full overflow-y-auto pr-2 custom-scrollbar pb-4">
      {categories.map((cat, idx) => (
        <div key={idx} className="panel-border p-8 flex flex-col justify-between group hover:border-white/20 transition-colors bg-white/[0.01]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              {cat.icon}
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 group-hover:text-blue-400 transition-colors">{cat.name}</h3>
            </div>
            
            <div className="space-y-6">
              {cat.skills.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span className="text-white">{skill.n}</span>
                    <span className="text-neutral-500 font-mono">{skill.p}%</span>
                  </div>
                  {/* Jauge d'instrument */}
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.p}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-white group-hover:bg-blue-400 transition-colors"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <span className="text-[9px] font-mono text-neutral-600 mt-6">// Auto-évaluation basée sur les compétences MMI</span>
        </div>
      ))}
    </div>
  );
}
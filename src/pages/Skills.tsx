import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function Skills() {
  const categories = [
    { name: "Frontend Development", skills: [ { n: "React / TypeScript", p: 85 }, { n: "Tailwind CSS v4", p: 90 }, { n: "Next.js", p: 60 } ] },
    { name: "Backend & Infra", skills: [ { n: "Node.js / Express", p: 75 }, { n: "SQL / PostgreSQL", p: 70 }, { n: "Docker / Git", p: 65 } ] }
  ];

  return (
    <div className="md:col-span-12 md:row-span-4 grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
      {categories.map((cat, idx) => (
        <div key={idx} className="panel-border p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Cpu size={14} className="text-neutral-400" />
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">{cat.name}</h3>
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
          <span className="text-[9px] font-mono text-neutral-600 mt-6">// Auto-évaluation basée sur les projets académiques</span>
        </div>
      ))}
    </div>
  );
}
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Palette, ExternalLink, ArrowUpRight } from "lucide-react";

export default function Projects() {
  // Onglet actif : 'web' ou 'design'
  const [activeTab, setActiveTab] = useState<"web" | "design">("web");

  const webProjects = [
    { slug: "Site vitrine", num: "01", title: "Refonte site vitrine entreprise H-A-VALEUR", tech: "PHP / HTML / CSS", desc: "Projet de refonte complète du site vitrine de l'entreprise H-A-VALEUR." },
    { slug: "3d-configurator", num: "02", title: "prochainement...", tech: "...", desc: ";;;;;;;;" },
    { slug: "secure-api", num: "03", title: "prochainement...", tech: "...", desc: ";;;;;;;;" },
  ];

  const graphicProjects = [
    { slug: "poster", num: "01", title: "Poster graphique", tech: "Photoshop", desc: "Création d'affiche type poster destiné à un joueur de football professionnel." },
    { slug: "motion-vfx", num: "02", title: "prochainement...", tech: "....", desc: "...." },
    { slug: "luxury-ui", num: "03", title: "prochainement...", tech: "....", desc: "...." },
  ];

  const currentProjects = activeTab === "web" ? webProjects : graphicProjects;

  return (
    <div className="md:col-span-12 md:row-span-4 flex flex-col gap-6 h-full overflow-hidden">
      
      {/* SÉLECTEUR D'ONGLETS TECHNIQUE */}
      <div className="flex gap-4 p-2 bg-white/5 border border-white/10 rounded-sm w-fit self-center md:self-start">
        <button
          onClick={() => setActiveTab("web")}
          className={`flex items-center gap-3 px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer rounded-sm ${
            activeTab === "web" ? "bg-white text-black" : "text-neutral-400 hover:text-white"
          }`}
        >
          <Code2 size={12} /> Code & Web Design
        </button>
        <button
          onClick={() => setActiveTab("design")}
          className={`flex items-center gap-3 px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer rounded-sm ${
            activeTab === "design" ? "bg-white text-black" : "text-neutral-400 hover:text-white"
          }`}
        >
          <Palette size={12} /> Design Graphique
        </button>
      </div>

      {/* GRILLE DE PROJETS DYNAMIQUE AVEC ANIMATION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 overflow-y-auto pr-2 custom-scrollbar pb-4">
        <AnimatePresence mode="wait">
          {currentProjects.map((project, i) => (
            <motion.div
              key={`${activeTab}-${i}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="panel-border p-8 flex flex-col justify-between group hover:border-white/20 min-h-[300px] md:min-h-0 bg-white/[0.01]"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[9px] font-bold text-neutral-500 tracking-widest">
                    // {activeTab === "web" ? "SYS.EXEC" : "ART.DIR"} // {project.num}
                  </span>
                  {activeTab === "web" ? (
                    <Code2 size={14} className="text-neutral-600 group-hover:text-white transition" />
                  ) : (
                    <Palette size={14} className="text-neutral-600 group-hover:text-white transition" />
                  )}
                </div>
                
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 text-white group-hover:text-blue-400 transition duration-300">
                  {project.title}
                </h3>
                
                <span className="inline-block text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded-sm mt-1">
                  {project.tech}
                </span>
                
                <p className="text-xs text-neutral-400 uppercase tracking-wide leading-relaxed mt-6 font-medium">
                  {project.desc}
                </p>
              </div>

              {/* Redirection dynamique vers la page d'étude détaillée */}
              <Link 
                to={`/projets/${project.slug}`}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white mt-8 transition-colors cursor-pointer w-fit"
              >
                {activeTab === "web" ? (
                  <>Détails techniques <ExternalLink size={12} /></>
                ) : (
                  <>Consulter <ArrowUpRight size={12} /></>
                )}
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
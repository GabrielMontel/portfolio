import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Palette, ExternalLink, ArrowUpRight } from "lucide-react";

export default function Projects() {
  // Onglet actif : 'web' ou 'design'
  const [activeTab, setActiveTab] = useState<"web" | "design">("web");

  const webProjects = [
    { 
      slug: "site-vitrine", // Corrigé (sans espace pour l'URL)
      num: "01", 
      title: "Refonte site vitrine entreprise H-A-VALEUR", 
      tech: "PHP / HTML / CSS", 
      desc: "Projet de refonte complète du site vitrine de l'entreprise H-A-VALEUR.",
      img: "/hav-1.png" // Place ton image dans le dossier public
    },
    { 
      slug: "site-dune-2", // Corrigé pour correspondre à ton composant de détails
      num: "02", 
      title: "Site prototype film Dune 2", 
      tech: "HTML / CSS / JavaScript", 
      desc: "Création d'un site prototype pour le film Dune 2 avec API Leaflet et AJAX.",
      img: "/site-dune.png"
    },
    { 
      slug: "site-cineclub", 
      num: "03", 
      title: "Site Ciné-Club du BUT MMI", 
      tech: "react / material-ui", 
      desc: "Creation d'un site pour participer au séance mise en place par le ciné-club du BUT MMI avec React et Material-UI.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600" 
    },
  ];

  const graphicProjects = [
    { 
      slug: "poster", 
      num: "01", 
      title: "Poster graphique", 
      tech: "Photoshop", 
      desc: "Création d'affiche type poster destiné aux réseaux sociaux.",
      img: "/poster-foot.jpg"
    },
    { 
      slug: "motion-vfx", 
      num: "02", 
      title: "prochainement...", 
      tech: "....", 
      desc: "Production d'effets visuels et de compositions vidéo.",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600"
    },
    { 
      slug: "luxury-ui", 
      num: "03", 
      title: "prochainement...", 
      tech: "....", 
      desc: "Conception d'interfaces graphiques haute fidélité.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600"
    },
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

      {/* GRILLE DE PROJETS DYNAMIQUE (TEXTE HAUT, IMAGE DESSOUS) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 overflow-y-auto pr-2 custom-scrollbar pb-4">
        <AnimatePresence mode="wait">
          {currentProjects.map((project, i) => (
            <motion.div
              key={`${activeTab}-${i}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="panel-border flex flex-col justify-between group hover:border-white/20 bg-white/[0.01] overflow-hidden"
            >
              {/* 1. ZONE DE TEXTE (HAUT) */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold text-neutral-500 tracking-widest">
                    // {activeTab === "web" ? "SYS.EXEC" : "ART.DIR"} // {project.num}
                  </span>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-sm">
                    {project.tech}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-black uppercase tracking-tighter text-white group-hover:text-blue-400 transition duration-300 min-h-[56px] line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 uppercase tracking-wide leading-relaxed font-medium line-clamp-2 h-8">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* 2. ENCADRÉ VISUEL DE PRÉSENTATION (MILIEU) */}
              <div className="px-6 md:px-8 pointer-events-none">
                <div className="w-full aspect-[16/10] overflow-hidden panel-border bg-black/40 relative">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.03] transition-all duration-500 ease-out"
                    onError={(e) => {
                      // Si l'image n'est pas trouvée, met un fond neutre stylisé
                      e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600";
                    }}
                  />
                  <div className="absolute bottom-2 right-2 text-[8px] font-mono text-white/20 tracking-widest uppercase">
                    preview_sys
                  </div>
                </div>
              </div>

              {/* 3. NAVIGATION (BAS) */}
              <div className="p-6 md:p-8 pt-4">
                <Link 
                  to={`/projets/${project.slug}`}
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors cursor-pointer w-fit"
                >
                  {activeTab === "web" ? (
                    <>Détails techniques <ExternalLink size={12} /></>
                  ) : (
                    <>Consulter <ArrowUpRight size={12} /></>
                  )}
                </Link>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
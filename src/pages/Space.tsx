import { User, Code, Layout, Target } from "lucide-react";

export default function Space() {
  return (
    <div className="md:col-span-12 md:row-span-4 panel-border p-8 md:p-12 flex flex-col justify-between h-full bg-black text-white">
      {/* SECTION HAUTE : Entête et Grosse Bio */}
      <div className="max-w-4xl space-y-8">
        <div className="flex items-center gap-3">
          <User size={14} className="text-neutral-400" />
          <span className="tech-label text-neutral-400">Présentation // Gabriel Montel</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
          Développeur Web Front-End de cœur.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {/* Grosse colonne de texte principal */}
          <div className="md:col-span-2 space-y-4 text-sm text-neutral-400 uppercase tracking-wide leading-relaxed font-medium">
            <p>
              Actuellement en deuxième année de BUT MMI (Métiers du Multimédia et de l'Internet), j'ai centré mon profil sur l'ingénierie front-end et l'architecture back-end. Je ne me contente pas d'intégrer des maquettes ; je conçois des systèmes scalables, fluides et optimisés.
            </p>
            <p>
              Mon approche est dictée par la performance brute et l'esthétique minimaliste. Passionné par les architectures modernes comme React et Vite, j'aime structurer des interfaces techniques au pixel près, tout en gardant une logique back-end rigoureuse et sécurisée pour propulser les données.
            </p>
          </div>

          {/* Colonne latérale focus technique */}
          <div className="border-l border-white/10 pl-6 space-y-4">
            <div>
              <div className="flex items-center gap-2 text-neutral-400 mb-1">
                <Code size={12} />
                <span className="text-[10px] uppercase tracking-widest font-bold">Language de preference</span>
              </div>
              <p className="text-xs font-mono text-white">HTML, CSS, Tailwind CSS</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-neutral-400 mb-1">
                <Layout size={12} />
                <span className="text-[10px] uppercase tracking-widest font-bold">Philosophie</span>
              </div>
              <p className="text-xs font-mono text-white">Design épuré, Performance, Clean Code</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-neutral-400 mb-1">
                <Target size={12} />
                <span className="text-[10px] uppercase tracking-widest font-bold">Focus Actuel</span>
              </div>
              <p className="text-xs font-mono text-white">React.js / three.js</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* SECTION BASSE : Les Métadonnées du Parcours */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 border-t border-white/10 pt-8 mt-12">
        <div>
          <span className="tech-label text-neutral-500">01 / Parcours</span>
          <p className="text-xs text-white uppercase font-bold mt-2">BUT MMI — 2ème année</p>
          <span className="text-[10px] text-neutral-500 font-mono">IUT Université de Bourgogne</span>
        </div>
        <div>
          <span className="tech-label text-neutral-500">02 / Spécialisation</span>
          <p className="text-xs text-white uppercase font-bold mt-2">Développement Web Avancé</p>
          <span className="text-[10px] text-neutral-500 font-mono">Front-End & Architecture Back</span>
        </div>
        <div>
          <span className="tech-label text-neutral-500">03 / Disponibilité</span>
          <p className="text-xs text-white uppercase font-bold mt-2">Rythme Alternance</p>
          <span className="text-[10px] text-neutral-500 font-mono">Dès Septembre 2026</span>
        </div>
        <div>
          <span className="tech-label text-neutral-500">04 / Status</span>
          <p className="text-xs text-white uppercase font-bold mt-2 animate-pulse">En recherche active</p>
          <span className="text-[10px] text-neutral-400 font-mono">[Open to work]</span>
        </div>
      </div>
    </div>
  );
}
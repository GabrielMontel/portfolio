import { User } from "lucide-react";

export default function Space() {
  return (
    <div className="md:col-span-12 md:row-span-4 panel-border p-8 md:p-12 flex flex-col justify-between h-full">
      <div className="max-w-3xl space-y-6">
        <div className="flex items-center gap-3">
          <User size={14} className="text-neutral-400" />
          <span className="tech-label text-neutral-400">Curriculum Vitae</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
          Gabriel Montel — Étudiant en développement web & designer d'interfaces.
        </h2>
        <p className="text-sm text-neutral-400 uppercase tracking-wide leading-relaxed font-medium">
          Actuellement en formation supérieure, je combine la rigueur du code moderne avec une sensibilité graphique pointue. Mon objectif est d'intégrer une équipe créative en alternance pour concevoir des produits digitaux optimisés et immersifs.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8 mt-6">
        <div>
          <span className="tech-label">Parcours</span>
          <p className="text-xs text-white uppercase font-bold mt-2">BUT Metiers du Multimedias et l'Internet</p>
        </div>
        <div>
          <span className="tech-label">Spécialisation</span>
          <p className="text-xs text-white uppercase font-bold mt-2">Applications Web & UX/UI Design</p>
        </div>
        <div>
          <span className="tech-label">Recherche</span>
          <p className="text-xs text-blue-400 uppercase font-bold mt-2 animate-pulse">Alternance dès Septembre</p>
        </div>
      </div>
    </div>
  );
}
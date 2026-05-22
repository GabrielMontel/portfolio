import { Mail, Phone, FileText, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="md:col-span-12 md:row-span-4 grid grid-cols-1 md:grid-cols-12 gap-4 h-full">
      {/* Colonne infos */}
      <div className="md:col-span-4 panel-border p-8 flex flex-col justify-between">
        <div className="space-y-6">
          <span className="tech-label text-white/40">Terminal Connexion</span>
          <h2 className="text-3xl font-black uppercase tracking-tighter">Let's build <br /> together.</h2>
        </div>
        
        <div className="space-y-4 text-xs font-bold uppercase tracking-widest text-neutral-400">
          <a href="mailto:gab@example.com" className="flex items-center gap-3 hover:text-white transition"><Mail size={14} /> montelgabriel@yahoo.com</a>
          <div className="flex items-center gap-3"><Phone size={14} /> +33 7 84 69 40 95</div>
          <a href="#" className="flex items-center gap-3 hover:text-white transition text-blue-400"><FileText size={14} /> Télécharger mon CV (PDF)</a>
        </div>
      </div>

      {/* Colonne Formulaire */}
      <form className="md:col-span-8 panel-border p-8 flex flex-col justify-between gap-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div className="flex flex-col gap-2">
            <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">Nom Complet</label>
            <input type="text" className="bg-white/5 border border-white/10 p-3 text-xs uppercase tracking-wider text-white focus:outline-none focus:border-white/30 rounded" placeholder="John Doe" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">Adresse Mail</label>
            <input type="email" className="bg-white/5 border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-white/30 rounded" placeholder="john@example.com" />
          </div>
        </div>
        
        <div className="flex flex-col gap-2 w-full flex-1">
          <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">Votre Message</label>
          <textarea className="bg-white/5 border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-white/30 rounded w-full flex-1 min-h-[100px] resize-none" placeholder="Décrivez votre projet ou offre d'alternance..." />
        </div>

        <button type="submit" className="w-full bg-white text-black p-4 text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-2 hover:bg-neutral-200 transition cursor-pointer rounded-sm">
          Envoyer <Send size={12} />
        </button>
      </form>
    </div>
  );
}
import { Mail, Phone, FileText, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="md:col-span-12 md:row-span-4 grid grid-cols-1 md:grid-cols-12 gap-4 h-full">
      {/* Colonne infos */}
      <div className="md:col-span-4 panel-border p-8 flex flex-col justify-between gap-8 bg-white/70">
        <div className="space-y-6">
          <span className="tech-label text-neutral-400">me contacter</span>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-neutral-950">Rencontrons <br /> nous.</h2>
        </div>
        
        <div className="space-y-4 text-xs font-bold uppercase tracking-widest text-neutral-600">
          <a href="mailto:montelgabriel@yahoo.com" className="flex items-center gap-3 hover:text-neutral-950 transition">
            <Mail size={14} /> montelgabriel@yahoo.com
          </a>
          <div className="flex items-center gap-3">
            <Phone size={14} /> +33 7 84 69 40 95
          </div>
          <a href="https://www.linkedin.com/in/gabriel-montel-824b65358/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-700 transition text-blue-600 cursor-pointer">
            <FileText size={14} /> Mon Linkedin
          </a>
        </div>
      </div>

      {/* Colonne Formulaire reliée à ton Formspree */}
      <form 
        action="https://formspree.io/f/mwvzrggy" 
        method="POST" 
        className="md:col-span-8 panel-border p-8 flex flex-col justify-between gap-6 bg-white/70"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div className="flex flex-col gap-2">
            <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">Nom Complet</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="bg-black/[0.03] border border-black/10 p-3 text-xs uppercase tracking-wider text-neutral-900 focus:outline-none focus:border-black/30 focus:bg-white rounded transition placeholder:text-neutral-400" 
              placeholder="John Doe" 
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">Adresse Mail</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="bg-black/[0.03] border border-black/10 p-3 text-xs text-neutral-900 focus:outline-none focus:border-black/30 focus:bg-white rounded transition placeholder:text-neutral-400" 
              placeholder="john@example.com" 
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2 w-full flex-1">
          <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">Votre Message</label>
          <textarea 
            name="message" 
            required 
            className="bg-black/[0.03] border border-black/10 p-3 text-xs text-neutral-900 focus:outline-none focus:border-black/30 focus:bg-white rounded w-full flex-1 min-h-[100px] resize-none transition placeholder:text-neutral-400" 
            placeholder="Décrivez votre projet ou offre d'alternance..." 
          />
        </div>

        <button type="submit" className="w-full bg-neutral-950 text-white p-4 text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-2 hover:bg-neutral-800 transition cursor-pointer rounded-sm">
          Envoyer <Send size={12} />
        </button>
      </form>
    </div>
  );
}
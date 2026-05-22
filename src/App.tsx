import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, MoveRight, MousePointer2 } from "lucide-react";
// 1. AJOUTE CET IMPORT EN HAUT AVEC LES AUTRES PAGES :
import ProjectDetail from "./pages/ProjectDetail";

// Import de tes pages
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Space from "./pages/Space";
import Contact from "./pages/Contact";

// Composant pour la page d'accueil (Home)
function Home() {
  return (
    <>
      {/* VISUEL PRINCIPAL - ESPACE & TERRE */}
      <section className="md:col-span-8 md:row-span-4 panel-border p-8 md:p-12 relative overflow-hidden group min-h-[50vh] md:min-h-0 flex flex-col justify-end">
        
        {/* REPRODUCTION VIDÉO DE LA TERRE */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:scale-105 transition-transform duration-[3s]"
        >
          <source src="/earth.mp4" type="video/mp4" />
          {/* Fallback image au cas où la vidéo met du temps à charger */}
          <img src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070" alt="Espace" />
        </video>

        {/* GRADIENT PLUS DISCRET POUR LAISSER APPARAÎTRE LA TERRE */}
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 pointer-events-none" />
        
        {/* TEXTE UNIQUE ET NAVIGATION */}
        <div className="relative z-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-6"
          >
            Gabriel <br /> Montel.
          </motion.h2>
          <Link to="/projets" className="inline-flex items-center gap-4 tech-label text-white hover:gap-8 transition-all cursor-pointer">
            VOIR MES PROJETS <MoveRight size={14} />
          </Link>
        </div>
      </section>

      {/* SIDEBAR TECHNIQUE */}
      <aside className="md:col-span-4 md:row-span-4 panel-border p-8 md:p-10 flex flex-col justify-between gap-8">
        <div className="space-y-8">
          <div>
            <span className="tech-label text-white/40">Description</span>
            <p className="text-sm mt-3 text-neutral-400 leading-relaxed uppercase tracking-wider font-medium">
              Etudiant en deuxieme année BUT Métiers du Multimedia et de l'Internet 
            </p>
          </div>
          <div className="h-px bg-white/10 w-full" />
          <div>
            <span className="tech-label">Competences Principales</span>
            <ul className="text-[10px] mt-4 space-y-2 uppercase font-bold tracking-widest text-neutral-500">
              <li>- Developpement web</li>
              <li>- Design Graphique</li>
              <li>- Communication</li>
            </ul>
          </div>
        </div>
        
        <Link to="/contact" className="p-6 bg-white/5 border border-white/10 rounded flex items-center justify-between group cursor-pointer hover:bg-white/10 transition">
          <span className="tech-label text-white">Me Contacter</span>
          <MousePointer2 size={16} className="group-hover:rotate-12 transition" />
        </Link>
      </aside>
    </>
  );
}

// COMPOSANT PRINCIPAL (CHEF D'ORCHESTRE)
export default function App() {
  return (
    <Router>
      <main className="min-h-screen w-full p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-4 box-border bg-[#050505]">
        
        {/* HEADER & NAV */}
        <header className="md:col-span-12 panel-border p-6 flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:rotate-12 transition">
              <Zap size={16} className="text-black fill-black" />
            </div>
            <h1 className="text-base font-black uppercase tracking-tighter text-white">Gabriel Montel / Portfolio</h1>
          </Link>
          
          <div className="flex items-center gap-6 md:gap-10">
            <nav className="flex gap-4 md:gap-8 tech-label">
              <Link to="/projets" className="hover:text-white transition">Projects</Link>
              <Link to="/competences" className="hover:text-white transition">Skills</Link>
              <Link to="/space" className="hover:text-white transition">About</Link>
              <Link to="/contact" className="hover:text-white transition">Contact</Link>
            </nav>

            {/* BOUTON CV UNIQUE ET VISIBLE */}
            <a 
              href="./CV.pdf" // Mets ton fichier PDF dans le dossier "public" de ton projet
              download
              className="hidden sm:flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] bg-white text-black px-4 py-2 rounded-sm border border-white hover:bg-transparent hover:text-white transition-all duration-300 cursor-pointer"
            >
              <span>CV.PDF</span>
              <span className="opacity-60 group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
          </div>
        </header>

        


<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/projets" element={<Projects />} />
  <Route path="/projets/:projectSlug" element={<ProjectDetail />} /> {/* <--- NOUVELLE ROUTE DYNAMIQUE */}
  <Route path="/competences" element={<Skills />} />
  <Route path="/space" element={<Space />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

        {/* FOOTER METRICS */}
        <footer className="md:col-span-12 panel-border p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center h-auto md:h-20">
          <div className="flex flex-col gap-1 border-l border-white/10 pl-6">
            <span className="tech-label text-[8px] opacity-40">Environment</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Production Mode</span>
          </div>
          <div className="flex flex-col gap-1 border-l border-white/10 pl-6">
            <span className="tech-label text-[8px] opacity-40">Localisation</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Dijon, FR</span>
          </div>
          <div className="flex flex-col gap-1 border-l border-white/10 pl-6">
            <span className="tech-label text-[8px] opacity-40">Disponibilité</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-green-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> En recherche d'alternance
            </span>
          </div>
          <a 
              href="./CV.pdf" // Mets ton fichier PDF dans le dossier "public" de ton projet
              download
              className="hidden sm:flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] bg-white text-black px-4 py-2 rounded-sm border border-white hover:bg-transparent hover:text-white transition-all duration-300 cursor-pointer"
            >
              <span>CV.PDF</span>
              <span className="opacity-60 group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
        </footer>

      </main>
    </Router>
  );
}
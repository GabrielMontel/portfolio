import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, MoveRight, MousePointer2 } from "lucide-react";

// Import de tes pages
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Space from "./pages/Space";
import Contact from "./pages/Contact";

// Composant pour la page d'accueil (Home)
function Home() {
  return (
    <>
      {/* VISUEL PRINCIPAL - ESPACE & TERRE */}
      <motion.section 
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.85, delay: 0.05 }}
        className="md:col-span-8 md:row-span-4 panel-border p-6 md:p-12 relative overflow-hidden group min-h-[40vh] md:min-h-0 flex flex-col justify-end bg-white/70"
      >
        
        {/* REPRODUCTION VIDÉO DE LA TERRE */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.8] opacity-35 group-hover:opacity-50 group-hover:scale-105 transition-all duration-[3s]"
        >
          <source src="/earth.mp4" type="video/mp4" />
          <img src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070" alt="Espace" />
        </video>

        {/* GRADIENT PLUS DISCRET POUR LAISSER APPARAÎTRE LA TERRE */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5f5f7]/95 via-[#f5f5f7]/40 to-transparent z-10 pointer-events-none" />
        
        {/* TEXTE UNIQUE ET NAVIGATION */}
        <div className="relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 22, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 240, damping: 20, delay: 0.22 }}
            className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-6 text-neutral-950"
          >
            Gabriel <br /> Montel.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/projets" className="inline-flex items-center gap-4 tech-label text-neutral-900 hover:gap-8 transition-all cursor-pointer">
              VOIR MES PROJETS <MoveRight size={14} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* SIDEBAR TECHNIQUE */}
      <motion.aside 
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.85, delay: 0.16 }}
        className="md:col-span-4 md:row-span-4 panel-border p-6 md:p-10 flex flex-col justify-between gap-6 md:gap-8 bg-white/70"
      >
        <div className="space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="tech-label text-neutral-400">Description</span>
            <p className="text-xs md:text-sm mt-3 text-neutral-600 leading-relaxed uppercase tracking-wider font-medium">
              Etudiant en deuxieme année BUT Métiers du Multimedia et de l'Internet 
            </p>
          </motion.div>
          <div className="h-px bg-black/10 w-full" />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="tech-label text-neutral-400">Competences Principales</span>
            <ul className="text-[9px] md:text-[10px] mt-4 space-y-2 uppercase font-bold tracking-widest text-neutral-600">
              <li>- Developpement web</li>
              <li>- Design Graphique</li>
              <li>- Communication sur les réseaux sociaux</li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 280, damping: 18, delay: 0.44 }}
        >
          <Link to="/contact" className="p-4 md:p-6 bg-black/[0.03] border border-black/10 rounded flex items-center justify-between group cursor-pointer hover:bg-black/5 hover:border-black/20 transition">
            <span className="tech-label text-neutral-900">Me Contacter</span>
            <MousePointer2 size={16} className="group-hover:rotate-12 transition text-neutral-900" />
          </Link>
        </motion.div>
      </motion.aside>
    </>
  );
}

// COMPOSANT PRINCIPAL (CHEF D'ORCHESTRE)
export default function App() {
  return (
    <Router>
      {/* Passage en flex-direction colonne sur mobile et grille uniquement sur écran d'ordinateur (md+) */}
      <main className="min-h-screen w-full p-4 md:p-6 flex flex-col md:grid md:grid-cols-12 md:grid-rows-6 gap-4 box-border bg-[#f5f5f7]">
        
        {/* HEADER & NAV */}
        <motion.header 
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
          className="panel-border p-4 md:p-6 flex flex-col sm:flex-row justify-between items-center gap-4 h-auto md:h-20 md:col-span-12 bg-white/70"
        >
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-8 h-8 bg-neutral-950 rounded-full flex items-center justify-center group-hover:rotate-12 transition">
              <Zap size={16} className="text-white fill-white" />
            </div>
            <h1 className="text-base font-black uppercase tracking-tighter text-neutral-950">Gabriel Montel / Portfolio</h1>
          </Link>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10">
            <nav className="flex gap-4 md:gap-8 tech-label text-xs md:text-sm text-neutral-500">
              <Link to="/projets" className="hover:text-neutral-950 transition">Projects</Link>
              <Link to="/competences" className="hover:text-neutral-950 transition">Skills</Link>
              <Link to="/space" className="hover:text-neutral-950 transition">About</Link>
              <Link to="/contact" className="hover:text-neutral-950 transition">Contact</Link>
            </nav>

            {/* BOUTON CV UNIQUE EN HAUT (Masqué sur tout petit écran, visible via le footer) */}
            <a 
              href="./CV.pdf"
              download
              className="hidden sm:flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] bg-neutral-950 text-white px-4 py-2 rounded-sm border border-neutral-950 hover:bg-transparent hover:text-neutral-950 transition-all duration-300 cursor-pointer"
            >
              <span>CV.PDF</span>
              <span className="opacity-60">↓</span>
            </a>
          </div>
        </motion.header>

        {/* ZONE DE CONTENU DYNAMIQUE */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/projets/:projectSlug" element={<ProjectDetail />} />
          <Route path="/competences" element={<Skills />} />
          <Route path="/space" element={<Space />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* FOOTER METRICS RESPONSIVE */}
        <motion.footer 
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 240, damping: 22, delay: 0.2 }}
          className="panel-border p-4 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 items-center h-auto md:h-20 md:col-span-12 bg-white/70"
        >
          <div className="flex flex-col gap-1 border-l border-black/10 pl-4 md:pl-6">
            <span className="tech-label text-[8px] opacity-70">Environnement</span>
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-blue-600">IUT Dijon</span>
          </div>
          <div className="flex flex-col gap-1 border-l border-black/10 pl-4 md:pl-6">
            <span className="tech-label text-[8px] opacity-70">Localisation</span>
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-neutral-950">Dijon, FR</span>
          </div>
          <div className="flex flex-col gap-1 border-l border-black/10 pl-4 md:pl-6">
            <span className="tech-label text-[8px] opacity-70">Disponibilité</span>
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-emerald-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> En stage à partir de janvier 2027
            </span>
          </div>
          {/* Le bouton de téléchargement prend une place complète sur mobile pour rester accessible */}
          <div className="col-span-2 md:col-span-1 flex md:justify-end">
            <a 
              href="./CV.pdf"
              download
              className="flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] bg-neutral-950 text-white px-4 py-2.5 rounded-sm border border-neutral-950 hover:bg-transparent hover:text-neutral-950 transition-all duration-300 cursor-pointer w-full md:w-auto"
            >
              <span>TELECHARGER MON CV</span>
              <span>↓</span>
            </a>
          </div>
        </motion.footer>

      </main>
    </Router>
  );
}
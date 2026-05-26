import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Shield, Image, ClipboardList, Sparkles, ExternalLink } from "lucide-react";

const ALL_PROJECTS_DATA: Record<string, {
  title: string;
  tech: string;
  context: string;
  role: string;
  details: string;
  images?: string[];
  skillsUsed: string[];
  skillsAcquired: string[];
  outcome: string;
  website?: string;
}> = {
  // --- ONGLETS CODE & WEB DESIGN ---
  "Site vitrine": {
    title: "Refonte site vitrine H-A-VALEUR",
    tech: "PHP / HTML / CSS",
    context: "STAGE entreprise — Semestre 3",
    role: "Développeur Fullstack",
    details: "Conception d'une architecture MVC complète. Refonte complete du design du site. Integration d'une liste de stock de composant de l'entreprise.",
    images: ["/project-images/ecommerce-1.jpg", "/project-images/ecommerce-2.jpg"],
    skillsUsed: ["PHP", "HTML", "CSS"],
    skillsAcquired: ["Architecture MVC", "Sécurité backend", "Stratégie de design", "Gestion de base de données"],
    outcome: "Site vitrine fonctionnelle avec design moderne et administration backend robuste.",
    website: "https://h-a-valeur.fr"
  },
  "Site prototype film Dune 2": {
    title: "Site prototype film Dune 2",
    tech: "HTML / CSS / JavaScript",
    context: "Projet scolaire MMI — Semestre 3",
    role: "Développeur Front-End",
    details: "Conception d'un site immersif pour la campagne promotionnelle du film Dune 2. Intégration d'un flux vidéo externe (YouTube/Dailymotion), structure asymétrique complexe en CSS Grid, développement de carrousels interactifs (manuels et automatisés), intégration de l'API de cartographie Leaflet pour la géolocalisation des cinémas, et génération dynamique d'un casting interactif via des requêtes asynchrones AJAX.",
    images: ["/site-dune.png", "/site-dune-2.png"],
    skillsUsed: ["HTML5", "CSS3 / Grid", "JavaScript (Vanilla)", "Leaflet API", "AJAX"],
    skillsAcquired: [
      "Manipulation dynamique du DOM",
      "Intégration et manipulation d'API tierces (Cartographie)",
      "Gestion des requêtes asynchrones (Fetch / AJAX)",
      "Conception d'interfaces interactives (Carrousels)"
    ],
    outcome: "Un prototype de plateforme multimédia fluide et responsive, combinant interactivité asynchrone et données géographiques, parfaitement adapté pour une campagne de marketing digital événementiel."
  },
  "secure-api": {
    title: "Secure Studio API",
    tech: "TypeScript / Express / Docker",
    context: "Projet de spécialisation réseau",
    role: "Ingénieur DevOps Junior",
    details: "Création d'une infrastructure d'API microservices conteneurisée. Implémentation de politiques de Rate Limiting strictes, chiffrement des données sensibles via bcrypt, et mise en place de scripts de déploiement automatique.",
    images: ["/project-images/secure-api-1.jpg"],
    skillsUsed: ["TypeScript", "Express", "Docker", "Sécurité", "CI/CD"],
    skillsAcquired: ["Containerisation", "Sécurité des API", "Déploiement automatisé", "Monitoring"],
    outcome: "API sécurisée prête pour la production, avec contrôle d'accès renforcé et documentation d'usage claire."
  },

  // --- ONGLETS DESIGN GRAPHIQUE ---
  "poster": {
    title: "Poster graphique",
    tech: "Photoshop",
    context: "Création Graphique / Sport",
    role: "Designer Graphique",
    details: "Conception d'une affiche type poster destiné à des joueurs de football professionnel. Travail approfondi sur le traitement de l'image, le découpage des calques, la colorimétrie dynamique (grading), et l'intégration d'effets de lumière texturés.",
    images: ["/affiche_1.png", "/affiche_2.jpg", "/affiche_3.png", "/affiche_4.png", "/affiche_5.jpg", "/affiche_6.jpg"],
    skillsUsed: ["Photoshop", "Retouche photo", "Colorimétrie", "Composition"],
    skillsAcquired: ["Branding visuel", "Maîtrise des calques", "Effets premium"],
    outcome: "Affiche graphique prête à l'impression et à la communication digitale sur les reseaux sociaux."
  },
  "motion-vfx": {
    title: "KINETIC Motion Poster",
    tech: "After Effects",
    context: "Animation & Contenu Digital",
    role: "Motion Designer",
    details: "Animation cinétique de logotypes d'entreprises et intégration d'effets visuels (VFX). Gestion des courbes d'accélération pour un rendu ultra-fluide et incrustation de textures 3D pour des déclinaisons de formats de communication vidéo.",
    images: ["/project-images/motion-vfx-1.jpg"],
    skillsUsed: ["After Effects", "Motion design", "VFX", "Storyboarding"],
    skillsAcquired: ["Timing animé", "Transitions dynamiques", "Effets vidéo"],
    outcome: "Séquence motion prête pour diffusion digitale, avec un style visuel fort et dynamique."
  },
  "luxury-ui": {
    title: "Luxury Real Estate UI",
    tech: "Figma / Component System",
    context: "Projet d'interface UX/UI",
    role: "UI/UX Product Designer",
    details: "Création d'un Design System complet sur Figma (variantes de boutons, auto-layouts complexes, design tokens). Maquettage haute fidélité axé sur un parcours utilisateur épuré, pensé pour une clientèle exigeante du secteur immobilier de luxe.",
    images: ["/project-images/luxury-ui-1.jpg", "/project-images/luxury-ui-2.jpg"],
    skillsUsed: ["Figma", "Design System", "UX research", "Prototypage"],
    skillsAcquired: ["Maquettage haute fidélité", "Organisation de composants", "Expérience utilisateur premium"],
    outcome: "Prototype UI cohérent et modulable, prêt à être transmis à un développeur front-end."
  }
};

export default function ProjectDetail() {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openImage = (src: string) => setActiveImage(src);
  const closeImage = () => setActiveImage(null);

  // Récupération des données du projet ou fallback si le slug n'existe pas
  const project = projectSlug ? ALL_PROJECTS_DATA[projectSlug] : null;

  if (!project) {
    return (
      <div className="md:col-span-12 md:row-span-4 panel-border p-12 text-center flex flex-col justify-center items-center gap-4">
        <p className="tech-label text-red-400">Error 404 // Stack Trace Empty</p>
        <Link to="/projets" className="text-xs underline uppercase font-bold tracking-widest text-neutral-400 hover:text-white">Retour à l'inventaire</Link>
      </div>
    );
  }

  return (
    <div className="md:col-span-12 md:row-span-4 grid grid-cols-1 md:grid-cols-12 gap-4 h-full overflow-y-auto pr-2 custom-scrollbar">
      <div className="md:col-span-4 panel-border p-8 flex flex-col justify-between gap-12 bg-white/[0.01]">
        <div className="space-y-6">
          <Link to="/projets" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition mb-4">
            <ArrowLeft size={12} /> Retour
          </Link>
          <span className="tech-label block text-white/30">{project.context}</span>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white">{project.title}</h2>
          <span className="inline-block text-[10px] font-mono text-neutral-400 bg-white/5 border border-white/5 px-2 py-1 rounded-sm">
            {project.tech}
          </span>
        </div>

        <div className="space-y-6 border-t border-white/10 pt-6">
          <div>
            <span className="tech-label block">Rôle assigné</span>
            <p className="text-xs uppercase text-white font-bold tracking-wide">{project.role}</p>
          </div>

          <div>
            <span className="tech-label block">Compétences utilisées</span>
            <ul className="grid grid-cols-2 gap-2 mt-3 text-[10px] uppercase tracking-[0.12em] text-neutral-400">
              {project.skillsUsed.map((skill) => (
                <li key={skill} className="bg-white/5 border border-white/5 px-2 py-1 rounded-sm">{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <span className="tech-label block">Compétences acquises</span>
            <ul className="space-y-2 mt-3 text-xs text-neutral-300">
              {project.skillsAcquired.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <Sparkles size={14} className="opacity-40" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="md:col-span-8 panel-border p-8 md:p-12 flex flex-col gap-10 bg-white/[0.01]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 opacity-40">
            <Image size={12} />
            <span className="tech-label text-[8px]">Visuels du projet</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.images && project.images.length > 0 ? (
              project.images.map((imageSrc) => (
                <div
                  key={imageSrc}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm cursor-pointer"
                  onClick={() => openImage(imageSrc)}
                >
                  <img
                    src={imageSrc}
                    alt={`${project.title} visuel`}
                    className="h-48 w-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              ))
            ) : (
              <div className="col-span-full rounded-3xl border border-dashed border-white/10 bg-white/5 p-8 text-center text-sm text-neutral-400">
                Aucune image renseignée pour ce projet. Ajoute des captures d'écran ou mockups dans <code className="text-xs text-white/80">/public/project-images/</code>.
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2 opacity-40">
            <Shield size={12} />
            <span className="tech-label text-[8px]">Documentation technique</span>
          </div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">// Analyse du projet & méthodologie</h3>
          <p className="text-sm text-neutral-300 leading-relaxed font-medium">{project.details}</p>
        </div>

        <div className="grid gap-6 border-t border-white/10 pt-6">
          <div className="space-y-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">Résultat</h4>
            <p className="text-sm text-neutral-300 leading-relaxed">{project.outcome}</p>
          </div>

          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-white text-black p-4 text-[10px] font-black uppercase tracking-[0.2em] rounded-sm hover:bg-neutral-200 transition"
            >
              <ExternalLink size={14} /> Voir le site vitrine
            </a>
          )}
          <Link
            to="/projets"
            className="inline-flex items-center justify-center gap-2 w-full bg-white text-black p-4 text-[10px] font-black uppercase tracking-[0.2em] rounded-sm hover:bg-neutral-200 transition"
          >
            <ClipboardList size={14} /> Retour aux projets
          </Link>
        </div>
      </div>
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={closeImage}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={closeImage}
              className="absolute right-0 top-0 rounded-full bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white/20"
            >
              Fermer
            </button>
            <img
              src={activeImage}
              alt="Visuel projet agrandi"
              className="max-h-[90vh] w-auto max-w-full rounded-3xl border border-white/10 object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
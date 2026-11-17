import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Shield, Image, ClipboardList, Sparkles, ExternalLink, CheckCircle2, Layers } from "lucide-react";

const ALL_PROJECTS_DATA: Record<string, {
  title: string;
  tech: string;
  context: string;
  role: string;
  details: string;
  features?: string[];
  images?: string[];
  skillsUsed: string[];
  skillsAcquired: string[];
  outcome: string;
  website?: string;
}> = {
  // --- ONGLETS CODE & WEB DESIGN ---
  "site-vitrine": {
    title: "Refonte site vitrine H-A-VALEUR",
    tech: "PHP (POO & MVC) / HTML5 / CSS3 / MySQL / SEO",
    context: "Stage en entreprise — 10 semaines (BUT MMI S3)",
    role: "Développeur Fullstack (Architecture, intégration & SEO)",
    details: "Dans le cadre de mon stage de deuxième année de BUT MMI, j'ai pris en charge la refonte intégrale du site vitrine de l'entreprise H-A-VALEUR, spécialisée dans les équipements électroniques et composants industriels.\n\nL'enjeu majeur était de moderniser une présence web devenue obsolète afin de véhiculer une image de marque industrielle haut de gamme, d'optimiser le référencement naturel sur les moteurs de recherche et de clarifier la présentation du catalogue technique.\n\nJ'ai conçu et déployé une architecture MVC (Modèle-Vue-Contrôleur) sur-mesure en PHP natif sans framework lourd, garantissant une séparation stricte des responsabilités, une grande maintenabilité et des temps de chargement ultra-rapides. Côté interface, j'ai réalisé une intégration responsive accessible et fluide (HTML5 sémantique, CSS Grid & Flexbox), complétée par un module dynamique de consultation des stocks et un formulaire de contact sécurisé.",
    features: [
      "Architecture MVC modulaire en PHP natif garantissant rapidité d'exécution et maintenabilité.",
      "Interface 100% responsive et ergonomique conçue pour le parcours d'achat B2B.",
      "Module dynamique de consultation du catalogue et de vérification des stocks.",
      "Formulaire de demande de devis personnalisé avec validation sécurisée (PDO / requêtes préparées).",
      "Optimisation SEO complète (balisage Schema.org, Open Graph, Core Web Vitals)."
    ],
    images: ["/hav-1.png", "/hav-2.png", "/hav-3.png"],
    skillsUsed: ["PHP (POO & MVC)", "MySQL / PDO", "HTML5 sémantique", "CSS3 / Grid & Flexbox", "Audit & Optimisation SEO", "Sécurisation formulaires"],
    skillsAcquired: [
      "Conception et déploiement d'une architecture MVC complète de A à Z",
      "Modélisation et requêtage optimisé sur base relationnelle MySQL",
      "Amélioration mesurable du score SEO et des Core Web Vitals Google",
      "Gestion directe de la relation client et recueil du besoin métier"
    ],
    outcome: "Mise en production d'un site vitrine sur-mesure, rapide et sécurisé. La refonte a permis d'accroître significativement le trafic organique, de valoriser l'expertise industrielle de l'entreprise et de générer de nouveaux contacts commerciaux entrants.",
    website: "https://h-a-valeur.fr"
  },
  "site-dune-2": {
    title: "Site prototype film Dune 2",
    tech: "HTML5 / CSS3 Grid / JavaScript (Vanilla) / Leaflet API / AJAX",
    context: "Projet universitaire MMI — Développement Front & Multimédia (S3)",
    role: "Développeur Front-End & Intégrateur multimédia",
    details: "Conception d'une plateforme web promotionnelle immersive pour la sortie en salles du blockbuster de science-fiction « Dune : Deuxième Partie ».\n\nL'objectif de ce projet était de conjuguer une narration visuelle forte avec des exigences techniques front-end pointues, en immergeant l'utilisateur dans l'atmosphère du film sans rechargement de page.\n\nLe site repose sur une composition asymétrique sous CSS Grid, intégrant des arrière-plans vidéo plein écran et des effets sonores interactifs. Afin d'assurer une réactivité optimale et une parfaite maîtrise du code, l'ensemble des fonctionnalités interactives a été programmé en JavaScript Vanilla sans dépendance externe superflue.\n\nJ'ai notamment intégré l'API de cartographie Leaflet pour permettre aux internautes de géolocaliser les salles diffusant le film à proximité, et mis en place des requêtes asynchrones (AJAX / Fetch) pour charger dynamiquement les fiches des personnages, synopsis et contenus médias.",
    features: [
      "Direction artistique immersive avec intégration vidéo plein écran et design asymétrique.",
      "Cartographie interactive Leaflet.js personnalisée avec géolocalisation des cinémas partenaires.",
      "Carrousels et visionneuses d'images interactifs programmés sur-mesure en Vanilla JS.",
      "Chargement asynchrone des fiches casting et médias via Fetch API / AJAX.",
      "Système d'onglets dynamiques et micro-animations fluides cadencées en CSS3."
    ],
    images: ["/site-dune.png", "/site-dune-2.png"],
    skillsUsed: ["JavaScript ES6+ (Vanilla)", "CSS Grid & Flexbox avancé", "Leaflet.js & Géolocalisation", "Requêtes Fetch / AJAX", "Intégration Vidéo & Audio", "Responsive Web Design"],
    skillsAcquired: [
      "Maîtrise approfondie de la manipulation dynamique du DOM sans framework",
      "Connexion et personnalisation poussée d'une API cartographique tierce",
      "Gestion des flux asynchrones, des promesses JS et du parsing JSON",
      "Optimisation du rendu graphique sur des interfaces riches en assets multimédias"
    ],
    outcome: "Un prototype événementiel hautement immersif et techniquement complet, démontrant la capacité à développer des interfaces créatives complexes, fluides et interactives conformes aux standards de l'industrie du divertissement."
  },
  "site-cineclub": {
    title: "Site Ciné-Club du BUT MMI",
    tech: "React.js / Material-UI (MUI) / JavaScript ES6+ / SPA",
    context: "Projet tuteuré MMI — Application Web Communautaire (S4)",
    role: "Développeur Front-End React & Responsable UX/UI",
    details: "Création et déploiement d'une application web monopage (SPA) pour le Ciné-Club du département MMI de Dijon, destinée à dynamiser la vie étudiante et automatiser la gestion des projections cinématographiques.\n\nLe projet répondait à une problématique réelle : remplacer les inscriptions papier, centraliser la programmation et engager les étudiants en leur permettant de choisir démocratiquement les films projetés via un système de vote interactif.\n\nL'application a été construite sous React.js avec une architecture modulaire basée sur des composants réutilisables et un état réactif. L'interface s'appuie sur le Design System Material-UI (MUI) pour garantir une ergonomie irréprochable, une accessibilité soignée et un affichage parfaitement fluide sur mobile comme sur desktop.\n\nL'application intègre un module de vote en direct avec mise à jour immédiate des résultats, un système de réservation de places avec jauge de capacité en temps réel, un espace d'avis/commentaires, ainsi qu'un back-office complet réservé aux organisateurs pour administrer les séances.",
    features: [
      "Architecture Single Page Application (SPA) réactive construite avec React.js.",
      "Système de vote participatif en temps réel permettant aux étudiants d'élire les films programmés.",
      "Module de réservation en ligne avec confirmation immédiate et jauge de places disponible.",
      "Fiches de films complètes intégrant bandes-annonces, synopsis et horaires de projection.",
      "Tableau de bord d'administration pour la planification des séances et la modération.",
      "Design System Material-UI (MUI) accessible et 100% optimisé pour smartphone."
    ],
    images: ["/accueil.png", "/film.png", "/vote.png", "/commentaires.png"],
    skillsUsed: ["React.js (Composants & Hooks)", "Material-UI (MUI)", "JavaScript ES6+", "State Management & Props", "Architecture SPA", "Ergonomie Mobile-First"],
    skillsAcquired: [
      "Conception et structuration d'une application React modulaire et scalable",
      "Personnalisation et déploiement d'un Design System UI professionnel",
      "Gestion d'interactions complexes (votes temps réel, formulaires, modération)",
      "Conduite de projet agile et itérations basées sur les retours d'utilisateurs réels"
    ],
    outcome: "Plateforme déployée et adoptée par la communauté étudiante de l'IUT. Le site a permis d'éliminer la gestion papier des inscriptions, de fluidifier l'organisation des projections et de doubler la participation étudiante grâce au vote interactif."
  },

  // --- ONGLETS DESIGN GRAPHIQUE ---
  "poster": {
    title: "Poster graphique",
    tech: "Photoshop",
    context: "Création Graphique / Sport",
    role: "Designer Graphique",
    details: "Conception d'une affiche type poster destiné à des joueurs de football professionnel. Travail approfondi sur le traitement de l'image, le découpage des calques, la colorimétrie dynamique (grading), et l'intégration d'effets de lumière texturés.",
    images: ["/affiche_1.png", "/affiche_2.jpg", "/affiche_3.png", "/affiche_5.jpg", "/affiche_6.jpg"],
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
      <div className="md:col-span-12 md:row-span-4 panel-border p-12 text-center flex flex-col justify-center items-center gap-4 bg-white/70">
        <p className="tech-label text-red-500">Error 404 // Stack Trace Empty</p>
        <Link to="/projets" className="text-xs underline uppercase font-bold tracking-widest text-neutral-500 hover:text-neutral-950">Retour à l'inventaire</Link>
      </div>
    );
  }

  return (
    <div className="md:col-span-12 md:row-span-4 grid grid-cols-1 md:grid-cols-12 gap-4 h-full overflow-y-auto pr-2 custom-scrollbar">
      <div className="md:col-span-4 panel-border p-8 flex flex-col justify-between gap-12 bg-white/70">
        <div className="space-y-6">
          <Link to="/projets" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-950 transition mb-4">
            <ArrowLeft size={12} /> Retour
          </Link>
          <span className="tech-label block text-neutral-400">{project.context}</span>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-neutral-950">{project.title}</h2>
          <span className="inline-block text-[10px] font-mono text-neutral-700 bg-black/5 border border-black/10 px-2 py-1 rounded-sm">
            {project.tech}
          </span>
        </div>

        <div className="space-y-6 border-t border-black/10 pt-6">
          <div>
            <span className="tech-label block text-neutral-500">Rôle assigné</span>
            <p className="text-xs uppercase text-neutral-900 font-bold tracking-wide">{project.role}</p>
          </div>

          <div>
            <span className="tech-label block text-neutral-500">Compétences utilisées</span>
            <ul className="grid grid-cols-2 gap-2 mt-3 text-[10px] uppercase tracking-[0.12em] text-neutral-700">
              {project.skillsUsed.map((skill) => (
                <li key={skill} className="bg-black/5 border border-black/10 px-2 py-1 rounded-sm">{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <span className="tech-label block text-neutral-500">Compétences acquises</span>
            <ul className="space-y-2 mt-3 text-xs text-neutral-700">
              {project.skillsAcquired.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <Sparkles size={14} className="opacity-50 text-neutral-500" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="md:col-span-8 panel-border p-8 md:p-12 flex flex-col gap-10 bg-white/70">
        <div className="space-y-6">
          <div className="flex items-center gap-2 opacity-60 text-neutral-500">
            <Image size={12} />
            <span className="tech-label text-[8px]">Visuels du projet</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.images && project.images.length > 0 ? (
              project.images.map((imageSrc) => (
                <div
                  key={imageSrc}
                  className="overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02] shadow-sm cursor-pointer"
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
              <div className="col-span-full rounded-3xl border border-dashed border-black/10 bg-black/[0.02] p-8 text-center text-sm text-neutral-500">
                Aucune image renseignée pour ce projet. Ajoute des captures d'écran ou mockups dans <code className="text-xs text-neutral-800">/public/project-images/</code>.
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2 opacity-60 text-neutral-500">
            <Shield size={12} />
            <span className="tech-label text-[8px]">Documentation technique</span>
          </div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">// Analyse du projet & démarche</h3>
          <div className="space-y-4">
            {project.details.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-sm text-neutral-700 leading-relaxed font-normal">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* FONCTIONNALITÉS CLÉS (Si présentes) */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-4 border-t border-black/10 pt-6">
            <div className="flex items-center gap-2 opacity-60 text-neutral-500">
              <Layers size={12} />
              <span className="tech-label text-[8px]">Architecture & Fonctionnalités</span>
            </div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">// Réalisations & points clés</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-sm border border-black/10 bg-black/[0.02] flex items-start gap-2.5">
                  <CheckCircle2 size={14} className="text-neutral-900 mt-0.5 shrink-0" />
                  <p className="text-xs text-neutral-700 leading-relaxed font-medium">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-6 border-t border-black/10 pt-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 opacity-60 text-neutral-500">
              <Sparkles size={12} />
              <span className="tech-label text-[8px]">Bilan & Impact</span>
            </div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">// Résultat obtenu</h4>
            <p className="text-sm text-neutral-700 leading-relaxed font-normal">{project.outcome}</p>
          </div>

          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-neutral-950 text-white p-4 text-[10px] font-black uppercase tracking-[0.2em] rounded-sm hover:bg-neutral-800 transition"
            >
              <ExternalLink size={14} /> Voir le site vitrine
            </a>
          )}
          <Link
            to="/projets"
            className="inline-flex items-center justify-center gap-2 w-full bg-neutral-950 text-white p-4 text-[10px] font-black uppercase tracking-[0.2em] rounded-sm hover:bg-neutral-800 transition"
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
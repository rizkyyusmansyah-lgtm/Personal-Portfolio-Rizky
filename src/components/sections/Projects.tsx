import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink, Github, X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

// ── Project Detail Modal ──────────────────────────────────────────────────────
const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  const { t } = useLanguage();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Modal box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="relative z-10 w-full max-w-3xl rounded-2xl overflow-hidden"
          style={{
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative w-full" style={{ height: "260px" }}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.7)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 40%, #111111 100%)",
              }}
            />
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors bg-black/60 border border-white/15 text-white backdrop-blur-md hover:bg-black/80"
            >
              <X className="w-4 h-4" />
            </button>
            {/* Category badge */}
            <span
              className="absolute top-4 left-4 text-xs font-mono px-3 py-1 rounded-full bg-red-600 text-white tracking-[0.08em]"
            >
              {project.category} · {project.year}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed mb-6 text-muted-foreground">
              {project.longDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md text-xs font-mono text-muted-foreground border border-foreground/10 bg-secondary/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-80 border border-foreground/10 bg-secondary/20 text-foreground"
                >
                  <Github className="w-4 h-4" />
                  {t.projects.sourceCode}
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-80 bg-red-600 text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.projects.liveDemo}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ── Featured (large) card – left ──────────────────────────────────────────────
const FeaturedCard = ({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -24 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    onClick={onClick}
    className="relative cursor-pointer group rounded-2xl overflow-hidden border border-foreground/10 h-[420px] bg-[#0d0d0d]"
  >
    {/* Background image */}
    <img
      src={project.image}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.55]"
    />

    {/* Gradient overlay */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
      }}
    />

    {/* Index */}
    <span
      className="absolute top-5 left-5 text-6xl font-bold leading-none select-none text-foreground/10 font-['Space_Grotesk']"
    >
      0{index + 1}
    </span>

    {/* Category badge */}
    <span
      className="absolute top-5 right-5 text-xs font-mono px-3 py-1 rounded-full bg-red-600 text-white tracking-[0.06em]"
    >
      {project.category}
    </span>

    {/* Bottom content */}
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <p
        className="text-xs font-mono mb-2 text-muted-foreground tracking-[0.12em]"
      >
        {project.year}
      </p>
      <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-red-500 transition-colors">
        {project.title}
      </h4>
      <p className="text-sm mb-4 line-clamp-2 text-muted-foreground">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 rounded-md text-xs font-mono text-muted-foreground border border-foreground/10 bg-secondary/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Hover arrow */}
    <div
      className="absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-red-600"
    >
      <ArrowUpRight className="w-5 h-5 text-foreground" />
    </div>
  </motion.div>
);

// ── Small card – right column list ───────────────────────────────────────────
const SmallCard = ({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, x: 24 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    onClick={onClick}
    className="group cursor-pointer flex gap-4 items-start rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5 border border-foreground/10 bg-secondary/10"
  >
    {/* Thumbnail */}
    <div
      className="flex-shrink-0 rounded-lg overflow-hidden w-[72px] h-[72px]"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-[0.7]"
      />
    </div>

    {/* Text */}
    <div className="flex-1 min-w-0">
      <div className="flex items-start justify-between gap-2 mb-1">
        <h5 className="text-sm font-bold text-foreground group-hover:text-red-500 transition-colors line-clamp-1">
          {project.title}
        </h5>
        <span className="text-[11px] font-medium text-muted-foreground tracking-wider">
          0{index + 2}
        </span>
      </div>
      <p className="text-xs mb-2 line-clamp-2 text-muted-foreground">
        {project.description}
      </p>
      <div className="flex gap-1.5 flex-wrap">
        {project.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <ArrowUpRight
      className="flex-shrink-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5 text-red-600"
    />
  </motion.div>
);

// ── Main Section ──────────────────────────────────────────────────────────────
export const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [featuredIdx, setFeaturedIdx] = useState(0);

  const featured = projects[featuredIdx];
  const sideProjects = projects.filter((_, i) => i !== featuredIdx);

  const prev = () => setFeaturedIdx((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setFeaturedIdx((i) => (i + 1) % projects.length);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <h2
              className="text-xs font-mono tracking-[0.25em] mb-3 uppercase text-red-600"
            >
              {t.projects.tag}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground">
              {t.projects.title}
            </h3>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-mono text-muted-foreground">
              0{featuredIdx + 1} / 0{projects.length}
            </span>
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 border border-foreground/15 bg-secondary/20 text-foreground"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 bg-red-600 text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Grid: featured left + list right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Featured large card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
              >
                <FeaturedCard
                  project={featured}
                  index={featuredIdx}
                  onClick={() => setSelectedProject(featured)}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side list */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {sideProjects.map((p, i) => (
              <SmallCard
                key={p.id}
                project={p}
                index={i}
                onClick={() => setSelectedProject(p)}
              />
            ))}

            {/* View all hint */}
            <div
              className="mt-2 pt-4 text-center text-xs font-mono tracking-widest uppercase border-t border-foreground/10 text-muted-foreground/50"
            >
              {t.projects.viewDetail}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

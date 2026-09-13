import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';
import { Database, LineChart, Code2, Globe2, BrainCircuit } from "lucide-react";

// ── Tech icon map: name -> Simple Icons SVG path (filled, no viewBox needed)
// Using inline SVG with SimpleIcons paths via CDN img
const ICON_URL = (slug: string) =>
  `https://cdn.simpleicons.org/${slug}/ffffff`;

// ── Category data with icons ────────────────────────────────────────────────
const techCategories = [
  {
    title: "AI / Deep Learning",
    icon: <BrainCircuit className="w-5 h-5" />,
    color: "from-red-600 to-red-800",
    accent: "rgba(220,38,38,0.12)",
    skills: [
      { name: "PyTorch",     slug: "pytorch"    },
      { name: "scikit-learn",slug: "scikitlearn" },
      { name: "TensorFlow",  slug: "tensorflow" },
      { name: "Python",      slug: "python"     },
      { name: "Keras",       slug: "keras"      },
      { name: "NumPy",       slug: "numpy"      },
    ],
  },
  {
    title: "Data Science",
    icon: <Code2 className="w-5 h-5" />,
    color: "from-red-600 to-red-800",
    accent: "rgba(220,38,38,0.10)",
    skills: [
      { name: "Python",  slug: "python"  },
      { name: "Pandas",  slug: "pandas"  },
      { name: "NumPy",   slug: "numpy"   },
      { name: "Jupyter", slug: "jupyter" },
      { name: "Anaconda",slug: "anaconda"},
      { name: "SciPy",   slug: "scipy"   },
    ],
  },
  {
    title: "Data Visualization",
    icon: <LineChart className="w-5 h-5" />,
    color: "from-red-600 to-red-800",
    accent: "rgba(220,38,38,0.08)",
    skills: [
      { name: "Streamlit",slug: "streamlit"   },
      { name: "Plotly",   slug: "plotly"      },
      { name: "D3.js",    slug: "d3dotjs"     },
      { name: "Looker",   slug: "looker"      },
      { name: "Grafana",  slug: "grafana"     },
      { name: "Tableau",  slug: "tableau"     },
    ],
  },
  {
    title: "Geospatial",
    icon: <Globe2 className="w-5 h-5" />,
    color: "from-red-600 to-red-800",
    accent: "rgba(220,38,38,0.10)",
    skills: [
      { name: "Google Earth Engine", slug: "google"      },
      { name: "QGIS",               slug: "qgis"        },
      { name: "OpenStreetMap",       slug: "openstreetmap"},
      { name: "Leaflet",             slug: "leaflet"     },
      { name: "Mapbox",              slug: "mapbox"      },
      { name: "PostGIS",             slug: "postgresql"  },
    ],
  },
  {
    title: "Database",
    icon: <Database className="w-5 h-5" />,
    color: "from-red-600 to-red-800",
    accent: "rgba(220,38,38,0.08)",
    skills: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Supabase",   slug: "supabase"   },
      { name: "MySQL",      slug: "mysql"       },
      { name: "SQLite",     slug: "sqlite"      },
      { name: "Redis",      slug: "redis"       },
      { name: "MongoDB",    slug: "mongodb"     },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <Code2 className="w-5 h-5" />,
    color: "from-red-600 to-red-800",
    accent: "rgba(220,38,38,0.06)",
    skills: [
      { name: "GitHub",    slug: "github"    },
      { name: "Git",       slug: "git"       },
      { name: "VS Code",   slug: "visualstudiocode" },
      { name: "Docker",    slug: "docker"    },
      { name: "Linux",     slug: "linux"     },
      { name: "Kaggle",    slug: "kaggle"    },
    ],
  },
];

// ── Marquee strip ─────────────────────────────────────────────────────────────
const IconMarquee = ({
  skills,
  reverse = false,
}: {
  skills: { name: string; slug: string }[];
  reverse?: boolean;
}) => {
  // Duplicate 3x so loop is seamless
  const repeated = [...skills, ...skills, ...skills];

  return (
    <div
      style={{
        overflow:  "hidden",
        width:     "100%",
        maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <motion.div
        style={{ display: "flex", gap: "12px", width: "max-content" }}
        animate={{ x: reverse ? ["0%", "-33.33%"] : ["-33.33%", "0%"] }}
        transition={{
          repeat:   Infinity,
          ease:     "linear",
          duration: 18,
        }}
      >
        {repeated.map((skill, i) => (
          <div
            key={`${skill.slug}-${i}`}
            style={{
              display:       "flex",
              flexDirection: "column",
              alignItems:    "center",
              gap:           "6px",
              flexShrink:    0,
              width:         "60px",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width:        "44px",
                height:       "44px",
                borderRadius: "12px",
                background:   "rgba(255,255,255,0.06)",
                border:       "1px solid rgba(255,255,255,0.1)",
                display:      "flex",
                alignItems:   "center",
                justifyContent: "center",
                backdropFilter: "blur(4px)",
                flexShrink:   0,
              }}
            >
              <img
                src={ICON_URL(skill.slug)}
                alt={skill.name}
                width={24}
                height={24}
                style={{
                  objectFit:  "contain",
                  filter:     "brightness(1.1)",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
                onError={(e) => {
                  // fallback: show first letter
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            {/* Label */}
            <span
              style={{
                color:        "rgba(255,255,255,0.55)",
                fontSize:     "9px",
                textAlign:    "center",
                lineHeight:   1.2,
                maxWidth:     "60px",
                overflow:     "hidden",
                textOverflow: "ellipsis",
                whiteSpace:   "nowrap",
                fontFamily:   "Inter, sans-serif",
              }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ── Tilt card ──────────────────────────────────────────────────────────────────
const TiltCard = ({ category, index }: { category: typeof techCategories[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x   = useMotionValue(0);
  const y   = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useMotionTemplate`${ySpring}deg`;
  const rotateY = useMotionTemplate`${xSpring}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width  - 0.5) * 16);
    y.set(((e.clientY - rect.top)  / rect.height - 0.5) * -16);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="relative group w-full"
    >
      {/* Hover glow */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-40 blur transition duration-500`}
      />

      {/* Card body – fixed height so all cards are equal */}
      <div
        className="glass-card relative rounded-2xl overflow-hidden"
        style={{
          height:     "220px",
          background: `linear-gradient(135deg, ${category.accent} 0%, rgba(255,255,255,0.02) 100%)`,
          border:     "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-5 pt-5 pb-4"
          style={{ transform: "translateZ(20px)" }}
        >
          <div
            className={`p-2 rounded-xl bg-gradient-to-br ${category.color}`}
            style={{ opacity: 0.9 }}
          >
            {category.icon}
          </div>
          <h4 className="text-base font-bold text-white tracking-tight">
            {category.title}
          </h4>
        </div>

        {/* Divider */}
        <div
          style={{
            height:  "1px",
            margin:  "0 20px",
            background: "rgba(255,255,255,0.07)",
          }}
        />

        {/* Marquee icons */}
        <div className="px-0 pt-4 pb-3" style={{ transform: "translateZ(10px)" }}>
          <IconMarquee skills={category.skills} reverse={index % 2 === 1} />
        </div>
      </div>
    </motion.div>
  );
};

export const TechStack = () => {
  const { t } = useLanguage();
  return (
    <section id="tech" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono tracking-[0.2em] text-primary uppercase mb-3">
            {t.tech.tag}
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-white">
            {t.tech.title}
          </h3>
        </div>

        {/* Grid – 3 columns, all cards same height via fixed h on inner div */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techCategories.map((category, index) => (
            <TiltCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

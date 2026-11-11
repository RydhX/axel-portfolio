"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import DataPerformance from "@/components/DataPerformance";
import AirlearnCaseStudy from "@/components/AirlearnCaseStudy";

const brands = [
  { name: "Airlearn", src: "/brand_worked_with/airelearn.svg", spotlight: true },
  { name: "CodeWords", src: "/brand_worked_with/codewords.svg", spotlight: true },
  { name: "Echo-Me", src: "/brand_worked_with/echome.svg", spotlight: true },
  { name: "Applizy", src: "/brand_worked_with/applizy.svg", spotlight: true },
  { name: "Xelta.ai", src: "/brand_worked_with/xeltaai.webp", spotlight: true },
  { name: "Learnd.AI", src: "/brand_worked_with/learndai.svg", spotlight: true },
  { name: "Jarvey", src: "/brand_worked_with/jarvey.svg", spotlight: true },
  { name: "Blockwake", src: "/brand_worked_with/blockwake.svg", spotlight: false },
  { name: "Clipit", src: "/brand_worked_with/clipit.svg", spotlight: false },
  { name: "Exam Prepare", src: "/brand_worked_with/examprepare.svg", spotlight: false },
  { name: "Heftas", src: "/brand_worked_with/heftas.svg", spotlight: false },
  { name: "Kuliko", src: "/brand_worked_with/kuliko.svg", spotlight: false },
  { name: "Listimize", src: "/brand_worked_with/listimize.svg", spotlight: false },
  { name: "Maskwave", src: "/brand_worked_with/maskwave.svg", spotlight: false },
  { name: "Redline", src: "/brand_worked_with/redline.svg", spotlight: false },
  { name: "Thesisroom", src: "/brand_worked_with/thesisroom.svg", spotlight: false },
  { name: "Treoq", src: "/brand_worked_with/treoq.svg", spotlight: false },
];

const categories = [
  "All work",
  "AI & SaaS",
  "Apps & digital products",
  "Paid ads & performance",
  "Skits / POV storytelling",
  "Tutorials & walkthroughs",
  "Airlearn case study",
];

const projects = [
  {
    title: "AI product storytelling",
    brand: "AI & SaaS",
    category: "AI & SaaS",
    folder: "ai_and_saas",
    file: "achome(revisi) (1) (1).mp4",
    note: "Creator-led concept",
  },
  {
    title: "Language learning, made social",
    brand: "Learnd.AI",
    category: "AI & SaaS",
    folder: "ai_and_saas",
    file: "Copy of learnd 3.mp4",
    note: "App storytelling",
  },
  {
    title: "A creator-led AI product story",
    brand: "Learnd.AI",
    category: "AI & SaaS",
    folder: "ai_and_saas",
    file: "Copy of learnd ai 2.mp4",
    note: "AI product storytelling",
  },
  {
    title: "Study smarter with Thesisroom",
    brand: "Thesisroom",
    category: "Tutorials & walkthroughs",
    folder: "ai_and_saas",
    file: "Copy of THESISROOM 2.mp4",
    note: "Product walkthrough",
  },
  {
    title: "What your hobby says about you",
    brand: "Creator concept",
    category: "AI & SaaS",
    folder: "ai_and_saas",
    file: "Copy of what your hobby says about you (Musician Edition) (1).mp4",
    note: "Musician edition",
  },
  {
    title: "A clip that gets the conversation started",
    brand: "Creator concept",
    category: "Apps & digital products",
    folder: "apps_and_digital",
    file: "Comment “clip” and ill send you a link to this banger website 🤯reels editor editing aivideo.mp4",
    note: "App discovery",
  },
  {
    title: "App feature showcase",
    brand: "Creator portfolio",
    category: "Tutorials & walkthroughs",
    folder: "apps_and_digital",
    file: "Copy of IMG_1069.mp4",
    note: "Feature walkthrough",
  },
  {
    title: "Digital product in action",
    brand: "Creator portfolio",
    category: "Tutorials & walkthroughs",
    folder: "apps_and_digital",
    file: "Copy of IMG_9824.mp4",
    note: "Creator-led walkthrough",
  },
  {
    title: "A better way to make lists",
    brand: "Treoq",
    category: "Apps & digital products",
    folder: "apps_and_digital",
    file: "Copy of treoq 1.mp4",
    note: "Product storytelling",
  },
  {
    title: "Good, better, best",
    brand: "Creator concept",
    category: "Apps & digital products",
    folder: "apps_and_digital",
    file: "Copy of Video 9 - Good_ Better_ Best.mp4",
    note: "Social-first format",
  },
  {
    title: "Got roasted for being broke in Spanish",
    brand: "Airlearn",
    category: "Airlearn case study",
    folder: "case_study_airlearn",
    file: "got roasted for being broke in spanish 😭🥀 #airlearnpartner #airlearn #funny #spanish #air76640.mp4",
    note: "Comedy-led language learning",
  },
  {
    title: "Learning how to say “eggs” in Spanish",
    brand: "Airlearn",
    category: "Airlearn case study",
    folder: "case_study_airlearn",
    file: "learning how to say “eggs” in Spanish #airlearnpartner #learnspanish #air45127.mp4",
    note: "Language-learning skit",
  },
  {
    title: "My AI tutor caught my mistake",
    brand: "Airlearn",
    category: "Airlearn case study",
    folder: "case_study_airlearn",
    file: "My AI tutor caught me gluing a Thai politeness particle onto an English word and treating it as.mp4",
    note: "AI tutor product story",
  },
  {
    title: "A performance-led product ad",
    brand: "Creator campaign",
    category: "Paid ads & performance",
    folder: "paid_and_ads",
    file: "Copy of 1005 (3)-compressed.mp4",
    note: "Paid social creative",
  },
  {
    title: "Exam prep, made approachable",
    brand: "Exam Prepare",
    category: "Paid ads & performance",
    folder: "paid_and_ads",
    file: "Copy of examprepare 1 (1)-compressed.mp4",
    note: "Performance creative",
  },
  {
    title: "A Heftas product story",
    brand: "Heftas",
    category: "Paid ads & performance",
    folder: "paid_and_ads",
    file: "Copy of heftas (1) (1)-compressed.mp4",
    note: "Paid social creative",
  },
  {
    title: "Listimize, in a few seconds",
    brand: "Listimize",
    category: "Paid ads & performance",
    folder: "paid_and_ads",
    file: "Copy of listimize 1 (2)-compressed.mp4",
    note: "App performance ad",
  },
  {
    title: "Disgustingly easy",
    brand: "Creator concept",
    category: "Paid ads & performance",
    folder: "paid_and_ads",
    file: "Copy of Video 11 - Disgustingly Easy_ Part 3-compressed.mp4",
    note: "Hook-driven ad",
  },
  {
    title: "A day at the office",
    brand: "Creator concept",
    category: "Skits / POV storytelling",
    folder: "skits_pov_storytelling",
    file: "Copy of DA625D99-09B2-462D-A4C9-E868ED2E1411 (1)-compressed.mp4",
    note: "POV skit",
  },
  {
    title: "A relatable learning moment",
    brand: "Learnd.AI",
    category: "Skits / POV storytelling",
    folder: "skits_pov_storytelling",
    file: "Copy of learnd 2-compressed.mp4",
    note: "Education skit",
  },
  {
    title: "AI learning, with a twist",
    brand: "Learnd.AI",
    category: "Skits / POV storytelling",
    folder: "skits_pov_storytelling",
    file: "Copy of learnd ai 1-compressed.mp4",
    note: "AI-themed POV",
  },
  {
    title: "A quick creator-led story",
    brand: "Creator portfolio",
    category: "Skits / POV storytelling",
    folder: "skits_pov_storytelling",
    file: "Copy of video1 (1)-compressed.mp4",
    note: "Short-form storytelling",
  },
  {
    title: "Rules for thee, but not for me",
    brand: "Jarvey",
    category: "Skits / POV storytelling",
    folder: "skits_pov_storytelling",
    file: "rules for thee but not for me ahh boss 💀 #intern #office #reels #jarvey-compressed.mp4",
    note: "Workplace comedy",
  },
];

const reviews = [
  { brand: "Learnd.AI", src: "/testimonials/featured_1_learndai.png", featured: true },
  { brand: "Kuliko", src: "/testimonials/featured_2_kuliko.png", featured: true },
  { brand: "Blockwake", src: "/testimonials/featured_3_blockwake.png", featured: true },
  { brand: "Exam Prepare", src: "/testimonials/featured_4_examprepare.png", featured: true },
  { brand: "Thesisroom", src: "/testimonials/review_170_thesisroom.png", featured: false },
  { brand: "Exam Prepare", src: "/testimonials/review_171_examprepare.png", featured: false },
  { brand: "Treoq", src: "/testimonials/review_172_treoq.png", featured: false },
  { brand: "Kuliko", src: "/testimonials/review_173_kuliko.png", featured: false },
  { brand: "Maskwave", src: "/testimonials/review_174_maskwave.png", featured: false },
  { brand: "Heftas", src: "/testimonials/review_175h_heftas.png", featured: false },
  { brand: "Listimize", src: "/testimonials/review_175_listimize.png", featured: false },
  { brand: "Learnd.AI", src: "/testimonials/review_177_learndai.png", featured: false },
  { brand: "Blockwake", src: "/testimonials/review_178_blockwake.png", featured: false },
  { brand: "Lucius O.", src: "/testimonials/review_179_lucius_o.png", featured: false },
  { brand: "Blockwake", src: "/testimonials/review_180_blockwake.png", featured: false },
  { brand: "Applizy", src: "/testimonials/review_181_applizy.png", featured: false },
  { brand: "CodeWords", src: "/testimonials/review_182_codewords.png", featured: false },
];

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function PortfolioSections() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [visibleProjectCount, setVisibleProjectCount] = useState(4);
  const testimonialRailRef = useRef<HTMLDivElement>(null);
  const projectRailsRef = useRef(new Map<string, HTMLDivElement>());
  const reduceMotion = useReducedMotion();
  const activeProjects = activeCategory ? projects.filter((project) => project.category === activeCategory) : [];
  const visibleProjects = activeProjects.slice(0, visibleProjectCount);

  const scrollTestimonials = (direction: -1 | 1) => {
    const rail = testimonialRailRef.current;
    if (!rail) return;

    rail.scrollBy({
      left: direction * rail.clientWidth * 0.8,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  };

  const scrollProjectRail = (category: string, direction: -1 | 1) => {
    const rail = projectRailsRef.current.get(category);
    if (!rail) return;

    rail.scrollBy({
      left: direction * rail.clientWidth * 0.8,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  };

  return (
    <>
      <section id="brands" className="border-y border-gray-100 bg-paper px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Good company</p>
            <h2 className="mt-3 max-w-sm font-serif text-4xl leading-tight tracking-[-0.035em] text-ink md:text-5xl">
              Good stories start with good teams.
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-muted md:text-lg md:leading-8">
              Trusted by 15+ brands building the next generation of apps, AI, and digital products.
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-x-5 gap-y-5 sm:grid-cols-4 lg:gap-x-7 lg:gap-y-6">
            {brands.map((brand, index) => (
              <div key={brand.name} className={`flex h-16 items-center justify-center ${index < 8 ? "px-4 sm:px-5 lg:px-6" : ""}`}>
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={brand.name === "Learnd.AI" || brand.name === "Jarvey" ? 160 : brand.spotlight ? 200 : index >= 8 ? 140 : 120}
                  height={brand.name === "Learnd.AI" || brand.name === "Jarvey" ? 48 : brand.spotlight ? 60 : index >= 8 ? 42 : 36}
                  className={`${brand.name === "Airlearn" ? "mr-3" : brand.name === "CodeWords" ? "ml-3" : ""} ${brand.name === "Learnd.AI" || brand.name === "Jarvey" ? "h-10 max-w-[140px] md:h-12 md:max-w-[160px]" : brand.spotlight ? "h-12 max-w-[180px] md:h-14 md:max-w-[200px]" : index >= 8 ? "h-9 max-w-[140px]" : "h-6 max-w-[108px]"} max-w-full object-contain opacity-100 transition duration-300`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-paper px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Selected work</p>
              <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-[-0.04em] text-ink md:text-6xl">Stories built to stop the scroll.</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted">Clear ideas, creator-led storytelling, and a reason to keep watching.</p>
            </div>
            <span className="text-sm text-muted">{projects.length} videos across {categories.length - 1} formats</span>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.slice(1).map((category) => {
              const preview = projects.find((project) => project.category === category);
              const categoryCount = projects.filter((project) => project.category === category).length;
              if (!preview) return null;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleProjectCount(4);
                  }}
                  className={`group relative isolate aspect-[16/10] overflow-hidden rounded-3xl bg-gray-950 text-left shadow-soft ring-1 ring-black/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    activeCategory === category ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <video
                    src={`/portfolio_videos/${preview.folder}/${encodeURIComponent(preview.file)}`}
                    className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-hidden="true"
                  />
                  <span className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/20 to-black/10 transition-colors group-hover:from-black/80" />
                  <span className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-white">
                    <span className="font-serif text-2xl tracking-tight sm:text-3xl">{category}</span>
                    <span className="mt-2 text-xs font-medium text-white/75">
                      {categoryCount} {categoryCount === 1 ? "video" : "videos"} · Preview
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.section
                key={activeCategory}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25 }}
                className="mt-12"
                aria-label={`${activeCategory} videos`}
              >
                <div className="mb-4 flex items-center gap-3 border-t border-gray-200 pt-5">
                  <h3 className="shrink-0 font-serif text-xl tracking-tight text-ink sm:text-2xl">{activeCategory}</h3>
                  <span className="h-px flex-1 bg-gray-100" aria-hidden="true" />
                  <span className="shrink-0 text-xs text-muted">
                    {activeProjects.length} {activeProjects.length === 1 ? "video" : "videos"}
                  </span>
                  <div className="flex shrink-0 gap-1.5">
                    <button
                      type="button"
                      onClick={() => scrollProjectRail(activeCategory, -1)}
                      aria-label={`Scroll ${activeCategory} videos left`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-ink transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollProjectRail(activeCategory, 1)}
                      aria-label={`Scroll ${activeCategory} videos right`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-ink transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
                <div
                  ref={(element) => {
                    if (element) projectRailsRef.current.set(activeCategory, element);
                    else projectRailsRef.current.delete(activeCategory);
                  }}
                  className="portfolio-video-rail flex snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden pb-5 sm:gap-4"
                  aria-label={`${activeCategory} portfolio videos`}
                >
                  {visibleProjects.map((project) => (
                    <motion.article
                      key={project.title}
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.28 }}
                      className="group w-[min(78vw,280px)] shrink-0 snap-start overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-soft sm:w-[300px] lg:w-[320px]"
                    >
                      <div className="relative aspect-[9/16] overflow-hidden bg-gray-950">
                        <video
                          src={`/portfolio_videos/${project.folder}/${encodeURIComponent(project.file)}`}
                          className="h-full w-full object-contain"
                          controls
                          playsInline
                          preload="metadata"
                          aria-label={`${project.brand}: ${project.title}`}
                        />
                        <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/70 bg-white/90 px-2.5 py-1 text-[10px] font-medium text-ink backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex min-h-32 items-start justify-between gap-4 p-4 sm:p-5">
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-blue-600 sm:text-xs">{project.brand} <span className="px-1 text-gray-300">/</span> {project.note}</p>
                          <h4 className="mt-2 font-serif text-xl tracking-tight text-ink sm:text-2xl">{project.title}</h4>
                        </div>
                        <span className="mt-1 rounded-full border border-gray-200 p-2 text-muted transition group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-600">
                          <Play size={15} />
                        </span>
                      </div>
                    </motion.article>
                  ))}
                </div>
                {visibleProjectCount < activeProjects.length && (
                  <div className="mt-5 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setVisibleProjectCount((count) => count + 4)}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-ink shadow-soft transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      Show more videos
                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </section>

      <DataPerformance />

      <section id="about" className="overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Kind words</p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] text-ink md:text-5xl">Good work feels good.</h2>
            </div>
            <div className="flex items-center justify-between gap-5 sm:justify-end">
              <p className="max-w-sm text-sm leading-6 text-muted">A few notes from the teams behind the products.</p>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => scrollTestimonials(-1)}
                  aria-label="Scroll testimonials left"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-ink shadow-soft transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollTestimonials(1)}
                  aria-label="Scroll testimonials right"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-ink shadow-soft transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div ref={testimonialRailRef} className="testimonial-rail mt-8 overflow-x-auto overflow-y-hidden pb-10 pt-7">
          <div className="flex w-max items-center gap-4 px-6 md:gap-6 md:px-12">
            {reviews.map((review, index) => (
              <motion.figure
                key={review.src}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.025, 0.3) }}
                whileHover={{ scale: 1.08, y: -12, zIndex: 2 }}
                whileFocus={{ scale: 1.08, y: -12, zIndex: 2 }}
                className="w-[min(88vw,520px)] shrink-0 origin-center cursor-pointer rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.045)] transition-shadow hover:shadow-[0_22px_55px_rgb(17,24,39,0.16)] focus-within:ring-2 focus-within:ring-blue-400 sm:w-[560px] md:w-[620px] lg:w-[680px] md:p-5"
                tabIndex={0}
                aria-label={`${review.brand}${review.featured ? ", featured review" : " review"} ${index + 1} of ${reviews.length}`}
              >
                <div className="relative aspect-[2.35/1] overflow-hidden rounded-xl bg-[#FAFAFA]">
                  <Image
                    src={review.src}
                    alt={`${review.brand} client feedback${review.featured ? " (featured)" : ""}`}
                    fill
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 620px, 680px"
                    className="object-contain"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 px-1 pb-1 pt-3">
                  <span className="text-sm font-semibold text-ink">{review.brand}</span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-gray-400">
                    {review.featured ? "Featured note" : "Client note"}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <AirlearnCaseStudy />

      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-7 py-12 text-white md:px-14 md:py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Have a good product?</p>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.05] tracking-[-0.04em] md:text-6xl">
                Let&apos;s make people care
                <br />
                about it.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-gray-300">Tell me what you&apos;re building. I&apos;ll bring the storytelling.</p>
            </div>
            <a
              href="mailto:hello@axeldaniel.com"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-ink shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white hover:shadow-[0_12px_30px_rgb(59,130,246,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

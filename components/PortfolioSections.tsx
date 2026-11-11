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
  "Skits / POVs",
  "Tutorials",
];

const projects = [
  {
    title: "A new language, one scroll at a time",
    brand: "Airlearn",
    category: "AI & SaaS",
    src: "/portfolio_videos/airlearned.mp4",
    note: "Creator-led product storytelling",
  },
  {
    title: "A better way to make lists",
    brand: "Listimize",
    category: "Apps & digital products",
    src: "/portfolio_videos/listimize.mp4",
    note: "Product demo · social-first",
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
  const [activeCategory, setActiveCategory] = useState("All work");
  const testimonialRailRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const filteredProjects = projects.filter((project) => activeCategory === "All work" || project.category === activeCategory);

  const scrollTestimonials = (direction: -1 | 1) => {
    const rail = testimonialRailRef.current;
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
            <span className="text-sm text-muted">{filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}</span>
          </motion.div>

          <div className="mt-10 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filter portfolio by category">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-sm transition ${isActive ? "border-ink bg-ink text-white" : "border-gray-200 bg-white text-muted hover:border-gray-300 hover:text-ink"}`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <motion.div layout className="mt-7 grid gap-5 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.title}
                  layout
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.28 }}
                  className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-soft"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <video
                      src={project.src}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={`${project.brand}: ${project.title}`}
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-xs font-medium text-ink backdrop-blur">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 p-5 md:p-6">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.12em] text-blue-600">{project.brand} <span className="px-1 text-gray-300">/</span> {project.note}</p>
                      <h3 className="mt-2 font-serif text-2xl tracking-tight text-ink">{project.title}</h3>
                    </div>
                    <span className="mt-1 rounded-full border border-gray-200 p-2 text-muted transition group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-600">
                      <Play size={15} />
                    </span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
            {filteredProjects.length === 0 && (
              <div className="rounded-3xl border border-dashed border-gray-200 bg-white px-6 py-12 text-center md:col-span-2">
                <p className="font-serif text-2xl text-ink">More stories are in the edit.</p>
                <p className="mt-2 text-sm text-muted">Ask about this format and I&apos;ll share relevant work.</p>
                <a href="mailto:hello@axeldaniel.com" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                  Request examples <ArrowRight size={15} />
                </a>
              </div>
            )}
          </motion.div>
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

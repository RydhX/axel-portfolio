"use client";

import Image from "next/image";
import { ArrowUpRight, Eye, Timer, Video } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const proofImages = [
  {
    src: "/peformance_data/01_campaign_leaderboard.png",
    alt: "Airlearn creator leaderboard with campaign view results",
    label: "Campaign leaderboard",
  },
  {
    src: "/peformance_data/02_youtube_short_retention.png",
    alt: "Airlearn YouTube Short audience retention results",
    label: "Audience retention",
  },
  {
    src: "/peformance_data/01_watch_time_25s.png",
    alt: "Airlearn average view duration results",
    label: "Average view duration",
  },
];

const metrics = [
  {
    label: "Top video views",
    value: "771.4K",
    icon: Eye,
    description: "Organic views on one video",
  },
  {
    label: "Audience retention",
    value: "87.8%",
    icon: Video,
    description: "Viewers stayed with the story",
  },
  {
    label: "Average view duration",
    value: "25s",
    icon: Timer,
    description: "of a 28-second video",
  },
];

export default function AirlearnCaseStudy() {
  const reduceMotion = useReducedMotion();

  return (
    <>
    <section id="case-study" className="bg-paper px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">A closer look · Airlearn</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.04em] text-ink md:text-6xl">Make the product the story.</h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted">
              A creator-led content engine for a language-learning app: clear product moments, approachable hooks, and repeatable short-form storytelling.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-muted">75 campaign videos</span>
              <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-muted">Organic social</span>
            </div>
            <a href="mailto:hello@axeldaniel.com?subject=Airlearn%20case%20study" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink transition hover:text-blue-600">
              Discuss a similar campaign <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="rounded-[1.75rem] border border-gray-200/80 bg-white p-4 shadow-[0_20px_70px_rgb(17,24,39,0.07)] sm:p-6 md:rounded-[2rem] md:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">Campaign snapshot</p>
                <h3 className="mt-1 font-serif text-2xl tracking-tight text-ink md:text-3xl">Attention that adds up.</h3>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.article
                    key={metric.label}
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-2xl border border-gray-100 bg-[#FCFCFD] p-4 sm:p-5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold text-ink">{metric.label}</p>
                      <Icon size={15} className="shrink-0 text-blue-500" />
                    </div>
                    <p className="mt-4 font-serif text-[2rem] font-bold leading-none tracking-[-0.045em] text-ink md:text-[2.25rem]">{metric.value}</p>
                    <p className="mt-2 text-[11px] leading-4 text-gray-400">{metric.description}</p>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-2xl border border-gray-100 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-ink">Watch time, at a glance</p>
                    <p className="mt-1 text-xs text-muted">Average view duration per video</p>
                  </div>
                  <p className="shrink-0 font-serif text-lg text-ink">25<span className="text-sm text-muted"> / 28s</span></p>
                </div>
                <div className="mt-5 flex h-24 items-end gap-1.5 border-b border-gray-100 px-1 pb-1 sm:gap-2" role="img" aria-label="Animated bar chart showing an average view duration of 25 seconds out of 28 seconds">
                  {[34, 48, 41, 58, 52, 69, 61, 76, 67, 87, 73, 93, 82, 100].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: reduceMotion ? `${height}%` : "0%" }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.65, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
                      className={`min-w-0 flex-1 rounded-t-[3px] ${index === 13 ? "bg-blue-600" : "bg-blue-400"}`}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-gray-400"><span>0s</span><span>28s video length</span></div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5">
                <div className="relative grid h-[4.5rem] w-[4.5rem] shrink-0 place-items-center">
                  <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
                    <circle cx="32" cy="32" r="26" fill="none" stroke="#DBEAFE" strokeWidth="5" />
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="26"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeDasharray="163.36"
                      initial={reduceMotion ? { strokeDashoffset: 19.9 } : { strokeDashoffset: 163.36 }}
                      whileInView={{ strokeDashoffset: 19.9 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </svg>
                  <span className="text-[11px] font-semibold text-blue-700">87.8%</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Viewers stayed</p>
                  <p className="mt-1 text-xs leading-5 text-muted">Audience retention across the featured result.</p>
                </div>
              </div>
            </div>

            <div className="mt-7 border-t border-gray-100 pt-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">Campaign proof</p>
                <p className="text-[11px] text-gray-400">From the original analytics</p>
              </div>
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {proofImages.map((image, index) => (
                  <motion.figure
                    key={image.src}
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                    className="min-w-0"
                  >
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 30vw, 260px"
                        className="object-contain p-1 transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <figcaption className="mt-2 text-[10px] font-medium leading-4 text-muted sm:text-xs">{image.label}</figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

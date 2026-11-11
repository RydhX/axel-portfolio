"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, Play } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section id="top" className="relative overflow-hidden px-6 pb-20 pt-24 md:px-12 md:pb-28 md:pt-28">
        <div className="pointer-events-none absolute -right-36 top-8 h-[32rem] w-[32rem] rounded-full bg-blue-50/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <h1 className="max-w-3xl font-serif text-[clamp(3.5rem,8vw,7.25rem)] leading-[0.94] tracking-[-0.06em] text-ink">
              Making tech feel <em className="font-normal text-blue-600">simple.</em>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-muted md:text-xl">
              Short-form content for apps, SaaS, AI tools, and digital brands.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                View my work <ArrowRight size={16} />
              </a>
              <a
                href="mailto:hello@axeldaniel.com"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-sm font-medium text-ink transition hover:border-blue-200 hover:bg-blue-50"
              >
                Work with me
              </a>
            </div>
            <a href="#brands" className="mt-14 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-gray-400">
              Trusted by teams building what&apos;s next <ArrowDown size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[560px] lg:ml-auto"
          >
            <div className="relative aspect-[0.96] overflow-hidden rounded-[2rem] bg-[#eee9e4] shadow-card md:rounded-[2.5rem]">
              <Image
                src="/pict_axel/pict5.webp"
                alt="Axel Daniel, creator and storyteller for tech brands"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover object-[center_38%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/20 backdrop-blur-md">
                  <Play size={15} fill="currentColor" />
                </span>
                <span className="text-sm font-medium">Story first. Strategy always.</span>
              </div>
            </div>

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -7, 0], rotate: [0, 0.4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-5 top-[14%] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-card backdrop-blur-md sm:-left-12 sm:p-5"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">Organic reach</p>
              <p className="mt-1 font-serif text-3xl tracking-tight text-ink">1.1M<span className="text-blue-600">+</span></p>
              <p className="text-xs text-muted">views generated</p>
            </motion.div>
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute -right-3 bottom-[19%] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-card backdrop-blur-md sm:-right-8 sm:p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-semibold text-blue-600">+88%</span>
                <div>
                  <p className="text-sm font-semibold text-ink">Audience retention</p>
                  <p className="text-xs text-muted">Built to hold attention</p>
                </div>
              </div>
            </motion.div>
            <div className="absolute -bottom-5 left-[28%] h-10 w-10 rounded-full border border-blue-100 bg-blue-50/80" />
          </motion.div>
        </div>
      </section>
    </>
  );
}

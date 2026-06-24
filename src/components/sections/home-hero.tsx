"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { home } from "@/content/home";

export function HomeHero() {
  const reduce = useReducedMotion();
  const { hero } = home;

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.8,
        delay: reduce ? 0 : 0.15 + i * 0.12,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden sm:min-h-[92vh]">
      {/* Fond : dégradé noir profond + halo doré */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(80%_80%_at_70%_10%,rgba(197,162,83,0.16),transparent_55%),linear-gradient(180deg,#0a0a0b,#0a0a0b_60%,#111113)]"
      />
      {/* Lignes géométriques fines dorées */}
      <motion.svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-40"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: reduce ? 0.4 : 0.4 }}
        transition={{ duration: 1.4 }}
      >
        <defs>
          <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c5a253" stopOpacity="0" />
            <stop offset="50%" stopColor="#e2c987" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c5a253" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.line
          x1="0"
          y1="78%"
          x2="100%"
          y2="30%"
          stroke="url(#hero-line)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: reduce ? 1 : 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        <line
          x1="0"
          y1="92%"
          x2="100%"
          y2="55%"
          stroke="url(#hero-line)"
          strokeWidth="0.5"
        />
      </motion.svg>

      {/* Emblème officiel en filigrane — masque radial pour fondre les bords */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-6%] top-1/2 hidden -translate-y-1/2 lg:block"
        initial={{ opacity: 0, scale: reduce ? 1 : 0.92 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <Image
          src="/brand/emblem.jpg"
          alt=""
          width={560}
          height={560}
          priority
          className="[mask-image:radial-gradient(circle,black_52%,transparent_70%)] [-webkit-mask-image:radial-gradient(circle,black_52%,transparent_70%)]"
        />
      </motion.div>

      <Container className="relative py-14 sm:py-28">
        <motion.div custom={0} variants={item} initial="hidden" animate="visible">
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-or">
            <span aria-hidden className="h-px w-10 bg-or/60" />
            {hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={item}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-4xl text-balance text-5xl font-medium leading-[1.05] text-blanc sm:text-6xl md:text-7xl"
        >
          {hero.title}{" "}
          <span className="text-gold-gradient">{hero.titleAccent}</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={item}
          initial="hidden"
          animate="visible"
          className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-blanc/75"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          custom={3}
          variants={item}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href={hero.primaryCta.href} size="lg">
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="outline" size="lg">
            {hero.secondaryCta.label}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

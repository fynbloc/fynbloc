"use client";

import { motion, useInView } from "framer-motion";
import { Shield, UserCheck, Scale } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Shield,
    label: "Defined escrow logic",
  },
  {
    icon: UserCheck,
    label: "Verified participants",
  },
  {
    icon: Scale,
    label: "Transparent dispute systems",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Building() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 md:py-36 lg:py-44"
    >
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center md:gap-20">
          {/* Left — Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <motion.span
              variants={item}
              className="mb-4 inline-block text-xs font-medium tracking-widest uppercase text-primary"
            >
              Our Approach
            </motion.span>

            <motion.h2
              variants={item}
              className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl"
            >
              Building With{" "}
              <span className="text-primary">Intention</span>
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground"
            >
              India&apos;s crypto P2P market is growing.
              <br />
              We&apos;re building the structure behind it.
            </motion.p>

            <motion.ul
              variants={container}
              className="mt-8 flex flex-col gap-4"
            >
              {features.map((feature) => (
                <motion.li
                  key={feature.label}
                  variants={item}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/60">
                    <feature.icon className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground/90">
                    {feature.label}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              variants={item}
              className="mt-10 text-sm leading-relaxed text-muted-foreground/70"
            >
              Strong systems take time.
              <br />
              <span className="font-semibold text-primary">Fynbloc.</span>
            </motion.p>
          </motion.div>

          {/* Right — Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={
              isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }
            }
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <GlassCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GlassCard() {
  return (
    <motion.div
      whileHover={{ rotateY: 3, rotateX: -2, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative w-full max-w-sm"
      style={{ perspective: "1000px" }}
    >
      {/* Glow border */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/30 via-primary/10 to-transparent opacity-60 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

      {/* Pulsing outer glow */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-3 rounded-3xl bg-primary/5 blur-2xl"
      />

      {/* Card body */}
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-8 backdrop-blur-xl">
        {/* Subtle inner gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

        {/* Card content */}
        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Escrow Protocol
              </p>
              <p className="text-xs text-muted-foreground">Active</p>
            </div>
            <div className="ml-auto flex h-6 items-center rounded-full bg-primary/10 px-2.5">
              <span className="text-[10px] font-medium text-primary">
                Secured
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-border/40 bg-secondary/40 p-3">
              <span className="text-xs text-muted-foreground">Trade ID</span>
              <span className="font-mono text-xs text-foreground/80">
                #FYN-2026-0841
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border/40 bg-secondary/40 p-3">
              <span className="text-xs text-muted-foreground">Status</span>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-medium text-emerald-400">
                  In Escrow
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border/40 bg-secondary/40 p-3">
              <span className="text-xs text-muted-foreground">Amount</span>
              <span className="text-xs font-medium text-foreground/80">
                0.125 BTC
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border/40 bg-secondary/40 p-3">
              <span className="text-xs text-muted-foreground">Verification</span>
              <div className="flex items-center gap-1.5">
                <UserCheck className="h-3 w-3 text-primary" />
                <span className="text-xs font-medium text-primary">
                  Both Verified
                </span>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">
                Trade Progress
              </span>
              <span className="text-[10px] font-medium text-primary">75%</span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-[#FFB088]"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

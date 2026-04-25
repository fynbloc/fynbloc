"use client";

import { motion, useInView } from "framer-motion";
import { Code2, GitBranch, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Code2,
    label: "Clean, maintainable codebase",
  },
  {
    icon: GitBranch,
    label: "Agile sprints with regular delivery",
  },
  {
    icon: CheckCircle2,
    label: "Thorough testing and QA",
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
              className="mb-4 inline-block text-xs font-semibold tracking-widest uppercase text-[#FF835D]"
            >
              Our Approach
            </motion.span>

            <motion.h2
              variants={item}
              className="text-balance text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
            >
              Building With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF835D] to-[#FFB088]">
                Intention
              </span>
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-5 max-w-md text-[15px] leading-[1.7] text-[#707070]"
            >
              Technology shapes how businesses grow.
              <br />
              We build the products that power that growth.
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#FF835D]/20 bg-[#FF835D]/10">
                    <feature.icon className="h-4.5 w-4.5 text-[#FF835D]" />
                  </div>
                  <span className="text-sm font-medium text-white/80">
                    {feature.label}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              variants={item}
              className="mt-10 text-sm leading-relaxed text-[#555]"
            >
              Great software takes craft.
              <br />
              <span className="font-semibold text-[#FF835D]">Fynbloc Labs.</span>
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
  const tasks = [
    { label: "Requirements & Design", status: "done" },
    { label: "Development", status: "active" },
    { label: "QA & Testing", status: "pending" },
    { label: "Deployment", status: "pending" },
  ];

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
              <Code2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Sprint Delivery
              </p>
              <p className="text-xs text-muted-foreground">In Progress</p>
            </div>
            <div className="ml-auto flex h-6 items-center rounded-full bg-primary/10 px-2.5">
              <span className="text-[10px] font-medium text-primary">
                Active
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border border-border/40 bg-secondary/40 p-3">
              <span className="text-xs text-muted-foreground">Project ID</span>
              <span className="font-mono text-xs text-foreground/80">
                #FYN-2026-0112
              </span>
            </div>

            {tasks.map(({ label, status }) => (
              <div key={label} className="flex items-center justify-between rounded-lg border border-border/40 bg-secondary/40 p-3">
                <span className="text-xs text-muted-foreground">{label}</span>
                <div className="flex items-center gap-1.5">
                  {status === "done" && (
                    <>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span className="text-xs font-medium text-emerald-400">Done</span>
                    </>
                  )}
                  {status === "active" && (
                    <>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF835D]" />
                      <span className="text-xs font-medium text-[#FF835D]">In Progress</span>
                    </>
                  )}
                  {status === "pending" && (
                    <span className="text-xs font-medium text-muted-foreground">Pending</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">
                Sprint Progress
              </span>
              <span className="text-[10px] font-medium text-primary">50%</span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
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

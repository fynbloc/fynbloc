"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import EarlyAccessModal from "./early-access-modal";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -30, 0],
            scale: [1, 0.9, 1.05, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-primary/5 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 20, -30, 0],
            y: [0, -15, 25, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/4 h-[250px] w-[250px] rounded-full bg-[#FF835D]/8 blur-[80px]"
        />
      </div>

      {/* Grid lines background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#FF835D 1px, transparent 1px), linear-gradient(90deg, #FF835D 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-muted-foreground backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            India&apos;s P2P Crypto Infrastructure
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Powering India&apos;s Safe{" "}
          <span className="bg-gradient-to-r from-primary to-[#FFB088] bg-clip-text text-transparent">
            Crypto P2P
          </span>{" "}
          Ecosystem.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 text-lg font-medium tracking-wide text-muted-foreground md:text-xl"
        >
          Structured. Secure. Transparent.
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground/80"
        >
          Fynbloc is building a safety-first infrastructure for peer-to-peer
          crypto trading in India.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button className="group relative rounded-full border border-border bg-transparent px-7 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5">
            Launching Soon
          </button>
          <button
            onClick={() => setModalOpen(true)}
            className="group relative rounded-full bg-primary px-7 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(255,131,93,0.3)]"
          >
            <span className="relative z-10">Request Early Access</span>
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground/50">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 text-muted-foreground/40" />
        </motion.div>
      </motion.div>

      <EarlyAccessModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

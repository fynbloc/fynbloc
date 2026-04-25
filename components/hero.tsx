"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

const floatingBadges = [
  { label: "React", delay: 0 },
  { label: "Next.js", delay: 0.4 },
  { label: "Solidity", delay: 0.8 },
  { label: "Node.js", delay: 1.2 },
  { label: "AWS", delay: 0.2 },
  { label: "Web3", delay: 0.6 },
];

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-start lg:justify-center pt-[90px] md:pt-[100px] lg:pt-[90px] xl:pt-[100px] 2xl:pt-[130px] pb-[20px] lg:pb-[20px] xl:pb-[30px] 2xl:pb-[60px] min-h-screen w-full overflow-hidden bg-[#000000]">
      {/* Background patterned grid */}
      <div className="absolute inset-0 z-0 flex justify-center w-full h-full pointer-events-none">
        <Image
          src="/images/div.hero-background-pattern.png"
          alt="Hero Background"
          fill
          className="object-cover object-top opacity-100 mix-blend-screen"
          priority
        />
      </div>

      {/* Radial glow behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF835D]/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1240px] px-6 mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-[80px]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-[650px]"
        >
          {/* Top Badge */}
          <motion.div variants={item} className="mb-4 lg:mb-2 xl:mb-6 mt-4 lg:mt-0">
            <div className="flex w-fit items-center gap-3 rounded-full border border-[#FF835D]/20 bg-[#FF835D]/5 p-1 pr-5 backdrop-blur-sm">
              <span className="rounded-full bg-gradient-to-r from-[#FF835D] to-[#FF6A3D] px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider shadow-[0_0_12px_rgba(255,131,93,0.4)]">
                India
              </span>
              <span className="text-[12px] font-medium text-white/80">
                IT Services & Blockchain Development
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-[36px] sm:text-[48px] md:text-[56px] font-bold leading-[1.1] tracking-tight text-white mb-4 md:mb-6 w-full"
          >
            Building Digital Products
            <br className="hidden lg:block" />
            {" "}with{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF835D] via-[#FFB088] to-[#FF6A3D]">
                Blockchain
              </span>
              {/* Animated underline */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF835D] to-[#FFB088] rounded-full origin-left"
              />
            </span>
            <br className="hidden lg:block" /> Innovation
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="mb-6 md:mb-8 max-w-[520px] text-[14px] md:text-[16px] leading-[1.7] text-[#A0A0A0]"
          >
            Fynbloc Labs is an IT services and blockchain product development company. We build custom software, Web3 products, smart contracts, and scalable digital solutions for businesses.
          </motion.p>

          {/* Metrics block */}
          <motion.div
            variants={item}
            className="mb-6 md:mb-8 flex w-full flex-row items-center justify-between lg:w-auto lg:justify-start lg:gap-8 xl:gap-12"
          >
            {[
              { stat: "Full Stack", label: "Web & Mobile Dev" },
              { stat: "Web3", label: "Blockchain Ready" },
              { stat: "Enterprise", label: "Grade Security" },
            ].map(({ stat, label }, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-white tracking-tight">
                  {stat}
                </div>
                <div className="text-[10px] sm:text-[12px] font-medium text-[#A0A0A0] mt-1">{label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex items-center gap-4 flex-wrap justify-center lg:justify-start">
            <Link href="#contact" scroll={true}>
              <button className="group relative flex items-center justify-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-[#FF835D] to-[#FF6A3D] px-8 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 shadow-[0_0_24px_rgba(255,131,93,0.3)] hover:shadow-[0_0_36px_rgba(255,131,93,0.5)] hover:-translate-y-1 active:scale-95 active:translate-y-0">
                <span>Get in Touch</span>
                <Image
                  src="/images/request_access_arrow.svg"
                  alt="Arrow Right"
                  width={16}
                  height={16}
                  className="ml-1 transition-transform group-hover:translate-x-1"
                />
              </button>
            </Link>
            <Link href="#services" scroll={true}>
              <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-[15px] font-medium text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white hover:-translate-y-1 active:scale-95 active:translate-y-0">
                Our Services
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right side — Tech Card with floating badges */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="w-full lg:w-auto flex justify-center lg:justify-end shrink"
        >
          <div className="relative">
            {/* Floating badges */}
            {floatingBadges.map(({ label, delay }, i) => {
              const positions = [
                { top: "-14px", left: "30px" },
                { top: "-14px", right: "40px" },
                { top: "80px", left: "-50px" },
                { top: "80px", right: "-50px" },
                { bottom: "80px", left: "-44px" },
                { bottom: "80px", right: "-44px" },
              ];
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -6, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.4, delay: 0.8 + delay },
                    scale: { duration: 0.4, delay: 0.8 + delay },
                    y: { duration: 2.5 + delay * 0.3, repeat: Infinity, ease: "easeInOut", delay: delay },
                  }}
                  className="absolute z-20 hidden lg:flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0A0A0D]/90 px-3 py-1.5 backdrop-blur-md shadow-xl"
                  style={positions[i] as React.CSSProperties}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF835D] shadow-[0_0_6px_rgba(255,131,93,0.8)]" />
                  <span className="text-[11px] font-medium text-white/90">{label}</span>
                </motion.div>
              );
            })}

            <TechCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TechCard() {
  const stack = [
    { label: "React / Next.js", tag: "Frontend" },
    { label: "Node.js / Python", tag: "Backend" },
    { label: "Solidity / Rust", tag: "Smart Contracts" },
    { label: "PostgreSQL / MongoDB", tag: "Database" },
    { label: "AWS / GCP / Azure", tag: "Cloud" },
  ];

  return (
    <motion.div
      whileHover={{ rotateY: 3, rotateX: -2, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative w-full max-w-[340px]"
      style={{ perspective: "1000px" }}
    >
      {/* Glow border */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#FF835D]/40 via-[#FF835D]/10 to-transparent opacity-70 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
      {/* Pulsing outer glow */}
      <motion.div
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-3 rounded-3xl bg-[#FF835D]/8 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070709]/90 p-8 backdrop-blur-xl shadow-2xl">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#FF835D]/8 via-transparent to-[#7C3AED]/5" />
        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF835D]/15 border border-[#FF835D]/20">
              <svg className="h-4 w-4 text-[#FF835D]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Tech Stack</p>
              <p className="text-xs text-[#666]">What we build with</p>
            </div>
            <div className="ml-auto flex h-6 items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span className="text-[10px] font-medium text-emerald-400">Active</span>
            </div>
          </div>

          <div className="space-y-2.5">
            {stack.map(({ label, tag }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                className="flex items-center justify-between rounded-lg border border-white/[0.05] bg-white/[0.03] p-3 hover:bg-white/[0.06] transition-colors"
              >
                <span className="text-xs text-white/75 font-mono">{label}</span>
                <span className="text-[10px] font-medium text-[#666] bg-white/[0.05] rounded-full px-2 py-0.5 border border-white/[0.04]">{tag}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-5">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[10px] text-[#555]">Delivery Capability</span>
              <span className="text-[10px] font-semibold text-[#FF835D]">Full Cycle</span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "90%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                className="h-full rounded-full bg-gradient-to-r from-[#FF835D] to-[#FFB088] shadow-[0_0_8px_rgba(255,131,93,0.5)]"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

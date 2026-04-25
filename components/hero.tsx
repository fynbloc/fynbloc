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
            <div className="flex w-fit items-center gap-3 rounded-full border border-white/5 bg-[#1A1A1A]/30 p-1 pr-5 backdrop-blur-sm">
              <span className="rounded-full bg-[#FF835D] px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
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
            Building Digital Products<br className="hidden lg:block" /> with{" "}
            <span className="text-[#FF835D]">Blockchain</span>
            <br className="hidden lg:block" /> Innovation
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="mb-6 md:mb-8 max-w-[600px] text-[13px] md:text-[15px] leading-[1.6] text-[#A0A0A0]"
          >
            Fynbloc Labs is an IT services and blockchain product development company. We build custom software, Web3 products, smart contracts, and scalable digital solutions for businesses.
          </motion.p>

          {/* Metrics block */}
          <motion.div
            variants={item}
            className="mb-6 md:mb-8 flex w-full flex-row items-center justify-between lg:w-auto lg:justify-start lg:gap-8 xl:gap-12"
          >
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-white tracking-tight">Full Stack</div>
              <div className="text-[10px] sm:text-[12px] font-medium text-[#A0A0A0] mt-1">Web & Mobile Dev</div>
            </div>

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-white tracking-tight">Web3</div>
              <div className="text-[10px] sm:text-[12px] font-medium text-[#A0A0A0] mt-1">Blockchain Ready</div>
            </div>

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-white tracking-tight">Enterprise</div>
              <div className="text-[10px] sm:text-[12px] font-medium text-[#A0A0A0] mt-1">Grade Security</div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={item}>
            <Link href="#contact" scroll={true}>
              <button className="group relative flex items-center justify-center gap-2 rounded-full border border-transparent bg-[#FF835D] px-8 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 shadow-none hover:brightness-110 hover:-translate-y-1 active:scale-95 active:translate-y-0">
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
          </motion.div>
        </motion.div>

        {/* Right side — Tech Stack Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="w-full lg:w-auto flex justify-center lg:justify-end shrink"
        >
          <TechCard />
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
      whileHover={{ rotateY: 2, rotateX: -1, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative w-full max-w-[340px]"
      style={{ perspective: "1000px" }}
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#FF835D]/30 via-[#FF835D]/10 to-transparent opacity-60 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-3 rounded-3xl bg-[#FF835D]/5 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0D]/80 p-8 backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#FF835D]/5 via-transparent to-transparent" />
        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF835D]/10">
              <svg className="h-4 w-4 text-[#FF835D]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Tech Stack</p>
              <p className="text-xs text-[#A0A0A0]">What we build with</p>
            </div>
            <div className="ml-auto flex h-6 items-center rounded-full bg-[#FF835D]/10 px-2.5">
              <span className="text-[10px] font-medium text-[#FF835D]">Production</span>
            </div>
          </div>

          <div className="space-y-3">
            {stack.map(({ label, tag }) => (
              <div key={label} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 p-3">
                <span className="text-xs text-white/80 font-mono">{label}</span>
                <span className="text-[10px] font-medium text-[#A0A0A0] bg-white/5 rounded-full px-2 py-0.5">{tag}</span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[10px] text-[#A0A0A0]">Delivery Capability</span>
              <span className="text-[10px] font-medium text-[#FF835D]">Full Cycle</span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "90%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                className="h-full rounded-full bg-gradient-to-r from-[#FF835D] to-[#FFB088]"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

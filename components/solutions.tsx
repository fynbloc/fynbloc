"use client";

import { motion, useInView } from "framer-motion";
import { Code2, Blocks, Lightbulb, ArrowRight, Check } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Code2,
    tag: "Development",
    tagColor: "#FF835D",
    bgGlow: "rgba(255,131,93,0.06)",
    borderGlow: "rgba(255,131,93,0.2)",
    iconBg: "rgba(255,131,93,0.1)",
    iconBorder: "rgba(255,131,93,0.2)",
    title: "Custom Software Development",
    description:
      "We design and build production-ready web apps, mobile apps, and enterprise software — from zero to launch.",
    features: [
      "Web apps (React, Next.js, Node.js)",
      "Mobile apps (iOS & Android)",
      "REST & GraphQL API development",
      "SaaS & enterprise product builds",
    ],
  },
  {
    icon: Blocks,
    tag: "Web3 & Blockchain",
    tagColor: "#818CF8",
    bgGlow: "rgba(129,140,248,0.06)",
    borderGlow: "rgba(129,140,248,0.2)",
    iconBg: "rgba(129,140,248,0.1)",
    iconBorder: "rgba(129,140,248,0.2)",
    title: "Blockchain Product Development",
    description:
      "End-to-end Web3 engineering — smart contracts, DApps, token platforms, and blockchain integrations for any chain.",
    features: [
      "Smart contracts (Solidity, Rust)",
      "Decentralized apps (DApps)",
      "NFT & token platforms",
      "Blockchain integration for existing systems",
    ],
  },
  {
    icon: Lightbulb,
    tag: "Consulting",
    tagColor: "#34D399",
    bgGlow: "rgba(52,211,153,0.06)",
    borderGlow: "rgba(52,211,153,0.2)",
    iconBg: "rgba(52,211,153,0.1)",
    iconBorder: "rgba(52,211,153,0.2)",
    title: "IT Consulting & Advisory",
    description:
      "Strategic technology guidance for businesses planning their digital future — architecture, cloud, and DevOps.",
    features: [
      "Architecture design & review",
      "Digital transformation strategy",
      "Cloud planning (AWS, GCP, Azure)",
      "DevOps & CI/CD pipeline setup",
    ],
  },
];

const capabilities = [
  "React & Next.js",
  "Node.js & Python",
  "Solidity & Rust",
  "PostgreSQL & MongoDB",
  "AWS, GCP & Azure",
  "Docker & Kubernetes",
  "TypeScript",
  "React Native",
  "GraphQL",
  "Tailwind CSS",
  "Ethereum & Polygon",
  "Solana",
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
};

export default function SolutionsSection() {
  const ref = useRef(null);
  const capRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const capInView = useInView(capRef, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="scroll-mt-16 relative overflow-hidden pt-4 md:pt-10 pb-8 md:pb-24 bg-[#000000]">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF835D]/3 rounded-full blur-[140px]" />
      </div>

      <div className="mx-auto flex flex-col items-center w-full max-w-[1240px] px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-[760px] mx-auto mb-16 flex flex-col items-center"
        >
          <div className="mb-6 flex w-fit items-center justify-center rounded-full border border-[#FF835D]/20 bg-[#FF835D]/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-[11px] text-[#FF835D] font-bold tracking-[0.15em] uppercase">
              CORE SERVICES
            </span>
          </div>

          <h2 className="mb-5 text-[32px] font-bold leading-[1.15] tracking-tight text-white md:text-[48px]">
            Everything you need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF835D] to-[#FFB088]">
              build & ship
            </span>
          </h2>
          <p className="max-w-[560px] text-[15px] leading-[1.7] text-[#707070]">
            From custom software to blockchain products — we deliver end-to-end technology solutions that actually work in production.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={cardVariant}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-[20px] border bg-[#050507] p-8 flex flex-col overflow-hidden cursor-default transition-colors duration-300"
              style={{
                borderColor: "rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = svc.borderGlow;
                (e.currentTarget as HTMLDivElement).style.background = svc.bgGlow;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLDivElement).style.background = "#050507";
              }}
            >
              {/* Corner glow on hover */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: svc.bgGlow }}
              />

              {/* Icon */}
              <div
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border"
                style={{ background: svc.iconBg, borderColor: svc.iconBorder }}
              >
                <svc.icon className="h-5 w-5" style={{ color: svc.tagColor }} />
              </div>

              {/* Tag */}
              <div
                className="mb-4 w-fit rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.12em] uppercase"
                style={{
                  color: svc.tagColor,
                  background: svc.iconBg,
                  border: `1px solid ${svc.iconBorder}`,
                }}
              >
                {svc.tag}
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-bold leading-[1.25] tracking-tight text-white mb-3">
                {svc.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] leading-[1.7] text-[#666] mb-6">
                {svc.description}
              </p>

              {/* Features */}
              <ul className="mt-auto space-y-2.5">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] text-[#888]">
                    <Check
                      className="h-3.5 w-3.5 mt-0.5 shrink-0"
                      style={{ color: svc.tagColor }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Bottom CTA */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-[13px] font-semibold transition-all duration-200"
                  style={{ color: svc.tagColor }}
                >
                  Get a quote
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Capabilities Strip */}
        <motion.div
          ref={capRef}
          initial={{ opacity: 0, y: 24 }}
          animate={capInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <div className="w-full border border-white/5 rounded-[20px] bg-[#030305] p-8 md:p-10">
            <p className="text-center text-[11px] font-bold tracking-[0.2em] uppercase text-[#444] mb-7">
              Technologies we work with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={capInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="rounded-full border border-white/[0.07] bg-white/[0.03] px-4 py-2 text-[12px] font-medium text-[#888] hover:border-[#FF835D]/30 hover:text-white hover:bg-[#FF835D]/5 transition-all duration-200 cursor-default"
                >
                  {cap}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

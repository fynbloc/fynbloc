"use client";

import { motion, useInView } from "framer-motion";
import { Code2, Blocks, Cloud, ShieldCheck } from "lucide-react";
import { useRef } from "react";

const capabilities = [
  {
    icon: Code2,
    title: "Full Cycle Delivery",
    desc: "From scoping to deployment and support",
    iconColor: "#FF835D",
    iconBg: "rgba(255,131,93,0.1)",
    iconBorder: "rgba(255,131,93,0.2)",
  },
  {
    icon: Blocks,
    title: "Web3 Expertise",
    desc: "Blockchain, smart contracts & DApps",
    iconColor: "#818CF8",
    iconBg: "rgba(129,140,248,0.1)",
    iconBorder: "rgba(129,140,248,0.2)",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    desc: "AWS, GCP, Azure — production-grade infra",
    iconColor: "#38BDF8",
    iconBg: "rgba(56,189,248,0.1)",
    iconBorder: "rgba(56,189,248,0.2)",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    desc: "Built into every layer we ship",
    iconColor: "#34D399",
    iconBg: "rgba(52,211,153,0.1)",
    iconBorder: "rgba(52,211,153,0.2)",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="scroll-mt-16 relative overflow-hidden pt-6 md:pt-20 pb-4 md:pb-8 bg-[#000000]">
      <div className="mx-auto flex justify-center w-full px-6">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1184px] gap-12 md:gap-[60px]">

          {/* Left Side: Capability Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="hidden md:grid grid-cols-2 gap-4 w-full md:w-[520px] shrink-0"
          >
            {capabilities.map((cap) => (
              <motion.div
                key={cap.title}
                variants={cardAnim}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-[18px] border border-white/[0.06] bg-[#050507] p-7 flex flex-col gap-4 overflow-hidden cursor-default transition-all duration-300 hover:border-white/[0.12]"
              >
                {/* Corner glow */}
                <div
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: cap.iconBg }}
                />
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl border"
                  style={{ background: cap.iconBg, borderColor: cap.iconBorder }}
                >
                  <cap.icon className="h-5 w-5" style={{ color: cap.iconColor }} />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-white mb-1">{cap.title}</p>
                  <p className="text-[12px] leading-[1.6] text-[#666]">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-[578px]"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-[#FF835D]/20 bg-[#FF835D]/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="text-[11px] text-[#FF835D] font-bold tracking-[0.15em] uppercase">
                ABOUT US
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-tight text-white">
              We are{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF835D] to-[#FFB088]">
                Fynbloc Labs
              </span>
            </h2>

            {/* Bullets */}
            <ul className="mb-10 space-y-5">
              {[
                "Fynbloc Labs Private Limited is an Indian technology company incorporated under the Companies Act, 2013.",
                "We specialize in custom software development, blockchain product development, and IT consulting — helping businesses design, build, and scale digital products.",
                "Our team builds web applications, mobile apps, smart contracts, and decentralized products with a focus on quality, performance, and long-term maintainability.",
              ].map((text, i) => (
                <li key={i} className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-[14px] md:text-[15px] leading-[1.7] text-[#707070]">
                  <div className="hidden md:block mt-2.5 w-[5px] h-[5px] shrink-0 rounded-full bg-[#FF835D]/60" />
                  <p>{text}</p>
                </li>
              ))}
            </ul>

            {/* Vision / Approach */}
            <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-6 mt-auto">
              <div className="flex-1 rounded-[14px] border border-white/[0.06] bg-[#050507] p-5 text-left">
                <h4 className="text-[13px] text-white mb-3 font-semibold">Our Vision</h4>
                <p className="text-[13px] leading-[1.8] text-[#666]">
                  To be a trusted technology partner for businesses embracing digital transformation and Web3 innovation.
                </p>
              </div>
              <div className="flex-1 rounded-[14px] border border-white/[0.06] bg-[#050507] p-5 text-left">
                <h4 className="text-[13px] text-white mb-3 font-semibold">Our Approach</h4>
                <ul className="text-[13px] leading-[2] text-[#666] space-y-0.5">
                  <li>Agile development</li>
                  <li>Security-first architecture</li>
                  <li>Client-focused delivery</li>
                  <li>Scalable, clean code</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

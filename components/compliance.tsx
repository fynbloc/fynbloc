"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function TechnologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technology" ref={ref} className="scroll-mt-16 relative pt-6 md:pt-20 pb-20 bg-[#000000] text-white overflow-hidden">
      <div className="mx-auto flex flex-col items-center w-full max-w-[1240px] px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-[760px] mx-auto mb-16 flex flex-col items-center"
        >
          <div className="mb-6 flex w-fit items-center justify-center rounded-full border border-[#FF835D]/20 bg-[#FF835D]/5 px-4 py-1.5">
            <span className="text-[11px] text-[#FF835D] font-bold tracking-[0.15em] uppercase">
              Technology
            </span>
          </div>
          <h2 className="mb-5 text-[32px] font-bold leading-[1.15] tracking-tight text-white md:text-[48px]">
            Engineered to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF835D] to-[#FFB088]">
              perform & scale
            </span>
          </h2>
          <p className="max-w-[560px] text-[15px] leading-[1.7] text-[#707070]">
            Every product we ship is built on a foundation of clean architecture, automated testing, and security-first engineering.
          </p>
        </motion.div>

        {/* Main Feature Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="w-full rounded-[24px] border border-white/[0.06] bg-[#050507] overflow-hidden mb-8"
        >
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left: animated text ticker */}
            <div className="flex-1 p-10 hidden md:flex flex-col justify-center gap-2 border-r border-white/[0.05] select-none pointer-events-none overflow-hidden">
              {[
                ["Full Stack Development", "Cloud Infrastructure"],
                ["Smart Contracts", "API Engineering"],
                ["DevOps & CI/CD", "System Architecture"],
              ].map((row, ri) => (
                <div key={ri} className="text-[#1E1E1E] text-[20px] font-medium whitespace-nowrap">
                  {row.join(" · ")}
                </div>
              ))}
              <div className="mt-4 text-[#2A2A2A] text-[14px]">
                React · Next.js · Node.js · Solidity · AWS · Docker
              </div>
            </div>

            {/* Right: content */}
            <div className="w-full md:w-[480px] shrink-0 p-10 flex flex-col justify-center">
              <div className="text-[10px] text-[#FF835D] font-bold tracking-[0.15em] uppercase mb-4 border border-[#FF835D]/20 rounded-full w-fit px-3 py-1 bg-[#FF835D]/5">
                QUALITY & PERFORMANCE
              </div>
              <h3 className="text-[28px] md:text-[32px] font-bold tracking-tight mb-4 leading-[1.2] text-white">
                Security built into every{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF835D] to-[#FFB088]">
                  product we ship
                </span>
              </h3>
              <p className="text-[#666] text-[14px] leading-[1.7]">
                Fynbloc Labs combines rigorous code review, automated testing, and security-first design to ensure every product we deliver is production-ready and built to last.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3-column feature cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[
            {
              num: "01",
              title: "Engineering Standards",
              desc: "Clean, documented, and testable codebases following industry best practices — built to be maintained long after launch.",
              color: "#FF835D",
            },
            {
              num: "02",
              title: "Cloud-Native Architecture",
              desc: "Scalable, containerized deployments on AWS, GCP, or Azure with automated CI/CD pipelines for continuous delivery.",
              color: "#818CF8",
            },
            {
              num: "03",
              title: "Security & Performance",
              desc: "Security audits, performance profiling, and load testing built into every engagement — not bolted on at the end.",
              color: "#34D399",
            },
          ].map(({ num, title, desc, color }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.1 * i }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-[18px] border border-white/[0.06] bg-[#050507] p-8 flex flex-col gap-4 overflow-hidden cursor-default hover:border-white/[0.12] transition-all duration-300"
            >
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase" style={{ color }}>
                {num} //
              </span>
              <h4 className="text-[17px] font-bold text-white leading-tight">{title}</h4>
              <p className="text-[13px] leading-[1.7] text-[#666]">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Process Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full rounded-[24px] border border-white/[0.06] bg-[#050507] p-8 md:p-12 flex flex-col lg:flex-row justify-between gap-10"
        >
          <div className="flex-1 flex flex-col justify-center max-w-[480px]">
            <h3 className="text-[28px] md:text-[32px] font-bold mb-4 tracking-tight text-white">Our Delivery Process</h3>
            <p className="text-[#666] text-[14px] leading-[1.7] mb-6">
              We follow an agile, client-centered delivery model with full transparency at every stage — from scoping through to deployment and post-launch support.
            </p>
            <p className="text-[11px] font-bold tracking-[0.1em] leading-relaxed uppercase text-[#444] max-w-[400px]">
              Every engagement includes regular demos, milestone reviews, and direct access to your delivery team
            </p>
          </div>

          <div className="w-full lg:w-[460px] shrink-0 rounded-[16px] border border-white/[0.05] bg-[#030305] p-8 flex flex-col justify-center">
            <div className="text-[11px] font-bold tracking-[0.1em] text-[#FF835D] uppercase mb-6">
              HOW WE WORK
            </div>
            <ul className="space-y-0">
              {[
                "Discovery & requirements workshop",
                "UI/UX design and prototyping",
                "Iterative sprint-based development",
                "QA, testing, and security review",
                "Deployment, handover & ongoing support",
              ].map((step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-4 text-[13px] text-[#888] py-4 border-b border-white/[0.04] last:border-0 last:pb-0 first:pt-0"
                >
                  <span className="text-[10px] font-bold text-[#333] tabular-nums w-4 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

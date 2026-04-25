"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TechnologySection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="technology" ref={ref} className="scroll-mt-16 relative pt-6 md:pt-20 pb-0 bg-[#000000] text-white overflow-hidden">
            <div className="mx-auto flex flex-col items-center w-full max-w-[1360px] px-6">

                {/* 1. QUALITY & PERFORMANCE Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-[1160px] border border-[#191919] rounded-[24px] mb-24 flex flex-col md:flex-row items-stretch overflow-hidden bg-[#050505]"
                >
                    {/* Left: Ticker/Text effect */}
                    <div className="flex-1 p-8 text-[#A0A0A0] text-sm md:text-xl md:text-[22px] font-medium leading-[2.5] opacity-40 select-none pointer-events-none whitespace-nowrap overflow-hidden hidden md:flex flex-col justify-center">
                        <p>Full Stack Development &nbsp;&bull;&nbsp; Cloud</p>
                        <p>Smart Contracts &nbsp;&bull;&nbsp; API Engineering</p>
                        <p className="text-[#333333]">DevOps &nbsp;&bull;&nbsp; System Architecture</p>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[500px] shrink-0 p-8 md:p-12 border-t md:border-t-0 md:border-l border-[#191919] flex flex-col justify-center bg-[#080808]">
                        <div className="text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF835D] font-bold tracking-[0.15em] uppercase mb-4 border border-[rgba(255,255,255,0.1)] rounded-full w-fit px-3 py-1">
                            QUALITY & PERFORMANCE
                        </div>
                        <h3 className="text-[28px] md:text-[34px] font-medium tracking-tight mb-4 leading-[1.2] text-[#E0E0E0]">
                            Security Built Into Every<br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF835D]">Product We Ship</span>
                        </h3>
                        <p className="text-[#A0A0A0] text-[14px] leading-relaxed">
                            Fynbloc Labs combines rigorous code review, automated testing, and security-first architecture to ensure every product we deliver is production-ready and resilient.
                        </p>
                    </div>
                </motion.div>

                {/* 2. Technology Capabilities */}
                <div className="w-full flex flex-col items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 flex w-fit items-center justify-center rounded-full border border-white/10 bg-[#1A1A1A]/30 px-5 py-1.5 backdrop-blur-sm"
                    >
                        <span className="text-[11px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF835D] font-medium tracking-[0.05em]">
                            Technology Capabilities
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="mb-6 text-center text-[32px] md:text-[44px] leading-[1.1] font-medium max-w-[800px] tracking-tight text-[#E0E0E0]"
                    >
                        We engineer scalable, secure, and maintainable digital products.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center text-[#A0A0A0] text-[14px] mb-[80px]"
                    >
                        Our engineering practices prioritize reliability, performance, and long-term ownership.
                    </motion.p>

                    <div className="w-full max-w-[1170px] flex flex-col md:flex-row gap-12 md:gap-[100px] items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="w-full md:w-[480px] rounded-[24px] bg-[#0A0A0D] border border-white/5 overflow-hidden flex justify-center items-center h-[350px] md:h-[400px] shrink-0"
                        >
                            <div className="relative w-[80%] h-[80%] md:w-[350px] md:h-[300px]">
                                <Image src="/images/div.framer-1rq5fs7-container_mask-group.png" fill className="object-contain" alt="Technology Architecture" />
                            </div>
                        </motion.div>

                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="w-full flex-1 flex flex-col items-start pr-0 md:pr-10"
                        >
                            <h3 className="text-[22px] md:text-[26px] font-medium mb-4 text-[#E0E0E0]">Engineering Standards</h3>
                            <p className="text-[#A0A0A0] text-[13px] leading-[1.6] mb-8 max-w-[500px]">
                                Every product we build is engineered to last. We follow industry-standard practices in software architecture, security, and testing — ensuring that what we deliver can scale with your business and be maintained by your team long after launch.
                            </p>
                            <span className="text-[#E0E0E0] font-medium text-[15px] mb-4">What we deliver:</span>
                            <ul className="space-y-4 w-full">
                                {[
                                    "Clean, documented, and testable codebases",
                                    "Scalable cloud-native architecture",
                                    "Automated CI/CD pipelines",
                                    "Security audits and performance optimization"
                                ].map((text, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-[#A0A0A0] text-[13px]">
                                        <div className="w-[4px] h-[4px] shrink-0 rounded-full bg-[#A0A0A0]"></div>
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* DRAG TO EXPLORE */}
                    <div className="flex items-center justify-center gap-3 mt-12 w-full">
                        <ArrowLeft className="w-[14px] h-[14px] text-[#A0A0A0]" />
                        <span className="text-[10px] tracking-[0.1em] text-[#A0A0A0] font-semibold uppercase">DRAG TO EXPLORE</span>
                        <ArrowRight className="w-[14px] h-[14px] text-[#A0A0A0]" />
                    </div>
                </div>

                {/* 3. Our Process */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-[1170px] border border-[#191919] rounded-[24px] bg-[#0A0A0A]/40 p-8 md:p-12 mb-16 flex flex-col lg:flex-row justify-between gap-12 md:gap-[100px] backdrop-blur-sm"
                >
                    <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-[28px] md:text-[32px] font-medium mb-6 tracking-tight text-[#E0E0E0]">Our Delivery Process</h3>
                        <p className="text-[#A0A0A0] text-[14px] leading-[1.6] mb-10 max-w-[480px]">
                            Fynbloc Labs follows an agile, client-centered delivery model. We maintain transparency at every stage — from scoping and design through to deployment and post-launch support.
                        </p>
                        <p className="text-[10px] font-bold tracking-[0.1em] leading-relaxed uppercase text-[#CCCCCC] max-w-[450px]">
                            EVERY ENGAGEMENT INCLUDES REGULAR DEMOS, MILESTONE REVIEWS, AND DIRECT ACCESS TO YOUR DELIVERY TEAM
                        </p>
                    </div>

                    <div className="w-full lg:w-[480px] shrink-0 border border-[#191919] rounded-[16px] p-8 bg-[#050505] flex flex-col justify-center">
                        <div className="text-[11px] font-bold tracking-[0.1em] text-[#FF6A3D] uppercase mb-6">
                            HOW WE WORK
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Discovery & requirements workshop",
                                "UI/UX design and prototyping",
                                "Iterative sprint-based development",
                                "QA, testing, and security review",
                                "Deployment, handover, and ongoing support"
                            ].map((text, idx) => (
                                <li key={idx} className="text-[#A0A0A0] text-[13px] pb-4 border-b border-[#191919] last:border-0 last:pb-0">
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

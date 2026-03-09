"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ComplianceSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="technology" ref={ref} className="scroll-mt-16 relative pt-6 md:pt-20 pb-0 bg-[#000000] text-white overflow-hidden">
            <div className="mx-auto flex flex-col items-center w-full max-w-[1360px] px-6">

                {/* 1. TRUST & PROTECTION Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-[1160px] border border-[#191919] rounded-[24px] mb-24 flex flex-col md:flex-row items-stretch overflow-hidden bg-[#050505]"
                >
                    {/* Left: Ticker/Text effect */}
                    <div className="flex-1 p-8 text-[#A0A0A0] text-sm md:text-xl md:text-[22px] font-medium leading-[2.5] opacity-40 select-none pointer-events-none whitespace-nowrap overflow-hidden hidden md:flex flex-col justify-center">
                        <p>AML monitoring &nbsp;&bull;&nbsp; Merchant</p>
                        <p>Dispute Resolution System &nbsp;&bull;&nbsp; Bu</p>
                        <p className="text-[#333333]">Unparalleled Privacy &nbsp;&bull;&nbsp; Unriva</p>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[500px] shrink-0 p-8 md:p-12 border-t md:border-t-0 md:border-l border-[#191919] flex flex-col justify-center bg-[#080808]">
                        <div className="text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF835D] font-bold tracking-[0.15em] uppercase mb-4 border border-[rgba(255,255,255,0.1)] rounded-full w-fit px-3 py-1">
                            TRUST & PROTECTION
                        </div>
                        <h3 className="text-[28px] md:text-[34px] font-medium tracking-tight mb-4 leading-[1.2] text-[#E0E0E0]">
                            Security Built Into Every<br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF835D]">Transaction</span>
                        </h3>
                        <p className="text-[#A0A0A0] text-[14px] leading-relaxed">
                            Fynbloc combines escrow protection, identity verification, and real-time monitoring to ensure safe and transparent crypto trading.
                        </p>
                    </div>
                </motion.div>

                {/* 2. Technology Infrastructure */}
                <div className="w-full flex flex-col items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 flex w-fit items-center justify-center rounded-full border border-white/10 bg-[#1A1A1A]/30 px-5 py-1.5 backdrop-blur-sm"
                    >
                        <span className="text-[11px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF835D] font-medium tracking-[0.05em]">
                            Technology Infrastructure
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="mb-6 text-center text-[32px] md:text-[44px] leading-[1.1] font-medium max-w-[800px] tracking-tight text-[#E0E0E0]"
                    >
                        Fynbloc Labs develops secure technology systems supporting digital asset operations.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center text-[#A0A0A0] text-[14px] mb-[80px]"
                    >
                        Our infrastructure focuses on reliability, transparency, and risk mitigation.
                    </motion.p>

                    <div className="w-full max-w-[1170px] flex flex-col md:flex-row gap-12 md:gap-[100px] items-center">
                        {/* Padlock Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="w-full md:w-[480px] rounded-[24px] bg-[#0A0A0D] border border-white/5 overflow-hidden flex justify-center items-center h-[350px] md:h-[400px] shrink-0"
                        >
                            <div className="relative w-[80%] h-[80%] md:w-[350px] md:h-[300px]">
                                <Image src="/images/div.framer-1rq5fs7-container_mask-group.png" layout="fill" objectFit="contain" alt="Security Architecture Padlock" />
                            </div>
                        </motion.div>

                        {/* Security Architecture Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="w-full flex-1 flex flex-col items-start pr-0 md:pr-10"
                        >
                            <h3 className="text-[22px] md:text-[26px] font-medium mb-4 text-[#E0E0E0]">Security Architecture</h3>
                            <p className="text-[#A0A0A0] text-[13px] leading-[1.6] mb-8 max-w-[500px]">
                                Fynbloc Labs builds secure infrastructure designed to protect digital assets and ensure reliable transaction processing. Our systems integrate advanced wallet security, custodial storage frameworks, and verification mechanisms to maintain operational integrity and reduce risk across digital asset platforms.
                            </p>
                            <span className="text-[#E0E0E0] font-medium text-[15px] mb-4">Impact :</span>
                            <ul className="space-y-4 w-full">
                                {[
                                    "Secure wallet infrastructure",
                                    "Custodial asset storage frameworks",
                                    "Transaction verification systems",
                                    "Operational risk mitigation systems"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-[#A0A0A0] text-[13px]">
                                        <div className="w-[4px] h-[4px] shrink-0 rounded-full bg-[#A0A0A0]"></div>
                                        {item}
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

                {/* 3. Compliance & Governance */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-[1170px] border border-[#191919] rounded-[24px] bg-[#0A0A0A]/40 p-8 md:p-12 mb-8 flex flex-col lg:flex-row justify-between gap-12 md:gap-[100px] backdrop-blur-sm"
                >
                    <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-[28px] md:text-[32px] font-medium mb-6 tracking-tight text-[#E0E0E0]">Compliance & Governance</h3>
                        <p className="text-[#A0A0A0] text-[14px] leading-[1.6] mb-10 max-w-[480px]">
                            Fynbloc Labs Private Limited operates strictly within the scope of its Memorandum of Association and applicable Indian laws governing Virtual Digital Assets. The company maintains a compliance-first operational framework.
                        </p>
                        <p className="text-[10px] font-bold tracking-[0.1em] leading-relaxed uppercase text-[#CCCCCC] max-w-[450px]">
                            NOTE: WHERE APPLICABLE, KYC AND AML FRAMEWORKS MAY BE IMPLEMENTED TO SUPPORT COMPLIANCE REQUIREMENTS
                        </p>
                    </div>

                    <div className="w-full lg:w-[480px] shrink-0 border border-[#191919] rounded-[16px] p-8 bg-[#050505] flex flex-col justify-center">
                        <div className="text-[11px] font-bold tracking-[0.1em] text-[#FF6A3D] uppercase mb-6">
                            REGULATORY ALIGNMENT
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Does not accept public deposits",
                                "Does not operate as a banking institution",
                                "Does not operate as a Non-Banking Financial Company (NBFC)",
                                "Does not guarantee returns",
                                "Does not provide investment advice"
                            ].map((item, idx) => (
                                <li key={idx} className="text-[#A0A0A0] text-[13px] pb-4 border-b border-[#191919] last:border-0 last:pb-0">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* 4. Risk Disclosure */}
                <motion.div
                    id="risk-disclosure"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full max-w-[1170px] border border-[#191919] rounded-[24px] bg-[#0A0A0A]/40 p-8 md:p-12 flex flex-col backdrop-blur-sm"
                >
                    <h3 className="text-[26px] md:text-[30px] font-medium mb-4 tracking-tight text-[#E0E0E0]">Risk Disclosure</h3>
                    <p className="text-[#A0A0A0] text-[13px] leading-[1.6] mb-10 max-w-[700px]">
                        Virtual Digital Assets (VDAs) involve significant risk and are subject to market volatility and regulatory developments. Participants engaging in digital asset transactions should understand that:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-[13px] text-[#A0A0A0]">
                        {[
                            "Digital asset prices may fluctuate significantly",
                            "Regulatory policies may evolve",
                            "Transactions may involve counterparty risk",
                            "Tax obligations may apply depending on jurisdiction"
                        ].map((item, idx) => (
                            <div key={idx} className="border border-[#191919] rounded-xl md:rounded-full px-6 py-4 bg-[#050505] flex items-center shadow-sm">
                                {item}
                            </div>
                        ))}
                    </div>

                    <p className="text-[12px] text-[#A0A0A0] max-w-[800px] leading-[1.6]">
                        <span className="text-[#FF6A3D] font-bold">Final note:</span> Fynbloc Labs does not provide financial, investment, or tax advice. Users should conduct independent due diligence before participating in digital asset activities.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}

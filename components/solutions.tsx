"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function SolutionsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="services" ref={ref} className="scroll-mt-16 relative overflow-hidden pt-4 md:pt-10 pb-8 md:pb-24 bg-[#000000]">
            <div className="mx-auto flex flex-col items-center w-full max-w-[1240px] px-6">

                {/* Header */}
                <div className="text-center max-w-[929px] mx-auto mb-20 flex flex-col items-center">
                    <div className="mb-6 flex w-fit items-center justify-center rounded-full border border-white/10 bg-[#1A1A1A]/30 px-4 py-1.5 backdrop-blur-sm">
                        <span className="text-[11px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF835D] font-bold tracking-[0.15em] uppercase">
                            CORE SERVICES
                        </span>
                    </div>

                    <h2 className="mb-6 text-[30px] font-medium leading-[1.1] tracking-tight text-white md:text-[48px]">
                        Software, Blockchain & IT Consulting<br className="hidden md:block" />Services for Modern Businesses
                    </h2>
                    <p className="max-w-[640px] text-[15px] leading-[1.6] text-[#A0A0A0]">
                        Fynbloc Labs builds and delivers end-to-end technology solutions — from custom web and mobile applications to blockchain products and strategic IT advisory.
                    </p>
                </div>

                {/* Grid Container */}
                <div className="w-full flex justify-center">
                    <div className="w-full flex flex-col gap-12 md:gap-[100px] max-w-[1167px]">

                        {/* Item 1: Custom Software Development (Image Left, Text Right) */}
                        <div className="w-full md:max-w-[1167px] md:h-[350px] relative flex flex-col md:flex-row items-center rounded-[24px] overflow-hidden bg-[#0A0A0D] md:bg-transparent">
                            {/* Frame 31 Background */}
                            <div className="hidden md:block absolute inset-0 z-0">
                                <Image src="/images/Frame 31.png" alt="Grid Background" fill className="object-cover" />
                            </div>

                            {/* Left Side: Image Box */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                                transition={{ duration: 0.8 }}
                                className="relative w-full md:w-[450px] h-[300px] md:h-[350px] shrink-0 flex items-center justify-center z-10 bg-[#0A0A0D] md:bg-transparent"
                            >
                                {/* Dark Box bg graphics.png */}
                                <div className="absolute inset-0 z-0 hidden md:block">
                                    <Image src="/images/graphics.png" alt="Dark background" fill className="object-cover border-r border-[#2b2b2b]/30" />
                                </div>
                                {/* glowing cube image */}
                                <div className="relative z-10 w-[80%] h-[80%] md:w-[350px] md:h-[300px]">
                                    <Image src="/images/div.framer-1rq5fs7-container.png" alt="Software Development" fill className="object-contain" />
                                </div>
                            </motion.div>

                            {/* Right Side: Text */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex-1 relative z-10 p-8 md:p-0 md:pl-[60px] md:pr-10 lg:pl-[80px] flex flex-col items-start w-full"
                            >
                                <div className="mb-6 inline-flex items-center rounded-full border border-white/10 px-3 py-1 backdrop-blur-sm">
                                    <span className="text-[11px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF835D] font-bold tracking-[0.15em] uppercase">Custom Software Development</span>
                                </div>
                                <h3 className="text-[28px] md:text-[32px] font-medium leading-[1.2] tracking-tight text-[#E0E0E0] mb-6 md:mb-8">
                                    We design and develop bespoke<br className="hidden xl:block" />software tailored to your business.
                                </h3>
                                <ul className="space-y-3 w-full">
                                    {[
                                        "Web application development (React, Next.js, Node.js)",
                                        "Mobile app development (iOS & Android)",
                                        "REST & GraphQL API development",
                                        "Enterprise software and SaaS product development"
                                    ].map((text, index) => (
                                        <li key={index} className="flex items-center gap-3 text-[#A0A0A0] text-[14px] tracking-wide">
                                            <div className="w-[4px] h-[4px] shrink-0 rounded-full bg-[#A0A0A0]"></div>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* Item 2: Blockchain Product Development (Text Left, Image Right) */}
                        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-[80px] w-full">

                            {/* Left Side: Text */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 relative z-10 flex flex-col items-start w-full"
                            >
                                <div className="mb-6 inline-flex items-center rounded-full border border-white/10 px-3 py-1">
                                    <span className="text-[11px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF835D] font-bold tracking-[0.15em] uppercase">Blockchain Product Development</span>
                                </div>
                                <h3 className="text-[28px] md:text-[32px] font-medium leading-[1.2] tracking-tight text-[#E0E0E0] mb-6 md:mb-8">
                                    End-to-end Web3 and blockchain<br className="hidden xl:block" />product engineering
                                </h3>
                                <ul className="space-y-3 mb-6 md:mb-8 w-full">
                                    {[
                                        "Smart contract development (Solidity, Rust)",
                                        "Decentralized application (DApp) development",
                                        "NFT platforms and token engineering",
                                        "Blockchain integration for existing systems"
                                    ].map((text, index) => (
                                        <li key={index} className="flex items-center gap-3 text-[#A0A0A0] text-[14px] tracking-wide">
                                            <div className="w-[4px] h-[4px] shrink-0 rounded-full bg-[#A0A0A0]"></div>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[12px] text-[#A0A0A0]">
                                    We build on Ethereum, Polygon, Solana, and other leading chains.
                                </p>
                            </motion.div>

                            {/* Right Side: Image Box */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative w-full md:w-[480px] h-[300px] md:h-[350px] shrink-0 flex items-center justify-center z-10 bg-[#0A0A0A] border border-white/5 rounded-[24px] overflow-hidden"
                            >
                                <div className="relative z-10 w-[80%] h-[80%] md:w-[350px] md:h-[300px]">
                                    <Image src="/images/div.framer-1rq5fs7-container_mask-group (1).png" alt="Blockchain Development" fill className="object-contain" />
                                </div>
                            </motion.div>
                        </div>

                        {/* Item 3: IT Consulting & Advisory (Image Left, Text Right) */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-[80px] w-full">

                            {/* Left Side: Image Box */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative w-full md:w-[480px] h-[300px] md:h-[350px] shrink-0 flex items-center justify-center z-10 bg-[#0A0A0A] border border-white/5 rounded-[24px] overflow-hidden"
                            >
                                <div className="relative z-10 w-[80%] h-[80%] md:w-[350px] md:h-[300px]">
                                    <Image src="/images/div.framer-1rq5fs7-container_mask-group.png" alt="IT Consulting" fill className="object-contain" />
                                </div>
                            </motion.div>

                            {/* Right Side: Text */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex-1 relative z-10 flex flex-col items-start w-full"
                            >
                                <div className="mb-6 inline-flex items-center rounded-full border border-white/10 px-3 py-1">
                                    <span className="text-[11px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF835D] font-bold tracking-[0.15em] uppercase">IT Consulting & Advisory</span>
                                </div>
                                <h3 className="text-[28px] md:text-[32px] font-medium leading-[1.2] tracking-tight text-[#E0E0E0] mb-6 md:mb-8">
                                    Strategic technology guidance<br className="hidden xl:block" />for your business
                                </h3>
                                <ul className="space-y-3 mb-6 md:mb-8 w-full">
                                    {[
                                        "Technology architecture design and review",
                                        "Digital transformation strategy",
                                        "Cloud infrastructure planning (AWS, GCP, Azure)",
                                        "DevOps, CI/CD pipeline setup and optimization"
                                    ].map((text, index) => (
                                        <li key={index} className="flex items-center gap-3 text-[#A0A0A0] text-[14px] tracking-wide">
                                            <div className="w-[4px] h-[4px] shrink-0 rounded-full bg-[#A0A0A0]"></div>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[12px] text-[#A0A0A0] leading-[1.6]">
                                    We work as a technology partner — not just a vendor — to help your team<br className="hidden lg:block" />build and grow the right way.
                                </p>
                            </motion.div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

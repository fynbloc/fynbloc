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
                        Infrastructure, Platforms & Compliance<br className="hidden md:block" />Solutions for the Digital Asset Economy
                    </h2>
                    <p className="max-w-[640px] text-[15px] leading-[1.6] text-[#A0A0A0]">
                        Fynbloc Labs builds secure technology infrastructure and operational systems that power the next generation of Virtual Digital Asset (VDA) platforms.
                    </p>
                </div>

                {/* Grid Container */}
                <div className="w-full flex justify-center">
                    <div className="w-full flex flex-col gap-12 md:gap-[100px] max-w-[1167px]">

                        {/* Item 1: VDA Infrastructure (Image Left, Text Right) */}
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
                                    <Image src="/images/div.framer-1rq5fs7-container.png" alt="VDA Infrastructure" fill className="object-contain" />
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
                                    <span className="text-[11px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF835D] font-bold tracking-[0.15em] uppercase">VDA Infrastructure</span>
                                </div>
                                <h3 className="text-[28px] md:text-[32px] font-medium leading-[1.2] tracking-tight text-[#E0E0E0] mb-6 md:mb-8">
                                    Fynbloc Labs builds infrastructure for Virtual<br className="hidden xl:block" />Digital Assets and crypto services.
                                </h3>
                                <ul className="space-y-3 w-full">
                                    {[
                                        "Digital wallet management systems",
                                        "Custodial solutions for asset storage",
                                        "Secure key management architecture",
                                        "Technology frameworks supporting digital asset operations"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-[#A0A0A0] text-[14px] tracking-wide">
                                            <div className="w-[4px] h-[4px] shrink-0 rounded-full bg-[#A0A0A0]"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* Item 2: Platform Operations (Text Left, Image Right) */}
                        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-[80px] w-full">

                            {/* Left Side: Text */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 relative z-10 flex flex-col items-start w-full"
                            >
                                <div className="mb-6 inline-flex items-center rounded-full border border-white/10 px-3 py-1">
                                    <span className="text-[11px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF835D] font-bold tracking-[0.15em] uppercase">Platform Operations</span>
                                </div>
                                <h3 className="text-[28px] md:text-[32px] font-medium leading-[1.2] tracking-tight text-[#E0E0E0] mb-6 md:mb-8">
                                    The Company is engaged in the<br className="hidden xl:block" />design and operation of
                                </h3>
                                <ul className="space-y-3 mb-6 md:mb-8 w-full">
                                    {[
                                        "Over-the-Counter (OTC) desks for digital assets",
                                        "Peer-to-Peer (P2P) digital asset platforms",
                                        "Digital asset trade facilitation systems",
                                        "Technology infrastructure for exchange-enabled operations"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-[#A0A0A0] text-[14px] tracking-wide">
                                            <div className="w-[4px] h-[4px] shrink-0 rounded-full bg-[#A0A0A0]"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[12px] text-[#A0A0A0]">
                                    All services are subject to applicable regulatory requirements.
                                </p>
                            </motion.div>

                            {/* Right Side: Image Box */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative w-full md:w-[480px] h-[300px] md:h-[350px] shrink-0 flex items-center justify-center z-10 bg-[#0A0A0A] border border-white/5 rounded-[24px] overflow-hidden"
                            >
                                {/* glowing cube image */}
                                <div className="relative z-10 w-[80%] h-[80%] md:w-[350px] md:h-[300px]">
                                    <Image src="/images/div.framer-1rq5fs7-container_mask-group (1).png" alt="Platform Operations" fill className="object-contain" />
                                </div>
                            </motion.div>
                        </div>

                        {/* Item 3: Compliance & IT Services (Image Left, Text Right) */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-[80px] w-full">

                            {/* Left Side: Image Box */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative w-full md:w-[480px] h-[300px] md:h-[350px] shrink-0 flex items-center justify-center z-10 bg-[#0A0A0A] border border-white/5 rounded-[24px] overflow-hidden"
                            >
                                {/* glowing cube image */}
                                <div className="relative z-10 w-[80%] h-[80%] md:w-[350px] md:h-[300px]">
                                    <Image src="/images/div.framer-1rq5fs7-container_mask-group.png" alt="Compliance & IT Services" fill className="object-contain" />
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
                                    <span className="text-[11px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF835D] font-bold tracking-[0.15em] uppercase">Compliance & IT Services</span>
                                </div>
                                <h3 className="text-[28px] md:text-[32px] font-medium leading-[1.2] tracking-tight text-[#E0E0E0] mb-6 md:mb-8">
                                    Fynbloc Labs provides technology<br className="hidden xl:block" />and advisory support in
                                </h3>
                                <ul className="space-y-3 mb-6 md:mb-8 w-full">
                                    {[
                                        "AML risk management systems",
                                        "Blockchain consultancy services",
                                        "Digital asset compliance frameworks",
                                        "Technology integration and infrastructure advisory"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-[#A0A0A0] text-[14px] tracking-wide">
                                            <div className="w-[4px] h-[4px] shrink-0 rounded-full bg-[#A0A0A0]"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[12px] text-[#A0A0A0] leading-[1.6]">
                                    Our systems are designed with compliance and operational risk<br className="hidden lg:block" />mitigation as core principles.
                                </p>
                            </motion.div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

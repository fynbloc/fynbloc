"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" ref={ref} className="scroll-mt-16 relative overflow-hidden pt-6 md:pt-20 pb-4 md:pb-8 bg-[#000000]">
            <div className="mx-auto flex justify-center w-full px-6">

                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1184px] gap-12 md:gap-[51px]">

                    {/* Left Side: 3D Graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="hidden md:block relative shrink-0 w-full md:w-[555px] h-auto aspect-square md:aspect-auto md:h-[590px] rounded-[16px] overflow-hidden bg-[#0A0A0D]"
                    >
                        <Image
                            src="/images/Main Prompt (Midjourney _ Leonardo _ SDXL)__Ultra realistic 3D render of a modern crypto finance icon, percentage board with bitcoin coin stack, matte black metal body, smooth rounded edges, premium fintech style,  1.png"
                            alt="3D Technology Render"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Right Side: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-[578px]"
                    >
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-[#1A1A1A]/30 px-4 py-1.5 backdrop-blur-sm">
                            <span className="text-[11px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF835D] font-bold tracking-[0.15em] uppercase">
                                ABOUT US
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="mb-6 text-[32px] md:text-[36px] lg:text-[40px] font-medium leading-[1.2] tracking-tight text-[#E0E0E0]">
                            About Fynbloc Labs
                        </h2>

                        {/* Bullets */}
                        <ul className="mb-12 space-y-6 md:space-y-4">
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-[14px] md:text-[15px] leading-[1.6] text-[#A0A0A0]">
                                <div className="hidden md:block mt-2.5 w-[4px] h-[4px] shrink-0 rounded-full bg-[#A0A0A0]"></div>
                                <p>Fynbloc Labs Private Limited is an Indian technology company incorporated under the Companies Act, 2013.</p>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-[14px] md:text-[15px] leading-[1.6] text-[#A0A0A0]">
                                <div className="hidden md:block mt-2.5 w-[4px] h-[4px] shrink-0 rounded-full bg-[#A0A0A0]"></div>
                                <p>We specialize in custom software development, blockchain product development, and IT consulting — helping businesses design, build, and scale digital products.</p>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-[14px] md:text-[15px] leading-[1.6] text-[#A0A0A0]">
                                <div className="hidden md:block mt-2.5 w-[4px] h-[4px] shrink-0 rounded-full bg-[#A0A0A0]"></div>
                                <p>Our team builds web applications, mobile apps, smart contracts, and decentralized products with a focus on quality, performance, and long-term maintainability.</p>
                            </li>
                        </ul>

                        {/* Columns */}
                        <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-8 md:gap-12 mt-auto">
                            {/* Vision */}
                            <div className="flex-1 flex flex-col items-center md:items-start">
                                <h4 className="text-[17px] md:text-[15px] text-[#E0E0E0] mb-4 font-medium">Our Vision</h4>
                                <p className="text-[14px] leading-[1.8] text-[#A0A0A0] text-center md:text-left">
                                    To become a trusted technology partner for businesses embracing digital transformation and Web3 innovation.
                                </p>
                            </div>

                            {/* Approach */}
                            <div className="flex-1 flex flex-col items-center md:items-start">
                                <h4 className="text-[17px] md:text-[15px] text-[#E0E0E0] mb-4 font-medium">Our Approach</h4>
                                <p className="text-[14px] leading-[1.8] text-[#A0A0A0] text-center md:text-left">
                                    Agile development process<br />
                                    Security-first architecture<br />
                                    Client-focused delivery<br />
                                    Scalable, maintainable code
                                </p>
                            </div>
                        </div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
}

"use client";

import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export default function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" ref={ref} className="scroll-mt-16 relative overflow-hidden py-8 md:py-16 bg-[#000000]">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Image src="/images/div.hero-background-pattern.png" alt="Background pattern" fill className="object-cover" />
            </div>

            <div className="mx-auto max-w-[1440px] px-6 relative z-10 flex flex-col md:flex-row items-stretch justify-center gap-12 lg:gap-24">

                {/* Left Side: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col justify-center w-full md:w-[450px] shrink-0"
                >
                    <h2 className="mb-4 text-[32px] md:text-[40px] font-semibold leading-[1.1] tracking-tight text-white lg:text-[52px]">
                        We would be<br />
                        happy to hear<br />
                        from you
                    </h2>
                    <p className="mb-6 text-[13px] leading-[1.6] text-[#A0A0A0] max-w-[400px]">
                        With Secure, Transparent, and Decentralized Solutions for the Future of the Internet, you'll experience the Future of the Internet
                    </p>

                    <div className="w-full h-[1px] bg-[#333333] mb-6"></div>

                    <div className="flex items-center gap-4 mb-8">
                        <a href="#" className="w-9 h-9 rounded-[8px] bg-[#0A0A0A] border border-[#222222] flex items-center justify-center hover:bg-[#111111] transition-colors">
                            <Facebook className="w-[16px] h-[16px] text-[#A0A0A0] hover:text-white" />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-[8px] bg-[#0A0A0A] border border-[#222222] flex items-center justify-center hover:bg-[#111111] transition-colors">
                            <Instagram className="w-[16px] h-[16px] text-[#A0A0A0] hover:text-white" />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-[8px] bg-[#0A0A0A] border border-[#222222] flex items-center justify-center hover:bg-[#111111] transition-colors">
                            <Linkedin className="w-[16px] h-[16px] text-[#A0A0A0] hover:text-white" />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-[8px] bg-[#0A0A0A] border border-[#222222] flex items-center justify-center hover:bg-[#111111] transition-colors">
                            <span className="text-[13px] font-bold text-[#A0A0A0] hover:text-white">X</span>
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 rounded-[16px] bg-[#0D0D0D] border border-[#222222] p-5 lg:p-6">
                            <MapPin className="mb-3 h-[18px] w-[18px] text-white" />
                            <h4 className="mb-2 text-[12px] font-medium text-white">Location</h4>
                            <p className="text-[11px] leading-[1.5] text-[#A0A0A0]">
                                C-611, Siddhi Vinayak,<br />
                                Jivraj Park, Ahmedabad,<br />
                                Gujarat, India.
                            </p>
                        </div>
                        <div className="flex-1 rounded-[16px] bg-[#0D0D0D] border border-[#222222] p-5 lg:p-6">
                            <Mail className="mb-3 h-[18px] w-[18px] text-white" />
                            <h4 className="mb-2 text-[12px] font-medium text-white">Email</h4>
                            <a href="mailto:contact@fynbloc.com" className="text-[11px] text-[#A0A0A0] hover:text-white transition-colors">
                                contact@Fynbloc.com
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex-1 w-full max-w-[600px]"
                >
                    <div className="rounded-[24px] bg-[#0A0A0B] border border-[#222222] p-6 lg:p-8 h-full flex flex-col justify-center">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-3">
                                    <label className="block mb-2 text-[12px] md:text-[13px] font-medium text-[#D0D0D0]">First Name</label>
                                    <input type="text" className="w-full rounded-[8px] bg-[#141414] border border-[#222222] px-4 py-3 text-[13px] text-white placeholder-[#555555] focus:border-[#FF835D] focus:outline-none transition-colors" placeholder="First Name" />
                                </div>
                                <div className="space-y-3">
                                    <label className="block mb-2 text-[12px] md:text-[13px] font-medium text-[#D0D0D0]">Last Name</label>
                                    <input type="text" className="w-full rounded-[8px] bg-[#141414] border border-[#222222] px-4 py-3 text-[13px] text-white placeholder-[#555555] focus:border-[#FF835D] focus:outline-none transition-colors" placeholder="Last Name" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-3">
                                    <label className="block mb-2 text-[12px] md:text-[13px] font-medium text-[#D0D0D0]">Email</label>
                                    <input type="email" className="w-full rounded-[8px] bg-[#141414] border border-[#222222] px-4 py-3 text-[13px] text-white placeholder-[#555555] focus:border-[#FF835D] focus:outline-none transition-colors" placeholder="Enter Your Email" />
                                </div>
                                <div className="space-y-3">
                                    <label className="block mb-2 text-[12px] md:text-[13px] font-medium text-[#D0D0D0]">Phone Number</label>
                                    <input type="tel" className="w-full rounded-[8px] bg-[#141414] border border-[#222222] px-4 py-3 text-[13px] text-white placeholder-[#555555] focus:border-[#FF835D] focus:outline-none transition-colors" placeholder="Enter your number..." />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[12px] md:text-[13px] font-medium text-[#D0D0D0]">Subject</label>
                                <input type="text" className="w-full rounded-[8px] bg-[#141414] border border-[#222222] px-4 py-3 text-[13px] text-white placeholder-[#555555] focus:border-[#FF835D] focus:outline-none transition-colors" placeholder="Enter your subject..." />
                            </div>

                            <div className="space-y-3">
                                <label className="text-[12px] md:text-[13px] font-medium text-[#D0D0D0]">Message</label>
                                <textarea rows={4} className="w-full rounded-[8px] bg-[#141414] border border-[#222222] px-4 py-3 text-[13px] text-white placeholder-[#555555] focus:border-[#FF835D] focus:outline-none transition-colors resize-none" placeholder="Enter your Message..." />
                            </div>

                            <div className="pt-4 flex justify-center mt-2">
                                <button type="button" className="rounded-full bg-transparent border border-[#FF835D] px-8 py-2.5 text-[12px] font-medium text-[#FF835D] transition-all duration-300 hover:bg-[#FF835D] hover:text-white hover:-translate-y-1 active:scale-95 active:translate-y-0 shadow-none">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

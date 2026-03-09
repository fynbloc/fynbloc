"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import EarlyAccessModal from "./early-access-modal";

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
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-start pt-20 md:pt-[160px] pb-6 md:pb-10 min-h-0 md:min-h-screen overflow-hidden bg-[#000000]">
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
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-[1000px] px-6 text-center flex flex-col items-center mt-10"
      >
        {/* Top Badge */}
        <motion.div variants={item} className="mb-8">
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/5 bg-[#1A1A1A]/30 p-1 pr-5 backdrop-blur-sm">
            <span className="rounded-full bg-[#FF835D] px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
              New
            </span>
            <span className="text-[12px] font-medium text-white/80">
              India's Most Secure Crypto Exchange
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-balance text-[36px] sm:text-[52px] md:text-[64px] font-bold leading-[1.1] tracking-tight text-white pb-4"
        >
          Building Secure Infrastructure for the <br className="hidden sm:block" />Digital Asset Ecosystem
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="mx-auto mt-2 max-w-[760px] text-[14px] md:text-[15px] leading-[1.6] text-[#A0A0A0]"
        >
          Fynbloc Labs is a Virtual Digital Asset (VDA) technology company focused on developing <br className="hidden md:block" />secure wallet infrastructure, custodial systems, and compliant digital asset platforms.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={item}
          className="mt-10"
        >
          <button
            onClick={() => setModalOpen(true)}
            className="group relative flex items-center justify-center gap-2 rounded-full border border-[#FF835D] bg-transparent px-8 py-3.5 text-[15px] font-semibold text-[#FF835D] transition-all duration-300 hover:bg-[#FF835D] hover:text-white"
          >
            <span>Request Early Access</span>
            <Image
              src="/images/request_access_arrow.svg"
              alt="Arrow Right"
              width={16}
              height={16}
              className="ml-1 transition-transform group-hover:translate-x-1"
            />
          </button>
        </motion.div>

        {/* Bottom Badges */}
        <motion.div
          variants={item}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[13px] font-medium text-[#A0A0A0]"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#121215]/50 px-5 py-2.5 backdrop-blur-sm">
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200"></span>
            </div>
            FIU-IND Compliant
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#121215]/50 px-5 py-2.5 backdrop-blur-sm">
            <Image src="/images/shield_frame.svg" alt="Shield" width={18} height={18} />
            100% Escrow Secured
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#121215]/50 px-5 py-2.5 backdrop-blur-sm">
            <Image src="/images/india-flag-icon 1.svg" alt="India Flag" width={18} height={18} />
            Built for India
          </div>
        </motion.div>
      </motion.div>

      <EarlyAccessModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import EarlyAccessModal from "./early-access-modal";
import SwapAssets from "./swap-assets";

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
    <section className="relative flex flex-col items-center justify-center pt-[120px] lg:pt-[130px] pb-[60px] min-h-screen w-full overflow-hidden bg-[#000000]">
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
      <div className="relative z-10 w-full max-w-[1240px] px-6 mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-[80px]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-[650px]"
        >
          {/* Top Badge */}
          <motion.div variants={item} className="mb-4 lg:mb-6">
            <div className="flex w-fit items-center gap-3 rounded-full border border-white/5 bg-[#1A1A1A]/30 p-1 pr-5 backdrop-blur-sm">
              <span className="rounded-full bg-[#FF835D] px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                New
              </span>
              <span className="text-[12px] font-medium text-white/80">
                India's Most Secure Crypto Exchange
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-[36px] sm:text-[48px] md:text-[52px] lg:text-[56px] font-bold leading-[1.1] tracking-tight text-white mb-6 w-full"
          >
            Building Secure<br className="hidden lg:block"/> <span className="text-[#FF835D]">Infrastructure</span> for the<br className="hidden lg:block"/> Digital Asset Ecosystem
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="mb-8 max-w-[600px] text-[14px] md:text-[15px] leading-[1.6] text-[#A0A0A0]"
          >
            Fynbloc Labs is a Virtual Digital Asset (VDA) technology company focused on developing secure wallet infrastructure, custodial systems, and compliant digital asset platforms.
          </motion.p>

          {/* Metrics block */}
          <motion.div
            variants={item}
            className="mb-8 flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12 text-left"
          >
            <div>
              <div className="text-[24px] lg:text-[28px] font-bold text-white tracking-tight">$4B+</div>
              <div className="text-[12px] font-medium text-[#A0A0A0] mt-1">Volume Processed</div>
            </div>
            <div>
              <div className="text-[24px] lg:text-[28px] font-bold text-white tracking-tight">99.99%</div>
              <div className="text-[12px] font-medium text-[#A0A0A0] mt-1">System Uptime</div>
            </div>
            <div>
              <div className="text-[24px] lg:text-[28px] font-bold text-white tracking-tight">256-bit</div>
              <div className="text-[12px] font-medium text-[#A0A0A0] mt-1">AES Encryption</div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={item}>
            <button
              onClick={() => setModalOpen(true)}
              className="group relative flex items-center justify-center gap-2 rounded-full border border-[#FF835D] bg-[#FF835D] px-8 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#ff9473] hover:border-[#ff9473] shadow-[0_0_20px_rgba(255,131,93,0.3)]"
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
        </motion.div>

        {/* Right side Widget */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="shrink-0 w-full lg:w-auto flex justify-center lg:justify-end"
        >
          <SwapAssets />
        </motion.div>
      </div>

      <EarlyAccessModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

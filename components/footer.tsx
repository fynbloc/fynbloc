"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative py-8 md:py-12 bg-[#000000]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-[1440px] px-6 lg:px-20"
      >
        <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-[#222222] pb-12 w-full">

          <div className="max-w-[450px]">
            <h4 className="text-white font-semibold mb-3 text-[15px]">About Fynbloc Labs</h4>
            <p className="text-[13px] leading-[1.8] text-[#A0A0A0]">
              Fynbloc Labs is an Indian IT services and blockchain product development company. We build custom software, Web3 products, and scalable digital solutions — helping businesses design, develop, and grow with technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-16 lg:gap-32 w-full md:w-auto h-full justify-start items-start md:mr-20">
            <div className="flex flex-col gap-6">
              <h4 className="text-[11px] font-semibold text-[#666666] tracking-wider uppercase mb-2">QUICK LINKS</h4>
              <Link href="/" className="text-[13px] text-[#A0A0A0] hover:text-white transition-colors">Home</Link>
              <Link href="/#about" className="text-[13px] text-[#A0A0A0] hover:text-white transition-colors">About</Link>
              <Link href="/#services" className="text-[13px] text-[#A0A0A0] hover:text-white transition-colors">Services</Link>
              <Link href="/#technology" className="text-[13px] text-[#A0A0A0] hover:text-white transition-colors">Technology</Link>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-[11px] font-semibold text-[#666666] tracking-wider uppercase mb-2">LEGAL</h4>
              <Link href="/legal" className="text-[13px] text-[#A0A0A0] hover:text-white transition-colors">Privacy & Legal</Link>
            </div>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-6 w-full">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Fynbloc logo"
              width={120}
              height={36}
              className="object-contain"
            />
          </Link>
          <p className="text-[12px] text-[#A0A0A0] font-medium">
            ©2024 All Rights Reserved by <span className="text-[#FF835D]">Fynblock Labs Pvt. Ltd.</span>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

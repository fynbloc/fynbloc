"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative py-16">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-6 text-center"
      >
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/images/logo.svg"
            alt="Fynbloc logo"
            width={28}
            height={28}
            style={{ width: "auto", height: "auto" }}
            className="object-contain"
          />
        </div>
        <p className="mt-4 text-sm text-muted-foreground/60">
          Building India&apos;s safe crypto P2P ecosystem.
        </p>
        <p className="mt-6 text-xs text-muted-foreground/40">
          &copy; 2026 Fynbloc. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}

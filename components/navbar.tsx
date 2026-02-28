"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 lg:px-20"
    >
      <div className="flex items-center gap-3">
        <Image
          src="/images/logo.svg"
          alt="Fynbloc logo"
          width={36}
          height={36}
          priority
          style={{ width: "auto", height: "auto" }}
          className="object-contain"
        />
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden text-sm text-muted-foreground md:block">
          Coming Soon
        </span>
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
      </div>
    </motion.nav>
  );
}

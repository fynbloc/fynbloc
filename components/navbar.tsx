"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Only track sections if we are on the home page
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      // Very simple scroll tracking based on window position
      const sections = ["about", "services", "technology", "risk-disclosure"];
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section's top is near the top of the viewport or it takes up the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }

      // If we are at the very top, set active to home
      if (window.scrollY < 100) {
        setActiveSection("home");
      } else if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Services", href: "/#services", id: "services" },
    { name: "Technology", href: "/#technology", id: "technology" },
    { name: "Risk Disclosure", href: "/#risk-disclosure", id: "risk-disclosure" }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 bg-[#0B0B0F]/80 backdrop-blur-md border-b border-[#1E1E28]/40"
    >
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/logo.png" // Update this image logic
            alt="Fynbloc logo"
            width={120}
            height={36}
            priority
            style={{ width: "auto", height: "auto" }}
            className="object-contain"
          />
        </Link>
      </div>

      <div className="hidden md:flex flex-1 items-center justify-center gap-10 text-[14px] font-medium text-[#A0A0A0]">
        {navLinks.map((link) => {
          let isActive = false;

          if (pathname === "/") {
            isActive = activeSection === link.id;
          } else if (link.id === "home") {
            isActive = false;
          }

          return (
            <Link
              key={link.id}
              href={link.href}
              className={`${isActive ? "text-[#FF835D]" : "hover:text-[#FF835D]"} transition-colors`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center">
        <Link href="#contact" scroll={true}>
          <button className="rounded-full bg-[#FF835D] px-7 py-2 text-[14px] font-medium text-white transition-all duration-300 hover:bg-[#FF835D]/90">
            Contact
          </button>
        </Link>
      </div>
    </motion.nav>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 bg-[#0B0B0F]/80 backdrop-blur-md border-b border-[#1E1E28]/40"
      >
        <div className="flex items-center">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/images/logo.png"
              alt="Fynbloc logo"
              width={120}
              height={36}
              priority
              style={{ width: "auto", height: "auto" }}
              className="object-contain w-[100px] md:w-[120px]"
            />
          </Link>
        </div>

        {/* Desktop Links */}
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

        {/* Action Buttons (Desktop & Mobile Menu Toggle) */}
        <div className="flex items-center gap-4">
          <Link href="#contact" scroll={true} onClick={closeMenu} className="hidden sm:block">
            <button className="rounded-full bg-[#FF835D] px-6 py-2 text-[14px] font-medium text-white transition-all duration-300 hover:bg-[#FF835D]/90">
              Contact
            </button>
          </Link>

          <button
            className="flex md:hidden items-center justify-center p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-[#0B0B0F] flex flex-col pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center text-[18px] font-medium text-[#A0A0A0]">
              {navLinks.map((link) => {
                let isActive = false;
                if (pathname === "/") {
                  isActive = activeSection === link.id;
                }
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={closeMenu}
                    className={`${isActive ? "text-[#FF835D]" : "text-[#A0A0A0]"}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link href="#contact" scroll={true} onClick={closeMenu} className="w-full mt-4">
                <button className="w-full rounded-full bg-[#FF835D] py-4 text-[16px] font-medium text-white shadow-lg shadow-[#FF835D]/20">
                  Contact Now
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

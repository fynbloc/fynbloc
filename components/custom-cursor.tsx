"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            // Hide cursor after 1.5 seconds of inactivity
            timeoutRef.current = setTimeout(() => {
                setIsVisible(false);
            }, 1500);

            // Check if we are hovering over a clickable element
            const target = e.target as HTMLElement;
            const isClickable =
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName.toLowerCase() === "button" ||
                target.tagName.toLowerCase() === "a" ||
                target.closest("button") ||
                target.closest("a");

            setIsHovering(!!isClickable);
        };

        const handleScroll = () => {
            setIsVisible(false);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mouseleave", handleMouseLeave);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Subtle Ambient Glow Effect that follows cursor */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="pointer-events-none fixed inset-0 z-[1] hidden md:block mix-blend-screen"
                        style={{
                            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 131, 93, 0.04), transparent 40%)`
                        }}
                    />

                    {/* Smooth Trailing Outer Ring */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            x: mousePosition.x - 20,
                            y: mousePosition.y - 20,
                            scale: isHovering ? 1.5 : 1,
                            opacity: 1,
                            backgroundColor: isHovering ? "rgba(255, 131, 93, 0.1)" : "transparent",
                            borderColor: isHovering ? "rgba(255, 131, 93, 0.8)" : "rgba(255, 131, 93, 0.4)",
                        }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 20,
                            mass: 0.5,
                        }}
                        className="pointer-events-none fixed top-0 left-0 z-[9999] h-10 w-10 rounded-full border-[1.5px] hidden md:block mix-blend-screen backdrop-blur-[2px]"
                    />

                    {/* Fast Center Dot */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            x: mousePosition.x - 4,
                            y: mousePosition.y - 4,
                            opacity: isHovering ? 0 : 1,
                            scale: isHovering ? 0 : 1,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 800,
                            damping: 30,
                            mass: 0.1,
                        }}
                        className="pointer-events-none fixed top-0 left-0 z-[10000] h-2 w-2 rounded-full bg-[#FF835D] hidden md:block shadow-[0_0_10px_2px_rgba(255,131,93,0.6)]"
                    />
                </>
            )}
        </AnimatePresence>
    );
}

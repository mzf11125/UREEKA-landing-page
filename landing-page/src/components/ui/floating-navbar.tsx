"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  navItems,
  className,
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  React.useEffect(() => {
    const toggleVisibility = () => {
      // If we're at the top, always show the navbar
      if (window.scrollY === 0) {
        setVisible(true);
      } else {
        scrollYProgress.on("change", (latestValue) => {
          // If we're scrolling down, hide the navbar
          if (latestValue > 0.08) {
            setVisible(false);
          } else {
            setVisible(true);
          }
        });
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [scrollYProgress]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-[99999]",
          className
        )}
      >
        <div className="mx-auto flex items-center justify-center space-x-4 rounded-full border border-white/10 bg-black/60 px-8 py-4 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="relative flex items-center justify-center px-4 py-2 text-sm text-white transition-colors hover:text-orange-400"
            >
              <span className="relative z-10">{item.name}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

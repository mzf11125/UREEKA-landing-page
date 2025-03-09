"use client";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LampContainerProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

export const LampContainer: React.FC<LampContainerProps> = ({
  children,
  className,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex min-h-[40vh] items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-orange-500/5",
        className
      )}
      {...props}
    >
      <div className="relative z-10 w-full">{children}</div>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,165,0,0.15), transparent 40%)`,
        }}
      />
    </div>
  );
};

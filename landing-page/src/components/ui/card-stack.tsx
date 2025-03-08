"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardStackItem {
  quote: string;
  name: string;
  title: string;
}

interface CardStackProps {
  items: CardStackItem[];
  className?: string;
}

export const CardStack = ({ items, className }: CardStackProps) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={cn("relative w-full h-72 md:h-64", className)}>
      {items.map((item, index) => (
        <motion.div
          key={item.name}
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-400/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl transition-all duration-500",
            selected === index
              ? "cursor-default opacity-100 z-20"
              : "cursor-pointer opacity-70 hover:opacity-80 z-10"
          )}
          animate={{
            rotate: selected === index ? 0 : index % 2 === 0 ? -2 : 2,
            x: selected === index ? 0 : index % 2 === 0 ? -8 : 8,
            scale: selected === index ? 1 : 0.95,
          }}
          onClick={() => setSelected(index)}
        >
          <div className="relative h-full w-full flex flex-col justify-center">
            <p className="text-amber-100/90 text-lg mb-6 italic">
              "{item.quote}"
            </p>
            <div>
              <p className="text-amber-50 font-semibold">{item.name}</p>
              <p className="text-amber-200/80 text-sm">{item.title}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

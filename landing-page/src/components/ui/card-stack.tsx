"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

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
  
  const renderButton = (index: number) => {
    if (index == 0) {
      return <div className="flex justify-end">
        <Button className={cn(
          "mt-4 max-w-min",
          "bg-gradient-to-r from-orange-500 to-amber-400",
          "hover:from-orange-600 hover:to-amber-500",
          "text-white font-medium shadow-lg shadow-orange-500/20",
          )} onClick={() => index >= items.length - 1 ? (setSelected(0)) : (setSelected(index + 1))}>
            <ArrowRightIcon></ArrowRightIcon>
        </Button>
      </div>
    } else if (index == items.length - 1) {
      return <div className="flex justify-end">
        <Button className={cn(
        "mt-4 max-w-min",
        "bg-gradient-to-r from-orange-500 to-amber-400",
        "hover:from-orange-600 hover:to-amber-500",
        "text-white font-medium shadow-lg shadow-orange-500/20",
        )} onClick={() => index <= 0 ? (setSelected(0)) : (setSelected(index - 1))}>
          <ArrowLeftIcon></ArrowLeftIcon>
        </Button>
      </div>
    } else {
      return <div className="flex justify-end gap-x-5">
        <Button className={cn(
        "mt-4 max-w-min",
        "bg-gradient-to-r from-orange-500 to-amber-400",
        "hover:from-orange-600 hover:to-amber-500",
        "text-white font-medium shadow-lg shadow-orange-500/20",
        )} onClick={() => index <= 0 ? (setSelected(0)) : (setSelected(index - 1))}>
          <ArrowLeftIcon></ArrowLeftIcon>
        </Button>
        <Button className={cn(
          "mt-4 max-w-min",
          "bg-gradient-to-r from-orange-500 to-amber-400",
          "hover:from-orange-600 hover:to-amber-500",
          "text-white font-medium shadow-lg shadow-orange-500/20",
          )} onClick={() => index >= items.length - 1 ? (setSelected(0)) : (setSelected(index + 1))}>
            <ArrowRightIcon></ArrowRightIcon>
        </Button>
      </div>
    }
  }

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
            scale: selected === index ? 1 : 0.85,
          }}
          
        >
          <div className="relative h-full w-full flex flex-col justify-center">
            <p className="text-amber-100/90 text-lg mb-6 italic ">
              &rdquo;{item.quote}&rdquo;
            </p>
            <div>
              <p className="text-amber-50 font-semibold">{item.name}</p>
              <p className="text-amber-200/80 text-sm">{item.title}</p>
            </div>
            {renderButton(index)}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

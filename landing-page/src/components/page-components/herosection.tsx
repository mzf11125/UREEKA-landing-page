"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const words = [
    {
      text: "Build.",
      className: "text-orange-500 dark:text-orange-500",
    },
    {
      text: "Innovate.",
      className: "text-amber-500 dark:text-amber-400",
    },
    {
      text: "Hack.",
      className: "text-yellow-500 dark:text-yellow-400",
    },
    {
      text: "Win.",
      className: "text-orange-600 dark:text-orange-300",
    },
    {
      text: "Ureeka!",
      className: "text-amber-600 dark:text-amber-300",
    },
  ];

  const description =
    "Join the most vibrant hackathon community and turn your wildest ideas into reality. Connect with like-minded innovators, learn from industry experts, and build projects that matter.";

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="mb-4 flex items-center justify-center">
          <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-orange-500 to-yellow-400 p-1">
            <div className="h-full w-full rounded-full bg-black/10 backdrop-blur-md flex items-center justify-center">
              <span className="text-2xl font-bold text-white">U</span>
            </div>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-medium text-amber-100 mb-4">
          Welcome to Ureeka Hackathon Club
        </h2>

        <div className="mb-8">
          <TypewriterEffect
            words={words}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          />
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <TextGenerateEffect
            words={description}
            className="text-white/90 text-lg"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button
            size="lg"
            className={cn(
              "bg-gradient-to-r from-orange-500 to-amber-400",
              "hover:from-orange-600 hover:to-amber-500",
              "text-white font-medium shadow-lg shadow-orange-500/20",
              "hover:shadow-xl hover:shadow-orange-500/40",
              "transition-all duration-200"
            )}
            onClick={() =>
              document
                .getElementById("join")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Join Waitlist
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-orange-400/30 text-orange-50 hover:bg-orange-500/10"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </Button>
        </div>
      </motion.div>

      {/* Abstract shape decorations */}
      <div className="absolute top-1/3 -left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-10 w-60 h-60 bg-yellow-500/20 rounded-full blur-3xl" />
    </div>
  );
};

export default HeroSection;

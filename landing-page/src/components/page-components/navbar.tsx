"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import {
  IconHome,
  IconTrophy,
  IconInfoCircle,
  IconUserPlus,
} from "@tabler/icons-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#",
      icon: <IconHome className="h-4 w-4 text-orange-300" />,
    },
    {
      name: "Achievements",
      link: "#achievements",
      icon: <IconTrophy className="h-4 w-4 text-orange-300" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconInfoCircle className="h-4 w-4 text-orange-300" />,
    },
    {
      name: "Join",
      link: "#join",
      icon: <IconUserPlus className="h-4 w-4 text-orange-300" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

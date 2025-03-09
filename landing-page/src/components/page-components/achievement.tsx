"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { TracingBeam } from "@/components/ui/tracing-beam";

const Achievement = () => {
  const achievements = [
    {
      title: "National Champions",
      description: "First place at the National Collegiate Hackathon 2024",
      icon: "🏆",
      year: "2024",
    },
    {
      title: "Innovation Award",
      description: "Most innovative project at TechCrunch Disrupt Hackathon",
      icon: "💡",
      year: "2023",
    },
    {
      title: "Best Social Impact",
      description: "Created solutions that address pressing social challenges",
      icon: "🌍",
      year: "2023",
    },
    {
      title: "Microsoft Sponsor Prize",
      description: "Best use of Azure AI services in a hackathon project",
      icon: "☁️",
      year: "2022",
    },
  ];

  const teams = [
    {
      id: 1,
      name: "Cathlyn Shanice",
      image: "/ketua23.png",
      designation: "UREEKA Chairman 2025",
    },
    {
      id: 2,
      name: "Ivan Wijaya",
      image: "/ivancrop.jpg",
      designation: "Vice Chairman",
    },
    {
      id: 3,
      name: "Roderich Cavine Chow",
      image: "/api/placeholder/150/150",
      designation: "Vice Chairman",
    },
    {
      id: 4,
      name: "Muhammad Zidan Fatonie",
      image: "/zidanfix.jpg",
      designation: "Manager",
    },
  ];

  return (
    <div className="py-8">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300 mb-4"
        >
          Our Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-amber-100 max-w-2xl mx-auto"
        >
          Celebrating excellence and innovation across multiple hackathon
          competitions
        </motion.p>
      </div>

      {/* Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <CardContainer className="inter-var w-full">
              <CardBody
                className={cn(
                  "bg-gradient-to-br from-orange-500/10 to-amber-400/10",
                  "border border-white/10 backdrop-blur-sm",
                  "relative group/card rounded-xl h-auto"
                )}
              >
                <div className="h-full p-6 flex flex-col">
                  <CardItem translateZ="50" className="text-4xl mb-4">
                    {achievement.icon}
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-amber-50 mb-2"
                  >
                    {achievement.title}
                  </CardItem>
                  <CardItem
                    translateZ="40"
                    className="text-amber-200 text-sm mb-4"
                  >
                    {achievement.year}
                  </CardItem>
                  <CardItem
                    translateZ="30"
                    className="text-amber-100/80 text-sm"
                  >
                    {achievement.description}
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>

      {/* Team Showcase */}
      <div className="text-center mb-12">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-amber-50 mb-4"
        >
          Our Members
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-amber-100/80 max-w-2xl mx-auto mb-8"
        >
          Meet the brilliant minds behind our success
        </motion.p>

        <div className="flex flex-wrap justify-center gap-8">
          <AnimatedTooltip items={teams} />
        </div>
      </div>

      {/* Timeline of Achievements */}
      <div className="max-w-4xl mx-auto mt-24">
        <TracingBeam className="px-6">
          <div className="text-amber-50">
            <h3 className="text-2xl font-bold mb-8">Our Hackathon Journey</h3>

            {/* Timeline items */}
            <div className="space-y-12">
              <TimelineItem
                year="2024"
                title="National Champions"
                description="Our team 'Quantum Coders' won first place at the National Collegiate Hackathon with their AI-driven solution for sustainable agriculture."
              />
              <TimelineItem
                year="2023"
                title="Multiple Award Wins"
                description="Secured both the Innovation Award and Social Impact recognition at major hackathons across the country."
              />
              <TimelineItem
                year="2022"
                title="First Corporate Sponsorship"
                description="Received Microsoft's sponsor prize and began partnerships with leading tech companies."
              />
              <TimelineItem
                year="2021"
                title="Club Foundation"
                description="Ureeka Hackathon Club was founded by a group of passionate students looking to foster innovation and technical excellence."
              />
            </div>
          </div>
        </TracingBeam>
      </div>
    </div>
  );
};

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem = ({ year, title, description }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative border-l-2 border-orange-400/30 pl-8 pb-8"
    >
      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-amber-100" />
      </div>
      <div className="text-amber-400 font-bold mb-1">{year}</div>
      <h4 className="text-xl font-semibold text-amber-50 mb-2">{title}</h4>
      <p className="text-amber-100/80">{description}</p>
    </motion.div>
  );
};

export default Achievement;

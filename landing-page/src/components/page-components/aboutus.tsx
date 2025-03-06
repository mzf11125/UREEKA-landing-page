"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
import { LampContainer } from "@/components/ui/lamp";

const Aboutus = () => {
  const stats = [
    { value: "25+", label: "Hackathons" },
    { value: "500+", label: "Members" },
    { value: "40+", label: "Projects" },
    { value: "15", label: "Universities" },
  ];

  const testimonials = [
    {
      quote:
        "Joining Ureeka changed my entire college experience. I got to work on real problems and even landed my dream internship!",
      name: "Alex Johnson",
      title: "Computer Science, Stanford",
    },
    {
      quote:
        "The mentorship and community at Ureeka is unmatched. I went from knowing basic HTML to building full-stack applications.",
      name: "Sophia Chen",
      title: "Data Science, MIT",
    },
    {
      quote:
        "My team formed at an Ureeka hackathon and we're now working on turning our project into a startup. Life-changing experience!",
      name: "Marcus Williams",
      title: "Business & CS, Berkeley",
    },
  ];

  return (
    <div className="py-8">
      {/* Main About Section */}
      <LampContainer>
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-200 mb-4"
        >
          About Ureeka
        </motion.h2>
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center text-amber-100/90 max-w-2xl mx-auto mb-12"
        >
          Fostering innovation, collaboration, and technical excellence in the
          next generation of tech leaders
        </motion.p>
      </LampContainer>

      {/* Mission and Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-orange-500/10 to-amber-400/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
        >
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-orange-500/20 flex items-center justify-center mr-4">
              <span className="text-orange-400 text-xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-amber-50">Our Mission</h3>
          </div>
          <p className="text-amber-100/80">
            To create an inclusive community where students can develop their
            technical skills, collaborate on innovative projects, and prepare
            for successful careers in technology through hands-on hackathon
            experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-amber-400/10 to-orange-500/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
        >
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-4">
              <span className="text-amber-400 text-xl">👁️</span>
            </div>
            <h3 className="text-2xl font-bold text-amber-50">Our Vision</h3>
          </div>
          <p className="text-amber-100/80">
            To become the premier hackathon community that bridges the gap
            between academic learning and industry demands, empowering students
            to solve real-world problems with technology and fostering the next
            generation of tech innovators.
          </p>
        </motion.div>
      </div>

      {/* Key Stats */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-amber-50 mb-4"
          >
            By the Numbers
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                {stat.value}
              </div>
              <div className="text-amber-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-20">
        {/* <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-amber-50 mb-4"
          >
            What Our Members Say
          </motion.h3>
        </div> */}

        <div className="max-w-4xl mx-auto">
          {/* <CardStack items={testimonials} /> */}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-20"
      >
        <h3 className="text-2xl font-bold text-amber-50 mb-4">
          Ready to Join Ureeka?
        </h3>
        <p className="text-amber-100/80 max-w-2xl mx-auto mb-8">
          Be part of a community that's shaping the future of technology through
          creativity, collaboration, and code.
        </p>
        <Button
          size="lg"
          className={cn(
            "bg-gradient-to-r from-orange-500 to-amber-400",
            "hover:from-orange-600 hover:to-amber-500",
            "text-white font-medium shadow-lg shadow-orange-500/20",
            "hover:shadow-xl hover:shadow-orange-500/40"
          )}
          onClick={() =>
            document
              .getElementById("join")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Join Waitlist
        </Button>
      </motion.div>
    </div>
  );
};

export default Aboutus;

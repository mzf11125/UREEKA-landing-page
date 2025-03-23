"use client";

import { FloatingNavDemo } from "@/components/page-components/navbar";
import Achievement from "@/components/page-components/achievement";
import Aboutus from "@/components/page-components/aboutus";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/page-components/herosection";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { SparklesCore } from "@/components/ui/sparkles";
import Form from "@/components/page-components/form";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background with orange-yellow gradient */}
      <BackgroundGradientAnimation
        containerClassName="fixed inset-0 -z-10 transition-all duration-1000"
        className="h-full w-full"
        // colors={["#FFA500", "#FFCC00", "#FF8C00", "#FFC107", "#FFD700"]}
      />
      {/* Navigation */}
      <div className="sticky top-0 z-50">
        <FloatingNavDemo />
      </div>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 px-6 md:px-12">
        <HeroSection />
      </section>
      {/* Achievements Section with Sparkles Animation */}
      <section id="achievements" className="relative py-20 px-6 md:px-12">
        <div className="absolute inset-0 h-full w-full">
          <SparklesCore
            id="achievements-sparkles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={20}
            className="h-full w-full"
            particleColor="#FF8C00"
          />
        </div>
        <div className="relative z-10">
          <Achievement />
        </div>
      </section>
      {/* About Us Section */}
      <section id="about" className="relative py-20 px-6 md:px-12">
        <Aboutus />
      </section>
      {/* Form Section */}
      <Form />
      {/* Footer */}
      <footer className="py-8 px-6 text-center text-amber-100/80 border-t border-orange-500/20">
        <p>
          © {new Date().getFullYear()} Ureeka Hackathon Club. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}

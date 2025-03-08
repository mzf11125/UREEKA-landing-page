"use client";

import { FloatingNavDemo } from "../components/page-components/navbar";
import Achievement from "../components/page-components/achievement";
import Aboutus from "@/components/page-components/aboutus";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/page-components/herosection";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { SparklesCore } from "@/components/ui/sparkles";

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
      <section
        id="join"
        className="relative py-24 px-6 md:px-12 flex items-center justify-center"
      >
        <div className="relative z-10 w-full max-w-lg mx-auto bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-50 mb-2">
              Join Ureeka
            </h2>
            <p className="text-amber-100">
              Be part of our next hackathon adventure!
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Coming Soon! Registrations are currently closed.");
              e.currentTarget.reset();
            }}
            className="flex flex-col gap-4 w-full"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-amber-50"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="p-3 rounded-md border border-orange-300/30 bg-orange-50/10 backdrop-blur-sm text-white placeholder:text-orange-100/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your full name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-amber-50"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="p-3 rounded-md border border-orange-300/30 bg-orange-50/10 backdrop-blur-sm text-white placeholder:text-orange-100/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="university"
                className="text-sm font-medium text-amber-50"
              >
                University
              </label>
              <input
                id="university"
                type="text"
                required
                className="p-3 rounded-md border border-orange-300/30 bg-orange-50/10 backdrop-blur-sm text-white placeholder:text-orange-100/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your university name"
              />
            </div>
            <Button
              type="submit"
              className="mt-4 bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-white font-medium py-3 px-4 rounded-md shadow-lg shadow-orange-500/20 transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/40"
            >
              Join Waitlist
            </Button>
            <p className="text-center text-amber-200 text-sm mt-2">
              Registrations are currently closed. Join our waitlist to be
              notified when they open!
            </p>
          </form>
        </div>
      </section>

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

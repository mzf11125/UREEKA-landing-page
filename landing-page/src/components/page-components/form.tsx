/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

const Form = () => {
  return (
    <div>
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
    </div>
  );
};

export default Form;

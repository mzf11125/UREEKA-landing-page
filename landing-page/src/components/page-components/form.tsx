"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Check if Supabase client is initialized
if (!supabaseUrl || !supabaseKey) {
  console.error(
    "Supabase URL or Key is missing. Please check your environment variables."
  );
}

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    region: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  interface SupabaseResponse {
    data: WaitlistEntry[] | null;
    error: { message: string } | null;
  }

  interface WaitlistEntry {
    name: string;
    email: string;
    region: string;
    created_at: string; // changed to string to store ISO date
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    // Check if Supabase client is initialized
    if (!supabaseUrl || !supabaseKey) {
      console.error(
        "Supabase URL or Key is missing. Please check your environment variables."
      );
      setMessage("Configuration error. Please contact support.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Insert data into Supabase table (assuming a table named 'waitlist')
      const { data, error }: SupabaseResponse = await supabase
        .from("waitlist")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            region: formData.region,
            created_at: new Date().toISOString(), // fix: use ISO string format
          } as WaitlistEntry,
        ]);

      if (error) throw error;

      // Success
      setMessage("Successfully joined the waitlist!");
      (e.target as HTMLFormElement).reset();
      setFormData({ name: "", email: "", region: "" });
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      setMessage("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Join UREEKA
            </h2>
            <p className="text-amber-100">
              Be part of our next hackathon adventure!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
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
                onChange={handleChange}
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
                onChange={handleChange}
                className="p-3 rounded-md border border-orange-300/30 bg-orange-50/10 backdrop-blur-sm text-white placeholder:text-orange-100/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="region"
                className="text-sm font-medium text-amber-50"
              >
                Region
              </label>
              <input
                id="region"
                type="text"
                required
                onChange={handleChange}
                className="p-3 rounded-md border border-orange-300/30 bg-orange-50/10 backdrop-blur-sm text-white placeholder:text-orange-100/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your region"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-white font-medium py-3 px-4 rounded-md shadow-lg shadow-orange-500/20 transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/40"
            >
              {isSubmitting ? "Processing..." : "Join Waitlist"}
            </Button>
            {message && (
              <p
                className={`text-center text-sm mt-2 ${
                  message.includes("Error") ? "text-red-300" : "text-green-300"
                }`}
              >
                {message}
              </p>
            )}
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

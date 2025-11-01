"use client";

import Image from "next/image";
import React, { useState } from "react";
import AddressInput from "./components/AddressInput";
import StorytellingSection from "./components/StorytellingSection";
import { useRouter } from "next/navigation";

export default function Home() {
  const [formData, setFormData] = useState({ address: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: formData.address }),
      });

      const data = await res.json();
      const feedback = data.feedback || "Your listing score is ready.";

      // Redirect user to dashboard page
      router.push(`/dashboard?feedback=${encodeURIComponent(feedback)}`);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubscribe = () => {
    // Placeholder for subscription logic
    alert("Subscription feature coming soon!");
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Dashboard Style */}
      <section className="relative min-h-[650px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/habersham.png"
            alt="Beautiful Luxury Home"
            fill
            className="object-cover opacity-60"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-4 py-20">
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
              See Where Your Listing Stands
            </h1>
            <p className="text-white/90 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-balance">
              Get a smart evaluation on why your home might not be selling — and
              discover proven ways to attract more buyers fast.
            </p>
          </div>

          {/* Address Form - Dashboard Card Style */}
          <div className="max-w-2xl mx-auto animate-slideUp">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-transparent backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <AddressInput
                  onSelect={(addr) =>
                    setFormData({ ...formData, address: addr })
                  }
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-6 bg-primary-500 text-white py-4 px-8 rounded-full font-semibold text-lg hover:bg-primary-600 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Analyzing..." : "Analyze My Listing"}
                </button>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  No credit card required • Results in 60 seconds
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Storytelling Section - Emotional Connection */}
      <StorytellingSection />

      {/* Footer - Dashboard Style */}
      <footer className="bg-white mt-20 py-8 text-center text-gray-600 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm">© 2025 ListingRevive. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

/* -------------------- Header - Dashboard Style -------------------- */
const Header = () => (
  <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Image
            src="/smartrealtortool.svg"
            alt="Smart Realtor Tools Logo"
            width={36}
            height={36}
            className="cursor-pointer"
            priority
          />
          <nav className="hidden md:flex space-x-2">
            <a
              href="#about"
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all"
            >
              About
            </a>
            <a
              href="#plans"
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all"
            >
              Plans
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all"
            >
              Contact
            </a>
          </nav>
        </div>
        <MobileMenu />
      </div>
    </div>
  </header>
);

/* -------------------- Stat Card - Dashboard Style -------------------- */
const StatCard = ({
  percentage,
  description,
  color,
  textColor,
}: {
  percentage: string;
  description: string;
  color: string;
  textColor: string;
}) => (
  <div
    className={`${color} p-8 rounded-lg shadow-card hover:shadow-hover transition-all transform hover:-translate-y-1`}
  >
    <p className={`text-5xl font-bold ${textColor} mb-4`}>{percentage}</p>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </div>
);

/* -------------------- Feature Card - Dashboard Style -------------------- */
const FeatureCard = ({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) => (
  <div className="bg-white p-8 rounded-lg shadow-card hover:shadow-hover transition-all transform hover:-translate-y-1">
    <div className="flex justify-center mb-6">
      {icon.startsWith("/") ? (
        <Image src={icon} alt={title} width={56} height={56} />
      ) : (
        <span className="text-4xl">{icon}</span>
      )}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center">
      {title}
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed text-center">{text}</p>
  </div>
);

/* -------------------- Mobile Menu - Dashboard Style -------------------- */
const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
        aria-label="Toggle menu"
      >
        <div
          className="w-6 h-0.5 bg-gray-900 mb-1.5 transition-all duration-300"
          style={{ transform: open ? "rotate(45deg) translateY(8px)" : "none" }}
        />
        <div
          className="w-6 h-0.5 bg-gray-900 mb-1.5 transition-all duration-300"
          style={{ opacity: open ? 0 : 1 }}
        />
        <div
          className="w-6 h-0.5 bg-gray-900 transition-all duration-300"
          style={{
            transform: open ? "rotate(-45deg) translateY(-8px)" : "none",
          }}
        />
      </button>

      <div
        className={`absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ minWidth: "200px" }}
      >
        <nav className="flex flex-col">
          <a
            href="#about"
            className="px-6 py-4 border-b hover:bg-gray-50 transition text-gray-700"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            href="#plans"
            className="px-6 py-4 border-b hover:bg-gray-50 transition text-gray-700"
            onClick={() => setOpen(false)}
          >
            Plans
          </a>
          <a
            href="#contact"
            className="px-6 py-4 hover:bg-gray-50 transition text-gray-700"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

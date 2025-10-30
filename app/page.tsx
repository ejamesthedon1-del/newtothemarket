"use client";

import Image from "next/image";
import React, { useState } from "react";
import AddressInput from "./components/AddressInput";
import { useRouter } from "next/navigation";

export default function Home() {
  const [formData, setFormData] = useState({ address: "" });
  const [loading, setLoading] = useState(false);
  const [aiFeedback, setAiFeedback] = useState("");
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
      setAiFeedback("Error fetching AI feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Fade-in animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out forwards;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/habersham.png"
            alt="Beautiful Luxury Home"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-4 text-center">
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 mb-10">
            <div className="md:w-1/2 text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-0 leading-tight">
                See where your listing stands in the market
              </h2>
            </div>

            <div className="md:w-1/2 text-left">
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                Get a smart evaluation on why your home might not be selling —
                and discover proven ways to attract more buyers fast.
              </p>
            </div>
          </div>

          {/* Address Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-xs sm:max-w-sm mx-auto md:mx-0"
          >
            <AddressInput
              onSelect={(addr) => setFormData({ ...formData, address: addr })}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-white text-black py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition text-sm shadow-xl whitespace-nowrap w-full md:w-auto"
            >
              {loading ? "Analyzing..." : "Get My Free Listing Health Report"}
            </button>
            <p className="text-sm text-white/70 mt-2">
              No credit card required • Results in 60 seconds
            </p>
          </form>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Homes Sit on the Market
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gray-100 rounded-xl shadow-sm">
            <p className="text-4xl font-bold text-black mb-2">72%</p>
            <p className="text-gray-600">
              of homes fail to attract buyers quickly due to poor listing photos.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow-sm">
            <p className="text-4xl font-bold text-black mb-2">65%</p>
            <p className="text-gray-600">
              of listings get fewer views because of ineffective descriptions.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow-sm">
            <p className="text-4xl font-bold text-black mb-2">58%</p>
            <p className="text-gray-600">
              of homes stay longer on the market due to poor promotion.
            </p>
          </div>
        </div>
      </section>

      {/* How It Helps Section */}
      <section className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">
          How ListingRevive Helps You Sell Faster
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <FeatureCard
            icon="/chatbot.png"
            title="Stunning Listing Photos"
            text="We optimize your home's photos with professional lighting and staging guidance — even without hiring a photographer."
          />
          <FeatureCard
            icon="✍️"
            title="Compelling Descriptions"
            text="Our AI writes descriptions that highlight your home's unique features, so buyers actually want to visit."
          />
          <FeatureCard
            icon="📣"
            title="Smart Marketing"
            text="We boost your listing where buyers are — social media, local platforms, and targeted outreach."
          />
          <FeatureCard
            icon="📊"
            title="Personalized Insights"
            text="Get tailored advice based on your home's strengths and market trends — small tweaks that make a big difference."
          />
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Get AI Analysis
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white mt-16 py-6 text-center text-gray-600 border-t">
        <p>© 2025 ListingRevive. All rights reserved.</p>
      </footer>
    </main>
  );
}

/* -------------------- Header -------------------- */
const Header = () => (
  <header className="relative flex items-center justify-between px-6 py-4 bg-white shadow-sm">
    <div className="flex items-center space-x-6">
      <Image
        src="/smartrealtortool.svg"
        alt="Listing Revive Logo"
        width={60}
        height={60}
        className="opacity-0 animate-fadeIn cursor-pointer"
      />
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        <a href="#about" className="hover:text-gray-600 transition">
          About
        </a>
        <a href="#plans" className="hover:text-gray-600 transition">
          Plans
        </a>
        <a href="#contact" className="hover:text-gray-600 transition">
          Contact
        </a>
      </nav>
    </div>
    <MobileMenu />
  </header>
);

/* -------------------- Feature Card -------------------- */
const FeatureCard = ({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) => (
  <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
    <div className="flex justify-center mb-4">
      {icon.startsWith("/") ? (
        <Image src={icon} alt={title} width={64} height={64} />
      ) : (
        <span className="text-3xl">{icon}</span>
      )}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{text}</p>
  </div>
);

/* -------------------- Mobile Menu -------------------- */
const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
      >
        <div
          className="w-6 h-0.5 bg-black mb-1 transition-all duration-300"
          style={{ transform: open ? "rotate(45deg) translateY(8px)" : "none" }}
        />
        <div
          className="w-6 h-0.5 bg-black mb-1 transition-all duration-300"
          style={{ opacity: open ? 0 : 1 }}
        />
        <div
          className="w-6 h-0.5 bg-black transition-all duration-300"
          style={{
            transform: open ? "rotate(-45deg) translateY(-8px)" : "none",
          }}
        />
      </button>

      <div
        className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 z-50 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ minWidth: "180px", maxWidth: "220px" }}
      >
        <nav className="flex flex-col">
          <a
            href="#about"
            className="px-4 py-3 border-b hover:bg-gray-100 transition"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            href="#plans"
            className="px-4 py-3 border-b hover:bg-gray-100 transition"
            onClick={() => setOpen(false)}
          >
            Plans
          </a>
          <a
            href="#contact"
            className="px-4 py-3 hover:bg-gray-100 transition"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

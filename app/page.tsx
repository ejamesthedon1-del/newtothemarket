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
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 text-gray-900">
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
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background with Purple Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/habersham.png"
            alt="Beautiful Luxury Home"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-purple-800/60 to-purple-600/50"></div>
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
              className="bg-white text-purple-700 py-3 px-6 rounded-full font-semibold hover:bg-purple-50 transition text-sm shadow-xl whitespace-nowrap w-full md:w-auto"
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
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Why Homes Sit on the Market
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <p className="text-5xl font-bold text-white mb-3">72%</p>
            <p className="text-white/90 text-sm leading-relaxed">
              of homes fail to attract buyers quickly due to poor listing photos.
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <p className="text-5xl font-bold text-white mb-3">65%</p>
            <p className="text-white/90 text-sm leading-relaxed">
              of listings get fewer views because of ineffective descriptions.
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <p className="text-5xl font-bold text-white mb-3">58%</p>
            <p className="text-white/90 text-sm leading-relaxed">
              of homes stay longer on the market due to poor promotion.
            </p>
          </div>
        </div>
      </section>

      {/* How It Helps Section */}
      <section className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
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
            className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get AI Analysis
          </a>
        </div>
      </section>

      {/* Real Estate Marketing Info Sections */}
      <section className="max-w-6xl mx-auto mt-20 px-4 mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
          Real Estate Marketing Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Info Card 1 */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-purple-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl">
                🏠
              </div>
              <h3 className="text-xl font-bold ml-4 text-gray-800">Professional Photography</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              High-quality photos are essential for attracting buyers. Professional photography can increase listing views by up to 118% and help homes sell faster. Proper lighting, angles, and staging make all the difference in showcasing your property's best features.
            </p>
          </div>

          {/* Info Card 2 */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-purple-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl">
                📱
              </div>
              <h3 className="text-xl font-bold ml-4 text-gray-800">Social Media Marketing</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Leverage the power of social media to reach potential buyers where they spend their time. Strategic posts on Facebook, Instagram, and LinkedIn can dramatically expand your listing's reach and generate qualified leads through targeted advertising.
            </p>
          </div>

          {/* Info Card 3 */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-purple-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl">
                ✨
              </div>
              <h3 className="text-xl font-bold ml-4 text-gray-800">Virtual Staging</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Virtual staging allows buyers to visualize the potential of empty spaces without the cost of physical staging. This cost-effective solution helps buyers emotionally connect with the property and can reduce time on market significantly.
            </p>
          </div>

          {/* Info Card 4 */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-purple-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold ml-4 text-gray-800">Targeted Advertising</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Reach the right buyers with precision-targeted digital advertising campaigns. By analyzing buyer demographics and behavior, we ensure your listing appears in front of qualified prospects who are actively searching for properties like yours.
            </p>
          </div>
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
  <header className="relative flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md shadow-sm border-b border-purple-100">
    <div className="flex items-center space-x-6">
      <Image
        src="/smartrealtortool.svg"
        alt="Listing Revive Logo"
        width={60}
        height={60}
        className="opacity-0 animate-fadeIn cursor-pointer"
      />
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        <a href="#about" className="text-gray-700 hover:text-purple-600 transition">
          About
        </a>
        <a href="#plans" className="text-gray-700 hover:text-purple-600 transition">
          Plans
        </a>
        <a href="#contact" className="text-gray-700 hover:text-purple-600 transition">
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
  <div className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100">
    <div className="flex justify-center mb-6">
      {icon.startsWith("/") ? (
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center p-3">
          <Image src={icon} alt={title} width={40} height={40} className="brightness-0 invert" />
        </div>
      ) : (
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
          <span className="text-4xl">{icon}</span>
        </div>
      )}
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
  </div>
);

/* -------------------- Mobile Menu -------------------- */
const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
      >
        <div
          className="w-6 h-0.5 bg-purple-600 mb-1 transition-all duration-300"
          style={{ transform: open ? "rotate(45deg) translateY(8px)" : "none" }}
        />
        <div
          className="w-6 h-0.5 bg-purple-600 mb-1 transition-all duration-300"
          style={{ opacity: open ? 0 : 1 }}
        />
        <div
          className="w-6 h-0.5 bg-purple-600 transition-all duration-300"
          style={{
            transform: open ? "rotate(-45deg) translateY(-8px)" : "none",
          }}
        />
      </button>

      <div
        className={`absolute top-full right-0 mt-2 bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 z-50 border border-purple-100 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ minWidth: "180px", maxWidth: "220px" }}
      >
        <nav className="flex flex-col">
          <a
            href="#about"
            className="px-4 py-3 border-b border-purple-50 hover:bg-purple-50 transition text-gray-700"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            href="#plans"
            className="px-4 py-3 border-b border-purple-50 hover:bg-purple-50 transition text-gray-700"
            onClick={() => setOpen(false)}
          >
            Plans
          </a>
          <a
            href="#contact"
            className="px-4 py-3 hover:bg-purple-50 transition text-gray-700"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

"use client";

import React from "react";
import Image from "next/image";

export default function LogoVariations() {
  const logos = [
    {
      id: 1,
      name: "Brain-House Fusion",
      file: "logo-v1-brain-house-fusion.svg",
      description: "House shape with brain texture overlay. Perfect blend of real estate and AI intelligence.",
      features: ["Brain Pattern", "Classic House", "Animated Pulse"],
    },
    {
      id: 2,
      name: "Hexagon Brain Home",
      file: "logo-v2-hexagon-brain-home.svg",
      description: "Inspired by your reference. Geometric hexagon with brain icon and house structure.",
      features: ["Hexagonal Design", "Brain Icon", "Connection Nodes"],
    },
    {
      id: 3,
      name: "Brain Roof",
      file: "logo-v3-brain-roof.svg",
      description: "Creative concept where the brain forms the roof of the house. Unique and memorable.",
      features: ["Brain as Roof", "Organic Shape", "Smart Indicator"],
    },
    {
      id: 4,
      name: "Geometric Brain House",
      file: "logo-v4-geometric-brain-house.svg",
      description: "Neural network pattern inside geometric house. Modern tech aesthetic.",
      features: ["Neural Network", "Geometric", "Connected Nodes"],
    },
    {
      id: 5,
      name: "Circuit Brain Home",
      file: "logo-v5-circuit-brain-home.svg",
      description: "Circuit board brain pattern. Emphasizes technology and smart systems.",
      features: ["Circuit Pattern", "Tech Style", "Pulse Animation"],
    },
    {
      id: 6,
      name: "Split Brain House",
      file: "logo-v6-split-brain-house.svg",
      description: "Brain on top, house on bottom. Clear separation showing intelligence + real estate.",
      features: ["Split Design", "Dual Concept", "Synapses"],
    },
    {
      id: 7,
      name: "Minimal Line Art",
      file: "logo-v7-minimal-brain-home.svg",
      description: "Clean, minimal line art style. Professional and versatile for all uses.",
      features: ["Minimal", "Line Art", "Versatile"],
    },
    {
      id: 8,
      name: "3D Isometric",
      file: "logo-v8-3d-brain-house.svg",
      description: "3D isometric style with depth. Modern and eye-catching design.",
      features: ["3D Effect", "Isometric", "Depth"],
    },
    {
      id: 9,
      name: "Abstract Flow",
      file: "logo-v9-abstract-brain-home.svg",
      description: "Flowing brain waves through house. Dynamic and innovative.",
      features: ["Animated Waves", "Abstract", "Dynamic"],
    },
    {
      id: 10,
      name: "Shield Badge",
      file: "logo-v10-shield-brain-home.svg",
      description: "Shield/badge design with house and brain. Trust and intelligence combined.",
      features: ["Shield Shape", "Professional", "Connected"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            SmartRealtorTool.com Logo Variations
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            10 Innovative Designs Combining Brain & Home Icons
          </p>
          <p className="text-gray-500">
            Inspired by your reference design with modern AI aesthetics
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="bg-white rounded-3xl p-6 shadow-card hover:shadow-hover transition-all transform hover:-translate-y-2"
            >
              {/* Logo Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Version {logo.id}
                </span>
              </div>

              {/* Logo Display */}
              <div className="flex justify-center items-center min-h-[200px] bg-gradient-to-br from-gray-50 to-white rounded-2xl mb-4 p-6">
                <Image
                  src={`/${logo.file}`}
                  alt={logo.name}
                  width={180}
                  height={180}
                />
              </div>

              {/* Logo Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {logo.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {logo.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {logo.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="flex gap-2">
                <a
                  href={`/${logo.file}`}
                  download
                  className="flex-1 text-center bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-600 transition"
                >
                  Download SVG
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Design Notes */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Design Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary-600 mb-4">
                🏠 Home Elements
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Classic house shapes representing real estate
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Roof, door, and window elements for recognition
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Geometric and organic variations
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary-600 mb-4">
                🧠 Brain Elements
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Brain patterns showing AI intelligence
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Neural networks and circuit designs
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Synapses and connection nodes
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary-600 mb-4">
                🎨 Color Palette
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Primary Blue (#5B7FFF) - Trust & Technology
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Purple Accent (#7C3AED) - Innovation
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Light Blue (#60A5FA) - Smart Indicators
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary-600 mb-4">
                ✨ Special Features
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Animated pulse effects on several versions
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Scalable SVG format for all sizes
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Professional and modern aesthetics
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 md:p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6">💡 Our Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Most Innovative</h3>
              <p className="text-white/90 mb-2">Version 3: Brain Roof</p>
              <p className="text-sm text-white/80">
                Unique concept that stands out and is highly memorable
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Most Professional</h3>
              <p className="text-white/90 mb-2">Version 10: Shield Badge</p>
              <p className="text-sm text-white/80">
                Conveys trust, security, and intelligence perfectly
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Most Versatile</h3>
              <p className="text-white/90 mb-2">Version 7: Minimal Line Art</p>
              <p className="text-sm text-white/80">
                Works great at any size and on any background
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <a
            href="/"
            className="inline-block bg-primary-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            ← Back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
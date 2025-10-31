"use client";

import React from "react";
import Image from "next/image";

export default function LogoPreview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Smart Realtor Tool.com
          </h1>
          <p className="text-xl text-gray-600">
            Choose Your Logo Design - Modern, Professional, Innovative
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Option 1: Animated Modern */}
          <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-hover transition-all transform hover:-translate-y-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Option 1: Animated Modern
            </h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Dynamic and engaging with animated elements. Features AI brain icon, 
              data visualization bars, and pulsing effects. Perfect for conveying 
              innovation and cutting-edge technology.
            </p>
            <div className="flex justify-center items-center min-h-[250px] bg-gradient-to-br from-gray-50 to-white rounded-2xl mb-6 p-8">
              <Image
                src="/smartrealtortool-new.svg"
                alt="Animated Modern Logo"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                Animated
              </span>
              <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                AI Elements
              </span>
              <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                Data Viz
              </span>
              <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                Dynamic
              </span>
            </div>
          </div>

          {/* Option 2: Minimal Professional */}
          <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-hover transition-all transform hover:-translate-y-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Option 2: Minimal Professional
            </h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Clean and sophisticated with circuit pattern details. Features subtle 
              tech indicators and an AI badge. Ideal for a professional, trustworthy 
              appearance.
            </p>
            <div className="flex justify-center items-center min-h-[250px] bg-gradient-to-br from-gray-50 to-white rounded-2xl mb-6 p-8">
              <Image
                src="/smartrealtortool-minimal.svg"
                alt="Minimal Professional Logo"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                Clean
              </span>
              <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                Professional
              </span>
              <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                Subtle Tech
              </span>
              <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                Trustworthy
              </span>
            </div>
          </div>

          {/* Option 3: Tech Forward */}
          <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-hover transition-all transform hover:-translate-y-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Option 3: Tech Forward
            </h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Bold and futuristic with network nodes and data streams. Features 
              animated connections and digital display effects. Best for emphasizing 
              advanced technology.
            </p>
            <div className="flex justify-center items-center min-h-[250px] bg-gradient-to-br from-gray-50 to-white rounded-2xl mb-6 p-8">
              <Image
                src="/smartrealtortool-tech.svg"
                alt="Tech Forward Logo"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                Futuristic
              </span>
              <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                Network
              </span>
              <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                Data Streams
              </span>
              <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                Bold
              </span>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Logo Comparison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-primary-600 mb-4">
                Option 1: Animated Modern
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Most eye-catching and dynamic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Strong tech/AI presence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Animated data visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Best for digital platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Appeals to tech-savvy realtors</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-primary-600 mb-4">
                Option 2: Minimal Professional
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Most versatile and timeless</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Professional and trustworthy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Works well at any size</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Subtle tech indicators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Appeals to traditional realtors</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-primary-600 mb-4">
                Option 3: Tech Forward
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Most innovative appearance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Strong network/connectivity theme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Animated data streams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Bold and memorable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Appeals to forward-thinking realtors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Website Color Palette
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="w-24 h-24 rounded-2xl shadow-lg mb-3" style={{ background: "#5B7FFF" }}></div>
              <div className="font-semibold text-gray-900">Primary Blue</div>
              <div className="text-sm text-gray-600 font-mono">#5B7FFF</div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-2xl shadow-lg mb-3" style={{ background: "#818CF8" }}></div>
              <div className="font-semibold text-gray-900">Accent Purple</div>
              <div className="text-sm text-gray-600 font-mono">#818CF8</div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-2xl shadow-lg mb-3" style={{ background: "#60A5FA" }}></div>
              <div className="font-semibold text-gray-900">Light Blue</div>
              <div className="text-sm text-gray-600 font-mono">#60A5FA</div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-2xl shadow-lg mb-3" style={{ background: "#A5B4FC" }}></div>
              <div className="font-semibold text-gray-900">Soft Lavender</div>
              <div className="text-sm text-gray-600 font-mono">#A5B4FC</div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-2xl shadow-lg mb-3" style={{ background: "#1F2937" }}></div>
              <div className="font-semibold text-gray-900">Dark Gray</div>
              <div className="text-sm text-gray-600 font-mono">#1F2937</div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-2xl shadow-lg mb-3 border-2 border-gray-200" style={{ background: "#F9FAFB" }}></div>
              <div className="font-semibold text-gray-900">Light Gray</div>
              <div className="text-sm text-gray-600 font-mono">#F9FAFB</div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
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
"use client";

import React from "react";
import Image from "next/image";

interface ScoreCardProps {
  score?: number;
  maxScore?: number;
  propertyImage?: string;
  address?: string;
  metrics?: Array<{
    label: string;
    value: number;
    maxValue: number;
    color: string;
  }>;
}

export default function ScoreCard({
  score = 82,
  maxScore = 100,
  propertyImage = "/habersham.png",
  address = "123 Luxury Lane, Beverly Hills, CA 90210",
  metrics = [
    { label: "Marketing Reach", value: 75, maxValue: 100, color: "bg-primary-500" },
    { label: "Photo Quality", value: 92, maxValue: 100, color: "bg-green-500" },
    { label: "Price Competitiveness", value: 68, maxValue: 100, color: "bg-yellow-500" },
  ],
}: ScoreCardProps) {
  const percentage = (score / maxScore) * 100;
  const circumference = 2 * Math.PI * 50; // radius = 50
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <section className="max-w-6xl mx-auto px-4 pt-12 animate-fadeIn">
      <div className="bg-white rounded-t-2xl shadow-card overflow-hidden">
        {/* Top Section - Property Image, Address, and Score */}
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Side - Property Image and Address */}
            <div className="md:col-span-7 space-y-4">
              <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={propertyImage}
                  alt="Property"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {address}
                </h3>
                <p className="text-sm text-gray-500">Property Listing</p>
              </div>
            </div>

            {/* Right Side - Circular Score Indicator - Dashboard Style */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                {/* Background Circle */}
                <svg className="transform -rotate-90 w-full h-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="50"
                    stroke="#F3F4F6"
                    strokeWidth="12"
                    fill="none"
                  />
                  {/* Progress Circle */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r="50"
                    stroke="#6B7FFF"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                {/* Score Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl md:text-6xl font-bold text-gray-900">
                    {score}
                  </span>
                  <span className="text-lg text-gray-500">/ {maxScore}</span>
                </div>
              </div>
              <div className="text-center mt-6">
                <h4 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Performance Score
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  Based on AI market analysis
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Performance Breakdown with Progress Bars - Dashboard Style */}
        <div className="px-8 md:px-12 pb-8 md:pb-12">
          <div className="border-t border-gray-100 pt-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">
              Performance Breakdown
            </h4>
            <div className="space-y-6">
              {metrics.map((metric, index) => {
                const metricPercentage = (metric.value / metric.maxValue) * 100;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        {metric.label}
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        {metric.value}/{metric.maxValue}
                      </span>
                    </div>
                    <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${metricPercentage}%`,
                          background: 'linear-gradient(90deg, #8B9DFF, #6B7FFF)',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
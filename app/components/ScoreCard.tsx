"use client";

import React from "react";

interface ScoreCardProps {
  score?: number;
  maxScore?: number;
  title?: string;
  subtitle?: string;
  metrics?: Array<{
    label: string;
    value: string;
    color: string;
  }>;
}

export default function ScoreCard({
  score = 82,
  maxScore = 100,
  title = "Listing Performance Score",
  subtitle = "Based on AI analysis of this property's market data.",
  metrics = [
    { label: "Marketing Reach", value: "Good", color: "bg-primary-500" },
    { label: "Photo Quality", value: "Excellent", color: "bg-green-500" },
    { label: "Price Competitiveness", value: "Fair", color: "bg-yellow-500" },
  ],
}: ScoreCardProps) {
  const percentage = (score / maxScore) * 100;
  const circumference = 2 * Math.PI * 40; // radius = 40
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-card p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Circular Score */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-48 h-48">
              {/* Background Circle */}
              <svg className="transform -rotate-90 w-48 h-48">
                <circle
                  cx="96"
                  cy="96"
                  r="40"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                  fill="none"
                />
                {/* Progress Circle */}
                <circle
                  cx="96"
                  cy="96"
                  r="40"
                  stroke="#5B7FFF"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                  style={{
                    animation: "progress 2s ease-out forwards",
                  }}
                />
              </svg>
              {/* Score Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-gray-900">
                  {score}
                </span>
                <span className="text-lg text-gray-500">/ {maxScore}</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mt-6 text-center">
              {title}
            </h3>
            <p className="text-gray-600 text-center mt-2 max-w-sm">
              {subtitle}
            </p>
          </div>

          {/* Right Side - Metrics */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">
              Performance Breakdown
            </h4>
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${metric.color}`} />
                  <span className="text-gray-700 font-medium">
                    {metric.label}
                  </span>
                </div>
                <span className="text-gray-900 font-semibold">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
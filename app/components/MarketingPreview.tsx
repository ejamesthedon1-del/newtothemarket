"use client";

import React from "react";

interface MarketingPreviewProps {
  title?: string;
  description?: string;
  ctaText?: string;
  onSubscribe?: () => void;
}

export default function MarketingPreview({
  title = "Your Tailored Marketing Plan is Ready",
  description = "See how to attract more buyers with personalized strategies designed specifically for your property.",
  ctaText = "Subscribe to View Full Plan",
  onSubscribe,
}: MarketingPreviewProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-12 animate-slideUp">
      <div className="relative bg-white rounded-b-3xl shadow-card overflow-hidden">
        {/* Blurred Content Preview */}
        <div className="relative p-8 md:p-12">
          {/* Mock Content */}
          <div className="space-y-6 blur-sm select-none pointer-events-none">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary-500 rounded-xl flex-shrink-0 flex items-center justify-center">
                <span className="text-white text-lg font-bold">1</span>
              </div>
              <div className="flex-1">
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-3" />
                <div className="h-3 bg-gray-100 rounded w-full mb-2" />
                <div className="h-3 bg-gray-100 rounded w-5/6" />
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary-500 rounded-xl flex-shrink-0 flex items-center justify-center">
                <span className="text-white text-lg font-bold">2</span>
              </div>
              <div className="flex-1">
                <div className="h-5 bg-gray-200 rounded w-2/3 mb-3" />
                <div className="h-3 bg-gray-100 rounded w-full mb-2" />
                <div className="h-3 bg-gray-100 rounded w-4/5" />
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary-500 rounded-xl flex-shrink-0 flex items-center justify-center">
                <span className="text-white text-lg font-bold">3</span>
              </div>
              <div className="flex-1">
                <div className="h-5 bg-gray-200 rounded w-1/2 mb-3" />
                <div className="h-3 bg-gray-100 rounded w-full mb-2" />
                <div className="h-3 bg-gray-100 rounded w-3/4" />
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary-500 rounded-xl flex-shrink-0 flex items-center justify-center">
                <span className="text-white text-lg font-bold">4</span>
              </div>
              <div className="flex-1">
                <div className="h-5 bg-gray-200 rounded w-3/5 mb-3" />
                <div className="h-3 bg-gray-100 rounded w-full mb-2" />
                <div className="h-3 bg-gray-100 rounded w-4/5" />
              </div>
            </div>
          </div>

          {/* Overlay with CTA */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/85 to-white/95 flex flex-col items-center justify-center p-8">
            <div className="text-center max-w-lg">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-4 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{description}</p>
              <button
                onClick={onSubscribe}
                className="bg-primary-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {ctaText}
              </button>
              <p className="text-sm text-gray-500 mt-6">
                🔒 Unlock detailed insights and actionable strategies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
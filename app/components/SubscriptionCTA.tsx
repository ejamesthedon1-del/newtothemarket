'use client';

import { Sparkles, Check } from 'lucide-react';

export default function SubscriptionCTA() {
  const features = [
    "Unlimited listing analyses",
    "Advanced AI-powered insights",
    "Priority customer support",
    "Marketing material templates",
    "Competitor analysis tools"
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
      <div className="relative overflow-hidden rounded-3xl">
        {/* Apple-inspired Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500"></div>
        
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]"></div>

        {/* Content */}
        <div className="relative z-10 px-8 sm:px-16 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Sparkles className="w-8 h-8 text-white" strokeWidth={2} />
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Sell Smarter?
            </h2>
            
            {/* Subheading */}
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of agents and homeowners who are selling faster with data-driven insights
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-white text-sm sm:text-base font-medium text-left">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                Start Free Trial
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                View Pricing
              </button>
            </div>

            {/* Trust Badge */}
            <p className="text-white/70 text-sm mt-6">
              No credit card required • Cancel anytime • 14-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
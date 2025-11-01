'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function AnalyticsDashboard() {
  const [selectedMetric, setSelectedMetric] = useState('all');

  const analytics = [
    {
      id: 'photo',
      title: 'Photo Quality',
      icon: '📸',
      score: 85,
      color: 'bg-blue-500',
      description: 'Professional staging and lighting'
    },
    {
      id: 'description',
      title: 'Listing Description',
      icon: '✍️',
      score: 72,
      color: 'bg-green-500',
      description: 'Compelling copy with key features'
    },
    {
      id: 'pricing',
      title: 'Pricing Accuracy',
      icon: '💰',
      score: 91,
      color: 'bg-purple-500',
      description: 'Competitive market positioning'
    },
    {
      id: 'neighborhood',
      title: 'Neighborhood Quality',
      icon: '🏘️',
      score: 78,
      color: 'bg-orange-500',
      description: 'Location appeal and amenities'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Your Listing Analytics
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          AI-powered insights to help you optimize your property listing and attract more buyers
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Property Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
              <Image
                src="/habersham.png"
                alt="Property Listing"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Modern Luxury Home
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              123 Main Street, Atlanta, GA
            </p>
            
            {/* Overall Score */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Overall Score</span>
                <span className="text-2xl font-bold text-blue-600">82%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: '82%' }}
                ></div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-gray-900">45</div>
                <div className="text-xs text-gray-600">Views Today</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-xs text-gray-600">Inquiries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Analytics */}
        <div className="lg:col-span-2 space-y-4">
          {/* Analytics Cards */}
          {analytics.map((metric, index) => (
            <div 
              key={metric.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-xl">
                    {metric.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{metric.title}</h4>
                    <p className="text-sm text-gray-500">{metric.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{metric.score}%</div>
                  <div className="text-xs text-gray-500">Score</div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div 
                    className={`${metric.color} h-3 rounded-full transition-all duration-700 ease-out`}
                    style={{ width: `${metric.score}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Needs Work</span>
                  <span>Good</span>
                  <span>Excellent</span>
                </div>
              </div>
            </div>
          ))}

          {/* Marketing Insights - Locked Premium Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 backdrop-blur-sm z-10"></div>
            
            <div className="relative z-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
                  📊
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Marketing Insights</h4>
                  <p className="text-sm text-gray-500">Advanced analytics and recommendations</p>
                </div>
              </div>

              {/* Blurred Content Preview */}
              <div className="space-y-3 mb-6 opacity-40 blur-sm pointer-events-none">
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="h-4 bg-gray-300 rounded w-4/5 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>

              {/* Unlock CTA */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer">
                  <span className="text-xl">🔒</span>
                  <span>Subscribe to Unlock Insights</span>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Get personalized recommendations, competitor analysis, and market trends
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Mitchell",
      role: "Real Estate Agent",
      location: "Atlanta, GA",
      content: "I was skeptical at first, but Smart Realtor Tools completely changed how I approach listings. The analytics showed me exactly why my properties weren't getting views — turns out my photos needed better lighting. Made the changes, and I had three showings within a week. It's like having a marketing consultant in your pocket.",
      rating: 5
    },
    {
      name: "Marcus Chen",
      role: "Homeowner",
      location: "Austin, TX",
      content: "My house sat on the market for 87 days with barely any interest. I was ready to drop the price significantly. Then I tried this tool — it pointed out that my listing description was too generic and my photos didn't highlight the renovated kitchen. Fixed both issues and had an offer within two weeks at asking price. Honestly saved me thousands.",
      rating: 5
    },
    {
      name: "Jennifer Rodriguez",
      role: "Real Estate Broker",
      location: "Miami, FL",
      content: "What I love most is how it doesn't just tell you what's wrong — it explains why it matters and how to fix it. The AI insights are surprisingly accurate. I've been using it for all my team's listings now, and our average days on market dropped by 40%. The ROI is incredible.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Property Investor",
      location: "Denver, CO",
      content: "I flip houses for a living, so speed matters. This tool helped me understand that my staging was off and my pricing strategy needed adjustment based on neighborhood trends. The data-driven approach takes the guesswork out. Now I'm moving properties faster and with better margins.",
      rating: 5
    },
    {
      name: "Emily Parker",
      role: "First-Time Seller",
      location: "Portland, OR",
      content: "Selling my first home was overwhelming until I found Smart Realtor Tools. It broke everything down in a way that made sense — no jargon, just clear guidance. The photo quality analysis alone was worth it. I felt confident making decisions instead of just hoping for the best. Sold in 3 weeks!",
      rating: 5
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          What Our Users Are Saying
        </h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          Real stories from agents and homeowners who transformed their listings
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all"
          >
            {/* Rating Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial Content */}
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              "{testimonial.content}"
            </p>

            {/* Author Info */}
            <div className="border-t border-gray-100 pt-4">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
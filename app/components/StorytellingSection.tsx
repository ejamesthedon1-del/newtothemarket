'use client';

import { useEffect, useRef, useState } from 'react';
import { Compass, Users, Cpu, TrendingUp } from 'lucide-react';

interface FeatureBlock {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export default function StorytellingSection() {
  const [isVisible, setIsVisible] = useState<boolean[]>([false, false, false, false]);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = blockRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const features: FeatureBlock[] = [
    {
      icon: <Compass className="w-12 h-12 text-blue-600" strokeWidth={1.5} />,
      title: 'Sell Smarter. Feel in Control.',
      content: "You don't need more noise — you need clarity. Smart Realtor Tools brings together intelligent analytics and seasoned marketing expertise to help your listings rise above the scroll. We look at every detail that shapes a buyer's first impression — from the light in your photos to the words in your description — and turn it into insight you can act on."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" strokeWidth={1.5} />,
      title: 'Built for the Modern Agent (and the Thoughtful Seller)',
      content: "Whether you manage dozens of listings or just one home that means everything to you, our system helps you understand why some properties get seen and others get lost. It's not guesswork — it's a quiet blend of data and human perspective, working together to help your listings stand out naturally."
    },
    {
      icon: <Cpu className="w-12 h-12 text-blue-600" strokeWidth={1.5} />,
      title: 'Where AI Enhances, Not Replaces',
      content: "Our AI doesn't make decisions for you — it learns from thousands of successful listings to guide our marketing experts in refining yours. It's like having a team that notices what others overlook — the small changes that make your property easier to discover, easier to fall in love with, and easier to sell."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" strokeWidth={1.5} />,
      title: 'The Result',
      content: "More eyes on your listings. More confidence in your decisions. And a selling experience that finally feels effortless. Because selling a home should feel guided, not guessed."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 sm:p-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How Smart Realtor Tools Helps You Sell Smarter
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A thoughtful approach to real estate marketing that puts you in control
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                blockRefs.current[index] = el;
              }}
              className={`transition-all duration-700 ease-out ${
                isVisible[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-start space-y-4">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  {feature.title}
                </h3>

                {/* Content */}
                <p className="text-base text-gray-600 leading-relaxed font-normal">
                  {feature.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
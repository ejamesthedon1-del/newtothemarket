"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useLogo } from "../context/LogoContext"; // adjust path if needed

export default function DashboardPage() {
  const { logo } = useLogo(); // centralized logo
  const searchParams = useSearchParams();
  const router = useRouter();
  const feedback = searchParams?.get("feedback") ?? null;
  const [score, setScore] = useState<number | null>(null);

  // Simulate AI scoring delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setScore(Math.floor(Math.random() * 35) + 65); // random 65–99
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen w-full bg-gray-50 px-4 sm:px-6 py-8 text-gray-900 overflow-x-hidden">
      {/* Logo Header */}
      <div className="max-w-xl sm:max-w-3xl mx-auto flex justify-center mb-6">
        <img src={logo} alt="Smart Realtor Tool" className="h-12" />
      </div>

      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition mb-6"
      >
        <ArrowLeft size={18} />
        Back to Home
      </button>

      {/* Page Header */}
      <div className="max-w-xl sm:max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Your Listing Health Score
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Powered by AI insights and real market data
        </p>
      </div>

      {/* Score Card */}
      <div className="max-w-md sm:max-w-2xl mx-auto bg-white rounded-2xl shadow-md sm:shadow-lg p-6 sm:p-8 text-center">
        {score === null ? (
          <p className="text-gray-400 animate-pulse text-sm sm:text-base">
            Calculating your score...
          </p>
        ) : (
          <>
            <h2 className="text-6xl sm:text-7xl font-extrabold text-green-600 mb-4">
              {score}
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              This represents your listing’s overall health and buyer appeal.
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
              <div
                className={`h-3 rounded-full transition-all duration-700 ${
                  score >= 85
                    ? "bg-green-500"
                    : score >= 75
                    ? "bg-yellow-400"
                    : "bg-red-400"
                }`}
                style={{ width: `${score}%` }}
              />
            </div>

            {/* Feedback Section */}
            {feedback && (
              <div className="text-left bg-gray-50 border rounded-xl p-4 mt-6 sm:mt-8">
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  AI Insights
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {feedback}
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* CTA Section */}
      <div className="max-w-md sm:max-w-2xl mx-auto text-center mt-10 sm:mt-12">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          Want to improve your score?
        </h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Unlock deeper recommendations and tailored marketing strategies.
        </p>
        <button className="bg-black text-white px-5 sm:px-6 py-3 rounded-lg hover:bg-gray-800 transition font-semibold text-sm sm:text-base w-full sm:w-auto">
          Upgrade to ListingRevive Pro
        </button>
      </div>
    </main>
  );
}

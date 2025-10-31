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
    <main className="min-h-screen w-full bg-gradient-to-br from-purple-50 via-white to-purple-50 px-4 sm:px-6 py-8 text-gray-900 overflow-x-hidden">
      {/* Logo Header */}
      <div className="max-w-xl sm:max-w-3xl mx-auto flex justify-center mb-6">
        <img src={logo} alt="Smart Realtor Tool" className="h-12" />
      </div>

      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 transition mb-6 font-medium"
      >
        <ArrowLeft size={18} />
        Back to Home
      </button>

      {/* Page Header */}
      <div className="max-w-xl sm:max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">
          Your Listing Health Score
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Powered by AI insights and real market data
        </p>
      </div>

      {/* Score Card */}
      <div className="max-w-md sm:max-w-2xl mx-auto bg-white rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 text-center border border-purple-100">
        {score === null ? (
          <p className="text-gray-400 animate-pulse text-sm sm:text-base">
            Calculating your score...
          </p>
        ) : (
          <>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 mb-6">
              <h2 className="text-6xl sm:text-7xl font-extrabold text-white mb-2">
                {score}
              </h2>
              <p className="text-white/90 text-sm sm:text-base">
                Listing Health Score
              </p>
            </div>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              This represents your listing's overall health and buyer appeal.
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-4 mb-6 overflow-hidden">
              <div
                className={`h-4 rounded-full transition-all duration-700 ${
                  score >= 85
                    ? "bg-gradient-to-r from-green-400 to-green-600"
                    : score >= 75
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
                    : "bg-gradient-to-r from-red-400 to-red-600"
                }`}
                style={{ width: `${score}%` }}
              />
            </div>

            {/* Feedback Section */}
            {feedback && (
              <div className="text-left bg-purple-50 border border-purple-100 rounded-2xl p-4 mt-6 sm:mt-8">
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-800">
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
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
          Want to improve your score?
        </h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Unlock deeper recommendations and tailored marketing strategies.
        </p>
        <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-5 sm:px-6 py-3 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all font-semibold text-sm sm:text-base w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          Upgrade to ListingRevive Pro
        </button>
      </div>
    </main>
  );
}
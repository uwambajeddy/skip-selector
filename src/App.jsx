import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { calculateTotalPrice } from "./utils/CalculateTotalPrice";
import { useSkips } from "./hooks/useSkips";
import DarkModeToggle from "./components/DarkModeToggle";
import SkipCard from "./components/SkipCard";
import Stepper from "./components/Stepper";
import BottomBar from "./components/BottomBar";
import SkipSelectionSkeleton from "./components/SkeletonLoading";

const SkipSelectionPage = () => {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const { skips, loading, error } = useSkips();
  const [darkMode, setDarkMode] = useState(false);

  if (loading) {
    return <SkipSelectionSkeleton darkMode={darkMode} />;
  }

  if (error) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 to-gray-800"
            : "bg-gradient-to-br from-gray-50 to-blue-50"
        }`}
      >
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-gray-50 to-blue-50"
      }`}
    >
      {/* Progress indicator */}
      <div
        className={`shadow-sm border-b ${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Mobile: Simplified progress (shows only current step + progress bar) and Desktop: Full stepper  */}
            <Stepper darkMode={darkMode} />

            {/* Dark mode toggle */}
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Choose Your Perfect Skip
          </h1>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Select the skip size that best suits your project needs. All prices
            include VAT and 14-day hire period.
          </p>
        </div>

        {/* Skip grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedSkip?.id === skip.id}
              onSelect={setSelectedSkip}
              darkMode={darkMode}
            />
          ))}
        </div>

        {/* Bottom summary and navigation */}
        {selectedSkip && (
          <BottomBar darkMode={darkMode} selectedSkip={selectedSkip} />
        )}
      </div>
    </div>
  );
};

export default SkipSelectionPage;

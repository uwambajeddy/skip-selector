import React from "react";

const SkipSelectionSkeleton = ({ darkMode = false }) => {
  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-gray-50 to-blue-50"
      }`}
    >
      {/* Progress indicator skeleton */}
      <div
        className={`shadow-sm border-b ${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 overflow-hidden">
          <div className="flex items-center justify-between">
            {/* Stepper skeleton */}
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full animate-pulse ${
                      darkMode ? "bg-gray-700" : "bg-gray-300"
                    }`}
                  ></div>
                  {step < 6 && (
                    <div
                      className={`w-8 h-0.5 mx-2 animate-pulse ${
                        darkMode ? "bg-gray-700" : "bg-gray-300"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            {/* Dark mode toggle skeleton */}
            <div
              className={`w-8 h-8 rounded-full animate-pulse ${
                darkMode ? "bg-gray-700" : "bg-gray-300"
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header skeleton */}
        <div className="text-center mb-12">
          <div
            className={`h-10 rounded-lg mx-auto mb-4 animate-pulse ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
            style={{ width: "50%" }}
          ></div>
          <div
            className={`h-6 rounded-lg mx-auto animate-pulse ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
            style={{ width: "80%" }}
          ></div>
        </div>

        {/* Skip cards grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <SkipCardSkeleton key={index} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkipCardSkeleton = ({ darkMode }) => {
  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
      } rounded-2xl overflow-hidden border animate-pulse`}
    >
      {/* Image section skeleton */}
      <div
        className={`h-32 ${
          darkMode ? "bg-gray-700" : "bg-gray-300"
        } animate-pulse`}
      ></div>

      {/* Content section skeleton */}
      <div className="p-4 space-y-3">
        {/* Title skeleton */}
        <div>
          <div
            className={`h-6 rounded mb-2 ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
            style={{ width: "70%" }}
          ></div>
          <div
            className={`h-4 rounded ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
            style={{ width: "90%" }}
          ></div>
        </div>

        {/* Features skeleton */}
        <div className="flex items-center gap-4">
          <div
            className={`h-4 rounded ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
            style={{ width: "60px" }}
          ></div>
          <div
            className={`h-4 rounded ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
            style={{ width: "80px" }}
          ></div>
        </div>

        {/* Waste type badge skeleton */}
        <div>
          <div
            className={`h-6 rounded-full ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
            style={{ width: "100px" }}
          ></div>
        </div>

        {/* Price section skeleton */}
        <div
          className={`border-t pt-3 ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <div
                className={`h-8 rounded mb-1 ${
                  darkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
                style={{ width: "80px" }}
              ></div>
              <div
                className={`h-3 rounded ${
                  darkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
                style={{ width: "120px" }}
              ></div>
            </div>
            <div
              className={`h-8 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-300"
              }`}
              style={{ width: "80px" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipSelectionSkeleton;

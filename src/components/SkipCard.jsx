import React from "react";
import { Check, AlertTriangle, Truck, Calendar } from "lucide-react";
import { calculateTotalPrice } from "../utils/CalculateTotalPrice";
import { getSkipRecommendation } from "../utils/getSkipRecommendation";

const SkipCard = ({ skip, isSelected, onSelect, darkMode }) => {
  const totalPrice = calculateTotalPrice(skip);

  const getSkipImage = (size) => {
    return new URL(`../assets/skips/${size}-yard-skip.jpg`, import.meta.url)
      .href;
  };

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
        isSelected ? "ring-4 ring-emerald-400 shadow-2xl" : "hover:shadow-xl"
      }`}
      onClick={() => onSelect(skip)}
    >
      <div
        className={`${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
        } rounded-2xl overflow-hidden border`}
      >
        {/* Skip Size Badge */}
        <div
          className="relative bg-white h-32 flex items-center justify-center bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(127, 29, 29, 0.1), rgba(29, 45, 127, 0.8)), url('${getSkipImage(
              skip.size
            )}')`,
            backgroundSize: "cover, contain",
            backgroundPosition: "center, center",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
        >
          <div className="text-center text-white">
            <div className="text-3xl font-bold">{skip.size}</div>
            <div className="text-sm opacity-90">Yard Skip</div>
          </div>

          {/* Selection indicator */}
          {isSelected && (
            <div className="absolute top-3 right-3 bg-emerald-500 rounded-full p-1">
              <Check className="w-4 h-4 text-white" />
            </div>
          )}

          {/* Restrictions badges */}
          <div className="absolute bottom-2 left-2 flex gap-1">
            {!skip.allowed_on_road && (
              <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                Private Land Only
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div>
            <h3
              className={`font-semibold text-lg ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {skip.size} Yard Skip
            </h3>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {getSkipRecommendation(skip.size)}
            </p>
          </div>

          {/* Features */}
          <div
            className={`flex items-center gap-4 text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {skip.hire_period_days} days
            </div>
            {skip.allowed_on_road && (
              <div className="flex items-center gap-1">
                <Truck className="w-4 h-4" />
                Road placement
              </div>
            )}
          </div>

          {/* Waste types */}
          <div className="flex gap-2">
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                skip.allows_heavy_waste
                  ? darkMode
                    ? "bg-green-900 text-green-300"
                    : "bg-green-100 text-green-800"
                  : darkMode
                  ? "bg-red-900 text-red-300"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {skip.allows_heavy_waste ? "Heavy waste OK" : "Light waste only"}
            </span>
          </div>

          {/* Price */}
          <div
            className={`border-t pt-3 ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div
                  className={`text-2xl font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  £{totalPrice}
                </div>
                <div
                  className={`text-xs ${
                    darkMode ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  Inc. VAT (£{skip.price_before_vat} + {skip.vat}%)
                </div>
              </div>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isSelected
                    ? "bg-emerald-500 text-white"
                    : darkMode
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {isSelected ? "Selected" : "Select"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;

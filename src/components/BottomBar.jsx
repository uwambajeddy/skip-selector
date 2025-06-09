import { ArrowLeft, ArrowRight } from "lucide-react";
import { calculateTotalPrice } from "../utils/calculateTotalPrice";

const BottomBar = ({ darkMode, selectedSkip }) => (
  <div
    className={`rounded-2xl shadow-lg border p-6 sticky bottom-4 ${
      darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
    }`}
  >
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="text-center">
          <div
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {selectedSkip.size} Yard Skip
          </div>
          <div
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            £{calculateTotalPrice(selectedSkip)} inc. VAT
          </div>
        </div>
        <div
          className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          <div>14 day hire period</div>
          <div>
            {selectedSkip.allows_heavy_waste
              ? "Heavy waste allowed"
              : "Light waste only"}
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          className={`flex items-center gap-2 px-6 py-3 border rounded-full transition-colors ${
            darkMode
              ? "border-gray-600 text-gray-300 hover:bg-gray-700"
              : "border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <button className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-colors shadow-lg">
          Continue
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

export default BottomBar;

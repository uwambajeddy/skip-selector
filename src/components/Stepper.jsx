const Stepper = ({ darkMode }) => {
  return (
    <>
      {/* Mobile: Simplified progress (shows only current step + progress bar) */}
      <div className="flex md:hidden items-center flex-1 mr-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
            3
          </div>
          <div>
            <div
              className={`text-sm font-medium ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Select Skip
            </div>
            <div
              className={`text-xs ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Step 3 of 6
            </div>
          </div>
        </div>
        <div className="flex-1 mx-4">
          <div
            className={`h-2 rounded-full ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            <div
              className="h-2 bg-blue-600 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Desktop: Full stepper */}
      <div className="hidden md:flex items-center space-x-6 text-sm">
        <div className="flex items-center text-blue-600">
          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-2">
            ✓
          </div>
          <span className="whitespace-nowrap">Postcode</span>
        </div>
        <div className="flex items-center text-blue-600">
          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-2">
            ✓
          </div>
          <span className="whitespace-nowrap">Waste Type</span>
        </div>
        <div className="flex items-center text-blue-600 font-medium">
          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-2">
            3
          </div>
          <span className="whitespace-nowrap">Select Skip</span>
        </div>
        <div
          className={`flex items-center ${
            darkMode ? "text-gray-500" : "text-gray-400"
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2 ${
              darkMode
                ? "bg-gray-600 text-gray-400"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            4
          </div>
          <span className="whitespace-nowrap">Permit Check</span>
        </div>
        <div
          className={`hidden lg:flex items-center ${
            darkMode ? "text-gray-500" : "text-gray-400"
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2 ${
              darkMode
                ? "bg-gray-600 text-gray-400"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            5
          </div>
          <span className="whitespace-nowrap">Choose Date</span>
        </div>
        <div
          className={`hidden lg:flex items-center ${
            darkMode ? "text-gray-500" : "text-gray-400"
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2 ${
              darkMode
                ? "bg-gray-600 text-gray-400"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            6
          </div>
          <span className="whitespace-nowrap">Payment</span>
        </div>
      </div>
    </>
  );
};

export default Stepper;

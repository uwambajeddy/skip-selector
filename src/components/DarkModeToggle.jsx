import { Moon, Sun } from "lucide-react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <button
    onClick={() => setDarkMode(!darkMode)}
    className={`p-2 rounded-full transition-colors ${
      darkMode
        ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
    }`}
    aria-label="Toggle dark mode"
  >
    {darkMode ? (
      <Sun className="w-4 h-4 md:w-5 md:h-5" />
    ) : (
      <Moon className="w-4 h-4 md:w-5 md:h-5" />
    )}
  </button>
);

export default DarkModeToggle;

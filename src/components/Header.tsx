import { FaMoon, FaSun } from 'react-icons/fa';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isCardView?: boolean;
  isCountryDetailView?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  toggleDarkMode,
  isCardView,
  isCountryDetailView,
}) => {
  return (
    <header
      className={`py-6 shadow-2xl ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div
          className={`text-xl font-light tracking-wide hidden sm:block flex-grow ${
            darkMode ? 'text-white' : 'text-black'
          }`}
        >
          {isCountryDetailView
            ? 'Country Details'
            : isCardView
            ? 'Countries Card View'
            : 'Countries Table View'}
        </div>

        <div className="flex items-center ml-auto">
          <nav className="flex items-center w-auto">
            <button
              role="button"
              onClick={toggleDarkMode}
              className={`flex items-center focus:outline-none ${
                darkMode ? 'text-white' : 'text-black'
              }`}
            >
              {darkMode ? (
                <>
                  <FaSun className="w-5 h-5 mr-1" />
                  <span className="text-sm font-medium">Light Mode</span>
                </>
              ) : (
                <>
                  <FaMoon className="w-5 h-5 mr-1" />
                  <span className="text-sm font-medium">Dark Mode</span>
                </>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

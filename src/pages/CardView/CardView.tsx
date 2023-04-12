import { ChangeEvent, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { url } from '../../api/routes/common';
import CountryCard from '../../components/CountryCard';
import { Pagination } from '../../components/Pagination';
import useDarkMode from '../../hooks/useDarkMode';
import useFetch from '../../hooks/useFetch';
import { CountryData } from '../../interfaces/countriesInterface';
import DropdownFilter from '../../components/DropdownFilter';
import { useCountryFilter } from '../../hooks/useCountryFilter';
import Switch from '../../components/Switch';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
interface MainContentProps {
  onSearchTermChange: (term: string) => void;
}

interface Option {
  value: string;
  label: string;
}

const CardView: React.FC = () => {
  const { data: countries, isLoading, error } = useFetch<CountryData[]>(url);

  const {
    filteredCountries,
    searchTerm,
    setSearchTerm,
    selectedRegion,
    setSelectedRegion,
  } = useCountryFilter({
    countries: countries ? countries : [],
  });
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [currentPage, setCurrentPage] = useState(1);
  const [isCardView, setIsCardView] = useState<boolean>(true);
  const countriesPerPage = 12;

  const handleSwitchChange = (isChecked: boolean) => {
    setIsCardView(isChecked);
  };

  const options: Option[] = [
    { value: '', label: 'All countries' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'africa', label: 'Africa' },
    { value: 'americas', label: 'Americas' },
    { value: 'oceania', label: 'Oceania' },
  ];

  const handleOptionSelected = (option: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(option.target.value);
    setCurrentPage(1);
  };

  if (!filteredCountries || error) {
    return <>No Countries Found</>;
  }

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
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
            Countries Card View
          </div>

          <div className="flex items-center ml-auto">
            <nav className="flex items-center w-auto">
              <button
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

  const MainContent: React.FC<MainContentProps> = ({ onSearchTermChange }) => {
    const handleSearchTermChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      onSearchTermChange(event.target.value);
    };
    return (
      <main className="container bg-concrete-50 flex-grow overflow-y-auto mx-auto py-8 px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <input
            type="text"
            placeholder="Search for a country"
            className="rounded-lg py-2 px-4 w-64 border border-gray-300 focus:border-blue-500 focus:outline-none mb-5"
            value={searchTerm}
            onChange={handleSearchTermChange}
            autoFocus
          />
          <div className="flex gap-5">
            <DropdownFilter
              options={options}
              selectedOption={selectedRegion}
              onOptionSelected={handleOptionSelected}
              placeholder="Filter By Region"
            />

            <div className="flex items-center mb-4">
              <Switch
                isChecked={isCardView}
                onChange={handleSwitchChange}
                cardViewLabel="Card"
                tableViewLabel="Table"
              />
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center">...Loading</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {filteredCountries
              .slice(indexOfFirstCountry, indexOfLastCountry)
              .map((country) => (
                <CountryCard key={country.name.official} country={country} />
              ))}
          </div>
        )}
      </main>
    );
  };

  const Footer = () => (
    <footer className="bg-gray-100 text-gray-700 py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center mt-auto sticky bottom-0">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={paginate}
      />
    </footer>
  );

  return (
    <>
      <div
        className={`flex flex-col min-h-screen ${
          darkMode ? 'bg-gray-900' : ''
        }`}
      >
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <MainContent onSearchTermChange={setSearchTerm} />
        <Footer />
      </div>
    </>
  );
};

export default CardView;

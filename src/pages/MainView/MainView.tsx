import { ChangeEvent, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { url } from '../../api/routes/common';
import DropdownFilter from '../../components/DropdownFilter';
import { Pagination } from '../../components/Pagination';
import Switch from '../../components/Switch';
import { useCountryFilter } from '../../hooks/useCountryFilter';
import useDarkMode from '../../hooks/useDarkMode';
import useFetch from '../../hooks/useFetch';
import { CountryData } from '../../interfaces/countriesInterface';
import CountryCard from '../../components/CountryCard';
import CountryTableRow from '../../components/CountryTableRow';
import Table from '../../components/Table';
import Layout from '../../layouts/Layout';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { MainContent } from '../../components/MainContent';

interface Option {
  value: string;
  label: string;
}

const MainView: React.FC = () => {
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

  return (
    <>
      <Layout
        renderHeader={
          <Header
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            isCardView={isCardView}
          />
        }
        renderMainContent={
          <MainContent
            onSearchTermChange={setSearchTerm}
            searchTerm={searchTerm}
            isLoading={isLoading}
            renderDropDown={
              <DropdownFilter
                options={options}
                selectedOption={selectedRegion}
                onOptionSelected={handleOptionSelected}
                placeholder="Filter By Region"
              />
            }
            renderSwitch={
              <Switch
                isChecked={isCardView}
                onChange={handleSwitchChange}
                cardViewLabel="Card"
                tableViewLabel="Table"
                darkMode={darkMode}
              />
            }
            renderCardView={
              isCardView && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                  {filteredCountries
                    ?.slice(indexOfFirstCountry, indexOfLastCountry)
                    .map((country) => (
                      <CountryCard
                        key={country.name.official}
                        country={country}
                      />
                    ))}
                </div>
              )
            }
            renderTableView={
              !isCardView && (
                <Table
                  darkMode={darkMode}
                  renderTableRows={filteredCountries
                    .slice(indexOfFirstCountry, indexOfLastCountry)
                    .map((country) => (
                      <CountryTableRow country={country} />
                    ))}
                />
              )
            }
          />
        }
        renderFooter={
          <Footer
            renderPagination={
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={paginate}
              />
            }
          />
        }
        darkMode={darkMode}
      />
    </>
  );
};

export default MainView;

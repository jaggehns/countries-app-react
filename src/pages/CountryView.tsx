import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { Header } from '../components/Header';
import useDarkMode from '../hooks/useDarkMode';
import { BiArrowBack } from 'react-icons/bi';
import { CountryData } from '../interfaces/countriesInterface';

const CountryView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate(-1);
  const [darkMode, toggleDarkMode] = useDarkMode();
  const country: CountryData = location.state;
  return (
    <Layout
      renderHeader={
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      }
      renderMainContent={
        <main className="container bg-concrete-50 flex-grow overflow-y-auto mx-auto py-8 px-4">
          <div className="flex-row justify-center items-center">
            <div className="w-full">
              <button
                className="bg-gray-300 p-3 flex justify-center items-center gap-3 mb-5 rounded-lg"
                onClick={() => navigate(-1)}
              >
                <span>
                  <BiArrowBack />
                </span>
                <span>Back</span>
              </button>
            </div>
            <div className="flex items-center gap-10 mt-10">
              <div>
                <img
                  className="w-full h-60 object-cover"
                  src={country.flags.png}
                  alt={`Flag of ${country.name}`}
                  loading="lazy"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold">{country.name.common}</h1>
                <div className="flex gap-10 mt-5">
                  <div className="flex-col">
                    {country?.name?.nativeName &&
                      Object?.values(country?.name?.nativeName)?.map(
                        (lang, index) => (
                          <div className="flex text-md gap-2" key={index}>
                            <span className="font-semibold text-black">
                              Native Name:
                            </span>
                            <span className="font-light text-gray-500">
                              {lang.official}
                            </span>
                          </div>
                        )
                      )}
                    <div className="flex text-md gap-5">
                      <span className="font-semibold text-black">
                        Population:
                      </span>
                      <span className="font-light text-gray-500">
                        {country.population.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex text-md gap-2">
                      <span className="font-semibold text-black">Region:</span>
                      <span className="font-light text-gray-500">
                        {country.region}
                      </span>
                    </div>
                    <div className="flex text-md gap-2">
                      <span className="font-semibold text-black">
                        Sub Region:
                      </span>
                      <span className="font-light text-gray-500">
                        {country.subregion}
                      </span>
                    </div>
                    <div className="flex text-md gap-2">
                      <span className="font-semibold text-black">Capital:</span>
                      <span className="font-light text-gray-500">
                        {country.capital}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex-col">
                      {/* {country?.name?.nativeName &&
                        Object?.values(country?.name?.nativeName)?.map(
                          (lang, index) => (
                            <div className="flex text-md gap-2" key={index}>
                              <span className="font-semibold text-black">
                                Native Name:
                              </span>
                              <span className="font-light text-gray-500">
                                {lang.official}
                              </span>
                            </div>
                          )
                        )} */}
                      {/* <div className="flex text-md gap-5">
                        <span className="font-semibold text-black">
                          Top Level Domain: </span>
                        <span className="font-light text-gray-500">
                          {country.tld[0]}
                        </span>
                      </div>
                      <div className="flex text-md gap-2">
                        <span className="font-semibold text-black">
                          Region:
                        </span>
                        <span className="font-light text-gray-500">
                          {country.region}
                        </span>
                      </div>
                      <div className="flex text-md gap-2">
                        <span className="font-semibold text-black">
                          Sub Region:
                        </span>
                        <span className="font-light text-gray-500">
                          {country.subregion}
                        </span>
                      </div> */}
                      {/* <div className="flex text-md gap-2">
                        <span className="font-semibold text-black">
                          Capital:
                        </span>
                        <span className="font-light text-gray-500">
                          {country.capital}
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      }
      renderFooter={<></>}
      darkMode={darkMode}
    />
  );
};

export default CountryView;

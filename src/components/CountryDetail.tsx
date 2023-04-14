import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { CountryData } from '../interfaces/countriesInterface';

interface ICountryDetail {
  country: CountryData;
  darkMode: boolean;
}

const CountryDetail: React.FC<ICountryDetail> = ({ country, darkMode }) => {
  const navigate = useNavigate();

  if (!country) {
    return <>Error! This is not a country page!</>;
  }
  const currencyCodes = Object?.keys(country?.currencies) || [];
  const languageNames = Object?.values(country?.languages) || [];
  return (
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
        <div className="md:flex gap-10 w-full mt-10">
          <div>
            <img
              className="w-full h-60 object-cover mb-5"
              src={country.flags.png}
              alt={`Flag of ${country.name}`}
              loading="lazy"
            />
          </div>
          <div>
            <h1 className={`${darkMode && 'text-white'} text-4xl font-bold`}>
              {country.name.common}
            </h1>
            <div className="md:flex mt-5 gap-20">
              <div className="md:flex-col max-w-sm">
                <div className="flex text-md gap-2">
                  <span
                    className={`${
                      darkMode && 'text-white'
                    } font-semibold text-black`}
                  >
                    Native Name:
                  </span>
                  {country?.name?.nativeName &&
                    Object?.values(country?.name?.nativeName)
                      ?.slice(0, 3)
                      ?.map((lang, index) => (
                        <span
                          key={index}
                          className="font-light text-gray-500 mr-1"
                        >
                          {lang?.official},
                        </span>
                      ))}
                </div>
                <div className="flex text-md gap-2">
                  <span
                    className={`${
                      darkMode && 'text-white'
                    } font-semibold text-black`}
                  >
                    Population:
                  </span>
                  <span className="font-light text-gray-500">
                    {country.population.toLocaleString()}
                  </span>
                </div>
                <div className="flex text-md gap-2">
                  <span
                    className={`${
                      darkMode && 'text-white'
                    } font-semibold text-black`}
                  >
                    Region:
                  </span>
                  <span className="font-light text-gray-500">
                    {country.region}
                  </span>
                </div>
                <div className="flex text-md gap-2">
                  <span
                    className={`${
                      darkMode && 'text-white'
                    } font-semibold text-black`}
                  >
                    Sub Region:
                  </span>
                  <span className="font-light text-gray-500">
                    {country.subregion}
                  </span>
                </div>
                <div className="flex text-md gap-2">
                  <span
                    className={`${
                      darkMode && 'text-white'
                    } font-semibold text-black`}
                  >
                    Capital:
                  </span>
                  <span className="font-light text-gray-500">
                    {country.capital}
                  </span>
                </div>
              </div>
              <div className="md:flex-col">
                <div className="flex-col">
                  <div className="flex text-md gap-2">
                    <span
                      className={`${
                        darkMode && 'text-white'
                      } font-semibold text-black`}
                    >
                      Top Level Domain:
                    </span>
                    <span className="font-light text-gray-500">
                      {country.tld && country?.tld[0]}
                    </span>
                  </div>
                  <div className="flex text-md gap-2">
                    <span
                      className={`${
                        darkMode && 'text-white'
                      } font-semibold text-black`}
                    >
                      Currencies:
                    </span>
                    {currencyCodes.slice(0, 3).map((currencyCode, index) => (
                      <span key={index} className="font-light text-gray-500">
                        {country?.currencies[currencyCode].name}
                      </span>
                    ))}
                  </div>
                  <div className="flex text-md gap-2">
                    <span
                      className={`${
                        darkMode && 'text-white'
                      } font-semibold text-black`}
                    >
                      Languages:
                    </span>
                    {languageNames?.slice(0, 3)?.map((language: any) => (
                      <span className="font-light text-gray-500">
                        {language},
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex-col mt-8">
              <div className="flex text-md gap-2">
                <span
                  className={`${
                    darkMode && 'text-white'
                  } font-semibold text-black`}
                >
                  Border Countries:
                </span>
                {country?.borders?.map((border, index) => (
                  <span
                    key={index}
                    className="font-light text-gray-500 bg-slate-200 px-2"
                  >
                    {border}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetail;

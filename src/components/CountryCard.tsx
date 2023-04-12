import React from 'react';
import { CountryData } from '../interfaces/countriesInterface';

interface ICountryCard {
  country: CountryData;
}

const CountryCard: React.FC<ICountryCard> = ({ country }) => {
  return (
    <div
      key={country.name.official}
      className="bg-white rounded-md shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
    >
      <img
        className="w-full h-40 object-cover"
        src={country.flags.png}
        alt={`Flag of ${country.name}`}
        loading="lazy"
      />
      <div className="px-4 py-4">
        <h2 className="text-lg font-medium mb-2">{country.name.common}</h2>
        <p className="text-sm text-gray-500 mb-2">
          Population: {country.population.toLocaleString()}
        </p>
        <p className="text-sm text-gray-500 mb-2">Region: {country.region}</p>
        <p className="text-sm text-gray-500 mb-2">Capital: {country.capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;

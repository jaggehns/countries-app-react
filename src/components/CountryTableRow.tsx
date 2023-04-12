import React from 'react';
import { CountryData } from '../interfaces/countriesInterface';

interface ICountryCard {
  country: CountryData;
}

const CountryTableRow: React.FC<ICountryCard> = ({ country }) => {
  return (
    <tr className="text-sm text-center items-center" key={country.name.common}>
      <td className="px-4 py-2 flex justify-center">
        <img
          className="h-10 w-12 object-cover"
          src={country.flags.png}
          alt={`Flag of ${country.name}`}
          loading="lazy"
        />
      </td>
      <td className="hidden md:table-cell px-4 py-2">
        {country.population.toLocaleString()}
      </td>
      <td className="px-4 py-2">{country.region}</td>
      <td className="hidden md:table-cell px-4 py-2">{country.capital}</td>
      <td className="px-4 py-2">{country.name.common}</td>
      <td className="hidden md:table-cell px-4 py-2">
        <div className="flex flex-row gap-2 items-center justify-center">
          {country?.currencies &&
            Object?.keys(country?.currencies)?.map((currency, index) => (
              <div
                key={index}
                className={`{flex flex-row p-2 items-center bg-slate-300 rounded-lg cursor-pointer gap-2`}
              >
                <span className="font-medium">
                  {country?.currencies?.[currency]?.symbol}
                </span>
                <span className="mr-1">{currency}</span>
              </div>
            ))}
        </div>
      </td>
    </tr>
  );
};

export default CountryTableRow;

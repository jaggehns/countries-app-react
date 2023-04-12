import { useMemo, useState } from 'react';
import { CountryData } from '../interfaces/countriesInterface';

interface UseCountryFilterProps {
  countries: CountryData[];
}

export const useCountryFilter = ({ countries }: UseCountryFilterProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const filteredCountries = useMemo(() => {
    let result = countries;

    if (searchTerm) {
      result = result.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedRegion) {
      result = result.filter((country) =>
        country.region.toLowerCase().includes(selectedRegion.toLowerCase())
      );
    }

    return result;
  }, [countries, searchTerm, selectedRegion]);

  return {
    filteredCountries,
    searchTerm,
    setSearchTerm,
    selectedRegion,
    setSelectedRegion,
  };
};

import { useState, useEffect } from 'react';
import { CountryData } from '../interfaces/countriesInterface';

const ITEMS_PER_PAGE = 12;

type Pagination = {
  pageCountries: CountryData[];
  currentPage: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
};

const usePagination = (countries: CountryData[] | null): Pagination => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageCountries, setPageCountries] = useState<CountryData[]>([]);

  useEffect(() => {
    if (!countries) {
      return;
    }
    setTotalPages(Math.ceil(countries.length / ITEMS_PER_PAGE));
  }, [countries]);

  useEffect(() => {
    if (!countries) {
      return;
    }
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setPageCountries(countries.slice(startIndex, endIndex));
  }, [countries, currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return {
    pageCountries,
    currentPage,
    totalPages,
    handleNextPage,
    handlePrevPage,
  };
};

export default usePagination;

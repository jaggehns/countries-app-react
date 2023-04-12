import React from 'react';

interface ISearchbar {
  handleSearchTermChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
}

const Searchbar: React.FC<ISearchbar> = ({
  handleSearchTermChange,
  searchTerm,
}) => {
  return (
    <input
      type="text"
      placeholder="Search for a country"
      className="rounded-lg py-2 px-4 w-64 border border-gray-300 focus:border-blue-500 focus:outline-none mb-5"
      value={searchTerm}
      onChange={handleSearchTermChange}
      autoFocus
    />
  );
};

export default Searchbar;

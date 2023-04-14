import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Searchbar from '../Searchbar';

describe('Searchbar component', () => {
  const handleSearchTermChangeMock = jest.fn();
  const searchTerm = 'Test search term';

  beforeEach(() => {
    handleSearchTermChangeMock.mockClear();
  });

  it('renders the input field with correct props', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <Searchbar
        handleSearchTermChange={handleSearchTermChangeMock}
        searchTerm={searchTerm}
      />
    );
    const inputField = getByPlaceholderText('Search for a country');
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute('type', 'text');
    expect(inputField).toHaveClass(
      'rounded-lg py-2 px-4 w-64 border border-gray-300 focus:border-blue-500 focus:outline-none mb-5'
    );
    expect(inputField).toHaveValue(searchTerm);
    fireEvent.change(inputField, { target: { value: 'New test search term' } });
    expect(handleSearchTermChangeMock).toHaveBeenCalledTimes(1);
  });

  it('calls the handleSearchTermChange function on input change', () => {
    const { getByPlaceholderText } = render(
      <Searchbar
        handleSearchTermChange={handleSearchTermChangeMock}
        searchTerm={searchTerm}
      />
    );
    const inputField = getByPlaceholderText('Search for a country');
    fireEvent.change(inputField, { target: { value: 'New test search term' } });
    expect(handleSearchTermChangeMock).toHaveBeenCalledTimes(1);
  });
});

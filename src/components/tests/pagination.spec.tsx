import { render, fireEvent } from '@testing-library/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Pagination } from '../Pagination';

describe('Pagination', () => {
  const onPageChangeMock = jest.fn();

  afterEach(() => {
    onPageChangeMock.mockClear();
  });

  it('renders the current page and total pages', () => {
    const { getByText } = render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );
    expect(getByText('2 of 5')).toBeInTheDocument();
  });

  it('disables the previous button when on the first page', () => {
    const { getByRole } = render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );
    const previousButton = getByRole('button', { name: 'Previous page' });
    expect(previousButton).toHaveAttribute('disabled');
    fireEvent.click(previousButton);
    expect(onPageChangeMock).not.toHaveBeenCalled();
  });

  it('disables the next button when on the last page', () => {
    const { getByRole } = render(
      <Pagination
        currentPage={5}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );
    const nextButton = getByRole('button', { name: 'Next page' });
    expect(nextButton).toHaveAttribute('disabled');
    fireEvent.click(nextButton);
    expect(onPageChangeMock).not.toHaveBeenCalled();
  });

  it('calls the onPageChange callback with the previous page number when the previous button is clicked', () => {
    const { getByRole } = render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );
    const previousButton = getByRole('button', { name: 'Previous page' });
    fireEvent.click(previousButton);
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  it('calls the onPageChange callback with the next page number when the next button is clicked', () => {
    const { getByRole } = render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );
    const nextButton = getByRole('button', { name: 'Next page' });
    fireEvent.click(nextButton);
    expect(onPageChangeMock).toHaveBeenCalledWith(4);
  });
});

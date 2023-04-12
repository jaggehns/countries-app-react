import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <button
        className={`px-3 py-2 rounded-lg bg-white text-gray-30 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span className="sr-only">Previous page</span>
        <FaChevronLeft className="h-4 w-4" aria-hidden="true" />
      </button>
      <p className="text-gray-500 text-sm">
        {currentPage} of {totalPages}
      </p>
      <button
        className={`px-3 py-2 rounded-lg bg-white text-gray-500 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span className="sr-only">Next page</span>
        <FaChevronRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
};

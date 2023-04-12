interface Footer {
  renderPagination: React.ReactNode;
}

export const Footer: React.FC<Footer> = ({ renderPagination }) => (
  <footer className="bg-gray-100 text-gray-700 py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center mt-auto sticky bottom-0">
    {renderPagination}
  </footer>
);

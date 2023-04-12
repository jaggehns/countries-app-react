import Searchbar from './Searchbar';

interface MainContentProps {
  onSearchTermChange: (term: string) => void;
  searchTerm: string;
  renderDropDown: React.ReactNode;
  renderSwitch: React.ReactNode;
  isLoading: boolean;
  renderCardView: React.ReactNode;
  renderTableView: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = ({
  onSearchTermChange,
  searchTerm,
  renderDropDown,
  renderSwitch,
  isLoading,
  renderCardView,
  renderTableView,
}) => {
  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onSearchTermChange(event.target.value);
  };
  return (
    <main className="container bg-concrete-50 flex-grow overflow-y-auto mx-auto py-8 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
        <Searchbar
          searchTerm={searchTerm}
          handleSearchTermChange={handleSearchTermChange}
        />
        <div className="flex gap-5">
          {renderDropDown}
          <div className="flex items-center mb-4">{renderSwitch}</div>
        </div>
      </div>
      {isLoading && <div className="flex justify-center">...Loading</div>}
      {renderCardView}
      {renderTableView}
    </main>
  );
};

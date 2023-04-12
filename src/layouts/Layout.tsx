import React from 'react';

interface ILayout {
  renderHeader: React.ReactNode;
  renderMainContent: React.ReactNode;
  renderFooter: React.ReactNode;
  darkMode: boolean;
}

const Layout: React.FC<ILayout> = ({
  renderHeader,
  renderMainContent,
  renderFooter,
  darkMode,
}) => {
  return (
    <div
      className={`flex flex-col min-h-screen ${darkMode ? 'bg-gray-900' : ''}`}
    >
      {renderHeader}
      {renderMainContent}
      {renderFooter}
    </div>
  );
};

export default Layout;

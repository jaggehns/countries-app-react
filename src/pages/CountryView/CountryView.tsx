import React from 'react';
import { useLocation } from 'react-router-dom';
import CountryDetail from '../../components/CountryDetail';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import useDarkMode from '../../hooks/useDarkMode';
import { CountryData } from '../../interfaces/countriesInterface';
import Layout from '../../layouts/Layout';

const CountryView: React.FC = () => {
  const location = useLocation();
  const [darkMode, toggleDarkMode] = useDarkMode();
  const country: CountryData = location.state;

  return (
    <Layout
      renderHeader={
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          isCountryDetailView={true}
        />
      }
      renderMainContent={
        <CountryDetail country={country} darkMode={darkMode} />
      }
      renderFooter={<Footer renderPagination={<>Jaggehn - 2023</>} />}
      darkMode={darkMode}
    />
  );
};

export default CountryView;

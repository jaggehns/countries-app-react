import { useState } from 'react';

type UseDarkModeReturnType = [boolean, () => void];

const useDarkMode = (): UseDarkModeReturnType => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  return [darkMode, toggleDarkMode];
};

export default useDarkMode;

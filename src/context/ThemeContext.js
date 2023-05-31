import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('primary');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'primary' ? 'secondary' : 'primary'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

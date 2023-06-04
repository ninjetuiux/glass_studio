// ThemeContext.js
import React, { useState } from 'react';

const ThemeContext = React.createContext(); // Create a new context object

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Define a state variable for the theme

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light'); // Toggle the theme between light and dark
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Render the child components */}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

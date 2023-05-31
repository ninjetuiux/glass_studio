import React, { useContext, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import { ThemeContext } from '../context/ThemeContext';
export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
      console.log(theme);
    }, [theme])
  return (
    <div className={`bg-${theme} w-screen h-screen`}>
      <h2 className={`text-${theme}`}>Color: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Color</button>
      <h1>Hello World</h1>
      {/* Other components */}
      <Navbar />
    </div>
  );
}

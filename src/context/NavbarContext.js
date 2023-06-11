import React, { useState } from 'react';
import { createContext } from 'react';

const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const ToggleNavbar = () => {
        setIsNavbarOpen((prevToggle) => !prevToggle);
    }

  return (
    <NavbarContext.Provider value={{ isNavbarOpen, ToggleNavbar }}>
        {children} {/* Render the child components */}
    </NavbarContext.Provider>
  )
}

export {NavbarContext, NavbarProvider};
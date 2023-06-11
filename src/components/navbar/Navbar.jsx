import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { NavbarContext } from '../../context/NavbarContext';
import Layout from '../layout-theme/Layout';
import NavbarItem from './NavbarItem';
// import { Link } from 'react-router-dom';

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import GradeIcon from '@mui/icons-material/Grade';
import DialpadIcon from '@mui/icons-material/Dialpad';
import HomeIcon from '@mui/icons-material/Home';

// Navbar component
export default function Navbar() {
  // Get theme and toggleTheme function from ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isNavbarOpen, ToggleNavbar} = useContext(NavbarContext);
  const [themeMode, setThemeMode] = useState('light');

  // Function to handle theme toggle
  const handleToggleTheme = () => {
    toggleTheme();
  };

  // Function to handle theme change between light and dark
  const handleThemeChange = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newMode);
    handleToggleTheme();
  };

  // Array of navigation items to be rendered in the Navbar
  const navItems = [
    { url: '/', name: "דף הבית", icon: <HomeIcon />}, 
    { url: '/who_we_are', name: "מי אנחנו", icon: <GroupsIcon />}, 
    { url: '/portfolio', name: "תיק עבודות", icon: <WorkIcon />}, 
    { url: '/testimonials', name: "חוות דעת", icon: <GradeIcon />}, 
    { url: '/contact_us', name: "צור קשר", icon: <DialpadIcon />}, 
  ];
  
  // State for toggling the visibility of the navigation menu
  const [isToggled, setIsToggled] = useState(false);

  // Handler to toggle the visibility of the navigation menu
  const ToggleHandler = () => {
    setIsToggled((prevToggle) => !prevToggle)
    ToggleNavbar()
  };

  // Component rendering
  return (
    <Layout> {/* Wrapper component */}
      <div className={`sm:min-h-screen absolute  sm:h-auto ${isToggled ? 'h-screen': ''} sm:w-1/4 flex font-verla ${theme} sm:z-10 ${isNavbarOpen ? 'z-50 pointer-events-auto sm:pointer-events-none' : ''}`}>
        {/* Mobile View */}
        <div className="sticky bg-secondary sm:hidden top-0 flex w-screen h-12 shadow-md items-center md:px-10">
          {/* Button to toggle the visibility of the navigation menu */}
          <button
            onClick={ToggleHandler}
            className="p-0 m-0 flex cursor-pointer hover:rotate-360 px-10 pointer-events-auto" // added pointer-events-auto
          >
            {themeMode === 'dark' ? <MenuRoundedIcon color='action' /> : <MenuRoundedIcon />}
            {/* <MenuRoundedIcon /> */}
          </button>
          {isToggled && (
            <div className={`w-screen h-full ${isNavbarOpen === true ? 'h-auto' : ''} overflow-scroll z-[100] pb-12 top-12 fixed flex flex-col justify-between items-center ${themeMode === 'dark' ? 'bg-primary': 'bg-secondary'}`}>
              <ul className={`flex flex-col w-[90%] justify-center items-around relative gap-10 whitespace-nowrap shadow-sm mt-12 p-12 ${themeMode === 'dark' ? 'bg-primary/75 transition-colors' : 'bg-secondary'}`}>
                {/* Theme Toggle Button */}
                <button
                  className="shadow-md rounded-full flex items-center justify-center h-full w-12 p-0 mx-2 transition-all outline-none hover:transition-all hover:bg-[#63a38a] hover:border-[#63a38a] hover:text-white dark:bg-secondary/5"
                  onClick={handleThemeChange}
                >
                  {themeMode === 'light' ? <LightModeIcon className="m-2" /> : <DarkModeIcon className="m-2" />}
                </button>
                <NavbarItem navItems={navItems} themeMode={themeMode} setIsToggled={setIsToggled} />
              </ul>
            </div>
          )}
        </div>
        {/* Desktop View */}
        <div className="hidden col-span-1 shadow-2xl sm:flex flex-col items-center pt-5 bg-secondary/5">
          <div className="whitespace-nowrap h-12 w-24">
            {/* Theme Toggle Button */}
            <button
              className={`border border-primary shadow-md rounded-full flex items-center justify-center h-full w-full p-0 mx-2 transition-all outline-none hover:transition-all hover:bg-[#63a38a] ${theme === 'light' ? 'hover:border-[#63a38a]' : 'hover:border-[#63a38a] dark:border-[#63a38a] dark:bg-secondary/5'} hover:text-white`}
              onClick={handleThemeChange}
            >
              {themeMode === 'light' ? <DarkModeIcon className="m-2" /> : <LightModeIcon className="m-2" />}
            </button>
          </div>
          <div className="flex flex-col justify-center w-full h-full px-3 my-10">
            <ul className="sm:h-12 lg:h-16 w-full flex flex-col items-start justify-center gap-5">
              <NavbarItem navItems={navItems} themeMode={themeMode} />
              <ul className="flex gap-3 w-full justify-center mt-5">
                <li>
                  <a
                    href="https://m.facebook.com/%D7%90%D7%95%D7%9E%D7%A0%D7%95%D7%AA-%D7%91%D7%96%D7%9B%D7%95%D7%9B%D7%99%D7%AA-%D7%94%D7%AA%D7%A7%D7%A0%D7%95%D7%AA-%D7%A4%D7%A8%D7%95%D7%99%D7%99%D7%A7%D7%98%D7%99%D7%9D-%D7%95%D7%A2%D7%99%D7%A6%D7%95%D7%91-%D7%91%D7%96%D7%9B%D7%95%D7%9B%D7%99%D7%AA-105291017622400/?ref=bookmarks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#63a38a] cursor-pointer"
                  >
                    <FacebookRoundedIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/an_artist_in_glass/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#63a38a] cursor-pointer"
                  >
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=9720502802330"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#63a38a] cursor-pointer"
                  >
                    <WhatsAppIcon />
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

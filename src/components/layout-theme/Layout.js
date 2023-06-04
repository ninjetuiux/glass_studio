import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Layout = ({ children }) => {
    const { theme } = useContext(ThemeContext); // Access the theme value from the context

    return (
        <div className={`${theme}-theme`}> {/* Apply the theme as a class name */}
            {children} {/* Render the child components */}
        </div>
    );
};

export default Layout;

// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"; // Unused import, consider removing
import { Link } from 'react-router-dom';

// A component that generates a list item for each entry in the navItems array
const NavBarItem = ({ navItems, themeMode }) => (
  // We map through navItems array to create a <li> for each item
  navItems.map(({url, name, icon}) => (
    // Creating a list item with various CSS styles and classes
    // If the themeMode is dark, it adds a few more CSS classes
    <li 
      className= {`
      p-3
      h-full
      w-full
      hover:bg-[#63a38a]
      rounded-xl
      flex
      items-center
      whitespace-nowrap
      shadow-md
      cursor-pointer
      transition-all
      ${themeMode === 'dark' ? 'bg-primary/75 hover:scale-105 transition-colors' : ''}
      `}>
      {/* A div that acts as a flex container */}
      <div className={`flex h-12 items-center gap-2 w-full justify-center text-2xl `}>
        {/* Link to be displayed on small screens */}
        <Link to={url} className={`cursor-pointer flex sm:hidden gap-2 items-center`}>
          {/* Icon to be displayed on small screens */}
          <span className="sm:hidden flex">
            {icon}
          </span>
          {/* Name to be displayed on small screens */}
          <p className="">{name}</p>
        </Link>
        {/* Link to be displayed on screens larger than small */}
        <Link to={url} className="hidden sm:flex items-center">
          {/* Icon to be displayed on screens larger than small */}
          <span>
            {icon}
          </span>
          {/* Name to be displayed on screens larger than small */}
          <span className="md:flex px-2 md:text-sm lg:text-xl hidden">{name}</span>
        </Link>
      </div>
    </li>
  ))
);

// Exporting NavBarItem as a default export
export default NavBarItem;

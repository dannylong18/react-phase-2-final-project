import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/favoriteitems'>Favorite Items</NavLink>
      <NavLink to='/contact'>Contact Us</NavLink>
    </nav>
    )
}

export default NavBar;
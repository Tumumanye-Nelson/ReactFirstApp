// component/NavBar.js

import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/service">Service</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="Destination">Destination</Link>
      <Link to="/Experiences">Experiences</Link>
      <Link to="/Tours">Tours</Link>
      <Link to="/Blogs">Blogs</Link>
    </nav>
  );
};

export default NavBar;


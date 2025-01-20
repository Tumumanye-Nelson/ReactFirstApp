import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Smooth scroll links for sections on the same page */}
      <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="nav-link"
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="nav-link"
      >
        About
      </ScrollLink>
      <ScrollLink
        to="services"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="nav-link"
      >
        Service
      </ScrollLink>
      <ScrollLink
        to="contacts"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="nav-link"
      >
        Contact
      </ScrollLink>
      <ScrollLink
        to="destination"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="nav-link"
      >
        Destination
      </ScrollLink>

      {/* Route navigation links for separate pages */}
      <ScrollLink
        to="experiences"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="nav-link"
      >
        Experiences
      </ScrollLink>
      <ScrollLink
        to="tours"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="nav-link"
      >
       Tours
      </ScrollLink>
      <ScrollLink
        to="blogs"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="nav-link"
      >
        Blogs
      </ScrollLink>
    </nav>
  );
};

export default NavBar;

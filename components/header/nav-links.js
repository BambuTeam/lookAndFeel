import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
const NavLinks = () => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className="main-nav__navigation-box one-page-scroll-menu">
      <li>
        <Link href="/">
          <a>¿QUÉ HACEMOS?</a>
        </Link>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          LO QUE AMAMOS
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="pricing"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          MITOSIS
        </ScrollLink>
      </li>
      
      
      
    </ul>
  );
};

export default NavLinks;

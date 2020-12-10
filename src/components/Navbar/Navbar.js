import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="Nav_navigation">
        <li>
          <NavLink exact to="/">
            Main
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/track">
            Track
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

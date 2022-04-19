import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav_bar">
      <NavLink className="nav_item" to="/collection">
        Collection
      </NavLink>
      <NavLink className="nav_item" to="/creatures">
        Creatures
      </NavLink>
      <NavLink className="nav_item" to="/create">
        Create
      </NavLink>
      <NavLink className="nav_item" to="/log_in">
        Log On/Off
      </NavLink>
    </nav>
  );
}

export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav_bar">
      <NavLink className="nav_item" to="/saved_critters">
        Collection
      </NavLink>
      <NavLink className="nav_item" to="/browse_creatures">
        Library
      </NavLink>
      <NavLink className="nav_item" to="/create_species">
        Create
      </NavLink>
      <NavLink className="nav_item" to="/log_in">
        Take Off
      </NavLink>
    </nav>
  );
}

export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user }) {
  return (
    <nav className="nav_bar">
      <NavLink className="nav_item" to="/collection">
        {user !== "" ? <>Collection</> : null}
      </NavLink>
      <NavLink className="nav_item" to="/creature">
        {user !== "" ? <>Creatures</> : null}
      </NavLink>
      <NavLink className="nav_item" to="/create">
        {user !== "" ? <>Create</> : null}
      </NavLink>
      <NavLink className="nav_item" to="/login">
        {user !== "" ? <>Log Off</> : <></>}
      </NavLink>
    </nav>
  );
}

export default NavBar;

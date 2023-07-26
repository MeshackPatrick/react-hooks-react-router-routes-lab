import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>{/*{code here}*/}
    <NavLink to="/" exact="true">Home</NavLink><br/>
    <NavLink to="/movies" exact="true">Movies</NavLink><br/>
    <NavLink to="/directors" exact="true">Directors</NavLink><br/>
    <NavLink to="/actors" exact="true">Actors</NavLink>
  </div>;
}

export default NavBar;

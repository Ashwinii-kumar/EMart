import React from "react";
import { NavbarContainer } from "../styles/Navbar.styled";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarContainer>
      <h1>E Mart</h1>
      <div>
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/categories" className="link">
          Categories
        </NavLink>
        <NavLink to="/products" className="link">
          Products
        </NavLink>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;

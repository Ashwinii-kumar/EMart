import React from "react";
import { HomeContainer } from "../styles/Home.styled";
import { NavLink } from "react-router-dom";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <HomeContainer>
      <h2>Exclusive Deals on Shopping Collections</h2>
      <p>Explore different categories. Find the best deals</p>
      <NavLink to="/products" className="linkB">
        Shop Now
      </NavLink>
    </HomeContainer>
  );
};

export default Home;

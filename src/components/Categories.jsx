import React from "react";
import { CategoriesContainer } from "../styles/Categories.styled";
import { useDispatch, useSelector } from "react-redux";
import { ButtonStyled } from "../styles/Button.styled";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../redux/categorySlice";

const Categories = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toTitleCase = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  let c = new Set();
  for (let i = 0; i < products.length; i++) {
    c.add(products[i].category);
  }

  const categories = [...c];

  const onClickHandler = (item) => {
    dispatch(setCategory(item));
    navigate("/products");
  };

  return (
    <CategoriesContainer>
      <h1>Explore By Category</h1>
      <div className="category-render">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <span className="category-name">{toTitleCase(item)}</span>
            <ButtonStyled type="button" onClick={() => onClickHandler(item)}>
              Explore
            </ButtonStyled>
          </div>
        ))}
      </div>
    </CategoriesContainer>
  );
};

export default Categories;

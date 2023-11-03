import React from "react";
import { ButtonStyled } from "../styles/Button.styled";
import { ProductsStyled } from "../styles/Products.styled";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <ProductsStyled>
      <p>Some Error Occurred .</p>
      <ButtonStyled onClick={() => navigate("/")}>Go To Home</ButtonStyled>
    </ProductsStyled>
  );
};

export default Error;

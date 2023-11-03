import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ButtonStyled } from "../styles/Button.styled";

const Containerr = styled.div`
  text-align: left;
  padding: 2rem 4rem;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  max-width: 100%;
  height: 50vh;
`;

const Price = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 13px;
  margin-bottom: 2rem;
`;

const ProducItem = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const products = useSelector((state) => state.products.products);
  const product = products.find((item) => item.id === parseInt(id));


  return (
    <Containerr>
      <Title>{product.title}</Title>
      <Image src={product.image} alt={product.title} />
      <Price>Price: Rs.{product.price * 83}</Price>
      <Description>Details: {product.description}</Description>
      <ButtonStyled type="button" onClick={() => navigate(-1)}>
        Back to Products
      </ButtonStyled>
    </Containerr>
  );
};

export default ProducItem;

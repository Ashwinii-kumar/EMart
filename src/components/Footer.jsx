// Footer.js

import React from "react";
import styled from "styled-components";

// Styled component for the footer container
const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary[0]};
  color: ${({ theme }) => theme.colors.primary[1]};
  padding: 20px 0;
  text-align: center;
`;

// Styled component for the footer text
const FooterText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2023 E Mart.All Rights Reserved</FooterText>
    </FooterContainer>
  );
};

export default Footer;

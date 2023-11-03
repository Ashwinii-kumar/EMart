import styled from "styled-components";

export const ProductsStyled = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: small;
    padding: 0.5rem 0.5rem;
  }
`;

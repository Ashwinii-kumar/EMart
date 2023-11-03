import styled from "styled-components";

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 3rem;
  column-gap: 3.5rem;
  padding: 1.5rem 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

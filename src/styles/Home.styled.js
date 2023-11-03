import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  margin: auto;

  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  background-color: ${({ theme }) => theme.colors.secondary[2]};
  padding: 4rem 2rem;

  h2 {
    color: ${({ theme }) => theme.colors.primary[1]};
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
    margin-top: 1.5rem;
    color: ${({ theme }) => theme.colors.primary[0]};
  }

  .linkB {
    background-color: ${({ theme }) => theme.colors.primary[0]};
    width: fit-content;
    padding: 1.5rem 4.5rem;
    /* margin-top: 4rem; */
    margin: auto;
    color: white;
    text-decoration: none;
    border-radius: 15px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h2 {
      font-size: 1.9rem;
    }
    padding: 4rem 1rem;
    p {
      font-size: 1rem;
    }
    .linkB {
      padding: 1rem 1rem;
      width: 50%;
    }
  }
`;

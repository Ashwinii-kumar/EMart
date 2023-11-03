import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary[1]};
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  align-items: center;
  color: white;

  .link {
    text-decoration: none;
    margin-right: 1rem;
    color: beige;
    padding-bottom: 3px;
  }

  .active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary[0]};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    .link {
      font-size: small;
    }
    padding-right: 0;
    h1 {
      font-size: large;
      padding-top: 2px;
    }
  }
`;

import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 0.5rem 0.5rem;
  width: 75%;
  margin: auto;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.primary[0]};
  background-color: ${({ theme }) => theme.colors.primary[0]};
  font-size: medium;
  color: cyan;
  cursor: pointer;
  margin-bottom: 15px;
  bottom: 0;
`;

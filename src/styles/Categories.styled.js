import styled from "styled-components";

export const CategoriesContainer = styled.div`
  min-height: 80vh;
  padding: 1rem 1rem;
  background-color: #215759;

  .category-render {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    row-gap: 2rem;
    column-gap: 2.5rem;
    padding: 1.5rem 1.5rem;
    margin-top: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 3rem;
  }

  .category-card {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.secondary[0]};
    box-shadow: rgba(33, 73, 79, 0.24) 0px 3px 8px;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    height: 180px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary[1]};
      .category-name {
        margin-top: 40px;
      }
    }
  }

  .category-card .category-name {
    display: block;
    margin-top: 80px;
    font-size: 100%;
    color: teal;
  }

  .category-card .category-name + button {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 50px;
  }

  .category-card:hover button {
    display: block;
  }

  h1 {
    text-align: center;
    color: aqua;
    margin-top: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h1 {
      font-size: x-large;
    }
  }
`;

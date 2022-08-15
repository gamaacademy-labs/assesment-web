import styled from "styled-components";

export const SFooterContainer = styled.div`
  background-color: #7d38db;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  padding: 0.75rem 2rem;
  margin: 0;
  box-sizing: border-box;

  @media (max-width: 425px) {
    justify-content: center;

    button {
      width: 327px;
      font-size: 16px;
    }
  }
`;

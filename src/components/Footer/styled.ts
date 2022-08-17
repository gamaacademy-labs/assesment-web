import styled from "styled-components";

export const SFooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme["purple"]};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  padding: 0.75rem 2rem;
  margin: 0;
  box-sizing: border-box;

  @media (max-width: 426px) {
    justify-content: center;

    button {
      width: 327px;
      font-size: 16px;
    }
  }
`;

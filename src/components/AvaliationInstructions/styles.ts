import styled from "styled-components";

export const MainContainer = styled.main`
  flex: 1;
  padding: 1.5rem;
  height: fit-content;

  border: 1px solid #d7dbda;
  border-radius: 8px;

  span {
    color: ${(props) => props.theme["color-text"]};
    font-weight: 700;
  }

  p {
    margin-top: 1.5rem;
  }

  div {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    width: fit-content;

    background: ${(props) => props.theme["purple"]};

    border: 1px solid #202020;
    box-shadow: -4px 4px 0px #202020;
    border-radius: 8px;

    input {
      margin-right: 0.75rem;
    }

    label {
        color: ${props => props.theme['white']};
        font-size: 0.875rem;
    }
  }
`;

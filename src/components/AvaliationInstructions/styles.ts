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
`;

interface InputProps {
  variant?: boolean;
}

export const DivInput = styled.div<InputProps>`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  width: fit-content;

  border-radius: 8px;

  background: ${(props) =>
    props.variant ? props.theme["purple"] : "transparent"};

  border: ${(props) => (props.variant ? "1px solid #202020" : "1px solid")};
  box-shadow: ${(props) => props.variant && "-4px 4px 0px #202020"};

  input {
    margin-right: 0.75rem;
  }

  label {
    color: ${(props) => (props.variant ? props.theme["white"] : "black")};
    font-size: 0.875rem;
  }
`;

import styled from "styled-components";

export const Container = styled.aside`
  padding: 2rem;

  border: 1px solid #d7dbda;
  border-radius: 8px;
  width: fit-content;
  height: fit-content;

  color: ${(props) => props.theme["color-text"]};

  width: 100%;
  max-width: 300px;

  @media (max-width: 768px){
    max-width: 100%;
  }

  
  header {
    img {
      margin-right: 0.75rem;
    }
  }

  button {
    background: ${props => props.theme['purple']};
    border-radius: 8px;
    padding: 0.35rem;
    color: ${props => props.theme['white']};
    font-size: 0.875rem;
    font-weight: 700;
    border: 0;
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;
  }
`;

export const SubContainerQuestions = styled.div`
  margin: 1rem 0;
  color: ${(props) => props.theme["purple"]};
  font-size: 0.75rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  gap: 16px;

  a {
    text-decoration: none;
    padding: 0.5rem 0.25rem;
    border: 1px solid #d7dbda;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DivInputRadio = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-bottom: 0.5rem;

    label {
        font-size: 0.625rem;
        letter-spacing: 0.05em;
    }
`

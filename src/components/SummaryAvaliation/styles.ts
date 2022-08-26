import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  height: fit-content;
  max-width: 18.75rem;
  padding: 1.5rem;
  color: ${(props) => props.theme["color-text"]};
  font-size: 0.875rem;

  border: 1px solid #d7dbda;
  border-radius: 8px;

  @media (max-width: 768px){
    max-width: 100%;
  }

  header {
    display: flex;
    justify-content: space-between;

    img:not(:first-child) {
      
      cursor: pointer;
    }

    strong {
      font-size: 1rem;
      img {
        margin-right: 0.75rem;
      }
    }
  }
`;

export const SubContainerInfos = styled.div`
  margin-top: 1.5rem;
`;

export const FooterInfos = styled.footer`
  margin-top: 1.5rem;
  padding-top: 1.5rem;

  border-top: 1px solid #d7dbda;

  img {
    margin-right: 0.75rem;
  }
`;

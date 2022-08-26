import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const SubContainer = styled.div`
  display: flex;
  margin: 2rem;
  gap: 2rem;
  margin-bottom: 7.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 5rem;
  position: relative;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

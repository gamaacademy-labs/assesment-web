import styled from "styled-components";

interface props{
  margin?: number
}

export const Div = styled.div`
  position: absolute;
  width: 1254px;
  height: 72px;
  left: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  padding: 16px 32px;
  background: #7d38db;
  box-shadow: 0px -2px 4px rgba(36, 37, 35, 0.24);
  margin: 200px 50px;
`;
export const DivInformation = styled.div<props>`
  display: flex;
  align-items: center;

  .question{
    display: flex;
    margin-left: 0.75rem;
  }
  .numQuestion{
    margin: 0 0.5rem;
  }
`;

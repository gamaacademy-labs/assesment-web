import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

interface props {
  transform?: number;
  backgroundColor?: string;
  display?: string;
  width?: string;
  color?: string;
}

export const DivModal = styled(Modal)<props>`
  .modal-content {
    width: 100%;
    display: flex;
    height: auto;
  }
  .modal-header {
    border: none;
    z-index: 1;
  }
  .modal-body {
    margin-top: -3rem;
    margin-bottom: 0;
    overflow: hidden;
  }
  .btn-close {
    font-size: 12px;
  }
  .btn-close:focus {
    outline: 0;
    box-shadow: none;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const DivCards = styled.div<props>`
  width: 100%;
  display: flex;
`;

export const DivCard = styled.div<props>`
  transition: display 0.5s ease 0s;
  display: ${(props) => props.display};
  flex-direction: column;
  padding: 1rem;
  padding-bottom: 0;
`;

export const Img = styled.img`
  width: 150px;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 50%;
    height: 100%;
    margin: 0 auto;
  }
`;

export const DivInformation = styled.div`
  text-align: center;
  margin: 0 auto;
  h4 {
    margin: 1rem 0;
  }
  p {
    margin: 0;
  }
`;

export const DivIndicator = styled.div<props>`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: flex-end;
  padding-top: 1rem;
`;

export const Indicator = styled.div<props>`
  width: 10px;
  margin: 0 2%;
  height: 10px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px;
  padding: 0;
  cursor: pointer;
`;

export const DivButton = styled.div<props>`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`;
export const Button = styled.div<props>`
  display: ${(props) => props.display};
  width: ${(props) => (props.transform == 0 ? "100%" : "48%")};
`;

import styled from "styled-components";
import { Form } from "react-bootstrap";
import { Input, Button } from "@gama-academy/smash-web";

export const SForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;

  span {
    color: #f00;
    padding: 0;
    margin: 0;
    font-weight: 700;
    font-size: 1.5rem;
  }
`;

export const SInput = styled(Form.Control)`
  text-align: center;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-family: "Questrial";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  /* box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5); */

  @media only screen and (max-width: 900px) {
    font-size: 15px;
  }
`;

export const SButton = styled(Button)`
  span {
    color: #000;
    font-size: 1.25rem;
  }

  /* @media only screen and (max-width: 900px) {
    font-size: 15px;
    width: 45%;
    padding: 3px 15px;
  } */
`;

export const SContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

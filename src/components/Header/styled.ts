import styled from "styled-components";
import { InputSearch } from "@gama-academy/smash-web";

export const SHeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  padding: 0.5rem 1rem;
  margin: 0;
  box-sizing: border-box;
  gap: 2rem;
`;

export const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-left: 10rem;
  margin-right: 5rem;
  box-sizing: border-box;
`;

export const SInputSearch = styled(InputSearch)`
  width: 440px;
`;

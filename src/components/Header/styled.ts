import styled from "styled-components";
import { Link } from "react-router-dom";
import { InputSearch } from "@gama-academy/smash-web";

export const SHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  padding: 0.75rem 2rem;
  margin: 0;
  box-sizing: border-box;
  gap: 2.5rem;
`;

export const SContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  padding: 0.75rem 2rem;
  margin: 0;
  box-sizing: border-box;
  gap: 2rem;
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: "#000";
`;

export const SInputSearch = styled(InputSearch)`
  width: 440px;
`;

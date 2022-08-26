import styled from "styled-components";
import { InputSearch, MaterialIcon, Typography } from "@gama-academy/smash-web";

export const SHeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: auto;
  max-width: 100vw;
  padding: 0.5rem 1rem;
  margin: 0;
  box-sizing: border-box;
  gap: 2rem;

  @media (max-width: 1024px) {
    gap: 1rem;
    justify-content: space-around;
    padding: 0.5rem 0;
    max-width: 100vw;
    margin: 0 0.5rem;
    width: auto;
  }

  @media (max-width: 425px) {
    gap: 0;
    justify-content: space-around;
    padding-top: 1rem;
  }
`;

export const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-left: 10rem;
  margin-right: 5rem;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    margin: 0;
    width: 25%;
  }

  @media (max-width: 425px) {
    display: none;
  }
`;

export const SInputSearch = styled(InputSearch)`
  width: 440px;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0;
    padding-right: 0.25rem;
  }
`;

export const STypography = styled(Typography)`
  @media (max-width: 425px) {
    display: none;
  }
`;

export const SImage = styled.img`
  @media (max-width: 425px) {
    display: none;
  }
`;

export const SMaterialIcon = styled(MaterialIcon)`
  @media (max-width: 425px) {
    display: none;
  }
`;

export const SMobileIcon = styled(MaterialIcon)`
  display: none;

  @media (max-width: 425px) {
    display: block;
  }
`;

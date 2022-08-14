import React from "react";
import * as S from "./styled";
import logo from "../../assets/Logo.svg";
import perfil from "../../assets/Perfil.svg";
import { InputSearch, MaterialIcon, Typography } from "@gama-academy/smash-web";

export const Header: React.FC = () => {
  return (
    <S.SHeaderContainer>
      <img src={logo} alt="Gama Academy logo" />
      <S.SContainer>
        <S.SInputSearch
          label=""
          onChangeValue={function noRefCheck() {}}
          onClear={function noRefCheck() {}}
          placeholder="Digite uma palavra-chave"
          value=""
          m={undefined}
          margin={undefined}
          mt={undefined}
          marginTop={undefined}
          mb={undefined}
          marginBottom={undefined}
          ml={10}
          marginLeft={undefined}
          mr={undefined}
          marginRight={undefined}
          my={undefined}
          marginY={undefined}
          mx={undefined}
          marginX={undefined}
        />
      </S.SContainer>
      <S.SContainer>
        <Typography>Avaliação #{}</Typography>
        <S.SLink to="/">Carreiras</S.SLink>
        <MaterialIcon name="pattern" color="black" />
        <MaterialIcon
          color="white"
          name="notifications"
          size={18}
          shape="round"
          shapeStyle={{ width: 24, height: 24 }}
        />
        <img src={perfil} alt="Foto do usuário" />
      </S.SContainer>
    </S.SHeaderContainer>
  );
};

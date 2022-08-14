import React from "react";
import * as S from "./styled";
import logo from "../../assets/Logo.svg";
import perfil from "../../assets/Perfil.svg";
import square from "../../assets/SquareDotsIcon.svg";
import { MaterialIcon, Typography } from "@gama-academy/smash-web";

export const Header: React.FC = () => {
  return (
    <S.SHeaderContainer>
      <img src={logo} alt="Logo da Gama Academy" />
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
          ml={undefined}
          marginLeft={undefined}
          mr={undefined}
          marginRight={undefined}
          my={undefined}
          marginY={undefined}
          mx={undefined}
          marginX={undefined}
        />
      </S.SContainer>
      <Typography numberOfLines={1}>Avaliação #{}</Typography>
      <Typography>Carreiras</Typography>
      <img src={square} alt="Ícone de quadrado" />
      <MaterialIcon
        color="white"
        name="notifications"
        size={18}
        shape="round"
        shapeStyle={{ width: 24, height: 24 }}
      />
      <img src={perfil} alt="Foto do usuário" />
    </S.SHeaderContainer>
  );
};

import * as S from "./styled";
import { Box, Button, MaterialIcon, Typography } from "@gama-academy/smash-web";
import { useNavigate } from "react-router-dom";

interface FooterProps {
  isDisabled: boolean;
}

export const Footer = ({ isDisabled }: FooterProps) => {
  const navigate = useNavigate();

  return (
    <S.SFooterContainer>
      <Button
        onClick={() => navigate("/assessment")}
        size="1"
        color="white"
        borderRadius="md"
        disabled={isDisabled}
      >
        <Box alignment="center" dir="row" justifyContent="space-between">
          <Typography fontWeight="semi_bold" mr="1">
            Iniciar avaliação
          </Typography>
          <MaterialIcon
            name="play_arrow"
            color="primary.3"
            shape="round"
            shapeBackground="primary.3"
            stroke={2}
            strokeColor="primary.3"
            type="round"
          />
        </Box>
      </Button>
    </S.SFooterContainer>
  );
};

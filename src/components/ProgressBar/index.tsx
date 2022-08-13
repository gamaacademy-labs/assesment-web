import {
  Box,
  Button,
  MaterialIcon,
  ProgressBar as Progress_Bar,
  Typography,
} from "@gama-academy/smash-web";
import { useState } from "react";
import icon from "../../assets/icon.png";
import { Div, DivButton, DivInformation } from "./styles";

export const ProgressBar = () => {
  const [num, setNum] = useState(0);
  let numQuestion = 4;

  const nextQuestion = () => {
    if (num < numQuestion) {
      setNum(num + 1);
      console.log(num);
    }
  };

  return (
    <Div>
      <DivInformation>
        <img src={icon} alt="icone" />
        <p className="question">Questões</p>
        <p className="numQuestion">
          {num}/{numQuestion}
        </p>
      </DivInformation>
      <Progress_Bar
        max={numQuestion}
        value={num}
        percentageSide="right"
        margin={undefined}
        m={undefined}
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
      <DivButton>
        <Button size="2" onClick={() => nextQuestion()} disabled={false}>
          <Box alignment="center" dir="row" justifyContent="space-between">
            <Typography fontWeight="semi_bold" mr="2" numberOfLines={1}>
              {num < numQuestion ? "Prosseguir" : "Finalizar"}
            </Typography>
            <MaterialIcon
              color="black"
              name="arrow_forward"
              shapeBackground="primary.3"
            />
          </Box>
        </Button>
      </DivButton>
    </Div>
  );
};

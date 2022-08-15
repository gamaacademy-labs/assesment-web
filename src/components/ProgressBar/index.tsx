import {
  Box,
  Button,
  MaterialIcon,
  ProgressBar as Progress_Bar,
  Typography,
} from "@gama-academy/smash-web";
import { useState } from "react";
import {
  Div,
  DivAllButton,
  DivButton,
  DivInfoBar,
  DivInformation,
} from "./styles";

export const ProgressBar = () => {
  const [num, setNum] = useState(0);
  let numQuestion = 4;

  const nextQuestion = (signal: string) => {
    if (signal == "+" && num < numQuestion) {
      setNum(num + 1);
      console.log(num);
    }
    if (signal == "-" && num >= 1) {
      setNum(num - 1);
      console.log(num);
    }
  };

  return (
    <Div>
      <DivInfoBar>
        <DivInformation>
          <MaterialIcon color="white" name="ballot" />
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
      </DivInfoBar>
      <DivAllButton>
        <DivButton num={num}>
          <Button
            className="backButton"
            size="2"
            fluid
            onClick={() => nextQuestion("-")}
            variant="filled"
            color="brand.secondary"
          >
            <Box alignment="center" dir="row" justifyContent="space-between">
              <MaterialIcon
                color="black"
                name="arrow_back"
                shapeBackground="primary.3"
              />
              <Typography fontWeight="semi_bold" mr="2" numberOfLines={1}>
                Anterior
              </Typography>
            </Box>
          </Button>
        </DivButton>
        <DivButton>
          <Button
            size="2"
            fluid
            onClick={() => nextQuestion("+")}
            disabled={false}
          >
            <Box
              className="box"
              alignment="center"
              dir="row"
              justifyContent="space-between"
            >
              <Typography fontWeight="semi_bold" mr="2" numberOfLines={1}>
                {num < numQuestion ? "Próximo" : "finalizar"}
              </Typography>
              <MaterialIcon
                color="black"
                type="outlined"
                name={num < numQuestion ? "arrow_forward" : "flag"}
                shapeBackground="primary.3"
              />
            </Box>
          </Button>
        </DivButton>
      </DivAllButton>
    </Div>
  );
};

import { Header } from "../../components/Header";
import { ProgressBar } from "../../components/ProgressBar";
import { QuestionsMap } from "../../components/QuestionsMap";
import { AvaliationQuestions } from "../../components/AvaliationQuestions";
import { Container, SubContainer } from "./styles";

export const Assessment = () => {
  return (
    <Container>
      {/* <Header /> */}
      <SubContainer>
        <QuestionsMap />
        <AvaliationQuestions />
      </SubContainer>

      <ProgressBar />
    </Container>
  );
};

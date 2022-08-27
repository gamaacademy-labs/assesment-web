import { Header } from "../../components/Header";
import { ProgressBar } from "../../components/ProgressBar";
import { QuestionsMap } from "../../components/QuestionsMap";
import { AvaliationQuestions } from "../../components/AvaliationQuestions";
import { Container, SubContainer } from "./styles";
import { useState } from "react";
import { ModalInfo } from "../../components/ModalInfo";
import Cookies from "js-cookie";

export const Assessment = () => {
  const [showModal, setShowModal] = useState(false);
  const title = Cookies.get('titleAssessment') as string

  return (
    <Container>
      <Header title={title} />
      <SubContainer>
        <QuestionsMap setShowModal={setShowModal} />
        <AvaliationQuestions />
      </SubContainer>
      <ProgressBar />
      <ModalInfo showModal={showModal} setShowModal={setShowModal} />
    </Container>
  );
};

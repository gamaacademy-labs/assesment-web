import { Header } from "../../components/Header";
import { ProgressBar } from "../../components/ProgressBar";
import { QuestionsMap } from "../../components/QuestionsMap";
import { AvaliationQuestions } from "../../components/AvaliationQuestions";
import { Container, SubContainer } from "./styles";
import { useState } from "react";
import { ModalInfo } from "../../components/ModalInfo";

export const Assessment = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <Header />
      <SubContainer>
        <QuestionsMap setShowModal={setShowModal}/>
        <AvaliationQuestions />
      </SubContainer>

      <ProgressBar />
      <ModalInfo showModal={showModal} setShowModal={setShowModal} />
    </Container>
  );
};

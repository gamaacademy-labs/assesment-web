import { useState } from "react";

import { AvaliationInstructions } from "../../components/AvaliationInstructions";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalInfo } from "../../components/ModalInfo";
import { SummaryAvaliation } from "../../components/SummaryAvaliation";
import { Container } from "./styles";

export function HomeAssessment() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      <Container>
        <SummaryAvaliation setShowModal={setShowModal} />
        <AvaliationInstructions
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
        />
        <ModalInfo showModal={showModal} setShowModal={setShowModal} />
      </Container>
      <Footer isDisabled={isDisabled} />
    </>
  );
}

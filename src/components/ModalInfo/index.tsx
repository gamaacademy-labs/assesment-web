import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ilus1 from "../../assets/ilus1.png";
import ilus2 from "../../assets/ilus2.png";
import ilus3 from "../../assets/ilus3.png";
import {
  Button,
  DivButton,
  DivCard,
  DivCards,
  DivIndicator,
  DivInformation,
  DivModal,
  Img,
  Indicator,
} from "./styles";
import { Button as Btn } from "@gama-academy/smash-web";

export const ModalInfo = () => {
  const [show, setShow] = useState(true);
  const [transform, setTransform] = useState(0);

  const changeCard = (sinal: string) => {
    if (sinal === "-" && transform == -2) {
      setShow(false);
    }
    if (sinal === "-" && transform > -2) {
      setTransform(transform - 1);
    }
    if (sinal === "+" && transform < 0) {
      setTransform(transform + 1);
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setTransform(0);
    setShow(true);
  };
  return (
    <div>
      <Btn onClick={handleShow} fluid>Launch demo modal</Btn>
      <DivModal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <DivCards>
            <DivCard display={transform === 0 ? "flex" : "none"}>
              <Img src={ilus1} alt="" />
              <DivInformation>
                <h4>Nota Maxima</h4>
                <p>
                  A nota máxima é o limite de pontos que você poderá alcançar ao
                  realizar essa avaliação, todas as questões tem o mesmo peso.
                </p>
              </DivInformation>
            </DivCard>
            <DivCard display={transform == -1 ? "flex" : "none"}>
              <Img src={ilus2} alt="" />
              <DivInformation>
                <h4>Apenas uma chance!</h4>
                <p>
                  Você terá uma única tentativa para realizar esta avaliação.
                </p>
              </DivInformation>
            </DivCard>
            <DivCard display={transform === -2 ? "flex" : "none"}>
              <Img src={ilus3} alt="" />
              <DivInformation>
                <h4>Data Limite</h4>
                <p>
                  Você tem até data limite para finalizar a avaliação. Após esse
                  período não será possível encerrá-la.
                </p>
              </DivInformation>
            </DivCard>
          </DivCards>
          <DivIndicator>
            <Indicator
              onClick={() => setTransform(0)}
              backgroundColor="purple"
            />
            <Indicator
              onClick={() => setTransform(-1)}
              backgroundColor={transform <= -1 ? "purple" : "#d0c9c9"}
            />
            <Indicator
              onClick={() => setTransform(-2)}
              backgroundColor={transform == -2 ? "purple" : "#d0c9c9"}
            />
          </DivIndicator>
          <DivButton>
            <Button display = {transform == 0 ? 'none' : 'inline'}>
              <Btn
                color="brand.secondary"
                onClick={() => changeCard("+")}
                fluid
                variant="outline"
              >
                voltar
              </Btn>
            </Button>
            <Button transform={transform}>
              <Btn
                color="brand.secondary"
                onClick={() => changeCard("-")}
                fluid
              >
                {transform == -2 ? "Ok, entendi" : "Avançar"}
              </Btn>
            </Button>
          </DivButton>
        </Modal.Body>
      </DivModal>
    </div>
  );
};

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ilus1 from "../../assets/illustration.png";

import {
  Button,
  DivButton,
  DivCard,
  DivInformation,
  DivModal,
  Img,
} from "./styles";
import { Button as Btn, ThemeColorsName } from "@gama-academy/smash-web";

interface Props {
  title: string;
  text: string;
  colorButton: ThemeColorsName;
  textButton: string;
  displayButton?: string;
  imageModal?: string;
  onClickCancel?: () => void;
  onClickConfirm: () => void;
}

export const ModalInfo = (props: Props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  return (

      <DivModal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <DivCard>
            <Img src={props.imageModal ? props.imageModal : ilus1} alt="" />
            <DivInformation>
              <h4>{props.title}</h4>
              <p>{props.text}</p>
            </DivInformation>
          </DivCard>
          <DivButton>
            <Button>
              <Btn color={props.colorButton} onClick={props.onClickConfirm} fluid>
                {props.textButton}
              </Btn>
            </Button>
            <Button display = {props.displayButton}>
              <Btn
                color="brand.secondary"
                onClick={props.onClickCancel}
                fluid
                variant="outline"

              >
                canclear
              </Btn>
            </Button>
          </DivButton>
        </Modal.Body>
      </DivModal>

  );
};

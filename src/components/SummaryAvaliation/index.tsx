import iconSummaryAvaliation from "../../assets/iconSummaryAvaliation.svg";
import iconSummaryMoreInformation from "../../assets/iconSummaryMoreInformation.svg";
import iconSummaryFooter from '../../assets/iconSummaryFooter.svg'

import { Container, FooterInfos, SubContainerInfos } from "./styles";

interface SummaryAvaliationProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SummaryAvaliation({ setShowModal }: SummaryAvaliationProps) {
  return (
    <Container>
      <header>
        <strong>
          <img src={iconSummaryAvaliation} />
          Resumo
        </strong>
        <img onClick={() => setShowModal(true)} src={iconSummaryMoreInformation} />
      </header>
      <SubContainerInfos>
        <strong>Avalição: </strong>
        <span>Nome da avaliação</span>
      </SubContainerInfos>
      <SubContainerInfos>
        <strong>Questões: </strong>
        <span>10</span>
      </SubContainerInfos>
      <SubContainerInfos>
        <strong>Data limite: </strong>
        <span>21/11/2021</span>
      </SubContainerInfos>

      <FooterInfos>
        <img src={iconSummaryFooter}/>
        <strong>Nota máxima: </strong>
        <span>10</span>
      </FooterInfos>
    </Container>
  );
}

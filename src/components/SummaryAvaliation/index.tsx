import iconSummaryAvaliation from "../../assets/iconSummaryAvaliation.svg";
import iconSummaryMoreInformation from "../../assets/iconSummaryMoreInformation.svg";
import iconSummaryFooter from '../../assets/iconSummaryFooter.svg'
import { Container, FooterInfos, SubContainerInfos } from "./styles";

interface SummaryAvaliationProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  qtdQuestions: number;
  maxScore: number;
  finishedAt: string;

}

export function SummaryAvaliation({ setShowModal, title, qtdQuestions, maxScore, finishedAt }: SummaryAvaliationProps) {
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
        <span>{title}</span>
      </SubContainerInfos>
      <SubContainerInfos>
        <strong>Questões: </strong>
        <span>{qtdQuestions}</span>
      </SubContainerInfos>
      <SubContainerInfos>
        <strong>Data limite: </strong>
        <span>{finishedAt}</span>
      </SubContainerInfos>

      <FooterInfos>
        <img src={iconSummaryFooter}/>
        <strong>Nota máxima: </strong>
        <span>{maxScore}</span>
      </FooterInfos>
    </Container>
  );
}

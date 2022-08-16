import iconQuestionsMap from "../../assets/iconQuestionsMap.svg";
import { Container, DivInputRadio, SubContainerQuestions } from "./styles";

const arrayQuestions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

interface QuestionsMapProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function QuestionsMap({ setShowModal }: QuestionsMapProps) {
  return (
    <Container>
      <header>
        <img src={iconQuestionsMap} />
        <strong>Mapa de questões</strong>
      </header>
      <SubContainerQuestions>
        {arrayQuestions.map((question) => (
          <a key={question} href={question}>
            {question}
          </a>
        ))}
      </SubContainerQuestions>

      <DivInputRadio>
        <input id="respondida" type="radio" name="inputMapQuestions" />
        <label htmlFor="respondida">Respondida</label>
      </DivInputRadio>
      <DivInputRadio>
        <input id="selecionada" type="radio" name="inputMapQuestions" />
        <label htmlFor="selecionada">Selecionada</label>
      </DivInputRadio>
      <DivInputRadio>
        <input id="nao-respondida" type="radio" name="inputMapQuestions" />
        <label htmlFor="nao-respondida">Não respondida</label>
      </DivInputRadio>

      <button onClick={() => setShowModal(true)}>
        Instruções da avaliação
      </button>
    </Container>
  );
}

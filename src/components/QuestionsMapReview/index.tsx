import { MaterialIcon } from '@gama-academy/smash-web';
import { useState } from 'react';
import { CorrectAnswer } from '../../@types';
import iconQuestionsMap from '../../assets/icons/iconQuestionsMap.svg';
import {
  Container,
  ContainerDropdown,
  DivInputRadio, IconLegend, LinkMapQuestions,
  SubContainerQuestions
} from './styles';

interface TypeQuestionsMapReview {
  answers: CorrectAnswer[];
}

export function QuestionsMapReview({ answers }: TypeQuestionsMapReview) {

  const [collapse, setCollapse] = useState(false)

  function handleVariant(answer: CorrectAnswer) {
    if (answer.isCorrect == answer.alternativeId) {
      return 'green'
    }
    if (answer.alternativeId === null) {
      return 'white'
    }
    return 'red'
  }

  return (
    <Container collapse={collapse}	>
      <header>
        <div>
          <img src={iconQuestionsMap} />
          <strong>Mapa de questões</strong>
        </div>
        <div className='icon-dropdown' onClick={() => setCollapse(!collapse)}>
          <MaterialIcon color="#202020" name="expand_more" />
        </div>
      </header>
      <ContainerDropdown collapse={collapse}>
        <SubContainerQuestions>
          {answers?.map((answer, index) => (
            <LinkMapQuestions
              variant={answer.alternativeId ? handleVariant(answer) : 'white'}
              key={answer.questionId}
              to="#"
            >
              {index + 1}
            </LinkMapQuestions>
          ))}
        </SubContainerQuestions>

        <DivInputRadio>
          <IconLegend variant="green" />
          <label>Correta</label>
        </DivInputRadio>
        <DivInputRadio>
          <IconLegend variant="red" />
          <label>Incorreta</label>
        </DivInputRadio>
        <DivInputRadio>
          <IconLegend variant="white" />
          <label>Não respondida</label>
        </DivInputRadio>
      </ContainerDropdown>
    </Container>
  );
}

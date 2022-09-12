import { MaterialIcon } from '@gama-academy/smash-web';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Question } from '../../@types';
import iconQuestionsMap from '../../assets/icons/iconQuestionsMap.svg';
import { api } from '../../services/mainApi';
import { getAssessmentQuestion } from '../../services/mainApi/assessments';
import { RootState } from '../../store';
import { setUser } from '../../store/user';
import {
  Container,
  ContainerDropdown,
  DivInputRadio, IconLegend, LinkMapQuestions,
  SubContainerQuestions
} from './styles';


export function QuestionsMapReview() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const assessmentId = Cookies.get('assessmentId') as string;
  const token = useSelector((state: RootState) => state.persistedReducer.token);
  const dispatch = useDispatch()

  const [collapse, setCollapse] = useState(false)

  useEffect(() => {
    const getQuestionList = async () => {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      try {
        const questionList = await getAssessmentQuestion(assessmentId);
        setQuestions(questionList);
      } catch (error) {
        dispatch(setUser({ token: '' }))
      }
    };

    getQuestionList();
  }, []);

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
          {questions?.map((question, index) => (
            <LinkMapQuestions
              variant="red"
              key={question.id}
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

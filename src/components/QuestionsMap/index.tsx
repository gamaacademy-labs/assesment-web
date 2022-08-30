import { Link } from 'react-router-dom';
import { Question } from '../../@types';
import iconQuestionsMap from '../../assets/icons/iconQuestionsMap.svg';
import { Container, DivInputRadio, SubContainerQuestions } from './styles';

interface QuestionsMapProps {
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
	questions?: Question[];
	setQuestionIndex?: React.Dispatch<React.SetStateAction<number>>;
}

export function QuestionsMap({
	setShowModal,
	questions,
	setQuestionIndex,
}: QuestionsMapProps) {
	return (
		<Container>
			<header>
				<img src={iconQuestionsMap} />
				<strong>Mapa de questões</strong>
			</header>
			<SubContainerQuestions>
				{questions?.map((question, index) => (
					<Link
						key={question.id}
						to="#"
						onClick={() => (setQuestionIndex ? setQuestionIndex(index) : null)}
					>
						{index + 1}
					</Link>
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

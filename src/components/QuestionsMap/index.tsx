import { FaCheck } from 'react-icons/fa';
import { Question } from '../../@types';
import iconQuestionsMap from '../../assets/icons/iconQuestionsMap.svg';
import {
	Container,
	DivInputRadio,
	LinkMapQuestions,
	SubContainerQuestions,
	IconLegend,
} from './styles';

interface QuestionsMapProps {
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
	questions?: Question[];
	questionIndex: number;
	setQuestionIndex?: React.Dispatch<React.SetStateAction<number>>;
	checkQuestionAnswer: string[];
}

export function QuestionsMap({
	setShowModal,
	questions,
	questionIndex,
	setQuestionIndex,
	checkQuestionAnswer,
}: QuestionsMapProps) {
	function handleMapQuestions(index: number) {
		setQuestionIndex ? setQuestionIndex(index) : null;
	}

	function handleVariantQuestions(index: number) {
		return typeof checkQuestionAnswer[index] === 'number'
			? 'checked'
			: 'unchecked';
	}

	function handleLinkIsActive(index: number) {
		return questionIndex === index ? 'active' : 'disabled';
	}

	return (
		<Container>
			<header>
				<img src={iconQuestionsMap} />
				<strong>Mapa de questões</strong>
			</header>
			<SubContainerQuestions>
				{questions?.map((question, index) => (
					<LinkMapQuestions
						isactive={handleLinkIsActive(index)}
						variant={handleVariantQuestions(index)}
						key={question.id}
						to="#"
						onClick={() => handleMapQuestions(index)}
					>
						{handleVariantQuestions(index) === 'checked' ? (
							<FaCheck size={12} />
						) : (
							index + 1
						)}
					</LinkMapQuestions>
				))}
			</SubContainerQuestions>

			<DivInputRadio>
				<IconLegend isactive={'active'} variant="checked" />
				<label>Respondida</label>
			</DivInputRadio>
			<DivInputRadio>
				<IconLegend isactive={'active'} variant="unchecked" />
				<label>Selecionada</label>
			</DivInputRadio>
			<DivInputRadio>
				<IconLegend isactive={'disabled'} variant={'unchecked'} />
				<label>Não respondida</label>
			</DivInputRadio>

			<button onClick={() => setShowModal(true)}>
				Instruções da avaliação
			</button>
		</Container>
	);
}

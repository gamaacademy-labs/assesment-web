import {
	Box,
	Button,
	MaterialIcon,
	ProgressBar as Progress_Bar,
	Typography
} from '@gama-academy/smash-web';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Question } from '../../@types';
import { finishingAssessment } from '../../services/userAssessment';
import {
	Div,
	DivAllButton,
	DivButton,
	DivInfoBar,
	DivInformation,
	MatiralIconStyles
} from './styles';

interface ProgressBarProps {
	assessmentId: string;
	questions: Question[];
	questionIndex: number;
	setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
	checkQuestionAnswer: string[];
}

export const ProgressBar = ({
	assessmentId,
	questions,
	questionIndex,
	setQuestionIndex,
	checkQuestionAnswer,
}: ProgressBarProps) => {
	const amountOfQuestions = questions.length;
	const filteredQuestionsAnswered = checkQuestionAnswer.filter(
		n => typeof n === 'number',
	);
	const amountOfQuestionsAnswered = filteredQuestionsAnswered.length;
	const changeButton = questionIndex !== amountOfQuestions - 1 
	const sentAssessment = filteredQuestionsAnswered.length === amountOfQuestions

	const navigate = useNavigate()
	
	async function handleNextQuestion() {

		if (!changeButton && sentAssessment) {
			await finishingAssessment(assessmentId)
			navigate('/success')
			return toast.success('Avaliação entregue!');
		}

		if (questionIndex < amountOfQuestions - 1) {
			return setQuestionIndex(questionIndex + 1);
		}

		toast.warning('Você precisa responder todas as questões!');

	}

	function handlePreviousQuestion() {
		questionIndex >= 1 && setQuestionIndex(questionIndex - 1);
	}

	return (
		<Div>
			<DivInfoBar>
				<DivInformation>
					<MaterialIcon color="white" name="ballot" />
					<p className="question">Questões</p>
					<p className="amountOfQuestions">
						{amountOfQuestionsAnswered}/{amountOfQuestions}
					</p>
				</DivInformation>
				<Progress_Bar
					max={amountOfQuestions}
					value={amountOfQuestionsAnswered}
					percentageSide="right"
					margin={undefined}
					m={undefined}
					mt={undefined}
					marginTop={undefined}
					mb={undefined}
					marginBottom={undefined}
					ml={undefined}
					marginLeft={undefined}
					mr={undefined}
					marginRight={undefined}
					my={undefined}
					marginY={undefined}
					mx={undefined}
					marginX={undefined}
				/>
			</DivInfoBar>
			<DivAllButton>
				<DivButton num={questionIndex}>
					<Button
						className="backButton"
						size="2"
						fluid
						onClick={handlePreviousQuestion}
						variant="filled"
						color="brand.secondary"
					>
						<Box alignment="center" dir="row" justifyContent="space-between">
							<MaterialIcon
								color="white"
								name="arrow_back"
								shapeBackground="primary.3"
							/>
							<Typography fontWeight="semi_bold" mr="2" numberOfLines={1}>
								Anterior
							</Typography>
						</Box>
					</Button>
				</DivButton>
				<DivButton>
					<Button
						size="2"
						fluid
						onClick={handleNextQuestion}
						color={changeButton  ? 'white' : 'primary.3'}
					>
						<Box
							className="box"
							alignment="center"
							dir="row"
							justifyContent="space-between"
						>
							<Typography fontWeight="semi_bold" mr="2" numberOfLines={1}>
								{changeButton ? 'Próxima' : 'Entregar avaliação'}
							</Typography>
							<MatiralIconStyles
								size={20}
								name={changeButton  ? 'arrow_forward' : 'flag'}
								shape="round"
								color="black"
								shapeBackground={changeButton  ? 'primary.3' : 'contrast.dark'}
								changeColor={changeButton }
								type="round"
							/>
						</Box>
					</Button>
				</DivButton>
			</DivAllButton>
		</Div>
	);
};

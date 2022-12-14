import { Alternative, Question } from '../../@types';
import iconAvaliationQuestions from '../../assets/icons/iconAvaliationQuestions.svg';
import { savingAnswer } from '../../services/userAssessment';
import { Container, ContainerInput } from './styles';
interface AvaliationQuestionsProps {
	assessmentId: string;
	questions: Question[];
	questionIndex: number;
	checkQuestionAnswer: string[];
	setCheckQuestionAnswer: React.Dispatch<React.SetStateAction<string[]>>;
}

export function AvaliationQuestions({
	assessmentId,
	questions,
	questionIndex,
	checkQuestionAnswer,
	setCheckQuestionAnswer,
}: AvaliationQuestionsProps) {
	const hasAvaliationActive = questions.length > 0 ? true : false;

	async function handleAnswerQuestion(alt: Alternative) {
		const questionId = questions[questionIndex].id;
		const alternativeId = alt.id;

		const selectedAnswer = { questionId, alternativeId, assessmentId };

		await savingAnswer(selectedAnswer);

		const stateCopy = [...checkQuestionAnswer];
		stateCopy[questionIndex] = alt.id;
		setCheckQuestionAnswer(stateCopy);
	}

	function handleCheckedRightAlternative(id: string) {
		return checkQuestionAnswer[questionIndex] === id ? true : false;
	}

	const richtTextConverter = (richText: string) => {
		return { __html: richText };
	};
	return (
		<Container>
			<h3>
				<img src={iconAvaliationQuestions} /> Questão {questionIndex + 1}
			</h3>
			{hasAvaliationActive &&
				<div>
					<span className='titleQuestion' dangerouslySetInnerHTML={richtTextConverter(questions[questionIndex].title)} />
					{questions[questionIndex].alternatives.map(
						(alternative: Alternative) => (
							<ContainerInput
								key={alternative.id}
								variant={handleCheckedRightAlternative(alternative.id)}
							>
								<input
									onChange={() => handleAnswerQuestion(alternative)}
									value={alternative.id}
									id={alternative.id}
									type="radio"
									name={questions[questionIndex].id}
									checked={handleCheckedRightAlternative(alternative.id)}
								/>
								<label htmlFor={alternative.id}>{alternative.title}</label>
							</ContainerInput>
						),
					)}
				</div>
			}
		</Container>
	);
}

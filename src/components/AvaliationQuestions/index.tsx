import { useEffect } from 'react';
import { Alternative, Question } from '../../@types';
import iconAvaliationQuestions from '../../assets/icons/iconAvaliationQuestions.svg';
import { savingAnswer } from '../../services/user-assessment';
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
		const questionId = questions[questionIndex].id
		const alternativeId = alt.id

		const selectedAnswer = { questionId, alternativeId, assessmentId }

		await savingAnswer(selectedAnswer)

		const stateCopy = [...checkQuestionAnswer];
		stateCopy[questionIndex] = alt.id;
		setCheckQuestionAnswer(stateCopy);
	}

	function handleCheckedRightAlternative(id: string) {
		return checkQuestionAnswer[questionIndex] === id ? true : false;
	}

	useEffect(() => {
		const richtTextConverter = (richText: string) => {
			const divContent = document.getElementsByClassName('content')[0];
			divContent.innerHTML = richText;
		};

		hasAvaliationActive && richtTextConverter(questions[questionIndex].title)

	}, [questionIndex, hasAvaliationActive])


	return (
		<Container>
			<h3>
				<img src={iconAvaliationQuestions} /> Questão {questionIndex + 1}
			</h3>
			<div className="content"></div>
			{hasAvaliationActive &&
				questions[questionIndex].alternatives.map(
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
		</Container>
	);
}

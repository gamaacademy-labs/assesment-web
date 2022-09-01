import { useEffect } from 'react';
import { Alternative, Question } from '../../@types';
import iconAvaliationQuestions from '../../assets/icons/iconAvaliationQuestions.svg';
import { Container, ContainerInput } from './styles';
interface AvaliationQuestionsProps {
	questions: Question[];
	questionIndex: number;
	checkQuestionAnswer: string[];
	setCheckQuestionAnswer: React.Dispatch<React.SetStateAction<string[]>>;
}

export function AvaliationQuestions({
	questions,
	questionIndex,
	checkQuestionAnswer,
	setCheckQuestionAnswer,
}: AvaliationQuestionsProps) {
	const hasAvaliationActive = questions.length > 0 ? true : false;

	function handleAnswerQuestion(alt: Alternative) {
		const stateCopy = [...checkQuestionAnswer];
		stateCopy[questionIndex] = alt.id;
		setCheckQuestionAnswer(stateCopy);
	}

	function handleCheckedRightAlternative(id: string) {
		return checkQuestionAnswer[questionIndex] === id ? true : false;
	}

	useEffect(()=>{
		const teste = (rtf: string) => {
			const v = document.getElementsByClassName('teste')[0];
			v.innerHTML = rtf;
		};

		hasAvaliationActive && teste(questions[questionIndex].title)

	},[questionIndex, hasAvaliationActive])


	return (
		<Container>
			<h3>
				<img src={iconAvaliationQuestions} /> Questão {questionIndex + 1}
			</h3>
			<span className="teste"></span>
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

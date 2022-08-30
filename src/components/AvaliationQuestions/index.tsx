import { useState } from 'react';
import { Alternative, Question } from '../../@types';
import iconAvaliationQuestions from '../../assets/icons/iconAvaliationQuestions.svg';
import { Container, ContainerInput } from './styles';

interface AvaliationQuestionsProps {
	questions: Question[];
	questionIndex: number;
}

export function AvaliationQuestions({
	questions,
	questionIndex,
}: AvaliationQuestionsProps) {


	const [checkQuestionAnswer, setCheckQuestionAnswer] = useState(
		[] as string[],
	);

	return (
		<Container>
			<h3>
				<img src={iconAvaliationQuestions} /> Questão {questionIndex + 1}
			</h3>
			{questions.length > 0 && questions[questionIndex].title}
			{questions.length > 0 &&
				questions[questionIndex].alternatives.map((alternative: Alternative) => (
					<ContainerInput
						key={alternative.id}
						variant={
							checkQuestionAnswer[questionIndex] === alternative.id ? true : false
						}
					>
						<input
							onClick={() => {
								const stateCopy = [...checkQuestionAnswer];
								stateCopy[questionIndex] = alternative.id;
								setCheckQuestionAnswer(stateCopy);

							}}
							value={alternative.id}
							id={alternative.id}
							type="radio"
							name={questions[questionIndex].id}
							checked={checkQuestionAnswer[questionIndex] === alternative.id ? true : false}
						/>
						<label htmlFor={alternative.id}>{alternative.title}</label>
					</ContainerInput>
				))}
		</Container>
	);
}

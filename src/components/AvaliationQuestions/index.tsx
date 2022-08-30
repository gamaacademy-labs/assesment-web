import { useState } from 'react';
import { Alternative, Question } from '../../@types';
import iconAvaliationQuestions from '../../assets/icons/iconAvaliationQuestions.svg';
import { Container, ContainerInput } from './styles';

interface AvaliationQuestionsProps {
	questions: Question[];
	index: number;
}

export function AvaliationQuestions({
	questions,
	index,
}: AvaliationQuestionsProps) {
	const [checkQuestionAnswer, setCheckQuestionAnswer] = useState(
		[] as string[],
	);

	return (
		<Container>
			<h3>
				<img src={iconAvaliationQuestions} /> Questão {index + 1}
			</h3>
			{questions.length > 0 && questions[index].title}
			{questions.length > 0 &&
				questions[index].alternatives.map((alternative: Alternative) => (
					<ContainerInput
						key={alternative.id}
						variant={
							checkQuestionAnswer[index] === alternative.id ? true : false
						}
					>
						<input
							onClick={() => {
								const stateCopy = [...checkQuestionAnswer];
								stateCopy[index] = alternative.id;
								setCheckQuestionAnswer(stateCopy);
								
							}}
							value={alternative.id}
							id={alternative.id}
							type="radio"
							name={questions[index].id}
							checked={checkQuestionAnswer[index] === alternative.id ? true : false}
						/>
						<label htmlFor={alternative.id}>{alternative.title}</label>
					</ContainerInput>
				))}
		</Container>
	);
}

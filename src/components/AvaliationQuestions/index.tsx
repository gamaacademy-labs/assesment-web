import { useState } from 'react';
import { Question } from '../../@types';
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
	const [checkQuestionAnswer, setCheckQuestionAnswer] = useState('');

	return (
		<Container>
			<h3>
				<img src={iconAvaliationQuestions} /> Questão {index + 1}
			</h3>
			{questions.length > 0 && questions[index].title}
			{questions.length > 0 &&
				questions[index].alternatives.map(alternative => (
					<ContainerInput
						key={alternative.id}
						variant={checkQuestionAnswer === alternative.id ? true : false}
					>
						<input
							onClick={() => setCheckQuestionAnswer(alternative.id)}
							value={alternative.id}
							id={alternative.id}
							type="radio"
							name={questions[index].id}
						/>
						<label htmlFor={alternative.id}>{alternative.title}</label>
					</ContainerInput>
				))}
		</Container>
	);
}

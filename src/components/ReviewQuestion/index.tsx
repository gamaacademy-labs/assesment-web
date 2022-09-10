import { Container, ContainerInput } from './styles';
import iconAvaliationQuestions from '../../assets/icons/iconAvaliationQuestions.svg';
import { useState } from 'react';
import { Alternative } from '../../@types';
import { MaterialIcon } from '@gama-academy/smash-web';

interface ReviewQuestionProps {
	alternative: Alternative[];
	name: string;
	title: string;
	index: number;
	correctAnswer: any;
}

export function ReviewQuestion({
	alternative,
	index,
	title,
	correctAnswer,
}: ReviewQuestionProps) {
	const [showQuestion, setShowQuestion] = useState(false);
	const richtTextConverter = (richText: string) => {
		return { __html: richText };
	};

	const checkedAnswer = (indexAlternative: number) => {
		if (indexAlternative === correctAnswer.Correct[0]) {
			return '#0FD03F';
		}
		if (indexAlternative === correctAnswer.alternativeId) {
			return 'red';
		}
		return '#fff';
	};
	console.log(correctAnswer);

	return (
		correctAnswer && (
			<Container showQuestion={showQuestion}>
				<h3 onClick={() => setShowQuestion(!showQuestion)}>
					<img src={iconAvaliationQuestions} /> Questão {index + 1}
					<div className="icon-dropdown">
						<MaterialIcon color="#202020" name="expand_more" />
					</div>
				</h3>
				<div className="questionBody">
					<div dangerouslySetInnerHTML={richtTextConverter(title)} />
					{alternative.map((item, index) => (
						<ContainerInput
							key={item.id}
							variant={checkedAnswer(index + 1)}
							checked={checkedAnswer(index + 1) !== '#fff' ? true : false}
						>
							<input
								onChange={() => {}}
								value={item.id}
								id={item.id}
								type="radio"
								disabled
							/>
							<label className="styledInput" htmlFor={item.id}>
								<div className="active" />
							</label>
							<label htmlFor={item.id}>
								{item.title} e {correctAnswer.Correct[0]} marcada
								{correctAnswer.alternativeId}
							</label>
						</ContainerInput>
					))}
				</div>
			</Container>
		)
	);
}

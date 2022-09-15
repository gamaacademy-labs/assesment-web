import { CorrectAnswer, Question } from '../../@types';
import { ReviewQuestion } from '../ReviewQuestion';

import { Container } from './styles';

interface TypeReviewAnswers {
	answers: CorrectAnswer[];
}

export function ReviewAnswers({ answers }: TypeReviewAnswers) {
	console.log(answers);
	

	const hasAvaliationActive = answers.length > 0 ? true : false;
		

	return (
		<Container>
			{hasAvaliationActive &&
				answers.map((item, index) => (
					<ReviewQuestion
						key={item.questionId}
						index={index}
						title={item.title}
						alternative={item.alternatives}
						id={item.questionId}
						correctAnswer={answers[index]}
					/>
				))}
		</Container>
	);
}

import { CorrectAnswer, Question } from '../../@types';
import { ReviewQuestion } from '../ReviewQuestion';

import { Container } from './styles';

interface TypeReviewAnswers {
	answers: CorrectAnswer[];
}

export function ReviewAnswers({ answers }: TypeReviewAnswers) {

	const hasAvaliationActive = answers.length > 0 ? true : false;
	console.log(answers);
		

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

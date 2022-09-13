import { CorrectAnswer, Question } from '../../@types';
import { ReviewQuestion } from '../ReviewQuestion';

import { Container } from './styles';

interface TypeReviewAnswers {
	questions: Question[];
	answers: CorrectAnswer[];
}

export function ReviewAnswers({ questions, answers }: TypeReviewAnswers) {

	const hasAvaliationActive = questions.length > 0 ? true : false;

	return (
		<Container>
			{hasAvaliationActive &&
				questions.map((item, index) => (
					<ReviewQuestion
						key={item.id}
						index={index}
						title={item.title}
						alternative={item.alternatives}
						name={item.id}
						correctAnswer={answers[index]}
					/>
				))}
		</Container>
	);
}

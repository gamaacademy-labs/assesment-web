import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Question } from '../../@types';
import { api } from '../../services/mainApi';
import { getAssessmentQuestion } from '../../services/mainApi/assessments';
import { scoreAssessment } from '../../services/user-assessment';
import { RootState } from '../../store';
import { setUser } from '../../store/user';
import { ReviewQuestion } from '../ReviewQuestion';

import { Container } from './styles';

export function ReviewAnswers() {
	const [questions, setQuestions] = useState<Question[]>([]);
	const [correctAnswer, setcorrectAnswer] = useState([] as any);
	const hasAvaliationActive = questions.length > 0 ? true : false;
	const assessmentId = Cookies.get('assessmentId') as string;
	const token = useSelector((state: RootState) => state.persistedReducer.token);
	const dispatch = useDispatch();

	useEffect(() => {
		const getQuestionList = async () => {
			api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			try {
				const questionList = await getAssessmentQuestion(assessmentId);

				setQuestions(questionList);
			} catch (error) {
				dispatch(setUser({ token: '' }));
			}
		};

		async function gettingScoreAssessment() {
			try {
				api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
				const a = await scoreAssessment(assessmentId);		
				setcorrectAnswer(a.data.answers);
				
			} catch (error) {
				dispatch(setUser({ token: '' }));	
				
			}
		}

		gettingScoreAssessment();

		getQuestionList();
	}, []);

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
						correctAnswer = {correctAnswer[index]}
					/>
				))}
		</Container>
	);
}

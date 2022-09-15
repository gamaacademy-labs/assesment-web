import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Question } from '../../@types';
import { Header } from '../../components/Header';
import { MyAttemptCard } from '../../components/MyAttemptCard';
import { QuestionsMapReview } from '../../components/QuestionsMapReview';
import { ReviewAnswers } from '../../components/ReviewAnswers';
import { api } from '../../services/mainApi';
import { getAssessmentQuestion } from '../../services/mainApi/assessments';
import { scoreAssessment } from '../../services/user-assessment';
import { RootState } from '../../store';
import { setUser } from '../../store/user';
import { Aside, Container, SubContainer } from './styles';

export const Review = () => {
	const title = Cookies.get('titleAssessment') as string;
	const [gettingScoreAssessment, setGettingScoreAssessment] = useState(
		[] as any,
	);
	const dispatch = useDispatch();
	const assessmentId = Cookies.get('assessmentId') as string;
	const token = useSelector((state: RootState) => state.persistedReducer.token);

	useEffect(() => {

		async function gettingScoreAssessment() {
			try {
				api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
				const response = await scoreAssessment(assessmentId);

				setGettingScoreAssessment(response.data.answers);
			} catch (error) {
				dispatch(setUser({ token: '' }));
			}
		}

		gettingScoreAssessment();

	}, []);

	return (
		<Container className="body-container">
			<Header title={title} />
			<SubContainer className="body-container">
				<Aside>
					<MyAttemptCard gettingScoreAssessment={gettingScoreAssessment} />
					<QuestionsMapReview answers={gettingScoreAssessment} />
				</Aside>

				<ReviewAnswers
					answers={gettingScoreAssessment}
				/>
			</SubContainer>
		</Container>
	);
};

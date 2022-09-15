import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResponseStore } from '../../@types';
import { Header } from '../../components/Header';
import { MyAttemptCard } from '../../components/MyAttemptCard';
import { QuestionsMapReview } from '../../components/QuestionsMapReview';
import { ReviewAnswers } from '../../components/ReviewAnswers';
import { api } from '../../services/mainApi';
import { scoreAssessment } from '../../services/userAssessment';
import { RootState } from '../../store';
import { setUser } from '../../store/user';
import { Aside, Container, SubContainer } from './styles';

export const Review = () => {
	const title = Cookies.get('titleAssessment') as string;
	const [ScoreAssessment, setScoreAssessment] = useState({} as ResponseStore);
	const dispatch = useDispatch();
	const assessmentId = Cookies.get('assessmentId') as string;
	const token = useSelector((state: RootState) => state.persistedReducer.token);

	useEffect(() => {
		async function gettingScoreAssessment() {
			try {
				api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
				const response = await scoreAssessment(assessmentId);

				setScoreAssessment(response.data);
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
					<MyAttemptCard gettingScoreAssessment={ScoreAssessment} />
					<QuestionsMapReview answers={ScoreAssessment.answers || [] } />
				</Aside>

				<ReviewAnswers answers={ScoreAssessment.answers || [] }/>
			</SubContainer>
		</Container>
	);
};

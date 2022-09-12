import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { QuestionsMapSuccess } from '../../components/QuestionsMapSuccess';
import { SuccessPage } from '../../components/SuccessPage';
import { scoreAssessment } from '../../services/user-assessment';
import { Container } from './styles';

export function Success() {
	const [score, setScore] = useState(0);
	const title = Cookies.get('titleAssessment') as string;
	const assessmentId = Cookies.get('assessmentId') as string;

	useEffect(() => {
		async function gettingScoreAssessment() {
			const constScoreAssessment = await scoreAssessment(assessmentId)
			setScore(constScoreAssessment.data.score)
		}

		gettingScoreAssessment()
	}, [])

	return (
		<>
			<Header title={title} />
			<Container>
				<QuestionsMapSuccess />
				<SuccessPage score={score} />
			</Container>
		</>
	);
}

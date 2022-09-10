import Cookies from 'js-cookie';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { ModalInfo } from '../../components/ModalInfo';
import { QuestionsMapSuccess } from '../../components/QuestionsMapSuccess';
import { SuccessPage } from '../../components/SuccessPage';
import { Container } from './styles';

export function Success() {
	const [score, setScore] = useState(0);
	const title = Cookies.get('titleAssessment') as string;

	return (
		<>
			<Header title={title} />
			<Container>
				<QuestionsMapSuccess setScore={setScore}/>
				<SuccessPage score={score} />
			</Container>
		</>
	);
}

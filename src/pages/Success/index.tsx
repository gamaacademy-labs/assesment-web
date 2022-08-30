import Cookies from 'js-cookie';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { ModalInfo } from '../../components/ModalInfo';
import { QuestionsMap } from '../../components/QuestionsMap';
import { SuccessPage } from '../../components/SuccessPage';
import { Container } from './styles';

export function Success() {
	const [showModal, setShowModal] = useState(false);
	const title = Cookies.get('titleAssessment') as string;

	return (
		<>
			<Header title={title} />
			<Container>
				<QuestionsMap setShowModal={setShowModal} />
				<SuccessPage />
			</Container>
			<ModalInfo showModal={showModal} setShowModal={setShowModal} />
		</>
	);
}

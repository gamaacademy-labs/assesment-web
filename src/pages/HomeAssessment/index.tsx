import { format } from 'date-fns';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Assessment } from '../../@types';
import { AvaliationInstructions } from '../../components/AvaliationInstructions';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ModalInfo } from '../../components/ModalInfo';
import { SummaryAvaliation } from '../../components/SummaryAvaliation';
import { api } from '../../services/mainApi';
import { getAssessment } from '../../services/mainApi/assessments';
import { RootState } from '../../store';
import { Container } from './styles';

export function HomeAssessment() {
	const [isDisabled, setIsDisabled] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [assessment, setAssessment] = useState({} as Assessment);
	const token = useSelector((state: RootState) => state.persistedReducer.token);

	useEffect(() => {
		const id = Cookies.get('assessmentId');

		const takeAssessment = async () => {
			api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			const response = await getAssessment(`${id}`);

			setAssessment({
				...response,
				finishedAt: format(new Date(response.finishedAt), 'dd/MM/yyyy'),
			});

			Cookies.set('titleAssessment', response.title);
			Cookies.set('dateAssessment', assessment.finishedAt);
		};

		takeAssessment();
	}, []);

	return (
		<>
			<Header title={assessment.title} />
			<Container className="body-container">
				<SummaryAvaliation
					title={assessment.title}
					qtdQuestions={assessment.qtdQuestions}
					maxScore={assessment.maxScore}
					setShowModal={setShowModal}
					finishedAt={assessment.finishedAt}
				/>
				<AvaliationInstructions
					isDisabled={isDisabled}
					setIsDisabled={setIsDisabled}
				/>
				<ModalInfo
					deadline={assessment.finishedAt}
					showModal={showModal}
					setShowModal={setShowModal}
				/>
			</Container>
			<Footer assessmentId={assessment.id} isDisabled={isDisabled} />
		</>
	);
}

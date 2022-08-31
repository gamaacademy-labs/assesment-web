import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { AvaliationInstructions } from '../../components/AvaliationInstructions';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ModalInfo } from '../../components/ModalInfo';
import { SummaryAvaliation } from '../../components/SummaryAvaliation';
import { getAssessment } from '../../services/mainApi/assessments';
import { Assessment } from '../../@types';
import { Container } from './styles';
import Cookies from 'js-cookie';
import { api } from '../../services/mainApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export function HomeAssessment() {
	const [isDisabled, setIsDisabled] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [assessment, setAssessment] = useState({} as Assessment);
	const token = useSelector((state: RootState) => state.persistedReducer.token);
	console.log(token);

	useEffect(() => {
		const takeAssessment = async () => {
			api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			const takeAssessmentId = Cookies.get('assessmentId');
			const response = await getAssessment(`${takeAssessmentId}`);

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
			<Footer isDisabled={isDisabled} />
		</>
	);
}

import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Question } from '../../@types';
import { AvaliationQuestions } from '../../components/AvaliationQuestions';
import { Header } from '../../components/Header';
import { ModalAssessment } from '../../components/ModalAssessment';
import { ModalInfo } from '../../components/ModalInfo';
import { ProgressBar } from '../../components/ProgressBar';
import { QuestionsMap } from '../../components/QuestionsMap';
import { api } from '../../services/mainApi';
import { getAssessmentQuestion } from '../../services/mainApi/assessments';
import { finishingAssessment } from '../../services/userAssessment';
import { RootState } from '../../store';
import { setUser } from '../../store/user';
import { Container, SubContainer } from './styles';

export const Assessment = () => {
	const navigate =useNavigate()
	const [showModalInfo, setShowModalInfo] = useState(false);
	const [showModalAssessment, setShowModalAssessment] = useState(false);
	const [questions, setQuestions] = useState<Question[]>([]);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [checkQuestionAnswer, setCheckQuestionAnswer] = useState<string[]>([]);

	const title = Cookies.get('titleAssessment') as string;
	const assessmentId = Cookies.get('assessmentId') as string;
	const deadline = Cookies.get('dateAssessment') as string;
	const dispatch = useDispatch();
	const token = useSelector((state: RootState) => state.persistedReducer.token);

	const sentAssessment = async () => {
		await finishingAssessment(assessmentId)
		navigate('/success')
		return toast.success('Avaliação entregue!');
	};

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

		getQuestionList();
	}, []);

	return (
		<Container className="body-container">
			<Header title={title} />
			<SubContainer className="body-container">
				<QuestionsMap
					questions={questions}
					questionIndex={questionIndex}
					setQuestionIndex={setQuestionIndex}
					setShowModal={setShowModalInfo}
					checkQuestionAnswer={checkQuestionAnswer}
				/>
				<AvaliationQuestions
					assessmentId={assessmentId}
					checkQuestionAnswer={checkQuestionAnswer}
					setCheckQuestionAnswer={setCheckQuestionAnswer}
					questions={questions}
					questionIndex={questionIndex}
				/>
			</SubContainer>
			<ProgressBar
				assessmentId={assessmentId}
				questions={questions}
				questionIndex={questionIndex}
				setQuestionIndex={setQuestionIndex}
				checkQuestionAnswer={checkQuestionAnswer}
				setShowModal={setShowModalAssessment}
			/>
			<ModalInfo
				deadline={deadline}
				showModal={showModalInfo}
				setShowModal={setShowModalInfo}
			/>
			<ModalAssessment
				title="Tem certeza que deseja entregar sua avaliação?"
				text="Uma vez entregue, você não poderá alterar as respostas."
				colorButton="success"
				show={showModalAssessment}
				textButton="Entregar avaliação"
				onClickCancel={() => setShowModalAssessment(false)}
				onClickConfirm={sentAssessment}
			/>
		</Container>
	);
};

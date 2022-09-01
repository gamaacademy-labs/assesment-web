import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Question } from '../../@types';
import { AvaliationQuestions } from '../../components/AvaliationQuestions';
import { Header } from '../../components/Header';
import { ModalInfo } from '../../components/ModalInfo';
import { ProgressBar } from '../../components/ProgressBar';
import { QuestionsMap } from '../../components/QuestionsMap';
import { api } from '../../services/mainApi';
import { getAssessmentQuestion } from '../../services/mainApi/assessments';
import { Container, SubContainer } from './styles';

export const Assessment = () => {
	const [showModal, setShowModal] = useState(false);
	const [questions, setQuestions] = useState<Question[]>([]);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [checkQuestionAnswer, setCheckQuestionAnswer] = useState<string[]>([]);

	const title = Cookies.get('titleAssessment') as string;
	const questionId = Cookies.get('assessmentId') as string;
	const deadline = Cookies.get('dateAssessment') as string;

	useEffect(() => {
		const getQuestionList = async () => {
			const token = String(Cookies.get('token'));
			api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			const questionList = await getAssessmentQuestion(questionId);
			setQuestions(questionList);
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
					setShowModal={setShowModal}
					checkQuestionAnswer={checkQuestionAnswer}
				/>
				<AvaliationQuestions
					checkQuestionAnswer={checkQuestionAnswer}
					setCheckQuestionAnswer={setCheckQuestionAnswer}
					questions={questions}
					questionIndex={questionIndex}
				/>
			</SubContainer>
			<ProgressBar
				questions={questions}
				questionIndex={questionIndex}
				setQuestionIndex={setQuestionIndex}
				checkQuestionAnswer={checkQuestionAnswer}
			/>
			<ModalInfo
				deadline={deadline}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
		</Container>
	);
};

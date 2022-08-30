import { Header } from '../../components/Header';
import { ProgressBar } from '../../components/ProgressBar';
import { QuestionsMap } from '../../components/QuestionsMap';
import { AvaliationQuestions } from '../../components/AvaliationQuestions';
import { Container, SubContainer } from './styles';
import { useEffect, useState } from 'react';
import { ModalInfo } from '../../components/ModalInfo';
import Cookies from 'js-cookie';
import { getAssessmentQuestion } from '../../services/mainApi/assessments';
import { Question } from '../../@types';

export const Assessment = () => {
	const [showModal, setShowModal] = useState(false);
	const title = Cookies.get('titleAssessment') as string;
	const questionId = Cookies.get('assessmentId') as string;
	const deadline = Cookies.get('dateAssessment') as string;
	const [questions, setQuestions] = useState([] as Question[]);
	const [questionIndex, setQuestionIndex] = useState(0);

	useEffect(() => {
		const getQuestionList = async () => {
			const questionList = await getAssessmentQuestion(questionId);
			setQuestions(questionList);
		};

		getQuestionList();
		
	}, []);
	console.log(questions);

	return (
		<Container className="body-container">
			<Header title={title} />
			<SubContainer className="body-container">
				<QuestionsMap
					questions={questions}
					setQuestionIndex={setQuestionIndex}
					setShowModal={setShowModal}
				/>
				<AvaliationQuestions questions={questions} index={questionIndex} />
			</SubContainer>
			<ProgressBar
				questions={questions}
				index={questionIndex}
				setQuestionIndex={setQuestionIndex}
			/>
			<ModalInfo
				deadline={deadline}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
		</Container>
	);
};
